const vertex = `
attribute vec4 point;
uniform vec2 viewport, eye;
uniform float aspect, pixelRatio, motionScale;
varying float tone;
void main(){
  vec2 uv = vec2(point.x * 2.0 - 1.0, 1.0 - point.y * 2.0);
  float distance = 1.0 + (1.0 - point.z) * 3.5;
  vec2 world = uv * vec2(aspect, 1.0) * distance;
  vec2 camera = eye * .70 * 1.65 * motionScale;
  vec2 projected = (world - camera) / distance + camera / 2.8;
  float screenAspect = viewport.x / viewport.y;
  float cover = max(1.0, screenAspect / aspect) * 1.06;
  gl_Position = vec4(projected * vec2(cover / screenAspect, cover), (distance-1.0)/6.0, 1.0);
  gl_PointSize = pixelRatio * (1.5 + point.z * .75);
  tone = pow(point.w, .8);
}`;
const fragment = `
precision mediump float;
varying float tone;
void main(){
  float r = length(gl_PointCoord - .5);
  if(r > .5) discard;
  float edge = 1.0 - smoothstep(.28, .5, r);
  gl_FragColor = vec4(vec3(.08 + tone * .43), edge * .9);
}`;

export function createPointField(canvas, {meta, bytes, motionScale = 1}, {onFailure}) {
  const gl = canvas.getContext('webgl', {alpha:false,antialias:false,powerPreference:'low-power'});
  if (!gl) throw new Error('WebGL unavailable');
  const resources = [], uniforms = {};
  let frame = 0, lastTime = 0, target = [0,0], eye = [0,0], stopped = false, sized = false;
  function dispose() {
    stopped = true; cancelAnimationFrame(frame); frame = 0;
    for (const [kind, resource] of resources) gl[kind](resource);
    resources.length = 0;
    canvas.removeEventListener('webglcontextlost', contextLost);
  }
  function contextLost(event) {event.preventDefault(); dispose(); onFailure();}
  canvas.addEventListener('webglcontextlost', contextLost);
  function compile(type, source) {
    const shader = gl.createShader(type); resources.push(['deleteShader',shader]);
    gl.shaderSource(shader, source); gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error('Point shader unavailable');
    return shader;
  }
  try {
    const program = gl.createProgram(); resources.push(['deleteProgram',program]);
    gl.attachShader(program,compile(gl.VERTEX_SHADER,vertex)); gl.attachShader(program,compile(gl.FRAGMENT_SHADER,fragment));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program,gl.LINK_STATUS)) throw new Error('Point renderer unavailable');
    gl.useProgram(program);
    const buffer = gl.createBuffer(); resources.push(['deleteBuffer',buffer]);
    gl.bindBuffer(gl.ARRAY_BUFFER,buffer); gl.bufferData(gl.ARRAY_BUFFER,new Uint16Array(bytes),gl.STATIC_DRAW);
    const attribute = gl.getAttribLocation(program,'point');
    gl.enableVertexAttribArray(attribute); gl.vertexAttribPointer(attribute,4,gl.UNSIGNED_SHORT,true,8,0);
    for (const name of ['viewport','eye','aspect','pixelRatio','motionScale']) uniforms[name] = gl.getUniformLocation(program,name);
    gl.uniform1f(uniforms.aspect,meta.aspect); gl.clearColor(.02,.02,.02,1);
    gl.enable(gl.DEPTH_TEST); gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
  } catch (error) {dispose(); throw error;}
  function wake() {if (!stopped && !frame && !document.hidden) frame = requestAnimationFrame(render);}
  function render(time) {
    frame = 0;
    if (stopped || document.hidden) return;
    const dt = Math.min((time-lastTime)/1000 || .016,.05); lastTime = time;
    const lerp = 1-Math.exp(-dt*7);
    eye = eye.map((value,index)=>value+(target[index]-value)*lerp);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.uniform2f(uniforms.eye,...eye);
    gl.drawArrays(gl.POINTS,0,innerWidth<600 ? Math.floor(meta.count*.65) : meta.count);
    if (Math.abs(target[0]-eye[0])+Math.abs(target[1]-eye[1]) > .0002) wake();
  }
  function resize() {
    if (stopped) return;
    const rect=canvas.getBoundingClientRect();
    const width=Math.max(1,rect.width),height=Math.max(1,rect.height);
    const ratio = Math.min(devicePixelRatio || 1,1.75);
    const bufferWidth=Math.round(width*ratio),bufferHeight=Math.round(height*ratio);
    // Setting either attribute clears the GPU buffer, even if the value is unchanged.
    if(sized && canvas.width===bufferWidth && canvas.height===bufferHeight)return;
    sized=true;
    gl.uniform1f(uniforms.motionScale,motionScale*(width<600 ? .6 : 1));
    if(canvas.width!==bufferWidth)canvas.width=bufferWidth;
    if(canvas.height!==bufferHeight)canvas.height=bufferHeight;
    gl.viewport(0,0,canvas.width,canvas.height); gl.uniform2f(uniforms.viewport,width,height); gl.uniform1f(uniforms.pixelRatio,ratio);
    wake();
  }
  resize();
  return {
    resize, dispose,
    move(pose) {target=pose.map(value=>Math.max(-1,Math.min(1,value))); wake();},
    neutral() {target=[0,0]; eye=[0,0]; wake();},
    visibility() {cancelAnimationFrame(frame); frame=0; lastTime=0; wake();}
  };
}
