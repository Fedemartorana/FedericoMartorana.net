(()=>{(()=>{var yr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qh=0,Ko=1,eu=2,Va=1,tu=2,la=3,ar=0,Ft=1,di=2,Ai=0,ca=1,Zo=2,Jo=3,$o=4,iu=5,br=100,ru=101,au=102,nu=103,su=104,ou=200,lu=201,cu=202,hu=203,Qo=204,el=205,uu=206,du=207,pu=208,fu=209,mu=210,gu=211,_u=212,vu=213,Su=214,Gn=0,Hn=1,Wn=2,ha=3,Xn=4,jn=5,qn=6,Yn=7,tl=0,Mu=1,xu=2,pi=0,il=1,rl=2,al=3,nl=4,sl=5,ol=6,ll=7,cl=300,nr=301,Er=302,Kn=303,Zn=304,za=306,Jn=1e3,Ri=1001,$n=1002,ut=1003,yu=1004,Ga=1005,Rt=1006,Qn=1007,sr=1008,Jt=1009,hl=1010,ul=1011,ua=1012,es=1013,fi=1014,mi=1015,gi=1016,ts=1017,is=1018,da=1020,dl=35902,pl=35899,fl=1021,ml=1022,ri=1023,Ci=1026,or=1027,gl=1028,rs=1029,lr=1030,as=1031,ns=1033,Ha=33776,Wa=33777,Xa=33778,ja=33779,ss=35840,os=35841,ls=35842,cs=35843,hs=36196,us=37492,ds=37496,ps=37488,fs=37489,qa=37490,ms=37491,gs=37808,_s=37809,vs=37810,Ss=37811,Ms=37812,xs=37813,ys=37814,Ts=37815,bs=37816,Es=37817,ws=37818,As=37819,Rs=37820,Cs=37821,Ps=36492,Ls=36494,Ds=36495,Ns=36283,Us=36284,Ya=36285,Is=36286,Ka=2300,Os=2301,Fs=2302,_l=2303,vl=2400,Sl=2401,Ml=2402,Tu=3200,xl=0,bu=1,Pi="",Gt="srgb",pa="srgb-linear",Za="linear",Qe="srgb",Bs=7680,Eu=519,wu=512,Au=513,Ru=514,ks=515,Cu=516,Pu=517,Vs=518,Lu=519,Du=35044,yl="300 es",_i=2e3,Ja=2001;function Nu(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Uu(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function fa(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Iu(){let e=fa("canvas");return e.style.display="block",e}var Tl={},wr=null;function bl(...e){let t="THREE."+e.shift();wr?wr("log",t,...e):console.log(t,...e)}function El(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Pe(...e){e=El(e);let t="THREE."+e.shift();if(wr)wr("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Ne(...e){e=El(e);let t="THREE."+e.shift();if(wr)wr("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Ar(...e){let t=e.join(" ");t in Tl||(Tl[t]=!0,Pe(...e))}function Ou(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var Fu={[Gn]:Hn,[Wn]:qn,[Xn]:Yn,[ha]:jn,[Hn]:Gn,[qn]:Wn,[Yn]:Xn,[jn]:ha},Gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wl=1234567,ma=Math.PI/180,ga=180/Math.PI;function Rr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ct[e&255]+Ct[e>>8&255]+Ct[e>>16&255]+Ct[e>>24&255]+"-"+Ct[t&255]+Ct[t>>8&255]+"-"+Ct[t>>16&15|64]+Ct[t>>24&255]+"-"+Ct[i&63|128]+Ct[i>>8&255]+"-"+Ct[i>>16&255]+Ct[i>>24&255]+Ct[r&255]+Ct[r>>8&255]+Ct[r>>16&255]+Ct[r>>24&255]).toLowerCase()}function ze(e,t,i){return Math.max(t,Math.min(i,e))}function zs(e,t){return(e%t+t)%t}function Bu(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}function ku(e,t,i){return e!==t?(i-e)/(t-e):0}function _a(e,t,i){return(1-i)*e+i*t}function Vu(e,t,i,r){return _a(e,t,1-Math.exp(-i*r))}function zu(e,t=1){return t-Math.abs(zs(e,t*2)-t)}function Gu(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function Hu(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function Wu(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Xu(e,t){return e+Math.random()*(t-e)}function ju(e){return e*(.5-Math.random())}function qu(e){e!==void 0&&(wl=e);let t=wl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yu(e){return e*ma}function Ku(e){return e*ga}function Zu(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Ju(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function $u(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Qu(e,t,i,r,a){let n=Math.cos,s=Math.sin,o=n(i/2),l=s(i/2),c=n((t+r)/2),u=s((t+r)/2),d=n((t-r)/2),h=s((t-r)/2),f=n((r-t)/2),M=s((r-t)/2);switch(a){case"XYX":e.set(o*u,l*d,l*h,o*c);break;case"YZY":e.set(l*h,o*u,l*d,o*c);break;case"ZXZ":e.set(l*d,l*h,o*u,o*c);break;case"XZX":e.set(o*u,l*M,l*f,o*c);break;case"YXY":e.set(l*f,o*u,l*M,o*c);break;case"ZYZ":e.set(l*M,l*f,o*u,o*c);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Cr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Lt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var $a={DEG2RAD:ma,RAD2DEG:ga,generateUUID:Rr,clamp:ze,euclideanModulo:zs,mapLinear:Bu,inverseLerp:ku,lerp:_a,damp:Vu,pingpong:zu,smoothstep:Gu,smootherstep:Hu,randInt:Wu,randFloat:Xu,randFloatSpread:ju,seededRandom:qu,degToRad:Yu,radToDeg:Ku,isPowerOfTwo:Zu,ceilPowerOfTwo:Ju,floorPowerOfTwo:$u,setQuaternionFromProperEuler:Qu,normalize:Lt,denormalize:Cr},ke=class Wh{static{Wh.prototype.isVector2=!0}constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ze(this.x,t.x,i.x),this.y=ze(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ze(this.x,t,i),this.y=ze(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(ze(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(ze(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Li=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],c=i[r+2],u=i[r+3],d=a[n+0],h=a[n+1],f=a[n+2],M=a[n+3];if(u!==M||o!==d||l!==h||c!==f){let v=o*d+l*h+c*f+u*M;v<0&&(d=-d,h=-h,f=-f,M=-M,v=-v);let m=1-s;if(v<.9995){let p=Math.acos(v),w=Math.sin(p);m=Math.sin(m*p)/w,s=Math.sin(s*p)/w,o=o*m+d*s,l=l*m+h*s,c=c*m+f*s,u=u*m+M*s}else{o=o*m+d*s,l=l*m+h*s,c=c*m+f*s,u=u*m+M*s;let p=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=p,l*=p,c*=p,u*=p}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],c=i[r+3],u=a[n],d=a[n+1],h=a[n+2],f=a[n+3];return e[t]=s*f+c*u+o*h-l*d,e[t+1]=o*f+c*d+l*u-s*h,e[t+2]=l*f+c*h+s*d-o*u,e[t+3]=c*f-s*u-o*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),c=s(r/2),u=s(a/2),d=o(i/2),h=o(r/2),f=o(a/2);switch(n){case"XYZ":this._x=d*c*u+l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u-d*h*f;break;case"YXZ":this._x=d*c*u+l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u+d*h*f;break;case"ZXY":this._x=d*c*u-l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u-d*h*f;break;case"ZYX":this._x=d*c*u-l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u+d*h*f;break;case"YZX":this._x=d*c*u+l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u-d*h*f;break;case"XZY":this._x=d*c*u-l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u+d*h*f;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],u=t[10],d=i+s+u;if(d>0){let h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(c-o)*h,this._y=(a-l)*h,this._z=(n-r)*h}else if(i>s&&i>u){let h=2*Math.sqrt(1+i-s-u);this._w=(c-o)/h,this._x=.25*h,this._y=(r+n)/h,this._z=(a+l)/h}else if(s>u){let h=2*Math.sqrt(1+s-i-u);this._w=(a-l)/h,this._x=(r+n)/h,this._y=.25*h,this._z=(o+c)/h}else{let h=2*Math.sqrt(1+u-i-s);this._w=(n-r)/h,this._x=(a+l)/h,this._y=(o+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,c=t._w;return this._x=i*c+n*s+r*l-a*o,this._y=r*c+n*o+a*s-i*l,this._z=a*c+n*l+i*o-r*s,this._w=n*c-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),c=Math.sin(l);o=Math.sin(o*l)/c,t=Math.sin(t*l)/c,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class Xh{static{Xh.prototype.isVector3=!0}constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Al.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Al.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*r),u=2*(o*i-n*a),d=2*(n*r-s*i);return this.x=i+l*c+s*d-o*u,this.y=r+l*u+o*c-n*d,this.z=a+l*d+n*u-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ze(this.x,t.x,i.x),this.y=ze(this.y,t.y,i.y),this.z=ze(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ze(this.x,t,i),this.y=ze(this.y,t,i),this.z=ze(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(ze(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Gs.copy(this).projectOnVector(t),this.sub(Gs)}reflect(t){return this.sub(Gs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(ze(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gs=new F,Al=new Li,Be=class jh{static{jh.prototype.isMatrix3=!0}constructor(t,i,r,a,n,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c)}set(t,i,r,a,n,s,o,l,c){let u=this.elements;return u[0]=t,u[1]=a,u[2]=o,u[3]=i,u[4]=n,u[5]=l,u[6]=r,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],u=r[4],d=r[7],h=r[2],f=r[5],M=r[8],v=a[0],m=a[3],p=a[6],w=a[1],N=a[4],x=a[7],b=a[2],A=a[5],E=a[8];return n[0]=s*v+o*w+l*b,n[3]=s*m+o*N+l*A,n[6]=s*p+o*x+l*E,n[1]=c*v+u*w+d*b,n[4]=c*m+u*N+d*A,n[7]=c*p+u*x+d*E,n[2]=h*v+f*w+M*b,n[5]=h*m+f*N+M*A,n[8]=h*p+f*x+M*E,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return i*s*u-i*o*c-r*n*u+r*o*l+a*n*c-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*s-o*c,h=o*l-u*n,f=c*n-s*l,M=i*d+r*h+a*f;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/M;return t[0]=d*v,t[1]=(a*c-u*r)*v,t[2]=(o*r-a*s)*v,t[3]=h*v,t[4]=(u*i-a*l)*v,t[5]=(a*n-o*i)*v,t[6]=f*v,t[7]=(r*l-c*i)*v,t[8]=(s*i-r*n)*v,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),c=Math.sin(n);return this.set(r*l,r*c,-r*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+i,0,0,1),this}scale(t,i){return Ar("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hs.makeScale(t,i)),this}rotate(t){return Ar("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hs.makeRotation(-t)),this}translate(t,i){return Ar("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hs.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Hs=new Be,Rl=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cl=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ed(){let e={enabled:!0,workingColorSpace:pa,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===Qe&&(a.r=Di(a.r),a.g=Di(a.g),a.b=Di(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Qe&&(a.r=Pr(a.r),a.g=Pr(a.g),a.b=Pr(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Pi?Za:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return Ar("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return Ar("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[pa]:{primaries:t,whitePoint:r,transfer:Za,toXYZ:Rl,fromXYZ:Cl,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:t,whitePoint:r,transfer:Qe,toXYZ:Rl,fromXYZ:Cl,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),e}var He=ed();function Di(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Pr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Lr,td=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Lr===void 0&&(Lr=fa("canvas")),Lr.width=e.width,Lr.height=e.height;let r=Lr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Lr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=Di(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Di(t[i]/255)*255):t[i]=Di(t[i]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},id=0,Ws=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Rr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(Xs(r[n].image)):a.push(Xs(r[n]))}else a=Xs(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function Xs(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?td.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}var rd=0,js=new F,$t=class Vn extends Gi{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,r=Ri,a=Ri,n=Rt,s=sr,o=ri,l=Jt,c=Vn.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Rr(),this.name="",this.source=new Ws(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(js).x}get height(){return this.source.getSize(js).y}get depth(){return this.source.getSize(js).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Pe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Pe(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jn:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case $n:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jn:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case $n:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null,$t.DEFAULT_MAPPING=cl,$t.DEFAULT_ANISOTROPY=1;var _t=class qh{static{qh.prototype.isVector4=!0}constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],c=s[8],u=s[1],d=s[5],h=s[9],f=s[2],M=s[6],v=s[10];if(Math.abs(l-u)<.01&&Math.abs(c-f)<.01&&Math.abs(h-M)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+f)<.1&&Math.abs(h+M)<.1&&Math.abs(o+d+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let p=(o+1)/2,w=(d+1)/2,N=(v+1)/2,x=(l+u)/4,b=(c+f)/4,A=(h+M)/4;return p>w&&p>N?p<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(p),a=x/r,n=b/r):w>N?w<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(w),r=x/a,n=A/a):N<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(N),r=b/n,a=A/n),this.set(r,a,n,i),this}let m=Math.sqrt((M-h)*(M-h)+(c-f)*(c-f)+(u-l)*(u-l));return Math.abs(m)<.001&&(m=1),this.x=(M-h)/m,this.y=(c-f)/m,this.z=(u-l)/m,this.w=Math.acos((o+d+v-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ze(this.x,t.x,i.x),this.y=ze(this.y,t.y,i.y),this.z=ze(this.z,t.z,i.z),this.w=ze(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ze(this.x,t,i),this.y=ze(this.y,t,i),this.z=ze(this.z,t,i),this.w=ze(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(ze(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ad=class extends Gi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new $t(r),n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ws(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ht=class extends ad{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Pl=class extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ut,this.minFilter=ut,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},nd=class extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ut,this.minFilter=ut,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},ct=class Yo{static{Yo.prototype.isMatrix4=!0}constructor(t,i,r,a,n,s,o,l,c,u,d,h,f,M,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c,u,d,h,f,M,v,m)}set(t,i,r,a,n,s,o,l,c,u,d,h,f,M,v,m){let p=this.elements;return p[0]=t,p[4]=i,p[8]=r,p[12]=a,p[1]=n,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=M,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yo().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/Dr.setFromMatrixColumn(t,0).length(),n=1/Dr.setFromMatrixColumn(t,1).length(),s=1/Dr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),c=Math.sin(a),u=Math.cos(n),d=Math.sin(n);if(t.order==="XYZ"){let h=s*u,f=s*d,M=o*u,v=o*d;i[0]=l*u,i[4]=-l*d,i[8]=c,i[1]=f+M*c,i[5]=h-v*c,i[9]=-o*l,i[2]=v-h*c,i[6]=M+f*c,i[10]=s*l}else if(t.order==="YXZ"){let h=l*u,f=l*d,M=c*u,v=c*d;i[0]=h+v*o,i[4]=M*o-f,i[8]=s*c,i[1]=s*d,i[5]=s*u,i[9]=-o,i[2]=f*o-M,i[6]=v+h*o,i[10]=s*l}else if(t.order==="ZXY"){let h=l*u,f=l*d,M=c*u,v=c*d;i[0]=h-v*o,i[4]=-s*d,i[8]=M+f*o,i[1]=f+M*o,i[5]=s*u,i[9]=v-h*o,i[2]=-s*c,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let h=s*u,f=s*d,M=o*u,v=o*d;i[0]=l*u,i[4]=M*c-f,i[8]=h*c+v,i[1]=l*d,i[5]=v*c+h,i[9]=f*c-M,i[2]=-c,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let h=s*l,f=s*c,M=o*l,v=o*c;i[0]=l*u,i[4]=v-h*d,i[8]=M*d+f,i[1]=d,i[5]=s*u,i[9]=-o*u,i[2]=-c*u,i[6]=f*d+M,i[10]=h-v*d}else if(t.order==="XZY"){let h=s*l,f=s*c,M=o*l,v=o*c;i[0]=l*u,i[4]=-d,i[8]=c*u,i[1]=h*d+v,i[5]=s*u,i[9]=f*d-M,i[2]=M*d-f,i[6]=o*u,i[10]=v*d+h}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sd,t,od)}lookAt(t,i,r){let a=this.elements;return Wt.subVectors(t,i),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Hi.crossVectors(r,Wt),Hi.lengthSq()===0&&(Math.abs(r.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Hi.crossVectors(r,Wt)),Hi.normalize(),Qa.crossVectors(Wt,Hi),a[0]=Hi.x,a[4]=Qa.x,a[8]=Wt.x,a[1]=Hi.y,a[5]=Qa.y,a[9]=Wt.y,a[2]=Hi.z,a[6]=Qa.z,a[10]=Wt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],u=r[1],d=r[5],h=r[9],f=r[13],M=r[2],v=r[6],m=r[10],p=r[14],w=r[3],N=r[7],x=r[11],b=r[15],A=a[0],E=a[4],g=a[8],y=a[12],G=a[1],R=a[5],O=a[9],q=a[13],L=a[2],k=a[6],K=a[10],V=a[14],ne=a[3],X=a[7],Y=a[11],$=a[15];return n[0]=s*A+o*G+l*L+c*ne,n[4]=s*E+o*R+l*k+c*X,n[8]=s*g+o*O+l*K+c*Y,n[12]=s*y+o*q+l*V+c*$,n[1]=u*A+d*G+h*L+f*ne,n[5]=u*E+d*R+h*k+f*X,n[9]=u*g+d*O+h*K+f*Y,n[13]=u*y+d*q+h*V+f*$,n[2]=M*A+v*G+m*L+p*ne,n[6]=M*E+v*R+m*k+p*X,n[10]=M*g+v*O+m*K+p*Y,n[14]=M*y+v*q+m*V+p*$,n[3]=w*A+N*G+x*L+b*ne,n[7]=w*E+N*R+x*k+b*X,n[11]=w*g+N*O+x*K+b*Y,n[15]=w*y+N*q+x*V+b*$,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],M=t[3],v=t[7],m=t[11],p=t[15],w=l*f-c*h,N=o*f-c*d,x=o*h-l*d,b=s*f-c*u,A=s*h-l*u,E=s*d-o*u;return i*(v*w-m*N+p*x)-r*(M*w-m*b+p*A)+a*(M*N-v*b+p*E)-n*(M*x-v*A+m*E)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return i*(s*u-o*c)-r*(n*u-o*l)+a*(n*c-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],M=t[12],v=t[13],m=t[14],p=t[15],w=i*o-r*s,N=i*l-a*s,x=i*c-n*s,b=r*l-a*o,A=r*c-n*o,E=a*c-n*l,g=u*v-d*M,y=u*m-h*M,G=u*p-f*M,R=d*m-h*v,O=d*p-f*v,q=h*p-f*m,L=w*q-N*O+x*R+b*G-A*y+E*g;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/L;return t[0]=(o*q-l*O+c*R)*k,t[1]=(a*O-r*q-n*R)*k,t[2]=(v*E-m*A+p*b)*k,t[3]=(h*A-d*E-f*b)*k,t[4]=(l*G-s*q-c*y)*k,t[5]=(i*q-a*G+n*y)*k,t[6]=(m*x-M*E-p*N)*k,t[7]=(u*E-h*x+f*N)*k,t[8]=(s*O-o*G+c*g)*k,t[9]=(r*G-i*O-n*g)*k,t[10]=(M*A-v*x+p*w)*k,t[11]=(d*x-u*A-f*w)*k,t[12]=(o*y-s*R-l*g)*k,t[13]=(i*R-r*y+a*g)*k,t[14]=(v*N-M*b-m*w)*k,t[15]=(u*b-d*N+h*w)*k,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,c=n*s,u=n*o;return this.set(c*s+r,c*o-a*l,c*l+a*o,0,c*o+a*l,u*o+r,u*l-a*s,0,c*l-a*o,u*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,c=n+n,u=s+s,d=o+o,h=n*c,f=n*u,M=n*d,v=s*u,m=s*d,p=o*d,w=l*c,N=l*u,x=l*d,b=r.x,A=r.y,E=r.z;return a[0]=(1-(v+p))*b,a[1]=(f+x)*b,a[2]=(M-N)*b,a[3]=0,a[4]=(f-x)*A,a[5]=(1-(h+p))*A,a[6]=(m+w)*A,a[7]=0,a[8]=(M+N)*E,a[9]=(m-w)*E,a[10]=(1-(h+v))*E,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=Dr.set(a[0],a[1],a[2]).length(),o=Dr.set(a[4],a[5],a[6]).length(),l=Dr.set(a[8],a[9],a[10]).length();n<0&&(s=-s),ai.copy(this);let c=1/s,u=1/o,d=1/l;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=d,ai.elements[9]*=d,ai.elements[10]*=d,i.setFromRotationMatrix(ai),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=_i,l=!1){let c=this.elements,u=2*n/(i-t),d=2*n/(r-a),h=(i+t)/(i-t),f=(r+a)/(r-a),M,v;if(l)M=n/(s-n),v=s*n/(s-n);else if(o===_i)M=-(s+n)/(s-n),v=-2*s*n/(s-n);else if(o===Ja)M=-s/(s-n),v=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=M,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=_i,l=!1){let c=this.elements,u=2/(i-t),d=2/(r-a),h=-(i+t)/(i-t),f=-(r+a)/(r-a),M,v;if(l)M=1/(s-n),v=s/(s-n);else if(o===_i)M=-2/(s-n),v=-(s+n)/(s-n);else if(o===Ja)M=-1/(s-n),v=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=M,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},Dr=new F,ai=new ct,sd=new F(0,0,0),od=new F(1,1,1),Hi=new F,Qa=new F,Wt=new F,Ll=new ct,Dl=new Li,va=class Yh{constructor(t=0,i=0,r=0,a=Yh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],c=a[5],u=a[9],d=a[2],h=a[6],f=a[10];switch(i){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Ll.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ll,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Dl.setFromEuler(this),this.setFromQuaternion(Dl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};va.DEFAULT_ORDER="XYZ";var Nl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ld=0,Ul=new F,Nr=new Li,Ni=new ct,en=new F,Sa=new F,cd=new F,hd=new Li,Il=new F(1,0,0),Ol=new F(0,1,0),Fl=new F(0,0,1),Bl={type:"added"},ud={type:"removed"},Ur={type:"childadded",child:null},qs={type:"childremoved",child:null},ni=class zn extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();let t=new F,i=new va,r=new Li,a=new F(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ct},normalMatrix:{value:new Be}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Nr.setFromAxisAngle(t,i),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(t,i){return Nr.setFromAxisAngle(t,i),this.quaternion.premultiply(Nr),this}rotateX(t){return this.rotateOnAxis(Il,t)}rotateY(t){return this.rotateOnAxis(Ol,t)}rotateZ(t){return this.rotateOnAxis(Fl,t)}translateOnAxis(t,i){return Ul.copy(t).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Il,t)}translateY(t){return this.translateOnAxis(Ol,t)}translateZ(t){return this.translateOnAxis(Fl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?en.copy(t):en.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Sa,en,this.up):Ni.lookAt(en,Sa,this.up),this.quaternion.setFromRotationMatrix(Ni),a&&(Ni.extractRotation(a.matrixWorld),Nr.setFromRotationMatrix(Ni),this.quaternion.premultiply(Nr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bl),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ud),qs.child=t,this.dispatchEvent(qs),qs.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bl),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,t,cd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,hd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];n(t.shapes,d)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),c=s(t.textures),u=s(t.images),d=s(t.shapes),h=s(t.skeletons),f=s(t.animations),M=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),h.length>0&&(r.skeletons=h),f.length>0&&(r.animations=f),M.length>0&&(r.nodes=M)}return r.object=a,r;function s(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ni.DEFAULT_UP=new F(0,1,0),ni.DEFAULT_MATRIX_AUTO_UPDATE=!0,ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=class extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}},dd={type:"move"},Ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let M of e.hand.values()){let v=t.getJointPose(M,i),m=this._getHandJoint(l,M);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}let c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=c.position.distanceTo(u.position),h=.02,f=.005;l.inputState.pinching&&d>h+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=h-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(dd)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new tn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},kl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},rn={h:0,s:0,l:0};function Ks(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Xe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=He.workingColorSpace){return this.r=e,this.g=t,this.b=i,He.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=He.workingColorSpace){if(e=zs(e,1),t=ze(t,0,1),i=ze(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=Ks(n,a,e+1/3),this.g=Ks(n,a,e),this.b=Ks(n,a,e-1/3)}return He.colorSpaceToWorking(this,r),this}setStyle(e,t=Gt){function i(a){a!==void 0&&parseFloat(a)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let i=kl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return He.workingToColorSpace(Pt.copy(this),e),Math.round(ze(Pt.r*255,0,255))*65536+Math.round(ze(Pt.g*255,0,255))*256+Math.round(ze(Pt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(Pt.copy(this),t);let i=Pt.r,r=Pt.g,a=Pt.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,c=(s+n)/2;if(s===n)o=0,l=0;else{let u=n-s;switch(l=c<=.5?u/(n+s):u/(2-n-s),n){case i:o=(r-a)/u+(r<a?6:0);break;case r:o=(a-i)/u+2;break;case a:o=(i-r)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Gt){He.workingToColorSpace(Pt.copy(this),e);let t=Pt.r,i=Pt.g,r=Pt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(rn);let i=_a(Wi.h,rn.h,t),r=_a(Wi.s,rn.s,t),a=_a(Wi.l,rn.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pt=new Xe;Xe.NAMES=kl;var Vl=class extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new va,this.environmentIntensity=1,this.environmentRotation=new va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},si=new F,Ui=new F,Zs=new F,Ii=new F,Ir=new F,Or=new F,zl=new F,Js=new F,$s=new F,Qs=new F,eo=new _t,to=new _t,io=new _t,Ma=class sa{constructor(t=new F,i=new F,r=new F){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),si.subVectors(t,i),a.cross(si);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){si.subVectors(a,i),Ui.subVectors(r,i),Zs.subVectors(t,i);let s=si.dot(si),o=si.dot(Ui),l=si.dot(Zs),c=Ui.dot(Ui),u=Ui.dot(Zs),d=s*c-o*o;if(d===0)return n.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,M=(s*u-o*l)*h;return n.set(1-f-M,M,f)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Ii.x),l.addScaledVector(s,Ii.y),l.addScaledVector(o,Ii.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return eo.setScalar(0),to.setScalar(0),io.setScalar(0),eo.fromBufferAttribute(t,i),to.fromBufferAttribute(t,r),io.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(eo,n.x),s.addScaledVector(to,n.y),s.addScaledVector(io,n.z),s}static isFrontFacing(t,i,r,a){return si.subVectors(r,i),Ui.subVectors(t,i),si.cross(Ui).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),si.cross(Ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sa.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return sa.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return sa.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return sa.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sa.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;Ir.subVectors(a,r),Or.subVectors(n,r),Js.subVectors(t,r);let l=Ir.dot(Js),c=Or.dot(Js);if(l<=0&&c<=0)return i.copy(r);$s.subVectors(t,a);let u=Ir.dot($s),d=Or.dot($s);if(u>=0&&d<=u)return i.copy(a);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),i.copy(r).addScaledVector(Ir,s);Qs.subVectors(t,n);let f=Ir.dot(Qs),M=Or.dot(Qs);if(M>=0&&f<=M)return i.copy(n);let v=f*c-l*M;if(v<=0&&c>=0&&M<=0)return o=c/(c-M),i.copy(r).addScaledVector(Or,o);let m=u*M-f*d;if(m<=0&&d-u>=0&&f-M>=0)return zl.subVectors(n,a),o=(d-u)/(d-u+(f-M)),i.copy(a).addScaledVector(zl,o);let p=1/(m+v+h);return s=v*p,o=h*p,i.copy(r).addScaledVector(Ir,s).addScaledVector(Or,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xi=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,oi):oi.fromBufferAttribute(a,n),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),an.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),an.copy(i.boundingBox)),an.applyMatrix4(e.matrixWorld),this.union(an)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xa),nn.subVectors(this.max,xa),Fr.subVectors(e.a,xa),Br.subVectors(e.b,xa),kr.subVectors(e.c,xa),ji.subVectors(Br,Fr),qi.subVectors(kr,Br),cr.subVectors(Fr,kr);let t=[0,-ji.z,ji.y,0,-qi.z,qi.y,0,-cr.z,cr.y,ji.z,0,-ji.x,qi.z,0,-qi.x,cr.z,0,-cr.x,-ji.y,ji.x,0,-qi.y,qi.x,0,-cr.y,cr.x,0];return!ro(t,Fr,Br,kr,nn)||(t=[1,0,0,0,1,0,0,0,1],!ro(t,Fr,Br,kr,nn))?!1:(sn.crossVectors(ji,qi),t=[sn.x,sn.y,sn.z],ro(t,Fr,Br,kr,nn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Oi=[new F,new F,new F,new F,new F,new F,new F,new F],oi=new F,an=new Xi,Fr=new F,Br=new F,kr=new F,ji=new F,qi=new F,cr=new F,xa=new F,nn=new F,sn=new F,hr=new F;function ro(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){hr.fromArray(e,n);let o=a.x*Math.abs(hr.x)+a.y*Math.abs(hr.y)+a.z*Math.abs(hr.z),l=t.dot(hr),c=i.dot(hr),u=r.dot(hr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var vt=new F,on=new ke,pd=0,Dt=class extends Gi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Du,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXY(t,on.x,on.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Cr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array),a=Lt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},Gl=class extends Dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Hl=class extends Dt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Bt=class extends Dt{constructor(e,t,i){super(new Float32Array(e),t,i)}},fd=new Xi,ya=new F,ao=new F,Ta=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):fd.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);let t=ya.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ya,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ao.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(ao)),this.expandByPoint(ya.copy(e.center).sub(ao))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},md=0,Qt=new ct,no=new ni,Vr=new F,Xt=new Xi,ba=new Xi,At=new F,ei=class Kh extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nu(t)?Hl:Gl)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new Be().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Qt.makeRotationFromQuaternion(t),this.applyMatrix4(Qt),this}rotateX(t){return Qt.makeRotationX(t),this.applyMatrix4(Qt),this}rotateY(t){return Qt.makeRotationY(t),this.applyMatrix4(Qt),this}rotateZ(t){return Qt.makeRotationZ(t),this.applyMatrix4(Qt),this}translate(t,i,r){return Qt.makeTranslation(t,i,r),this.applyMatrix4(Qt),this}scale(t,i,r){return Qt.makeScale(t,i,r),this.applyMatrix4(Qt),this}lookAt(t){return no.lookAt(t),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Bt(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];Xt.setFromBufferAttribute(n),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ta);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let r=this.boundingSphere.center;if(Xt.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];ba.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Xt.min,ba.min),Xt.expandByPoint(At),At.addVectors(Xt.max,ba.max),Xt.expandByPoint(At)):(Xt.expandByPoint(ba.min),Xt.expandByPoint(ba.max))}Xt.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)At.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(At));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),l&&(Vr.fromBufferAttribute(t,c),At.add(Vr)),a=Math.max(a,r.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new Dt(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let g=0;g<r.count;g++)o[g]=new F,l[g]=new F;let c=new F,u=new F,d=new F,h=new ke,f=new ke,M=new ke,v=new F,m=new F;function p(g,y,G){c.fromBufferAttribute(r,g),u.fromBufferAttribute(r,y),d.fromBufferAttribute(r,G),h.fromBufferAttribute(n,g),f.fromBufferAttribute(n,y),M.fromBufferAttribute(n,G),u.sub(c),d.sub(c),f.sub(h),M.sub(h);let R=1/(f.x*M.y-M.x*f.y);isFinite(R)&&(v.copy(u).multiplyScalar(M.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-M.x).multiplyScalar(R),o[g].add(v),o[y].add(v),o[G].add(v),l[g].add(m),l[y].add(m),l[G].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let g=0,y=w.length;g<y;++g){let G=w[g],R=G.start,O=G.count;for(let q=R,L=R+O;q<L;q+=3)p(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let N=new F,x=new F,b=new F,A=new F;function E(g){b.fromBufferAttribute(a,g),A.copy(b);let y=o[g];N.copy(y),N.sub(b.multiplyScalar(b.dot(y))).normalize(),x.crossVectors(A,y);let G=x.dot(l[g])<0?-1:1;s.setXYZW(g,N.x,N.y,N.z,G)}for(let g=0,y=w.length;g<y;++g){let G=w[g],R=G.start,O=G.count;for(let q=R,L=R+O;q<L;q+=3)E(t.getX(q+0)),E(t.getX(q+1)),E(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Dt(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let h=0,f=r.count;h<f;h++)r.setXYZ(h,0,0,0);let a=new F,n=new F,s=new F,o=new F,l=new F,c=new F,u=new F,d=new F;if(t)for(let h=0,f=t.count;h<f;h+=3){let M=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);a.fromBufferAttribute(i,M),n.fromBufferAttribute(i,v),s.fromBufferAttribute(i,m),u.subVectors(s,n),d.subVectors(a,n),u.cross(d),o.fromBufferAttribute(r,M),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,m),o.add(u),l.add(u),c.add(u),r.setXYZ(M,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=i.count;h<f;h+=3)a.fromBufferAttribute(i,h+0),n.fromBufferAttribute(i,h+1),s.fromBufferAttribute(i,h+2),u.subVectors(s,n),d.subVectors(a,n),u.cross(d),r.setXYZ(h+0,u.x,u.y,u.z),r.setXYZ(h+1,u.x,u.y,u.z),r.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)At.fromBufferAttribute(t,i),At.normalize(),t.setXYZ(i,At.x,At.y,At.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,M=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let p=0;p<u;p++)h[M++]=c[f++]}return new Dt(h,u,d)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Kh,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,r);i.setAttribute(o,c)}let n=this.morphAttributes;for(let o in n){let l=[],c=n[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=t(h,r);l.push(f)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let c=r[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(a[l]=u,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let c in a){let u=a[c];this.setAttribute(c,u.clone(i))}let n=t.morphAttributes;for(let c in n){let u=[],d=n[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(i));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,u=s.length;c<u;c++){let d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},so=new F,gd=new F,_d=new Be,Fi=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=so.subVectors(i,t).cross(gd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(so),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||_d.getNormalMatrix(e),r=this.coplanarPoint(so).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},vd=0,zr=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Rr(),this.name="",this.type="Material",this.blending=ca,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=el,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Fi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ke().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Bi=new F,oo=new F,ln=new F,cn=new F,hn=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){oo.copy(e).add(t).multiplyScalar(.5),ln.copy(t).sub(e).normalize(),cn.copy(this.origin).sub(oo);let a=e.distanceTo(t)*.5,n=-this.direction.dot(ln),s=cn.dot(this.direction),o=-cn.dot(ln),l=cn.lengthSq(),c=Math.abs(1-n*n),u,d,h,f;if(c>0)if(u=n*o-s,d=n*s-o,f=a*c,u>=0)if(d>=-f)if(d<=f){let M=1/c;u*=M,d*=M,h=u*(u+n*d+2*s)+d*(n*u+d+2*o)+l}else d=a,u=Math.max(0,-(n*d+s)),h=-u*u+d*(d+2*o)+l;else d=-a,u=Math.max(0,-(n*d+s)),h=-u*u+d*(d+2*o)+l;else d<=-f?(u=Math.max(0,-(-n*a+s)),d=u>0?-a:Math.min(Math.max(-a,-o),a),h=-u*u+d*(d+2*o)+l):d<=f?(u=0,d=Math.min(Math.max(-a,-o),a),h=d*(d+2*o)+l):(u=Math.max(0,-(n*a+s)),d=u>0?a:Math.min(Math.max(-a,-o),a),h=-u*u+d*(d+2*o)+l);else d=n>0?-a:a,u=Math.max(0,-(n*d+s)),h=-u*u+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(oo).addScaledVector(ln,d),h}intersectSphere(e,t){if(e.radius<0)return null;Bi.subVectors(e.center,this.origin);let i=Bi.dot(this.direction),r=Bi.dot(Bi)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),c>=0?(a=(e.min.y-d.y)*c,n=(e.max.y-d.y)*c):(a=(e.max.y-d.y)*c,n=(e.min.y-d.y)*c),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),u>=0?(s=(e.min.z-d.z)*u,o=(e.max.z-d.z)*u):(s=(e.max.z-d.z)*u,o=(e.min.z-d.z)*u),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,c=s.z,u=e.x-n.x,d=e.y-n.y,h=e.z-n.z,f=t.x-n.x,M=t.y-n.y,v=t.z-n.z,m=i.x-n.x,p=i.y-n.y,w=i.z-n.z,N=Math.abs(o),x=Math.abs(l),b=Math.abs(c),A,E,g,y,G,R,O,q,L,k,K,V;if(N>=x&&N>=b?(g=o,R=u,L=f,V=m,o>=0?(A=l,E=c,y=d,G=h,O=M,q=v,k=p,K=w):(A=c,E=l,y=h,G=d,O=v,q=M,k=w,K=p)):x>=b?(g=l,R=d,L=M,V=p,l>=0?(A=c,E=o,y=h,G=u,O=v,q=f,k=w,K=m):(A=o,E=c,y=u,G=h,O=f,q=v,k=m,K=w)):(g=c,R=h,L=v,V=w,c>=0?(A=o,E=l,y=u,G=d,O=f,q=M,k=m,K=p):(A=l,E=o,y=d,G=u,O=M,q=f,k=p,K=m)),g===0)return null;let ne=A/g,X=E/g,Y=1/g,$=y-ne*R,Ce=G-X*R,ge=O-ne*L,We=q-X*L,Ae=k-ne*V,j=K-X*V,J=Ae*We-j*ge,te=$*j-Ce*Ae,_e=ge*Ce-We*$;if(r){if(J<0||te<0||_e<0)return null}else if((J<0||te<0||_e<0)&&(J>0||te>0||_e>0))return null;let ve=J+te+_e;if(ve===0)return null;let le=Y*(J*R+te*L+_e*V);return(ve>0?le<0:le>0)?null:this.at(le/ve,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wl=class extends zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xl=new ct,ur=new hn,un=new Ta,jl=new F,dn=new F,pn=new F,fn=new F,lo=new F,mn=new F,ql=new F,gn=new F,li=class extends ni{constructor(e=new ei,t=new Wl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){mn.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let c=s[o],u=a[o];c!==0&&(lo.fromBufferAttribute(u,e),n?mn.addScaledVector(lo,c):mn.addScaledVector(lo.sub(t),c))}t.add(mn)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),un.copy(i.boundingSphere),un.applyMatrix4(a),ur.copy(e.ray).recast(e.near),!(un.containsPoint(ur.origin)===!1&&(ur.intersectSphere(un,jl)===null||ur.origin.distanceToSquared(jl)>(e.far-e.near)**2))&&(Xl.copy(a).invert(),ur.copy(e.ray).applyMatrix4(Xl),!(i.boundingBox!==null&&ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ur)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,c=a.attributes.uv1,u=a.attributes.normal,d=a.groups,h=a.drawRange;if(s!==null)if(Array.isArray(n))for(let f=0,M=d.length;f<M;f++){let v=d[f],m=n[v.materialIndex],p=Math.max(v.start,h.start),w=Math.min(s.count,Math.min(v.start+v.count,h.start+h.count));for(let N=p,x=w;N<x;N+=3){let b=s.getX(N),A=s.getX(N+1),E=s.getX(N+2);r=_n(this,m,e,i,l,c,u,b,A,E),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let f=Math.max(0,h.start),M=Math.min(s.count,h.start+h.count);for(let v=f,m=M;v<m;v+=3){let p=s.getX(v),w=s.getX(v+1),N=s.getX(v+2);r=_n(this,n,e,i,l,c,u,p,w,N),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let f=0,M=d.length;f<M;f++){let v=d[f],m=n[v.materialIndex],p=Math.max(v.start,h.start),w=Math.min(o.count,Math.min(v.start+v.count,h.start+h.count));for(let N=p,x=w;N<x;N+=3){let b=N,A=N+1,E=N+2;r=_n(this,m,e,i,l,c,u,b,A,E),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let f=Math.max(0,h.start),M=Math.min(o.count,h.start+h.count);for(let v=f,m=M;v<m;v+=3){let p=v,w=v+1,N=v+2;r=_n(this,n,e,i,l,c,u,p,w,N),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}};function Sd(e,t,i,r,a,n,s,o){let l;if(t.side===Ft?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===ar,o),l===null)return null;gn.copy(o),gn.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(gn);return c<i.near||c>i.far?null:{distance:c,point:gn.clone(),object:e}}function _n(e,t,i,r,a,n,s,o,l,c){e.getVertexPosition(o,dn),e.getVertexPosition(l,pn),e.getVertexPosition(c,fn);let u=Sd(e,t,i,r,dn,pn,fn,ql);if(u){let d=new F;Ma.getBarycoord(ql,dn,pn,fn,d),a&&(u.uv=Ma.getInterpolatedAttribute(a,o,l,c,d,new ke)),n&&(u.uv1=Ma.getInterpolatedAttribute(n,o,l,c,d,new ke)),s&&(u.normal=Ma.getInterpolatedAttribute(s,o,l,c,d,new F),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new F,materialIndex:0};Ma.getNormal(dn,pn,fn,h.normal),u.face=h,u.barycoord=d}return u}var Md=class extends $t{constructor(e=null,t=1,i=1,r,a,n,s,o,l=ut,c=ut,u,d){super(null,n,s,o,l,c,r,a,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},dr=new Ta,xd=new ke(.5,.5),vn=new F,Yl=class{constructor(e=new Fi,t=new Fi,i=new Fi,r=new Fi,a=new Fi,n=new Fi){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_i,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],c=a[4],u=a[5],d=a[6],h=a[7],f=a[8],M=a[9],v=a[10],m=a[11],p=a[12],w=a[13],N=a[14],x=a[15];if(r[0].setComponents(l-n,h-c,m-f,x-p).normalize(),r[1].setComponents(l+n,h+c,m+f,x+p).normalize(),r[2].setComponents(l+s,h+u,m+M,x+w).normalize(),r[3].setComponents(l-s,h-u,m-M,x-w).normalize(),i)r[4].setComponents(o,d,v,N).normalize(),r[5].setComponents(l-o,h-d,m-v,x-N).normalize();else if(r[4].setComponents(l-o,h-d,m-v,x-N).normalize(),t===_i)r[5].setComponents(l+o,h+d,m+v,x+N).normalize();else if(t===Ja)r[5].setComponents(o,d,v,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){dr.center.set(0,0,0);let t=xd.distanceTo(e.center);return dr.radius=.7071067811865476+t,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(vn.x=r.normal.x>0?e.max.x:e.min.x,vn.y=r.normal.y>0?e.max.y:e.min.y,vn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vn)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Kl=class extends zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Sn=new F,Mn=new F,Zl=new ct,Ea=new hn,xn=new Ta,co=new F,Jl=new F,yd=class extends ni{constructor(e=new ei,t=new Kl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)Sn.fromBufferAttribute(t,r-1),Mn.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Sn.distanceTo(Mn);e.setAttribute("lineDistance",new Bt(i,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xn.copy(i.boundingSphere),xn.applyMatrix4(r),xn.radius+=a,e.ray.intersectsSphere(xn)===!1)return;Zl.copy(r).invert(),Ea.copy(e.ray).applyMatrix4(Zl);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=this.isLineSegments?2:1,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,n.start),h=Math.min(c.count,n.start+n.count);for(let f=d,M=h-1;f<M;f+=l){let v=c.getX(f),m=c.getX(f+1),p=yn(this,e,Ea,o,v,m,f);p&&t.push(p)}if(this.isLineLoop){let f=c.getX(h-1),M=c.getX(d),v=yn(this,e,Ea,o,f,M,h-1);v&&t.push(v)}}else{let d=Math.max(0,n.start),h=Math.min(u.count,n.start+n.count);for(let f=d,M=h-1;f<M;f+=l){let v=yn(this,e,Ea,o,f,f+1,f);v&&t.push(v)}if(this.isLineLoop){let f=yn(this,e,Ea,o,h-1,d,h-1);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function yn(e,t,i,r,a,n,s){let o=e.geometry.attributes.position;if(Sn.fromBufferAttribute(o,a),Mn.fromBufferAttribute(o,n),i.distanceSqToSegment(Sn,Mn,co,Jl)>r)return;co.applyMatrix4(e.matrixWorld);let l=t.ray.origin.distanceTo(co);if(!(l<t.near||l>t.far))return{distance:l,point:Jl.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}var $l=new F,Ql=new F,Td=class extends yd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)$l.fromBufferAttribute(t,r),Ql.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+$l.distanceTo(Ql);e.setAttribute("lineDistance",new Bt(i,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},bd=class extends zr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ec=new ct,ho=new hn,Tn=new Ta,bn=new F,tc=class extends ni{constructor(e=new ei,t=new bd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tn.copy(i.boundingSphere),Tn.applyMatrix4(r),Tn.radius+=a,e.ray.intersectsSphere(Tn)===!1)return;ec.copy(r).invert(),ho.copy(e.ray).applyMatrix4(ec);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,c=i.attributes.position;if(l!==null){let u=Math.max(0,n.start),d=Math.min(l.count,n.start+n.count);for(let h=u,f=d;h<f;h++){let M=l.getX(h);bn.fromBufferAttribute(c,M),ic(bn,M,o,r,e,t,this)}}else{let u=Math.max(0,n.start),d=Math.min(c.count,n.start+n.count);for(let h=u,f=d;h<f;h++)bn.fromBufferAttribute(c,h),ic(bn,h,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function ic(e,t,i,r,a,n,s){let o=ho.distanceSqToPoint(e);if(o<i){let l=new F;ho.closestPointToPoint(e,l),l.applyMatrix4(r);let c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;n.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var rc=class extends $t{constructor(e=[],t=nr,i,r,a,n,s,o,l,c){super(e,t,i,r,a,n,s,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},wa=class extends $t{constructor(e,t,i=fi,r,a,n,s=ut,o=ut,l,c=Ci,u=1){if(c!==Ci&&c!==or)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,r,a,n,s,o,c,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ws(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ed=class extends wa{constructor(e,t=fi,i=nr,r,a,n=ut,s=ut,o,l=Ci){let c={width:e,height:e,depth:1},u=[c,c,c,c,c,c];super(e,e,t,i,r,a,n,s,o,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ac=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},uo=class Zh extends ei{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=0,f=0;M("z","y","x",-1,-1,r,i,t,s,n,0),M("z","y","x",1,-1,r,i,-t,s,n,1),M("x","z","y",1,1,t,r,i,a,s,2),M("x","z","y",1,-1,t,r,-i,a,s,3),M("x","y","z",1,-1,t,i,r,a,n,4),M("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(d,2));function M(v,m,p,w,N,x,b,A,E,g,y){let G=x/E,R=b/g,O=x/2,q=b/2,L=A/2,k=E+1,K=g+1,V=0,ne=0,X=new F;for(let Y=0;Y<K;Y++){let $=Y*R-q;for(let Ce=0;Ce<k;Ce++){let ge=Ce*G-O;X[v]=ge*w,X[m]=$*N,X[p]=L,c.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[p]=A>0?1:-1,u.push(X.x,X.y,X.z),d.push(Ce/E),d.push(1-Y/g),V+=1}}for(let Y=0;Y<g;Y++)for(let $=0;$<E;$++){let Ce=h+$+k*Y,ge=h+$+k*(Y+1),We=h+($+1)+k*(Y+1),Ae=h+($+1)+k*Y;l.push(Ce,ge,Ae),l.push(ge,We,Ae),ne+=6}o.addGroup(f,ne,y),f+=ne,h+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zh(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},nc=class Jh extends ei{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),c=o+1,u=l+1,d=t/o,h=i/l,f=[],M=[],v=[],m=[];for(let p=0;p<u;p++){let w=p*h-s;for(let N=0;N<c;N++){let x=N*d-n;M.push(x,-w,0),v.push(0,0,1),m.push(N/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let N=w+c*p,x=w+c*(p+1),b=w+1+c*(p+1),A=w+1+c*p;f.push(N,x,A),f.push(x,b,A)}this.setIndex(f),this.setAttribute("position",new Bt(M,3)),this.setAttribute("normal",new Bt(v,3)),this.setAttribute("uv",new Bt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jh(t.width,t.height,t.widthSegments,t.heightSegments)}};function Gr(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(sc(a))a.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(sc(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Nt(e){let t={};for(let i=0;i<e.length;i++){let r=Gr(e[i]);for(let a in r)t[a]=r[a]}return t}function sc(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function wd(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function oc(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:He.workingColorSpace}var Ad={clone:Gr,merge:Nt},Rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jt=class extends zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rd,this.fragmentShader=Cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=wd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Xe().setHex(r.value);break;case"v2":this.uniforms[i].value=new ke().fromArray(r.value);break;case"v3":this.uniforms[i].value=new F().fromArray(r.value);break;case"v4":this.uniforms[i].value=new _t().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ct().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Pd=class extends jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ld=class extends zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Dd=class extends zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Hr(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function po(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Aa=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Nd=class extends Aa{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vl,endingEnd:vl}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case Sl:a=e,s=2*t-i;break;case Ml:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Sl:n=e,o=2*i-t;break;case Ml:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,c=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*c,this._offsetNext=n*c}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,h=this._weightNext,f=(i-t)/(r-t),M=f*f,v=M*f,m=-d*v+2*d*M-d*f,p=(1+d)*v+(-1.5-2*d)*M+(-.5+d)*f+1,w=(-1-h)*v+(1.5+h)*M+.5*f,N=h*v-h*M;for(let x=0;x!==s;++x)a[x]=m*n[c+x]+p*n[l+x]+w*n[o+x]+N*n[u+x];return a}},Ud=class extends Aa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=(i-t)/(r-t),u=1-c;for(let d=0;d!==s;++d)a[d]=n[l+d]*u+n[o+d]*c;return a}},Id=class extends Aa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Od=class extends Aa{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this.inTangents,u=this.outTangents;if(!c||!u){let f=(i-t)/(r-t),M=1-f;for(let v=0;v!==s;++v)a[v]=n[l+v]*M+n[o+v]*f;return a}let d=s*2,h=e-1;for(let f=0;f!==s;++f){let M=n[l+f],v=n[o+f],m=h*d+f*2,p=u[m],w=u[m+1],N=e*d+f*2,x=c[N],b=c[N+1],A=Bd(i,t,p,x,r);a[f]=lc(A,M,w,b,v)}return a}};function lc(e,t,i,r,a){let n=1-e;return n*n*n*t+3*n*n*e*i+3*n*e*e*r+e*e*e*a}function Fd(e,t,i,r,a){let n=1-e;return 3*n*n*(i-t)+6*n*e*(r-i)+3*e*e*(a-r)}function Bd(e,t,i,r,a){let n=(e-t)/(a-t);for(let s=0;s<8;s++){let o=lc(n,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=Fd(n,t,i,r,a);if(Math.abs(l)<1e-10)break;n=Math.max(0,Math.min(1,n-o/l))}return n}var vi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hr(t,this.TimeBufferType),this.values=Hr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Hr(e.times,Array),values:Hr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),po(e.settings)&&(i.settings={inTangents:Hr(e.settings.inTangents,Array),outTangents:Hr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Id(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ud(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Od(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ka:t=this.InterpolantFactoryMethodDiscrete;break;case Os:t=this.InterpolantFactoryMethodLinear;break;case Fs:t=this.InterpolantFactoryMethodSmooth;break;case _l:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Pe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ka;case this.InterpolantFactoryMethodLinear:return Os;case this.InterpolantFactoryMethodSmooth:return Fs;case this.InterpolantFactoryMethodBezier:return _l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;po(this.settings)&&(cc(this.settings.inTangents,e),cc(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){Ne("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){Ne("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&Uu(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){Ne("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Fs,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],c=e[s+1];if(l!==c&&(s!==1||l!==e[0]))if(r)o=!0;else{let u=s*i,d=u-i,h=u+i;for(let f=0;f!==i;++f){let M=t[u+f];if(M!==t[d+f]||M!==t[h+f]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let u=s*i,d=n*i;for(let h=0;h!==i;++h)t[d+h]=t[u+h]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,po(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function cc(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}vi.prototype.ValueTypeName="",vi.prototype.TimeBufferType=Float32Array,vi.prototype.ValueBufferType=Float32Array,vi.prototype.DefaultInterpolation=Os;var Ra=class extends vi{constructor(e,t,i){super(e,t,i)}};Ra.prototype.ValueTypeName="bool",Ra.prototype.ValueBufferType=Array,Ra.prototype.DefaultInterpolation=Ka,Ra.prototype.InterpolantFactoryMethodLinear=void 0,Ra.prototype.InterpolantFactoryMethodSmooth=void 0;var kd=class extends vi{constructor(e,t,i,r){super(e,t,i,r)}};kd.prototype.ValueTypeName="color";var Vd=class extends vi{constructor(e,t,i,r){super(e,t,i,r)}};Vd.prototype.ValueTypeName="number";var zd=class extends Aa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let c=l+s;l!==c;l+=4)Li.slerpFlat(a,0,n,l-s,n,l,o);return a}},hc=class extends vi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new zd(this.times,this.values,this.getValueSize(),e)}};hc.prototype.ValueTypeName="quaternion",hc.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends vi{constructor(e,t,i){super(e,t,i)}};Ca.prototype.ValueTypeName="string",Ca.prototype.ValueBufferType=Array,Ca.prototype.DefaultInterpolation=Ka,Ca.prototype.InterpolantFactoryMethodLinear=void 0,Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var Gd=class extends vi{constructor(e,t,i,r){super(e,t,i,r)}};Gd.prototype.ValueTypeName="vector";var fo={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(uc(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!uc(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function uc(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Hd=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){s++,a===!1&&r.onStart!==void 0&&r.onStart(c,n,s),a=!0},this.itemEnd=function(c){n++,r.onProgress!==void 0&&r.onProgress(c,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){let u=l.indexOf(c);return u!==-1&&l.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=l.length;u<d;u+=2){let h=l[u],f=l[u+1];if(h.global&&(h.lastIndex=0),h.test(c))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wd=new Hd,mo=class{constructor(e){this.manager=e!==void 0?e:Wd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};mo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wr=new WeakMap,Xd=class extends mo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=fo.get(`image:${e}`);if(n!==void 0){if(n.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0);else{let u=Wr.get(n);u===void 0&&(u=[],Wr.set(n,u)),u.push({onLoad:t,onError:r})}return n}let s=fa("img");function o(){c(),t&&t(this);let u=Wr.get(this)||[];for(let d=0;d<u.length;d++){let h=u[d];h.onLoad&&h.onLoad(this)}Wr.delete(this),a.manager.itemEnd(e)}function l(u){c(),r&&r(u),fo.remove(`image:${e}`);let d=Wr.get(this)||[];for(let h=0;h<d.length;h++){let f=d[h];f.onError&&f.onError(u)}Wr.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function c(){s.removeEventListener("load",o,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",o,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),fo.add(`image:${e}`,s),a.manager.itemStart(e),s.src=e,s}},jd=class extends mo{constructor(e){super(e)}load(e,t,i,r){let a=new $t,n=new Xd(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}},En=new F,wn=new Li,Si=new F,dc=class extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(En,wn,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(En,wn,Si.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(En,wn,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(En,wn,Si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Yi=new F,pc=new ke,fc=new ke,ti=class extends dc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,pc,fc),t.subVectors(fc,pc)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ma*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},go=class extends dc{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=c*this.view.offsetY,o=s-c*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xr=-90,jr=1,qd=class extends ni{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ti(Xr,jr,e,t);r.layers=this.layers,this.add(r);let a=new ti(Xr,jr,e,t);a.layers=this.layers,this.add(a);let n=new ti(Xr,jr,e,t);n.layers=this.layers,this.add(n);let s=new ti(Xr,jr,e,t);s.layers=this.layers,this.add(s);let o=new ti(Xr,jr,e,t);o.layers=this.layers,this.add(o);let l=new ti(Xr,jr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,c]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(u,d,h),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Yd=class extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},_o="\\[\\]\\.:\\/",Kd=new RegExp("["+_o+"]","g"),vo="[^"+_o+"]",Zd="[^"+_o.replace("\\.","")+"]",Jd=/((?:WC+[\/:])*)/.source.replace("WC",vo),$d=/(WCOD+)?/.source.replace("WCOD",Zd),Qd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vo),ep=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vo),tp=new RegExp("^"+Jd+$d+Qd+ep+"$"),ip=["material","materials","bones","map"],rp=class{constructor(e,t,i){let r=i||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},dt=class oa{constructor(t,i,r){this.path=i,this.parsedPath=r||oa.parseTrackName(i),this.node=oa.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new oa.Composite(t,i,r):new oa(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Kd,"")}static parseTrackName(t){let i=tp.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);ip.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=oa.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let c=i.objectIndex;switch(r){case"materials":if(!t.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(c!==void 0){if(t[c]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[a];if(s===void 0){let c=i.nodeName;Ne("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=rp,dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray],dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var p0=new Float32Array(1),mc=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},f0=class $h{static{$h.prototype.isMatrix2=!0}constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},ap=class extends Gi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function gc(e,t,i,r){let a=np(r);switch(i){case fl:return e*t;case gl:return e*t/a.components*a.byteLength;case rs:return e*t/a.components*a.byteLength;case lr:return e*t*2/a.components*a.byteLength;case as:return e*t*2/a.components*a.byteLength;case ml:return e*t*3/a.components*a.byteLength;case ri:return e*t*4/a.components*a.byteLength;case ns:return e*t*4/a.components*a.byteLength;case Ha:case Wa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Xa:case ja:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case os:case cs:return Math.max(e,16)*Math.max(t,8)/4;case ss:case ls:return Math.max(e,8)*Math.max(t,8)/2;case hs:case us:case ps:case fs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ds:case qa:case ms:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case gs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _s:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case vs:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ss:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ms:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xs:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ys:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ts:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case bs:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Es:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ws:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case As:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Rs:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Cs:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ps:case Ls:case Ds:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ns:case Us:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ya:case Is:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function np(e){switch(e){case Jt:case hl:return{byteLength:1,components:1};case ua:case ul:case gi:return{byteLength:2,components:1};case ts:case is:return{byteLength:2,components:4};case fi:case es:case mi:return{byteLength:4,components:1};case dl:case pl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}})),typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function _c(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function sp(e){let t=new WeakMap;function i(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=e.SHORT;else if(c instanceof Uint32Array)f=e.UNSIGNED_INT;else if(c instanceof Int32Array)f=e.INT;else if(c instanceof Int8Array)f=e.BYTE;else if(c instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,c){let u=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,u);else{d.sort((f,M)=>f.start-M.start);let h=0;for(let f=1;f<d.length;f++){let M=d[h],v=d[f];v.start<=M.start+M.count+1?M.count=Math.max(M.count,v.start+v.count-M.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,M=d.length;f<M;f++){let v=d[f];e.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:a,remove:n,update:s}}var op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Pp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$p=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Qp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ef=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,af=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,of=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,uf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,df=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ff=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ef=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Af=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Lf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Df=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,If=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Of=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ff=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Bf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_m=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ym=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Am=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:op,alphahash_pars_fragment:lp,alphamap_fragment:cp,alphamap_pars_fragment:hp,alphatest_fragment:up,alphatest_pars_fragment:dp,aomap_fragment:pp,aomap_pars_fragment:fp,batching_pars_vertex:mp,batching_vertex:gp,begin_vertex:_p,beginnormal_vertex:vp,bsdfs:Sp,iridescence_fragment:Mp,bumpmap_pars_fragment:xp,clipping_planes_fragment:yp,clipping_planes_pars_fragment:Tp,clipping_planes_pars_vertex:bp,clipping_planes_vertex:Ep,color_fragment:wp,color_pars_fragment:Ap,color_pars_vertex:Rp,color_vertex:Cp,common:Pp,cube_uv_reflection_fragment:Lp,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Np,displacementmap_vertex:Up,emissivemap_fragment:Ip,emissivemap_pars_fragment:Op,colorspace_fragment:Fp,colorspace_pars_fragment:Bp,envmap_fragment:kp,envmap_common_pars_fragment:Vp,envmap_pars_fragment:zp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:Qp,envmap_vertex:Hp,fog_vertex:Wp,fog_pars_vertex:Xp,fog_fragment:jp,fog_pars_fragment:qp,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:Kp,lights_lambert_fragment:Zp,lights_lambert_pars_fragment:Jp,lights_pars_begin:$p,lights_toon_fragment:ef,lights_toon_pars_fragment:tf,lights_phong_fragment:rf,lights_phong_pars_fragment:af,lights_physical_fragment:nf,lights_physical_pars_fragment:sf,lights_fragment_begin:of,lights_fragment_maps:lf,lights_fragment_end:cf,lightprobes_pars_fragment:hf,logdepthbuf_fragment:uf,logdepthbuf_pars_fragment:df,logdepthbuf_pars_vertex:pf,logdepthbuf_vertex:ff,map_fragment:mf,map_pars_fragment:gf,map_particle_fragment:_f,map_particle_pars_fragment:vf,metalnessmap_fragment:Sf,metalnessmap_pars_fragment:Mf,morphinstance_vertex:xf,morphcolor_vertex:yf,morphnormal_vertex:Tf,morphtarget_pars_vertex:bf,morphtarget_vertex:Ef,normal_fragment_begin:wf,normal_fragment_maps:Af,normal_pars_fragment:Rf,normal_pars_vertex:Cf,normal_vertex:Pf,normalmap_pars_fragment:Lf,clearcoat_normal_fragment_begin:Df,clearcoat_normal_fragment_maps:Nf,clearcoat_pars_fragment:Uf,iridescence_pars_fragment:If,opaque_fragment:Of,packing:Ff,premultiplied_alpha_fragment:Bf,project_vertex:kf,dithering_fragment:Vf,dithering_pars_fragment:zf,roughnessmap_fragment:Gf,roughnessmap_pars_fragment:Hf,shadowmap_pars_fragment:Wf,shadowmap_pars_vertex:Xf,shadowmap_vertex:jf,shadowmask_pars_fragment:qf,skinbase_vertex:Yf,skinning_pars_vertex:Kf,skinning_vertex:Zf,skinnormal_vertex:Jf,specularmap_fragment:$f,specularmap_pars_fragment:Qf,tonemapping_fragment:em,tonemapping_pars_fragment:tm,transmission_fragment:im,transmission_pars_fragment:rm,uv_pars_fragment:am,uv_pars_vertex:nm,uv_vertex:sm,worldpos_vertex:om,background_vert:lm,background_frag:cm,backgroundCube_vert:hm,backgroundCube_frag:um,cube_vert:dm,cube_frag:pm,depth_vert:fm,depth_frag:mm,distance_vert:gm,distance_frag:_m,equirect_vert:vm,equirect_frag:Sm,linedashed_vert:Mm,linedashed_frag:xm,meshbasic_vert:ym,meshbasic_frag:Tm,meshlambert_vert:bm,meshlambert_frag:Em,meshmatcap_vert:wm,meshmatcap_frag:Am,meshnormal_vert:Rm,meshnormal_frag:Cm,meshphong_vert:Pm,meshphong_frag:Lm,meshphysical_vert:Dm,meshphysical_frag:Nm,meshtoon_vert:Um,meshtoon_frag:Im,points_vert:Om,points_frag:Fm,shadow_vert:Bm,shadow_frag:km,sprite_vert:Vm,sprite_frag:zm},ue={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Mi={basic:{uniforms:Nt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Nt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Nt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Nt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Nt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Nt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Nt([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Nt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Nt([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Nt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Nt([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Nt([ue.common,ue.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Nt([ue.lights,ue.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Mi.physical={uniforms:Nt([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var An={r:0,b:0,g:0},Gm=new ct,vc=new Be;vc.set(-1,0,0,0,1,0,0,0,1);function Hm(e,t,i,r,a,n){let s=new Xe(0),o=a===!0?0:1,l,c,u=null,d=0,h=null;function f(w){let N=w.isScene===!0?w.background:null;if(N&&N.isTexture){let x=w.backgroundBlurriness>0;N=t.get(N,x)}return N}function M(w){let N=!1,x=f(w);x===null?m(s,o):x&&x.isColor&&(m(x,1),N=!0);let b=e.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,n):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function v(w,N){let x=f(N);x&&(x.isCubeTexture||x.mapping===za)?(c===void 0&&(c=new li(new uo(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:Gr(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(N.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(vc),c.material.toneMapped=He.getTransfer(x.colorSpace)!==Qe,(u!==x||d!==x.version||h!==e.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,h=e.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new li(new nc(2,2),new jt({name:"BackgroundMaterial",uniforms:Gr(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,l.material.toneMapped=He.getTransfer(x.colorSpace)!==Qe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||h!==e.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,h=e.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,N){w.getRGB(An,oc(e)),i.buffers.color.setClear(An.r,An.g,An.b,N,n)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(w,N=1){s.set(w),o=N,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(s,o)},render:M,addToRenderList:v,dispose:p}}function Wm(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=h(null),n=a,s=!1;function o(R,O,q,L,k){let K=!1,V=d(R,L,q,O);n!==V&&(n=V,c(n.object)),K=f(R,L,q,k),K&&M(R,L,q,k),k!==null&&t.update(k,e.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,x(R,O,q,L),k!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return e.createVertexArray()}function c(R){return e.bindVertexArray(R)}function u(R){return e.deleteVertexArray(R)}function d(R,O,q,L){let k=L.wireframe===!0,K=r[O.id];K===void 0&&(K={},r[O.id]=K);let V=R.isInstancedMesh===!0?R.id:0,ne=K[V];ne===void 0&&(ne={},K[V]=ne);let X=ne[q.id];X===void 0&&(X={},ne[q.id]=X);let Y=X[k];return Y===void 0&&(Y=h(l()),X[k]=Y),Y}function h(R){let O=[],q=[],L=[];for(let k=0;k<i;k++)O[k]=0,q[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:L,object:R,attributes:{},index:null}}function f(R,O,q,L){let k=n.attributes,K=O.attributes,V=0,ne=q.getAttributes();for(let X in ne)if(ne[X].location>=0){let Y=k[X],$=K[X];if($===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),Y===void 0||Y.attribute!==$||$&&Y.data!==$.data)return!0;V++}return n.attributesNum!==V||n.index!==L}function M(R,O,q,L){let k={},K=O.attributes,V=0,ne=q.getAttributes();for(let X in ne)if(ne[X].location>=0){let Y=K[X];Y===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(Y=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(Y=R.instanceColor));let $={};$.attribute=Y,Y&&Y.data&&($.data=Y.data),k[X]=$,V++}n.attributes=k,n.attributesNum=V,n.index=L}function v(){let R=n.newAttributes;for(let O=0,q=R.length;O<q;O++)R[O]=0}function m(R){p(R,0)}function p(R,O){let q=n.newAttributes,L=n.enabledAttributes,k=n.attributeDivisors;q[R]=1,L[R]===0&&(e.enableVertexAttribArray(R),L[R]=1),k[R]!==O&&(e.vertexAttribDivisor(R,O),k[R]=O)}function w(){let R=n.newAttributes,O=n.enabledAttributes;for(let q=0,L=O.length;q<L;q++)O[q]!==R[q]&&(e.disableVertexAttribArray(q),O[q]=0)}function N(R,O,q,L,k,K,V){V===!0?e.vertexAttribIPointer(R,O,q,k,K):e.vertexAttribPointer(R,O,q,L,k,K)}function x(R,O,q,L){v();let k=L.attributes,K=q.getAttributes(),V=O.defaultAttributeValues;for(let ne in K){let X=K[ne];if(X.location>=0){let Y=k[ne];if(Y===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&(Y=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&(Y=R.instanceColor)),Y!==void 0){let $=Y.normalized,Ce=Y.itemSize,ge=t.get(Y);if(ge===void 0)continue;let We=ge.buffer,Ae=ge.type,j=ge.bytesPerElement,J=Ae===e.INT||Ae===e.UNSIGNED_INT||Y.gpuType===es;if(Y.isInterleavedBufferAttribute){let te=Y.data,_e=te.stride,ve=Y.offset;if(te.isInstancedInterleavedBuffer){for(let le=0;le<X.locationSize;le++)p(X.location+le,te.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let le=0;le<X.locationSize;le++)m(X.location+le);e.bindBuffer(e.ARRAY_BUFFER,We);for(let le=0;le<X.locationSize;le++)N(X.location+le,Ce/X.locationSize,Ae,$,_e*j,(ve+Ce/X.locationSize*le)*j,J)}else{if(Y.isInstancedBufferAttribute){for(let te=0;te<X.locationSize;te++)p(X.location+te,Y.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let te=0;te<X.locationSize;te++)m(X.location+te);e.bindBuffer(e.ARRAY_BUFFER,We);for(let te=0;te<X.locationSize;te++)N(X.location+te,Ce/X.locationSize,Ae,$,Ce*j,Ce/X.locationSize*te*j,J)}}else if(V!==void 0){let $=V[ne];if($!==void 0)switch($.length){case 2:e.vertexAttrib2fv(X.location,$);break;case 3:e.vertexAttrib3fv(X.location,$);break;case 4:e.vertexAttrib4fv(X.location,$);break;default:e.vertexAttrib1fv(X.location,$)}}}}w()}function b(){y();for(let R in r){let O=r[R];for(let q in O){let L=O[q];for(let k in L){let K=L[k];for(let V in K)u(K[V].object),delete K[V];delete L[k]}}delete r[R]}}function A(R){if(r[R.id]===void 0)return;let O=r[R.id];for(let q in O){let L=O[q];for(let k in L){let K=L[k];for(let V in K)u(K[V].object),delete K[V];delete L[k]}}delete r[R.id]}function E(R){for(let O in r){let q=r[O];for(let L in q){let k=q[L];if(k[R.id]===void 0)continue;let K=k[R.id];for(let V in K)u(K[V].object),delete K[V];delete k[R.id]}}}function g(R){for(let O in r){let q=r[O],L=R.isInstancedMesh===!0?R.id:0,k=q[L];if(k!==void 0){for(let K in k){let V=k[K];for(let ne in V)u(V[ne].object),delete V[ne];delete k[K]}delete q[L],Object.keys(q).length===0&&delete r[O]}}}function y(){G(),s=!0,n!==a&&(n=a,c(n.object))}function G(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:y,resetDefaultState:G,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfObject:g,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function Xm(e,t,i){let r;function a(l){r=l}function n(l,c){e.drawArrays(r,l,c),i.update(c,r,1)}function s(l,c,u){u!==0&&(e.drawArraysInstanced(r,l,c,u),i.update(c,r,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];i.update(d,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function jm(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(E){return!(E!==ri&&r.convert(E)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let g=E===gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Jt&&E!==mi&&!g&&r.convert(E)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp",u=l(c);u!==c&&(Pe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=i.logarithmicDepthBuffer===!0,h=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&h===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),w=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),N=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),b=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:M,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:N,maxFragmentUniforms:x,maxSamples:b,samples:A}}function qm(e){let t=this,i=null,r=0,a=!1,n=!1,s=new Fi,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||r!==0||a;return a=h,r=d.length,f},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,h){i=u(d,h,0)},this.setState=function(d,h,f){let M=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=e.get(d);if(!a||M===null||M.length===0||n&&!m)n?u(null):c();else{let w=n?0:r,N=w*4,x=p.clippingState||null;l.value=x,x=u(M,h,N,f);for(let b=0;b!==N;++b)x[b]=i[b];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(d,h,f,M){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,M!==!0||m===null){let p=f+v*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let N=0,x=f;N!==v;++N,x+=4)s.copy(d[N]).applyMatrix4(w,o),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var qr=4,Ym=6,Km=20,Zm=256,Pa=new go,Sc=new Xe,So=null,Mo=0,xo=0,yo=!1,Jm=new F,pr=new F,Mc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=Jm}=a;So=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(So,Mo,xo),this._renderer.xr.enabled=yo,e.scissorTest=!1,Yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),So=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:gi,format:ri,colorSpace:pa,depthBuffer:!1},r=xc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xc(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=$m(a)),this._blurMaterial=eg(a,e,t),this._ggxMaterial=Qm(a,e,t)}return r}_compileMaterial(e){let t=new li(new ei,e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,i,r,a){let n=new ti(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(Sc),l.toneMapping=pi,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new li(new uo,new Wl({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,h=d.material,f=!1,M=e.background;M?M.isColor&&(h.color.copy(M),e.background=null,f=!0):(h.color.copy(Sc),f=!0);for(let v=0;v<6;v++){let m=v%3;m===0?(n.up.set(0,s[v],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[v],a.y,a.z)):m===1?(n.up.set(0,0,s[v]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[v],a.z)):(n.up.set(0,s[v],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[v]));let p=this._cubeSize;Yr(r,m*p,v>2?p:0,p,p),l.setRenderTarget(r),f&&l.render(d,n),l.render(e,n)}l.toneMapping=u,l.autoClear=c,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===nr||e.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yc());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;Yr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,Pa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,l=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-c*c),d=l*1.25,h=u*d,{_lodMax:f}=this,M=this._sizeLods[i],v=3*M*(i>f-qr?i-f+qr:0),m=4*(this._cubeSize-M);o.envMap.value=e.texture,o.roughness.value=h,o.mipInt.value=f-t,Yr(a,v,m,3*M,2*M),r.setRenderTarget(a),r.render(s,Pa),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=f-i,Yr(e,v,m,3*M,2*M),r.setRenderTarget(e),r.render(s,Pa)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,s=this._blurMaterial,o=this._lodMeshes[r];o.material=s;let l=s.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-i;let c=this._sizeLods[r],u=3*c*(r>this._lodMax-qr?r-this._lodMax+qr:0),d=4*(this._cubeSize-c);Yr(t,u,d,3*c,2*c),n.setRenderTarget(t),n.render(o,Pa)}};function $m(e){let t=[],i=[],r=e,a=e-qr+1+Ym;for(let n=0;n<a;n++){let s=Math.pow(2,r);t.push(s);let o=1/(s-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,M=new Float32Array(f*h*d),v=new Float32Array(f*h*d);for(let p=0;p<d;p++){let w=p%3*2/3-1,N=p>2?0:-1,x=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];M.set(x,f*h*p);for(let b=0;b<h;b++){let A=u[b*2]*2-1,E=u[b*2+1]*2-1;p===0?pr.set(1,E,A):p===1?pr.set(-A,1,-E):p===2?pr.set(-A,E,1):p===3?pr.set(-1,E,-A):p===4?pr.set(-A,-1,E):pr.set(A,E,-1),pr.toArray(v,(p*h+b)*f)}}let m=new ei;m.setAttribute("position",new Dt(M,f)),m.setAttribute("outputDirection",new Dt(v,f)),i.push(new li(m,null)),r>qr&&r--}return{lodMeshes:i,sizeLods:t}}function xc(e,t,i){let r=new Ht(e,t,i);return r.texture.mapping=za,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Yr(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function Qm(e,t,i){return new jt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rn(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function eg(e,t,i){return new jt({name:"SphericalGaussianBlur",defines:{SAMPLES:Km,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rn(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function yc(){return new jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Tc(){return new jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Rn(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var bc=class extends Ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new rc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new uo(5,5,5),a=new jt({name:"CubemapFromEquirect",uniforms:Gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:Ai});a.uniforms.tEquirect.value=t;let n=new li(r,a),s=t.minFilter;return t.minFilter===sr&&(t.minFilter=Rt),new qd(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function tg(e){let t=new WeakMap,i=new WeakMap,r=null;function a(h,f=!1){return h==null?null:f?s(h):n(h)}function n(h){if(h&&h.isTexture){let f=h.mapping;if(f===Kn||f===Zn)if(t.has(h)){let M=t.get(h).texture;return o(M,h.mapping)}else{let M=h.image;if(M&&M.height>0){let v=new bc(M.height);return v.fromEquirectangularTexture(e,h),t.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function s(h){if(h&&h.isTexture){let f=h.mapping,M=f===Kn||f===Zn,v=f===nr||f===Er;if(M||v){let m=i.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return r===null&&(r=new Mc(e)),m=M?r.fromEquirectangular(h,m):r.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,i.set(h,m),m.texture;if(m!==void 0)return m.texture;{let w=h.image;return M&&w&&w.height>0||v&&w&&l(w)?(r===null&&(r=new Mc(e)),m=M?r.fromEquirectangular(h):r.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,i.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===Kn?h.mapping=nr:f===Zn&&(h.mapping=Er),h}function l(h){let f=0,M=6;for(let v=0;v<M;v++)h[v]!==void 0&&f++;return f===M}function c(h){let f=h.target;f.removeEventListener("dispose",c);let M=t.get(f);M!==void 0&&(t.delete(f),M.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let M=i.get(f);M!==void 0&&(i.delete(f),M.dispose())}function d(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:d}}function ig(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Ar("WebGLRenderer: "+r+" extension not supported."),a}}}function rg(e,t,i,r){let a={},n=new WeakMap;function s(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let M in h.attributes)t.remove(h.attributes[M]);h.removeEventListener("dispose",s),delete a[h.id];let f=n.get(h);f&&(t.remove(f),n.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,i.memory.geometries--}function o(d,h){return a[h.id]===!0||(h.addEventListener("dispose",s),a[h.id]=!0,i.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)t.update(h[f],e.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,M=d.attributes.position,v=0;if(M===void 0)return;if(f!==null){let w=f.array;v=f.version;for(let N=0,x=w.length;N<x;N+=3){let b=w[N+0],A=w[N+1],E=w[N+2];h.push(b,A,A,E,E,b)}}else{let w=M.array;v=M.version;for(let N=0,x=w.length/3-1;N<x;N+=3){let b=N+0,A=N+1,E=N+2;h.push(b,A,A,E,E,b)}}let m=new(M.count>=65535?Hl:Gl)(h,1);m.version=v;let p=n.get(d);p&&t.remove(p),n.set(d,m)}function u(d){let h=n.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return n.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function ag(e,t,i){let r;function a(d){r=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,h){e.drawElements(r,h,n,d*s),i.update(h,r,1)}function c(d,h,f){f!==0&&(e.drawElementsInstanced(r,h,n,d*s,f),i.update(h,r,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,h,0,n,d,0,f);let M=0;for(let v=0;v<f;v++)M+=h[v];i.update(M,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ng(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:Ne("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function sg(e,t,i){let r=new WeakMap,a=new _t;function n(s,o,l){let c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=r.get(o);if(h===void 0||h.count!==d){let f=function(){g.dispose(),r.delete(o),o.removeEventListener("dispose",f)};h!==void 0&&h.texture.dispose();let M=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],N=o.morphAttributes.color||[],x=0;M===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let b=o.attributes.position.count*x,A=1;b>t.maxTextureSize&&(A=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let E=new Float32Array(b*A*4*d),g=new Pl(E,b,A,d);g.type=mi,g.needsUpdate=!0;let y=x*4;for(let G=0;G<d;G++){let R=p[G],O=w[G],q=N[G],L=b*A*4*G;for(let k=0;k<R.count;k++){let K=k*y;M===!0&&(a.fromBufferAttribute(R,k),E[L+K+0]=a.x,E[L+K+1]=a.y,E[L+K+2]=a.z,E[L+K+3]=0),v===!0&&(a.fromBufferAttribute(O,k),E[L+K+4]=a.x,E[L+K+5]=a.y,E[L+K+6]=a.z,E[L+K+7]=0),m===!0&&(a.fromBufferAttribute(q,k),E[L+K+8]=a.x,E[L+K+9]=a.y,E[L+K+10]=a.z,E[L+K+11]=q.itemSize===4?a.w:1)}}h={count:d,texture:g,size:new ke(b,A)},r.set(o,h),o.addEventListener("dispose",f)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let M=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",M),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:n}}function og(e,t,i,r,a){let n=new WeakMap;function s(c){let u=a.render.frame,d=c.geometry,h=t.get(c,d);if(n.get(h)!==u&&(t.update(h),n.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),n.get(c)!==u&&(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,e.ARRAY_BUFFER),n.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;n.get(f)!==u&&(f.update(),n.set(f,u))}return h}function o(){n=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),r.releaseStatesOfObject(u),i.remove(u.instanceMatrix),u.instanceColor!==null&&i.remove(u.instanceColor)}return{update:s,dispose:o}}var lg={[il]:"LINEAR_TONE_MAPPING",[rl]:"REINHARD_TONE_MAPPING",[al]:"CINEON_TONE_MAPPING",[nl]:"ACES_FILMIC_TONE_MAPPING",[ol]:"AGX_TONE_MAPPING",[ll]:"NEUTRAL_TONE_MAPPING",[sl]:"CUSTOM_TONE_MAPPING"};function cg(e,t,i,r,a,n){let s=new Ht(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ei;c.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Bt([0,2,0,0,2,0],2));let u=new Pd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new li(c,u),h=new go(-1,1,1,-1,0,1),f=null,M=null,v=!1,m,p=null,w=[],N=!1;this.setSize=function(x,b){s.setSize(x,b),o!==null&&o.setSize(x,b),l!==null&&l.setSize(x,b);for(let A=0;A<w.length;A++){let E=w[A];E.setSize&&E.setSize(x,b)}},this.setEffects=function(x){w=x,N=w.length>0&&w[0].isRenderPass===!0;let b=s.width,A=s.height;w.length>0&&o===null&&(o=new Ht(b,A,{type:gi,depthBuffer:!1,stencilBuffer:!1}),l=new Ht(b,A,{type:gi,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<w.length;E++){let g=w[E];g.setSize&&g.setSize(b,A)}},this.begin=function(x,b){if(v||x.toneMapping===pi&&w.length===0)return!1;if(p=b,b!==null){let A=b.width,E=b.height;(s.width!==A||s.height!==E)&&this.setSize(A,E)}return N===!1&&x.setRenderTarget(s),m=x.toneMapping,x.toneMapping=pi,!0},this.hasRenderPass=function(){return N},this.end=function(x,b){x.toneMapping=m,v=!0;let A=s,E=o;for(let g=0;g<w.length;g++){let y=w[g];y.enabled!==!1&&(y.render(x,E,A,b),y.needsSwap!==!1&&(A=E,E=E===o?l:o))}if(f!==x.outputColorSpace||M!==x.toneMapping){f=x.outputColorSpace,M=x.toneMapping,u.defines={},He.getTransfer(f)===Qe&&(u.defines.SRGB_TRANSFER="");let g=lg[M];g&&(u.defines[g]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,x.setRenderTarget(p),x.render(d,h),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Ec=new $t,To=new wa(1,1),wc=new Pl,Ac=new nd,Rc=new rc,Cc=[],Pc=[],Lc=new Float32Array(16),Dc=new Float32Array(9),Nc=new Float32Array(4);function Kr(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=Cc[a];if(n===void 0&&(n=new Float32Array(a),Cc[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function xt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function yt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Cn(e,t){let i=Pc[t];i===void 0&&(i=new Int32Array(t),Pc[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function hg(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function ug(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xt(i,t))return;e.uniform2fv(this.addr,t),yt(i,t)}}function dg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xt(i,t))return;e.uniform3fv(this.addr,t),yt(i,t)}}function pg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xt(i,t))return;e.uniform4fv(this.addr,t),yt(i,t)}}function fg(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(xt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),yt(i,t)}else{if(xt(i,r))return;Nc.set(r),e.uniformMatrix2fv(this.addr,!1,Nc),yt(i,r)}}function mg(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(xt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),yt(i,t)}else{if(xt(i,r))return;Dc.set(r),e.uniformMatrix3fv(this.addr,!1,Dc),yt(i,r)}}function gg(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(xt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),yt(i,t)}else{if(xt(i,r))return;Lc.set(r),e.uniformMatrix4fv(this.addr,!1,Lc),yt(i,r)}}function _g(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function vg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xt(i,t))return;e.uniform2iv(this.addr,t),yt(i,t)}}function Sg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xt(i,t))return;e.uniform3iv(this.addr,t),yt(i,t)}}function Mg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xt(i,t))return;e.uniform4iv(this.addr,t),yt(i,t)}}function xg(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function yg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xt(i,t))return;e.uniform2uiv(this.addr,t),yt(i,t)}}function Tg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xt(i,t))return;e.uniform3uiv(this.addr,t),yt(i,t)}}function bg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xt(i,t))return;e.uniform4uiv(this.addr,t),yt(i,t)}}function Eg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(To.compareFunction=i.isReversedDepthBuffer()?Vs:ks,n=To):n=Ec,i.setTexture2D(t||n,a)}function wg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Ac,a)}function Ag(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||Rc,a)}function Rg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||wc,a)}function Cg(e){switch(e){case 5126:return hg;case 35664:return ug;case 35665:return dg;case 35666:return pg;case 35674:return fg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return _g;case 35667:case 35671:return vg;case 35668:case 35672:return Sg;case 35669:case 35673:return Mg;case 5125:return xg;case 36294:return yg;case 36295:return Tg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Rg}}function Pg(e,t){e.uniform1fv(this.addr,t)}function Lg(e,t){let i=Kr(t,this.size,2);e.uniform2fv(this.addr,i)}function Dg(e,t){let i=Kr(t,this.size,3);e.uniform3fv(this.addr,i)}function Ng(e,t){let i=Kr(t,this.size,4);e.uniform4fv(this.addr,i)}function Ug(e,t){let i=Kr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Ig(e,t){let i=Kr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Og(e,t){let i=Kr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Fg(e,t){e.uniform1iv(this.addr,t)}function Bg(e,t){e.uniform2iv(this.addr,t)}function kg(e,t){e.uniform3iv(this.addr,t)}function Vg(e,t){e.uniform4iv(this.addr,t)}function zg(e,t){e.uniform1uiv(this.addr,t)}function Gg(e,t){e.uniform2uiv(this.addr,t)}function Hg(e,t){e.uniform3uiv(this.addr,t)}function Wg(e,t){e.uniform4uiv(this.addr,t)}function Xg(e,t,i){let r=this.cache,a=t.length,n=Cn(i,a);xt(r,n)||(e.uniform1iv(this.addr,n),yt(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=To:s=Ec;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function jg(e,t,i){let r=this.cache,a=t.length,n=Cn(i,a);xt(r,n)||(e.uniform1iv(this.addr,n),yt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||Ac,n[s])}function qg(e,t,i){let r=this.cache,a=t.length,n=Cn(i,a);xt(r,n)||(e.uniform1iv(this.addr,n),yt(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||Rc,n[s])}function Yg(e,t,i){let r=this.cache,a=t.length,n=Cn(i,a);xt(r,n)||(e.uniform1iv(this.addr,n),yt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||wc,n[s])}function Kg(e){switch(e){case 5126:return Pg;case 35664:return Lg;case 35665:return Dg;case 35666:return Ng;case 35674:return Ug;case 35675:return Ig;case 35676:return Og;case 5124:case 35670:return Fg;case 35667:case 35671:return Bg;case 35668:case 35672:return kg;case 35669:case 35673:return Vg;case 5125:return zg;case 36294:return Gg;case 36295:return Hg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}}var Zg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Cg(t.type)}},Jg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kg(t.type)}},$g=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},bo=/(\w+)(\])?(\[|\.)?/g;function Uc(e,t){e.seq.push(t),e.map[t.id]=t}function Qg(e,t,i){let r=e.name,a=r.length;for(bo.lastIndex=0;;){let n=bo.exec(r),s=bo.lastIndex,o=n[1],l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){Uc(i,c===void 0?new Zg(o,e,t):new Jg(o,e,t));break}else{let u=i.map[o];u===void 0&&(u=new $g(o),Uc(i,u)),i=u}}}var Pn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);Qg(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function Ic(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var e_=37297,t_=0;function i_(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var Oc=new Be;function r_(e){He._getMatrix(Oc,He.workingColorSpace,e);let t=`mat3( ${Oc.elements.map(i=>i.toFixed(4))} )`;switch(He.getTransfer(e)){case Za:return[t,"LinearTransferOETF"];case Qe:return[t,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Fc(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+i_(e.getShaderSource(t),s)}else return a}function a_(e,t){let i=r_(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var n_={[il]:"Linear",[rl]:"Reinhard",[al]:"Cineon",[nl]:"ACESFilmic",[ol]:"AgX",[ll]:"Neutral",[sl]:"Custom"};function s_(e,t){let i=n_[t];return i===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Ln=new F;function o_(){He.getLuminanceCoefficients(Ln);let e=Ln.x.toFixed(4),t=Ln.y.toFixed(4),i=Ln.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l_(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function c_(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function h_(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function La(e){return e!==""}function Bc(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var u_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(e){return e.replace(u_,p_)}var d_=new Map;function p_(e,t){let i=Ve[t];if(i===void 0){let r=d_.get(t);if(r!==void 0)i=Ve[r],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Eo(i)}var f_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vc(e){return e.replace(f_,m_)}function m_(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function zc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var g_={[Va]:"SHADOWMAP_TYPE_PCF",[la]:"SHADOWMAP_TYPE_VSM"};function __(e){return g_[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var v_={[nr]:"ENVMAP_TYPE_CUBE",[Er]:"ENVMAP_TYPE_CUBE",[za]:"ENVMAP_TYPE_CUBE_UV"};function S_(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":v_[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var M_={[Er]:"ENVMAP_MODE_REFRACTION"};function x_(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":M_[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var y_={[tl]:"ENVMAP_BLENDING_MULTIPLY",[Mu]:"ENVMAP_BLENDING_MIX",[xu]:"ENVMAP_BLENDING_ADD"};function T_(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":y_[e.combine]||"ENVMAP_BLENDING_NONE"}function b_(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function E_(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=__(i),c=S_(i),u=x_(i),d=T_(i),h=b_(i),f=l_(i),M=c_(n),v=a.createProgram(),m,p,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(La).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(La).join(`
`),p.length>0&&(p+=`
`)):(m=[zc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),p=[zc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+u:"",i.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==pi?"#define TONE_MAPPING":"",i.toneMapping!==pi?Ve.tonemapping_pars_fragment:"",i.toneMapping!==pi?s_("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,a_("linearToOutputTexel",i.outputColorSpace),o_(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(La).join(`
`)),s=Eo(s),s=Bc(s,i),s=kc(s,i),o=Eo(o),o=Bc(o,i),o=kc(o,i),s=Vc(s),o=Vc(o),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",i.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let N=w+m+s,x=w+p+o,b=Ic(a,a.VERTEX_SHADER,N),A=Ic(a,a.FRAGMENT_SHADER,x);a.attachShader(v,b),a.attachShader(v,A),i.index0AttributeName!==void 0?a.bindAttribLocation(v,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function E(R){if(e.debug.checkShaderErrors){let O=a.getProgramInfoLog(v)||"",q=a.getShaderInfoLog(b)||"",L=a.getShaderInfoLog(A)||"",k=O.trim(),K=q.trim(),V=L.trim(),ne=!0,X=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(ne=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,v,b,A);else{let Y=Fc(a,b,"vertex"),$=Fc(a,A,"fragment");Ne("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+Y+`
`+$)}else k!==""?Pe("WebGLProgram: Program Info Log:",k):(K===""||V==="")&&(X=!1);X&&(R.diagnostics={runnable:ne,programLog:k,vertexShader:{log:K,prefix:m},fragmentShader:{log:V,prefix:p}})}a.deleteShader(b),a.deleteShader(A),g=new Pn(a,v),y=h_(a,v)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let G=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=a.getProgramParameter(v,e_)),G},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=t_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=A,this}var w_=0,A_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new R_(e),t.set(e,i)),i}},R_=class{constructor(e){this.id=w_++,this.code=e,this.usedTimes=0}};function C_(e){return e===lr||e===qa||e===Ya}function P_(e,t,i,r,a,n){let s=new Nl,o=new A_,l=new Set,c=[],u=new Map,d=r.logarithmicDepthBuffer,h=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(g){return l.add(g),g===0?"uv":`uv${g}`}function v(g,y,G,R,O,q){let L=R.fog,k=O.geometry,K=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,ne=t.get(g.envMap||K,V),X=ne&&ne.mapping===za?ne.image.height:null,Y=f[g.type];g.precision!==null&&(h=r.getMaxPrecision(g.precision),h!==g.precision&&Pe("WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead."));let $=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ce=$!==void 0?$.length:0,ge=0;k.morphAttributes.position!==void 0&&(ge=1),k.morphAttributes.normal!==void 0&&(ge=2),k.morphAttributes.color!==void 0&&(ge=3);let We,Ae,j,J;if(Y){let wt=Mi[Y];We=wt.vertexShader,Ae=wt.fragmentShader}else{We=g.vertexShader,Ae=g.fragmentShader;let wt=o.getVertexShaderStage(g),$e=o.getFragmentShaderStage(g);o.update(g,wt,$e),j=wt.id,J=$e.id}let te=e.getRenderTarget(),_e=e.state.buffers.depth.getReversed(),ve=O.isInstancedMesh===!0,le=O.isBatchedMesh===!0,Ke=!!g.map,qe=!!g.matcap,Fe=!!ne,mt=!!g.aoMap,It=!!g.lightMap,Zt=!!g.bumpMap&&g.wireframe===!1,lt=!!g.normalMap,Vt=!!g.displacementMap,bt=!!g.emissiveMap,Et=!!g.metalnessMap,D=!!g.roughnessMap,zt=g.anisotropy>0,Ze=g.clearcoat>0,ht=g.dispersion>0,T=g.retroreflectivity>0,_=g.iridescence>0,C=g.sheen>0,H=g.transmission>0,Q=zt&&!!g.anisotropyMap,ce=Ze&&!!g.clearcoatMap,pe=Ze&&!!g.clearcoatNormalMap,I=Ze&&!!g.clearcoatRoughnessMap,se=_&&!!g.iridescenceMap,de=_&&!!g.iridescenceThicknessMap,ye=C&&!!g.sheenColorMap,ae=C&&!!g.sheenRoughnessMap,we=!!g.specularMap,Re=!!g.specularColorMap,Ie=!!g.specularIntensityMap,Je=H&&!!g.transmissionMap,U=H&&!!g.thicknessMap,Z=!!g.gradientMap,ie=!!g.alphaMap,Se=g.alphaTest>0,Te=!!g.alphaHash,re=!!g.extensions,me=pi;g.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(me=e.toneMapping);let De={shaderID:Y,shaderType:g.type,shaderName:g.name,vertexShader:We,fragmentShader:Ae,defines:g.defines,customVertexShaderID:j,customFragmentShaderID:J,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:le,batchingColor:le&&O._colorsTexture!==null,instancing:ve,instancingColor:ve&&O.instanceColor!==null,instancingMorph:ve&&O.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ke,matcap:qe,envMap:Fe,envMapMode:Fe&&ne.mapping,envMapCubeUVHeight:X,aoMap:mt,lightMap:It,bumpMap:Zt,normalMap:lt,displacementMap:Vt,emissiveMap:bt,normalMapObjectSpace:lt&&g.normalMapType===bu,normalMapTangentSpace:lt&&g.normalMapType===xl,packedNormalMap:lt&&g.normalMapType===xl&&C_(g.normalMap.format),metalnessMap:Et,roughnessMap:D,anisotropy:zt,anisotropyMap:Q,clearcoat:Ze,clearcoatMap:ce,clearcoatNormalMap:pe,clearcoatRoughnessMap:I,dispersion:ht,retroreflection:T,iridescence:_,iridescenceMap:se,iridescenceThicknessMap:de,sheen:C,sheenColorMap:ye,sheenRoughnessMap:ae,specularMap:we,specularColorMap:Re,specularIntensityMap:Ie,transmission:H,transmissionMap:Je,thicknessMap:U,gradientMap:Z,opaque:g.transparent===!1&&g.blending===ca&&g.alphaToCoverage===!1,alphaMap:ie,alphaTest:Se,alphaHash:Te,combine:g.combine,mapUv:Ke&&M(g.map.channel),aoMapUv:mt&&M(g.aoMap.channel),lightMapUv:It&&M(g.lightMap.channel),bumpMapUv:Zt&&M(g.bumpMap.channel),normalMapUv:lt&&M(g.normalMap.channel),displacementMapUv:Vt&&M(g.displacementMap.channel),emissiveMapUv:bt&&M(g.emissiveMap.channel),metalnessMapUv:Et&&M(g.metalnessMap.channel),roughnessMapUv:D&&M(g.roughnessMap.channel),anisotropyMapUv:Q&&M(g.anisotropyMap.channel),clearcoatMapUv:ce&&M(g.clearcoatMap.channel),clearcoatNormalMapUv:pe&&M(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:I&&M(g.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&M(g.iridescenceMap.channel),iridescenceThicknessMapUv:de&&M(g.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&M(g.sheenColorMap.channel),sheenRoughnessMapUv:ae&&M(g.sheenRoughnessMap.channel),specularMapUv:we&&M(g.specularMap.channel),specularColorMapUv:Re&&M(g.specularColorMap.channel),specularIntensityMapUv:Ie&&M(g.specularIntensityMap.channel),transmissionMapUv:Je&&M(g.transmissionMap.channel),thicknessMapUv:U&&M(g.thicknessMap.channel),alphaMapUv:ie&&M(g.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(lt||zt),vertexNormals:!!k.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(Ke||ie),fog:!!L,useFog:g.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||k.attributes.normal===void 0&&lt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:ge,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&G.length>0,shadowMapType:e.shadowMap.type,toneMapping:me,decodeVideoTexture:Ke&&g.map.isVideoTexture===!0&&He.getTransfer(g.map.colorSpace)===Qe,decodeVideoTextureEmissive:bt&&g.emissiveMap.isVideoTexture===!0&&He.getTransfer(g.emissiveMap.colorSpace)===Qe,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===di,flipSided:g.side===Ft,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:re&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&g.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function m(g){let y=[];if(g.shaderID?y.push(g.shaderID):(y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID)),g.defines!==void 0)for(let G in g.defines)y.push(G),y.push(g.defines[G]);return g.isRawShaderMaterial===!1&&(p(y,g),w(y,g),y.push(e.outputColorSpace)),y.push(g.customProgramCacheKey),y.join()}function p(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapCubeUVHeight),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.morphAttributeCount),g.push(y.numSunLights),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numSunLightShadows),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function w(g,y){s.disableAll(),y.instancing&&s.enable(0),y.instancingColor&&s.enable(1),y.instancingMorph&&s.enable(2),y.matcap&&s.enable(3),y.envMap&&s.enable(4),y.normalMapObjectSpace&&s.enable(5),y.normalMapTangentSpace&&s.enable(6),y.clearcoat&&s.enable(7),y.iridescence&&s.enable(8),y.alphaTest&&s.enable(9),y.vertexColors&&s.enable(10),y.vertexAlphas&&s.enable(11),y.vertexUv1s&&s.enable(12),y.vertexUv2s&&s.enable(13),y.vertexUv3s&&s.enable(14),y.vertexTangents&&s.enable(15),y.anisotropy&&s.enable(16),y.alphaHash&&s.enable(17),y.batching&&s.enable(18),y.dispersion&&s.enable(19),y.retroreflection&&s.enable(24),y.batchingColor&&s.enable(20),y.gradientMap&&s.enable(21),y.packedNormalMap&&s.enable(22),y.vertexNormals&&s.enable(23),g.push(s.mask),s.disableAll(),y.fog&&s.enable(0),y.useFog&&s.enable(1),y.flatShading&&s.enable(2),y.logarithmicDepthBuffer&&s.enable(3),y.reversedDepthBuffer&&s.enable(4),y.skinning&&s.enable(5),y.morphTargets&&s.enable(6),y.morphNormals&&s.enable(7),y.morphColors&&s.enable(8),y.premultipliedAlpha&&s.enable(9),y.shadowMapEnabled&&s.enable(10),y.doubleSided&&s.enable(11),y.flipSided&&s.enable(12),y.useDepthPacking&&s.enable(13),y.dithering&&s.enable(14),y.transmission&&s.enable(15),y.sheen&&s.enable(16),y.opaque&&s.enable(17),y.pointsUvs&&s.enable(18),y.decodeVideoTexture&&s.enable(19),y.decodeVideoTextureEmissive&&s.enable(20),y.alphaToCoverage&&s.enable(21),y.numLightProbeGrids>0&&s.enable(22),y.hasPositionAttribute&&s.enable(23),g.push(s.mask)}function N(g){let y=f[g.type],G;if(y){let R=Mi[y];G=Ad.clone(R.uniforms)}else G=g.uniforms;return G}function x(g,y){let G=u.get(y);return G!==void 0?++G.usedTimes:(G=new E_(e,y,g,a),c.push(G),u.set(y,G)),G}function b(g){if(--g.usedTimes===0){let y=c.indexOf(g);c[y]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function E(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:N,acquireProgram:x,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:E}}function L_(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function D_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Gc(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Hc(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,M,v,m,p){let w=e[t];return w===void 0?(w={id:h.id,object:h,geometry:f,material:M,materialVariant:s(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},e[t]=w):(w.id=h.id,w.object=h,w.geometry=f,w.material=M,w.materialVariant=s(h),w.groupOrder=v,w.renderOrder=h.renderOrder,w.z=m,w.group=p),t++,w}function l(h,f,M,v,m,p,w){w.reversedDepth===!0&&(m=-m);let N=o(h,f,M,v,m,p);M.transmission>0?r.push(N):M.transparent===!0?a.push(N):i.push(N)}function c(h,f,M,v,m,p){let w=o(h,f,M,v,m,p);M.transmission>0?r.unshift(w):M.transparent===!0?a.unshift(w):i.unshift(w)}function u(h,f){i.length>1&&i.sort(h||D_),r.length>1&&r.sort(f||Gc),a.length>1&&a.sort(f||Gc)}function d(){for(let h=t,f=e.length;h<f;h++){let M=e[h];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:c,finish:d,sort:u}}function N_(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new Hc,e.set(r,[s])):a>=n.length?(s=new Hc,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function U_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new F,color:new Xe};break;case"SpotLight":i={position:new F,direction:new F,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new F,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new F,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":i={color:new Xe,position:new F,halfWidth:new F,halfHeight:new F};break}return e[t.id]=i,i}}}function I_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var O_=0;function F_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function B_(e){let t=new U_,i=I_(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new F);let a=new F,n=new ct,s=new ct;function o(c){let u=0,d=0,h=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let f=0,M=0,v=0,m=0,p=0,w=0,N=0,x=0,b=0,A=0,E=0,g=0,y=0,G=0;c.sort(F_);for(let O=0,q=c.length;O<q;O++){let L=c[O],k=L.color,K=L.intensity,V=L.distance,ne=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===lr?ne=L.shadow.map.texture:ne=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=k.r*K,d+=k.g*K,h+=k.b*K;else if(L.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(L.sh.coefficients[X],K);G++}else if(L.isSunLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Y=L.shadow,$=i.get(L);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),r.sunShadow[M]=$,r.sunShadowMap[M]=ne;let Ce=Y.getViewportCount();for(let ge=0;ge<Ce;ge++)r.sunShadowMatrix[v+ge]=Y.getMatrix(ge),r.sunShadowCascade[v+ge]=Y._cascadeData[ge];v+=Ce,M++}r.sun[f]=X,f++}else if(L.isDirectionalLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Y=L.shadow,$=i.get(L);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,r.directionalShadow[m]=$,r.directionalShadowMap[m]=ne,r.directionalShadowMatrix[m]=L.shadow.matrix,b++}r.directional[m]=X,m++}else if(L.isSpotLight){let X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(k).multiplyScalar(K),X.distance=V,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,r.spot[w]=X;let Y=L.shadow;if(L.map&&(r.spotLightMap[g]=L.map,g++,Y.updateMatrices(L),L.castShadow&&y++),r.spotLightMatrix[w]=Y.matrix,L.castShadow){let $=i.get(L);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,r.spotShadow[w]=$,r.spotShadowMap[w]=ne,E++}w++}else if(L.isRectAreaLight){let X=t.get(L);X.color.copy(k).multiplyScalar(K),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),r.rectArea[N]=X,N++}else if(L.isPointLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let Y=L.shadow,$=i.get(L);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,$.shadowCameraNear=Y.camera.near,$.shadowCameraFar=Y.camera.far,r.pointShadow[p]=$,r.pointShadowMap[p]=ne,r.pointShadowMatrix[p]=L.shadow.matrix,A++}r.point[p]=X,p++}else if(L.isHemisphereLight){let X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(K),X.groundColor.copy(L.groundColor).multiplyScalar(K),r.hemi[x]=X,x++}}N>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=d,r.ambient[2]=h;let R=r.hash;(R.sunLength!==f||R.directionalLength!==m||R.pointLength!==p||R.spotLength!==w||R.rectAreaLength!==N||R.hemiLength!==x||R.numSunShadows!==M||R.numDirectionalShadows!==b||R.numPointShadows!==A||R.numSpotShadows!==E||R.numSpotMaps!==g||R.numLightProbes!==G)&&(r.sun.length=f,r.directional.length=m,r.spot.length=w,r.rectArea.length=N,r.point.length=p,r.hemi.length=x,r.sunShadow.length=M,r.sunShadowMap.length=M,r.sunShadowMatrix.length=v,r.sunShadowCascade.length=v,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.directionalShadowMatrix.length=b,r.pointShadow.length=A,r.pointShadowMap.length=A,r.pointShadowMatrix.length=A,r.spotShadow.length=E,r.spotShadowMap.length=E,r.spotLightMatrix.length=E+g-y,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=y,r.numLightProbes=G,R.sunLength=f,R.directionalLength=m,R.pointLength=p,R.spotLength=w,R.rectAreaLength=N,R.hemiLength=x,R.numSunShadows=M,R.numDirectionalShadows=b,R.numPointShadows=A,R.numSpotShadows=E,R.numSpotMaps=g,R.numLightProbes=G,r.version=O_++)}function l(c,u){let d=0,h=0,f=0,M=0,v=0,m=0,p=u.matrixWorldInverse;for(let w=0,N=c.length;w<N;w++){let x=c[w];if(x.isSunLight){let b=r.sun[d];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),d++}else if(x.isDirectionalLight){let b=r.directional[h];b.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(p),h++}else if(x.isSpotLight){let b=r.spot[M];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(p),M++}else if(x.isRectAreaLight){let b=r.rectArea[v];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),s.identity(),n.copy(x.matrixWorld),n.premultiply(p),s.extractRotation(n),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),v++}else if(x.isPointLight){let b=r.point[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let b=r.hemi[m];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:r}}function Wc(e){let t=new B_(e),i=[],r=[],a=[];function n(h){d.camera=h,i.length=0,r.length=0,a.length=0}function s(h){i.push(h)}function o(h){r.push(h)}function l(h){a.push(h)}function c(){t.setup(i)}function u(h){t.setupView(i,h)}let d={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:d,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function k_(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new Wc(e),t.set(a,[o])):n>=s.length?(o=new Wc(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var V_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,G_=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],H_=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Xc=new ct,Da=new F,wo=new F;function W_(e,t,i){let r=new Yl,a=new ke,n=new ke,s=new _t,o=new Ld,l=new Dd,c={},u=i.maxTextureSize,d={[ar]:Ft,[Ft]:ar,[di]:di},h=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:V_,fragmentShader:z_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let M=new ei;M.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new li(M,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Va;let p=this.type;this.render=function(A,E,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===tu&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Va);let y=e.getRenderTarget(),G=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),O=e.state;O.setBlending(Ai),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let q=p!==this.type;q&&E.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(k=>k.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,k=A.length;L<k;L++){let K=A[L],V=K.shadow;if(V===void 0){Pe("WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);let ne=V.getFrameExtents();a.multiply(ne),n.copy(V.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(n.x=Math.floor(u/ne.x),a.x=n.x*ne.x,V.mapSize.x=n.x),a.y>u&&(n.y=Math.floor(u/ne.y),a.y=n.y*ne.y,V.mapSize.y=n.y));let X=e.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||q===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===la){if(K.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ht(a.x,a.y,{format:lr,type:gi,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),V.map.texture.name=K.name+".shadowMap",V.map.depthTexture=new wa(a.x,a.y,mi),V.map.depthTexture.name=K.name+".shadowMapDepth",V.map.depthTexture.format=Ci,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ut,V.map.depthTexture.magFilter=ut}else K.isPointLight?(V.map=new bc(a.x),V.map.depthTexture=new Ed(a.x,fi)):(V.map=new Ht(a.x,a.y),V.map.depthTexture=new wa(a.x,a.y,fi)),V.map.depthTexture.name=K.name+".shadowMap",V.map.depthTexture.format=Ci,this.type===Va?(V.map.depthTexture.compareFunction=X?Vs:ks,V.map.depthTexture.minFilter=Rt,V.map.depthTexture.magFilter=Rt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ut,V.map.depthTexture.magFilter=ut);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==a.x||V.map.height!==a.y)&&V.map.setSize(a.x,a.y);let Y=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();K.isPointLight!==!0&&V.updateMatrices(K,g);for(let $=0;$<Y;$++){let Ce=V.getCamera($);if(K.isPointLight){let ge=V.camera,We=V.matrix,Ae=K.distance||ge.far;Ae!==ge.far&&(ge.far=Ae,ge.updateProjectionMatrix()),Da.setFromMatrixPosition(K.matrixWorld),ge.position.copy(Da),wo.copy(ge.position),wo.add(G_[$]),ge.up.copy(H_[$]),ge.lookAt(wo),ge.updateMatrixWorld(),We.makeTranslation(-Da.x,-Da.y,-Da.z),Xc.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Xc,ge.coordinateSystem,ge.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)e.setRenderTarget(V.map,$),e.clear();else{$===0&&(e.setRenderTarget(V.map),e.clear());let ge=V.getViewport($);s.set(n.x*ge.x,n.y*ge.y,n.x*ge.z,n.y*ge.w),O.viewport(s)}r=V.getFrustum($),x(E,g,Ce,K,this.type)}V.isPointLightShadow!==!0&&this.type===la&&w(V,g),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,e.setRenderTarget(y,G,R)};function w(A,E){let g=t.update(v);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new Ht(a.x,a.y,{format:lr,type:gi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(E,null,g,h,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(E,null,g,f,v,null)}function N(A,E,g,y){let G=null,R=g.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)G=R;else if(G=g.isPointLight===!0?l:o,e.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let O=G.uuid,q=E.uuid,L=c[O];L===void 0&&(L={},c[O]=L);let k=L[q];k===void 0&&(k=G.clone(),L[q]=k,E.addEventListener("dispose",b)),G=k}if(G.visible=E.visible,G.wireframe=E.wireframe,y===la?G.side=E.shadowSide!==null?E.shadowSide:E.side:G.side=E.shadowSide!==null?E.shadowSide:d[E.side],G.alphaMap=E.alphaMap,G.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,G.map=E.map,G.clipShadows=E.clipShadows,G.clippingPlanes=E.clippingPlanes,G.clipIntersection=E.clipIntersection,G.displacementMap=E.displacementMap,G.displacementScale=E.displacementScale,G.displacementBias=E.displacementBias,G.wireframeLinewidth=E.wireframeLinewidth,G.linewidth=E.linewidth,g.isPointLight===!0&&G.isMeshDistanceMaterial===!0){let O=e.properties.get(G);O.light=g}return G}function x(A,E,g,y,G){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&G===la)&&(!A.frustumCulled||A.intersectsFrustum(r))){A.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,A.matrixWorld);let O=t.update(A),q=A.material;if(Array.isArray(q)){let L=O.groups;for(let k=0,K=L.length;k<K;k++){let V=L[k],ne=q[V.materialIndex];if(ne&&ne.visible){let X=N(A,ne,y,G);A.onBeforeShadow(e,A,E,g,O,X,V),e.renderBufferDirect(g,null,O,X,A,V),A.onAfterShadow(e,A,E,g,O,X,V)}}}else if(q.visible){let L=N(A,q,y,G);A.onBeforeShadow(e,A,E,g,O,L,null),e.renderBufferDirect(g,null,O,L,A,null),A.onAfterShadow(e,A,E,g,O,L,null)}}let R=A.children;for(let O=0,q=R.length;O<q;O++)x(R[O],E,g,y,G)}function b(A){A.target.removeEventListener("dispose",b);for(let E in c){let g=c[E],y=A.target.uuid;y in g&&(g[y].dispose(),delete g[y])}}}function X_(e,t){function i(){let U=!1,Z=new _t,ie=null,Se=new _t(0,0,0,0);return{setMask:function(Te){ie!==Te&&!U&&(e.colorMask(Te,Te,Te,Te),ie=Te)},setLocked:function(Te){U=Te},setClear:function(Te,re,me,De,wt){wt===!0&&(Te*=De,re*=De,me*=De),Z.set(Te,re,me,De),Se.equals(Z)===!1&&(e.clearColor(Te,re,me,De),Se.copy(Z))},reset:function(){U=!1,ie=null,Se.set(-1,0,0,0)}}}function r(){let U=!1,Z=!1,ie=null,Se=null,Te=null;return{setReversed:function(re){if(Z!==re){let me=t.get("EXT_clip_control");re?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),Z=re;let De=Te;Te=null,this.setClear(De)}},getReversed:function(){return Z},setTest:function(re){re?te(e.DEPTH_TEST):_e(e.DEPTH_TEST)},setMask:function(re){ie!==re&&!U&&(e.depthMask(re),ie=re)},setFunc:function(re){if(Z&&(re=Fu[re]),Se!==re){switch(re){case Gn:e.depthFunc(e.NEVER);break;case Hn:e.depthFunc(e.ALWAYS);break;case Wn:e.depthFunc(e.LESS);break;case ha:e.depthFunc(e.LEQUAL);break;case Xn:e.depthFunc(e.EQUAL);break;case jn:e.depthFunc(e.GEQUAL);break;case qn:e.depthFunc(e.GREATER);break;case Yn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Se=re}},setLocked:function(re){U=re},setClear:function(re){Te!==re&&(Te=re,Z&&(re=1-re),e.clearDepth(re))},reset:function(){U=!1,ie=null,Se=null,Te=null,Z=!1}}}function a(){let U=!1,Z=null,ie=null,Se=null,Te=null,re=null,me=null,De=null,wt=null;return{setTest:function($e){U||($e?te(e.STENCIL_TEST):_e(e.STENCIL_TEST))},setMask:function($e){Z!==$e&&!U&&(e.stencilMask($e),Z=$e)},setFunc:function($e,Ei,zi){(ie!==$e||Se!==Ei||Te!==zi)&&(e.stencilFunc($e,Ei,zi),ie=$e,Se=Ei,Te=zi)},setOp:function($e,Ei,zi){(re!==$e||me!==Ei||De!==zi)&&(e.stencilOp($e,Ei,zi),re=$e,me=Ei,De=zi)},setLocked:function($e){U=$e},setClear:function($e){wt!==$e&&(e.clearStencil($e),wt=$e)},reset:function(){U=!1,Z=null,ie=null,Se=null,Te=null,re=null,me=null,De=null,wt=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,M=[],v=null,m=!1,p=null,w=null,N=null,x=null,b=null,A=null,E=null,g=new Xe(0,0,0),y=0,G=!1,R=null,O=null,q=null,L=null,k=null,K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ne=0,X=e.getParameter(e.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=ne>=2);let Y=null,$={},Ce=e.getParameter(e.SCISSOR_BOX),ge=e.getParameter(e.VIEWPORT),We=new _t().fromArray(Ce),Ae=new _t().fromArray(ge);function j(U,Z,ie,Se){let Te=new Uint8Array(4),re=e.createTexture();e.bindTexture(U,re),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let me=0;me<ie;me++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(Z,0,e.RGBA,1,1,Se,0,e.RGBA,e.UNSIGNED_BYTE,Te):e.texImage2D(Z+me,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Te);return re}let J={};J[e.TEXTURE_2D]=j(e.TEXTURE_2D,e.TEXTURE_2D,1),J[e.TEXTURE_CUBE_MAP]=j(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[e.TEXTURE_2D_ARRAY]=j(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),J[e.TEXTURE_3D]=j(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),te(e.DEPTH_TEST),s.setFunc(ha),Zt(!1),lt(Ko),te(e.CULL_FACE),mt(Ai);function te(U){u[U]!==!0&&(e.enable(U),u[U]=!0)}function _e(U){u[U]!==!1&&(e.disable(U),u[U]=!1)}function ve(U,Z){return h[U]!==Z?(e.bindFramebuffer(U,Z),h[U]=Z,U===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=Z),U===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=Z),!0):!1}function le(U,Z){let ie=M,Se=!1;if(U){ie=f.get(Z),ie===void 0&&(ie=[],f.set(Z,ie));let Te=U.textures;if(ie.length!==Te.length||ie[0]!==e.COLOR_ATTACHMENT0){for(let re=0,me=Te.length;re<me;re++)ie[re]=e.COLOR_ATTACHMENT0+re;ie.length=Te.length,Se=!0}}else ie[0]!==e.BACK&&(ie[0]=e.BACK,Se=!0);Se&&e.drawBuffers(ie)}function Ke(U){return v!==U?(e.useProgram(U),v=U,!0):!1}let qe={[br]:e.FUNC_ADD,[ru]:e.FUNC_SUBTRACT,[au]:e.FUNC_REVERSE_SUBTRACT};qe[nu]=e.MIN,qe[su]=e.MAX;let Fe={[ou]:e.ZERO,[lu]:e.ONE,[cu]:e.SRC_COLOR,[Qo]:e.SRC_ALPHA,[mu]:e.SRC_ALPHA_SATURATE,[pu]:e.DST_COLOR,[uu]:e.DST_ALPHA,[hu]:e.ONE_MINUS_SRC_COLOR,[el]:e.ONE_MINUS_SRC_ALPHA,[fu]:e.ONE_MINUS_DST_COLOR,[du]:e.ONE_MINUS_DST_ALPHA,[gu]:e.CONSTANT_COLOR,[_u]:e.ONE_MINUS_CONSTANT_COLOR,[vu]:e.CONSTANT_ALPHA,[Su]:e.ONE_MINUS_CONSTANT_ALPHA};function mt(U,Z,ie,Se,Te,re,me,De,wt,$e){if(U===Ai){m===!0&&(_e(e.BLEND),m=!1);return}if(m===!1&&(te(e.BLEND),m=!0),U!==iu){if(U!==p||$e!==G){if((w!==br||b!==br)&&(e.blendEquation(e.FUNC_ADD),w=br,b=br),$e)switch(U){case ca:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Zo:e.blendFunc(e.ONE,e.ONE);break;case Jo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case $o:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ne("WebGLState: Invalid blending: ",U);break}else switch(U){case ca:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Zo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Jo:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $o:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",U);break}N=null,x=null,A=null,E=null,g.set(0,0,0),y=0,p=U,G=$e}return}Te=Te||Z,re=re||ie,me=me||Se,(Z!==w||Te!==b)&&(e.blendEquationSeparate(qe[Z],qe[Te]),w=Z,b=Te),(ie!==N||Se!==x||re!==A||me!==E)&&(e.blendFuncSeparate(Fe[ie],Fe[Se],Fe[re],Fe[me]),N=ie,x=Se,A=re,E=me),(De.equals(g)===!1||wt!==y)&&(e.blendColor(De.r,De.g,De.b,wt),g.copy(De),y=wt),p=U,G=!1}function It(U,Z){U.side===di?_e(e.CULL_FACE):te(e.CULL_FACE);let ie=U.side===Ft;Z&&(ie=!ie),Zt(ie),U.blending===ca&&U.transparent===!1?mt(Ai):mt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),n.setMask(U.colorWrite);let Se=U.stencilWrite;o.setTest(Se),Se&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),bt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(e.SAMPLE_ALPHA_TO_COVERAGE):_e(e.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(U){R!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),R=U)}function lt(U){U!==Qh?(te(e.CULL_FACE),U!==O&&(U===Ko?e.cullFace(e.BACK):U===eu?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):_e(e.CULL_FACE),O=U}function Vt(U){U!==q&&(V&&e.lineWidth(U),q=U)}function bt(U,Z,ie){U?(te(e.POLYGON_OFFSET_FILL),(L!==Z||k!==ie)&&(L=Z,k=ie,s.getReversed()&&(Z=-Z),e.polygonOffset(Z,ie))):_e(e.POLYGON_OFFSET_FILL)}function Et(U){U?te(e.SCISSOR_TEST):_e(e.SCISSOR_TEST)}function D(U){U===void 0&&(U=e.TEXTURE0+K-1),Y!==U&&(e.activeTexture(U),Y=U)}function zt(U,Z,ie){ie===void 0&&(Y===null?ie=e.TEXTURE0+K-1:ie=Y);let Se=$[ie];Se===void 0&&(Se={type:void 0,texture:void 0},$[ie]=Se),(Se.type!==U||Se.texture!==Z)&&(Y!==ie&&(e.activeTexture(ie),Y=ie),e.bindTexture(U,Z||J[U]),Se.type=U,Se.texture=Z)}function Ze(){let U=$[Y];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ht(){try{e.compressedTexImage2D(...arguments)}catch(U){Ne("WebGLState:",U)}}function T(){try{e.compressedTexImage3D(...arguments)}catch(U){Ne("WebGLState:",U)}}function _(){try{e.texSubImage2D(...arguments)}catch(U){Ne("WebGLState:",U)}}function C(){try{e.texSubImage3D(...arguments)}catch(U){Ne("WebGLState:",U)}}function H(){try{e.compressedTexSubImage2D(...arguments)}catch(U){Ne("WebGLState:",U)}}function Q(){try{e.compressedTexSubImage3D(...arguments)}catch(U){Ne("WebGLState:",U)}}function ce(){try{e.texStorage2D(...arguments)}catch(U){Ne("WebGLState:",U)}}function pe(){try{e.texStorage3D(...arguments)}catch(U){Ne("WebGLState:",U)}}function I(){try{e.texImage2D(...arguments)}catch(U){Ne("WebGLState:",U)}}function se(){try{e.texImage3D(...arguments)}catch(U){Ne("WebGLState:",U)}}function de(U){return d[U]!==void 0?d[U]:e.getParameter(U)}function ye(U,Z){d[U]!==Z&&(e.pixelStorei(U,Z),d[U]=Z)}function ae(U){We.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),We.copy(U))}function we(U){Ae.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),Ae.copy(U))}function Re(U,Z){let ie=c.get(Z);ie===void 0&&(ie=new WeakMap,c.set(Z,ie));let Se=ie.get(U);Se===void 0&&(Se=e.getUniformBlockIndex(Z,U.name),ie.set(U,Se))}function Ie(U,Z){let ie=c.get(Z).get(U);l.get(Z)!==ie&&(e.uniformBlockBinding(Z,ie,U.__bindingPointIndex),l.set(Z,ie))}function Je(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},Y=null,$={},h={},f=new WeakMap,M=[],v=null,m=!1,p=null,w=null,N=null,x=null,b=null,A=null,E=null,g=new Xe(0,0,0),y=0,G=!1,R=null,O=null,q=null,L=null,k=null,We.set(0,0,e.canvas.width,e.canvas.height),Ae.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:te,disable:_e,bindFramebuffer:ve,drawBuffers:le,useProgram:Ke,setBlending:mt,setMaterial:It,setFlipSided:Zt,setCullFace:lt,setLineWidth:Vt,setPolygonOffset:bt,setScissorTest:Et,activeTexture:D,bindTexture:zt,unbindTexture:Ze,compressedTexImage2D:ht,compressedTexImage3D:T,texImage2D:I,texImage3D:se,pixelStorei:ye,getParameter:de,updateUBOMapping:Re,uniformBlockBinding:Ie,texStorage2D:ce,texStorage3D:pe,texSubImage2D:_,texSubImage3D:C,compressedTexSubImage2D:H,compressedTexSubImage3D:Q,scissor:ae,viewport:we,reset:Je}}function j_(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap,d=new Set,h,f=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,_){return M?new OffscreenCanvas(T,_):fa("canvas")}function m(T,_,C){let H=1,Q=ht(T);if((Q.width>C||Q.height>C)&&(H=C/Math.max(Q.width,Q.height)),H<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ce=Math.floor(H*Q.width),pe=Math.floor(H*Q.height);h===void 0&&(h=v(ce,pe));let I=_?v(ce,pe):h;return I.width=ce,I.height=pe,I.getContext("2d").drawImage(T,0,0,ce,pe),Pe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ce+"x"+pe+")."),I}else return"data"in T&&Pe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function p(T){return T.generateMipmaps}function w(T){e.generateMipmap(T)}function N(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(T,_,C,H,Q,ce=!1){if(T!==null){if(e[T]!==void 0)return e[T];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let pe;H&&(pe=t.get("EXT_texture_norm16"),pe||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let I=_;if(_===e.RED&&(C===e.FLOAT&&(I=e.R32F),C===e.HALF_FLOAT&&(I=e.R16F),C===e.UNSIGNED_BYTE&&(I=e.R8),C===e.UNSIGNED_SHORT&&pe&&(I=pe.R16_EXT),C===e.SHORT&&pe&&(I=pe.R16_SNORM_EXT)),_===e.RED_INTEGER&&(C===e.UNSIGNED_BYTE&&(I=e.R8UI),C===e.UNSIGNED_SHORT&&(I=e.R16UI),C===e.UNSIGNED_INT&&(I=e.R32UI),C===e.BYTE&&(I=e.R8I),C===e.SHORT&&(I=e.R16I),C===e.INT&&(I=e.R32I)),_===e.RG&&(C===e.FLOAT&&(I=e.RG32F),C===e.HALF_FLOAT&&(I=e.RG16F),C===e.UNSIGNED_BYTE&&(I=e.RG8),C===e.UNSIGNED_SHORT&&pe&&(I=pe.RG16_EXT),C===e.SHORT&&pe&&(I=pe.RG16_SNORM_EXT)),_===e.RG_INTEGER&&(C===e.UNSIGNED_BYTE&&(I=e.RG8UI),C===e.UNSIGNED_SHORT&&(I=e.RG16UI),C===e.UNSIGNED_INT&&(I=e.RG32UI),C===e.BYTE&&(I=e.RG8I),C===e.SHORT&&(I=e.RG16I),C===e.INT&&(I=e.RG32I)),_===e.RGB_INTEGER&&(C===e.UNSIGNED_BYTE&&(I=e.RGB8UI),C===e.UNSIGNED_SHORT&&(I=e.RGB16UI),C===e.UNSIGNED_INT&&(I=e.RGB32UI),C===e.BYTE&&(I=e.RGB8I),C===e.SHORT&&(I=e.RGB16I),C===e.INT&&(I=e.RGB32I)),_===e.RGBA_INTEGER&&(C===e.UNSIGNED_BYTE&&(I=e.RGBA8UI),C===e.UNSIGNED_SHORT&&(I=e.RGBA16UI),C===e.UNSIGNED_INT&&(I=e.RGBA32UI),C===e.BYTE&&(I=e.RGBA8I),C===e.SHORT&&(I=e.RGBA16I),C===e.INT&&(I=e.RGBA32I)),_===e.RGB&&(C===e.UNSIGNED_SHORT&&pe&&(I=pe.RGB16_EXT),C===e.SHORT&&pe&&(I=pe.RGB16_SNORM_EXT),C===e.UNSIGNED_INT_5_9_9_9_REV&&(I=e.RGB9_E5),C===e.UNSIGNED_INT_10F_11F_11F_REV&&(I=e.R11F_G11F_B10F)),_===e.RGBA){let se=ce?Za:He.getTransfer(Q);C===e.FLOAT&&(I=e.RGBA32F),C===e.HALF_FLOAT&&(I=e.RGBA16F),C===e.UNSIGNED_BYTE&&(I=se===Qe?e.SRGB8_ALPHA8:e.RGBA8),C===e.UNSIGNED_SHORT&&pe&&(I=pe.RGBA16_EXT),C===e.SHORT&&pe&&(I=pe.RGBA16_SNORM_EXT),C===e.UNSIGNED_SHORT_4_4_4_4&&(I=e.RGBA4),C===e.UNSIGNED_SHORT_5_5_5_1&&(I=e.RGB5_A1)}return(I===e.R16F||I===e.R32F||I===e.RG16F||I===e.RG32F||I===e.RGBA16F||I===e.RGBA32F)&&t.get("EXT_color_buffer_float"),I}function b(T,_){let C;return T?_===null||_===fi||_===da?C=e.DEPTH24_STENCIL8:_===mi?C=e.DEPTH32F_STENCIL8:_===ua&&(C=e.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===fi||_===da?C=e.DEPTH_COMPONENT24:_===mi?C=e.DEPTH_COMPONENT32F:_===ua&&(C=e.DEPTH_COMPONENT16),C}function A(T,_){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==ut&&T.minFilter!==Rt?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function E(T){let _=T.target;_.removeEventListener("dispose",E),y(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function g(T){let _=T.target;_.removeEventListener("dispose",g),R(_)}function y(T){let _=r.get(T);if(_.__webglInit===void 0)return;let C=T.source,H=f.get(C);if(H){let Q=H[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&G(T),Object.keys(H).length===0&&f.delete(C)}r.remove(T)}function G(T){let _=r.get(T);e.deleteTexture(_.__webglTexture);let C=T.source,H=f.get(C);delete H[_.__cacheKey],s.memory.textures--}function R(T){let _=r.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),r.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let Q=0;Q<_.__webglFramebuffer[H].length;Q++)e.deleteFramebuffer(_.__webglFramebuffer[H][Q]);else e.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)e.deleteFramebuffer(_.__webglFramebuffer[H]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let C=T.textures;for(let H=0,Q=C.length;H<Q;H++){let ce=r.get(C[H]);ce.__webglTexture&&(e.deleteTexture(ce.__webglTexture),s.memory.textures--),r.remove(C[H])}r.remove(T)}let O=0;function q(){O=0}function L(){return O}function k(T){O=T}function K(){let T=O;return T>=a.maxTextures&&Pe("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+a.maxTextures),O+=1,T}function V(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function ne(T,_){let C=r.get(T);if(T.isVideoTexture&&zt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&C.__version!==T.version){let H=T.image;if(H===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(C,T,_);return}}else T.isExternalTexture&&(C.__webglTexture=T.sourceTexture?T.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,C.__webglTexture,e.TEXTURE0+_)}function X(T,_){let C=r.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&C.__version!==T.version){_e(C,T,_);return}else T.isExternalTexture&&(C.__webglTexture=T.sourceTexture?T.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,C.__webglTexture,e.TEXTURE0+_)}function Y(T,_){let C=r.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&C.__version!==T.version){_e(C,T,_);return}i.bindTexture(e.TEXTURE_3D,C.__webglTexture,e.TEXTURE0+_)}function $(T,_){let C=r.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&C.__version!==T.version){ve(C,T,_);return}i.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+_)}let Ce={[Jn]:e.REPEAT,[Ri]:e.CLAMP_TO_EDGE,[$n]:e.MIRRORED_REPEAT},ge={[ut]:e.NEAREST,[yu]:e.NEAREST_MIPMAP_NEAREST,[Ga]:e.NEAREST_MIPMAP_LINEAR,[Rt]:e.LINEAR,[Qn]:e.LINEAR_MIPMAP_NEAREST,[sr]:e.LINEAR_MIPMAP_LINEAR},We={[wu]:e.NEVER,[Lu]:e.ALWAYS,[Au]:e.LESS,[ks]:e.LEQUAL,[Ru]:e.EQUAL,[Vs]:e.GEQUAL,[Cu]:e.GREATER,[Pu]:e.NOTEQUAL};function Ae(T,_){if(_.type===mi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Rt||_.magFilter===Qn||_.magFilter===Ga||_.magFilter===sr||_.minFilter===Rt||_.minFilter===Qn||_.minFilter===Ga||_.minFilter===sr)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,Ce[_.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,Ce[_.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,Ce[_.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,ge[_.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,ge[_.minFilter]),_.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,We[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ut||_.minFilter!==Ga&&_.minFilter!==sr||_.type===mi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){let C=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function j(T,_){let C=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",E));let H=_.source,Q=f.get(H);Q===void 0&&(Q={},f.set(H,Q));let ce=V(_);if(ce!==T.__cacheKey){Q[ce]===void 0&&(Q[ce]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,C=!0),Q[ce].usedTimes++;let pe=Q[T.__cacheKey];pe!==void 0&&(Q[T.__cacheKey].usedTimes--,pe.usedTimes===0&&G(_)),T.__cacheKey=ce,T.__webglTexture=Q[ce].texture}return C}function J(T,_,C){return Math.floor(Math.floor(T/C)/_)}function te(T,_,C,H){let Q=T.updateRanges;if(Q.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,C,H,_.data);else{Q.sort((de,ye)=>de.start-ye.start);let ce=0;for(let de=1;de<Q.length;de++){let ye=Q[ce],ae=Q[de],we=ye.start+ye.count,Re=J(ae.start,_.width,4),Ie=J(ye.start,_.width,4);ae.start<=we+1&&Re===Ie&&J(ae.start+ae.count-1,_.width,4)===Re?ye.count=Math.max(ye.count,ae.start+ae.count-ye.start):(++ce,Q[ce]=ae)}Q.length=ce+1;let pe=i.getParameter(e.UNPACK_ROW_LENGTH),I=i.getParameter(e.UNPACK_SKIP_PIXELS),se=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let de=0,ye=Q.length;de<ye;de++){let ae=Q[de],we=Math.floor(ae.start/4),Re=Math.ceil(ae.count/4),Ie=we%_.width,Je=Math.floor(we/_.width),U=Re;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Ie),i.pixelStorei(e.UNPACK_SKIP_ROWS,Je),i.texSubImage2D(e.TEXTURE_2D,0,Ie,Je,U,1,C,H,_.data)}T.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,pe),i.pixelStorei(e.UNPACK_SKIP_PIXELS,I),i.pixelStorei(e.UNPACK_SKIP_ROWS,se)}}function _e(T,_,C){let H=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=e.TEXTURE_3D);let Q=j(T,_),ce=_.source;i.bindTexture(H,T.__webglTexture,e.TEXTURE0+C);let pe=r.get(ce);if(ce.version!==pe.__version||Q===!0){if(i.activeTexture(e.TEXTURE0+C),!(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)){let Z=He.getPrimaries(He.workingColorSpace),ie=_.colorSpace===Pi?null:He.getPrimaries(_.colorSpace),Se=_.colorSpace===Pi||Z===ie?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let I=m(_.image,!1,a.maxTextureSize);I=Ze(_,I);let se=n.convert(_.format,_.colorSpace),de=n.convert(_.type),ye=x(_.internalFormat,se,de,_.normalized,_.colorSpace,_.isVideoTexture);Ae(H,_);let ae,we=_.mipmaps,Re=_.isVideoTexture!==!0,Ie=pe.__version===void 0||Q===!0,Je=ce.dataReady,U=A(_,I);if(_.isDepthTexture)ye=b(_.format===or,_.type),Ie&&(Re?i.texStorage2D(e.TEXTURE_2D,1,ye,I.width,I.height):i.texImage2D(e.TEXTURE_2D,0,ye,I.width,I.height,0,se,de,null));else if(_.isDataTexture)if(we.length>0){Re&&Ie&&i.texStorage2D(e.TEXTURE_2D,U,ye,we[0].width,we[0].height);for(let Z=0,ie=we.length;Z<ie;Z++)ae=we[Z],Re?Je&&i.texSubImage2D(e.TEXTURE_2D,Z,0,0,ae.width,ae.height,se,de,ae.data):i.texImage2D(e.TEXTURE_2D,Z,ye,ae.width,ae.height,0,se,de,ae.data);_.generateMipmaps=!1}else Re?(Ie&&i.texStorage2D(e.TEXTURE_2D,U,ye,I.width,I.height),Je&&te(_,I,se,de)):i.texImage2D(e.TEXTURE_2D,0,ye,I.width,I.height,0,se,de,I.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Re&&Ie&&i.texStorage3D(e.TEXTURE_2D_ARRAY,U,ye,we[0].width,we[0].height,I.depth);for(let Z=0,ie=we.length;Z<ie;Z++)if(ae=we[Z],_.format!==ri)if(se!==null)if(Re){if(Je)if(_.layerUpdates.size>0){let Se=gc(ae.width,ae.height,_.format,_.type);for(let Te of _.layerUpdates){let re=ae.data.subarray(Te*Se/ae.data.BYTES_PER_ELEMENT,(Te+1)*Se/ae.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,Te,ae.width,ae.height,1,se,re)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,I.depth,se,ae.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,ye,ae.width,ae.height,I.depth,0,ae.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?Je&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,I.depth,se,de,ae.data):i.texImage3D(e.TEXTURE_2D_ARRAY,Z,ye,ae.width,ae.height,I.depth,0,se,de,ae.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Re&&Ie&&i.texStorage2D(e.TEXTURE_2D,U,ye,we[0].width,we[0].height);for(let Z=0,ie=we.length;Z<ie;Z++)ae=we[Z],_.format!==ri?se!==null?Re?Je&&i.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,ae.width,ae.height,se,ae.data):i.compressedTexImage2D(e.TEXTURE_2D,Z,ye,ae.width,ae.height,0,ae.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?Je&&i.texSubImage2D(e.TEXTURE_2D,Z,0,0,ae.width,ae.height,se,de,ae.data):i.texImage2D(e.TEXTURE_2D,Z,ye,ae.width,ae.height,0,se,de,ae.data)}else if(_.isDataArrayTexture)if(Re){if(Ie&&i.texStorage3D(e.TEXTURE_2D_ARRAY,U,ye,I.width,I.height,I.depth),Je)if(_.layerUpdates.size>0){let Z=gc(I.width,I.height,_.format,_.type);for(let ie of _.layerUpdates){let Se=I.data.subarray(ie*Z/I.data.BYTES_PER_ELEMENT,(ie+1)*Z/I.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ie,I.width,I.height,1,se,de,Se)}_.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,I.width,I.height,I.depth,se,de,I.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,ye,I.width,I.height,I.depth,0,se,de,I.data);else if(_.isData3DTexture)Re?(Ie&&i.texStorage3D(e.TEXTURE_3D,U,ye,I.width,I.height,I.depth),Je&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,I.width,I.height,I.depth,se,de,I.data)):i.texImage3D(e.TEXTURE_3D,0,ye,I.width,I.height,I.depth,0,se,de,I.data);else if(_.isFramebufferTexture){if(Ie)if(Re)i.texStorage2D(e.TEXTURE_2D,U,ye,I.width,I.height);else{let Z=I.width,ie=I.height;for(let Se=0;Se<U;Se++)i.texImage2D(e.TEXTURE_2D,Se,ye,Z,ie,0,se,de,null),Z>>=1,ie>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){let Z=e.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),I.parentNode!==Z){Z.appendChild(I),d.add(_),Z.onpaint=ie=>{let Se=ie.changedElements;for(let Te of d)Se.includes(Te.image)&&(Te.needsUpdate=!0)},Z.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,I);else{let ie=e.RGBA,Se=e.RGBA,Te=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,ie,Se,Te,I)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(we.length>0){if(Re&&Ie){let Z=ht(we[0]);i.texStorage2D(e.TEXTURE_2D,U,ye,Z.width,Z.height)}for(let Z=0,ie=we.length;Z<ie;Z++)ae=we[Z],Re?Je&&i.texSubImage2D(e.TEXTURE_2D,Z,0,0,se,de,ae):i.texImage2D(e.TEXTURE_2D,Z,ye,se,de,ae);_.generateMipmaps=!1}else if(Re){if(Ie){let Z=ht(I);i.texStorage2D(e.TEXTURE_2D,U,ye,Z.width,Z.height)}Je&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,se,de,I)}else i.texImage2D(e.TEXTURE_2D,0,ye,se,de,I);p(_)&&w(H),pe.__version=ce.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ve(T,_,C){if(_.image.length!==6)return;let H=j(T,_),Q=_.source;i.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+C);let ce=r.get(Q);if(Q.version!==ce.__version||H===!0){i.activeTexture(e.TEXTURE0+C);let pe=He.getPrimaries(He.workingColorSpace),I=_.colorSpace===Pi?null:He.getPrimaries(_.colorSpace),se=_.colorSpace===Pi||pe===I?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let de=_.isCompressedTexture||_.image[0].isCompressedTexture,ye=_.image[0]&&_.image[0].isDataTexture,ae=[];for(let re=0;re<6;re++)!de&&!ye?ae[re]=m(_.image[re],!0,a.maxCubemapSize):ae[re]=ye?_.image[re].image:_.image[re],ae[re]=Ze(_,ae[re]);let we=ae[0],Re=n.convert(_.format,_.colorSpace),Ie=n.convert(_.type),Je=x(_.internalFormat,Re,Ie,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,Z=ce.__version===void 0||H===!0,ie=Q.dataReady,Se=A(_,we);Ae(e.TEXTURE_CUBE_MAP,_);let Te;if(de){U&&Z&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Se,Je,we.width,we.height);for(let re=0;re<6;re++){Te=ae[re].mipmaps;for(let me=0;me<Te.length;me++){let De=Te[me];_.format!==ri?Re!==null?U?ie&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,0,0,De.width,De.height,Re,De.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,Je,De.width,De.height,0,De.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,0,0,De.width,De.height,Re,Ie,De.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,Je,De.width,De.height,0,Re,Ie,De.data)}}}else{if(Te=_.mipmaps,U&&Z){Te.length>0&&Se++;let re=ht(ae[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Se,Je,re.width,re.height)}for(let re=0;re<6;re++)if(ye){U?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ae[re].width,ae[re].height,Re,Ie,ae[re].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Je,ae[re].width,ae[re].height,0,Re,Ie,ae[re].data);for(let me=0;me<Te.length;me++){let De=Te[me].image[re].image;U?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,0,0,De.width,De.height,Re,Ie,De.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,Je,De.width,De.height,0,Re,Ie,De.data)}}else{U?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Re,Ie,ae[re]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Je,Re,Ie,ae[re]);for(let me=0;me<Te.length;me++){let De=Te[me];U?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,0,0,Re,Ie,De.image[re]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,Je,Re,Ie,De.image[re])}}}p(_)&&w(e.TEXTURE_CUBE_MAP),ce.__version=Q.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function le(T,_,C,H,Q,ce){let pe=n.convert(C.format,C.colorSpace),I=n.convert(C.type),se=x(C.internalFormat,pe,I,C.normalized,C.colorSpace),de=r.get(_),ye=r.get(C);if(ye.__renderTarget=_,!de.__hasExternalTextures){let ae=Math.max(1,_.width>>ce),we=Math.max(1,_.height>>ce);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?i.texImage3D(Q,ce,se,ae,we,_.depth,0,pe,I,null):i.texImage2D(Q,ce,se,ae,we,0,pe,I,null)}i.bindFramebuffer(e.FRAMEBUFFER,T),D(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,H,Q,ye.__webglTexture,0,Et(_)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,H,Q,ye.__webglTexture,ce),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Ke(T,_,C){if(e.bindRenderbuffer(e.RENDERBUFFER,T),_.depthBuffer){let H=_.depthTexture,Q=H&&H.isDepthTexture?H.type:null,ce=b(_.stencilBuffer,Q),pe=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;D(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Et(_),ce,_.width,_.height):C?e.renderbufferStorageMultisample(e.RENDERBUFFER,Et(_),ce,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,ce,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,pe,e.RENDERBUFFER,T)}else{let H=_.textures;for(let Q=0;Q<H.length;Q++){let ce=H[Q],pe=n.convert(ce.format,ce.colorSpace),I=n.convert(ce.type),se=x(ce.internalFormat,pe,I,ce.normalized,ce.colorSpace);D(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Et(_),se,_.width,_.height):C?e.renderbufferStorageMultisample(e.RENDERBUFFER,Et(_),se,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,se,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function qe(T,_,C){let H=_.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=r.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",E)),Q.__webglTexture===void 0){Q.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,Q.__webglTexture),Ae(e.TEXTURE_CUBE_MAP,_.depthTexture);let de=n.convert(_.depthTexture.format),ye=n.convert(_.depthTexture.type),ae;_.depthTexture.format===Ci?ae=e.DEPTH_COMPONENT24:_.depthTexture.format===or&&(ae=e.DEPTH24_STENCIL8);for(let we=0;we<6;we++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ae,_.width,_.height,0,de,ye,null)}}else ne(_.depthTexture,0);let ce=Q.__webglTexture,pe=Et(_),I=H?e.TEXTURE_CUBE_MAP_POSITIVE_X+C:e.TEXTURE_2D,se=_.depthTexture.format===or?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ci)D(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,se,I,ce,0,pe):e.framebufferTexture2D(e.FRAMEBUFFER,se,I,ce,0);else if(_.depthTexture.format===or)D(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,se,I,ce,0,pe):e.framebufferTexture2D(e.FRAMEBUFFER,se,I,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Fe(T){let _=r.get(T),C=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let H=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){let Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",Q)};H.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=H}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(C)for(let H=0;H<6;H++)qe(_.__webglFramebuffer[H],T,H);else{let H=T.texture.mipmaps;H&&H.length>0?qe(_.__webglFramebuffer[0],T,0):qe(_.__webglFramebuffer,T,0)}else if(C){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=e.createRenderbuffer(),Ke(_.__webglDepthbuffer[H],T,!1);else{let Q=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer[H];e.bindRenderbuffer(e.RENDERBUFFER,ce),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,ce)}}else{let H=T.texture.mipmaps;if(H&&H.length>0?i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Ke(_.__webglDepthbuffer,T,!1);else{let Q=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ce),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,ce)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function mt(T,_,C){let H=r.get(T);_!==void 0&&le(H.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),C!==void 0&&Fe(T)}function It(T){let _=T.texture,C=r.get(T),H=r.get(_);T.addEventListener("dispose",g);let Q=T.textures,ce=T.isWebGLCubeRenderTarget===!0,pe=Q.length>1;if(pe||(H.__webglTexture===void 0&&(H.__webglTexture=e.createTexture()),H.__version=_.version,s.memory.textures++),ce){C.__webglFramebuffer=[];for(let I=0;I<6;I++)if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer[I]=[];for(let se=0;se<_.mipmaps.length;se++)C.__webglFramebuffer[I][se]=e.createFramebuffer()}else C.__webglFramebuffer[I]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer=[];for(let I=0;I<_.mipmaps.length;I++)C.__webglFramebuffer[I]=e.createFramebuffer()}else C.__webglFramebuffer=e.createFramebuffer();if(pe)for(let I=0,se=Q.length;I<se;I++){let de=r.get(Q[I]);de.__webglTexture===void 0&&(de.__webglTexture=e.createTexture(),s.memory.textures++)}if(T.samples>0&&D(T)===!1){C.__webglMultisampledFramebuffer=e.createFramebuffer(),C.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let I=0;I<Q.length;I++){let se=Q[I];C.__webglColorRenderbuffer[I]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,C.__webglColorRenderbuffer[I]);let de=n.convert(se.format,se.colorSpace),ye=n.convert(se.type),ae=x(se.internalFormat,de,ye,se.normalized,se.colorSpace,T.isXRRenderTarget===!0),we=Et(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,we,ae,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+I,e.RENDERBUFFER,C.__webglColorRenderbuffer[I])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(C.__webglDepthRenderbuffer=e.createRenderbuffer(),Ke(C.__webglDepthRenderbuffer,T,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ce){i.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture),Ae(e.TEXTURE_CUBE_MAP,_);for(let I=0;I<6;I++)if(_.mipmaps&&_.mipmaps.length>0)for(let se=0;se<_.mipmaps.length;se++)le(C.__webglFramebuffer[I][se],T,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+I,se);else le(C.__webglFramebuffer[I],T,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+I,0);p(_)&&w(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(pe){for(let I=0,se=Q.length;I<se;I++){let de=Q[I],ye=r.get(de),ae=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(ae,ye.__webglTexture),Ae(ae,de),le(C.__webglFramebuffer,T,de,e.COLOR_ATTACHMENT0+I,ae,0),p(de)&&w(ae)}i.unbindTexture()}else{let I=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(I=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(I,H.__webglTexture),Ae(I,_),_.mipmaps&&_.mipmaps.length>0)for(let se=0;se<_.mipmaps.length;se++)le(C.__webglFramebuffer[se],T,_,e.COLOR_ATTACHMENT0,I,se);else le(C.__webglFramebuffer,T,_,e.COLOR_ATTACHMENT0,I,0);p(_)&&w(I),i.unbindTexture()}T.depthBuffer&&Fe(T)}function Zt(T){let _=T.textures;for(let C=0,H=_.length;C<H;C++){let Q=_[C];if(p(Q)){let ce=N(T),pe=r.get(Q).__webglTexture;i.bindTexture(ce,pe),w(ce),i.unbindTexture()}}}let lt=[],Vt=[];function bt(T){if(T.samples>0){if(D(T)===!1){let _=T.textures,C=T.width,H=T.height,Q=e.COLOR_BUFFER_BIT,ce=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=r.get(T),I=_.length>1;if(I)for(let de=0;de<_.length;de++)i.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+de,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+de,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);let se=T.texture.mipmaps;se&&se.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let de=0;de<_.length;de++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),I){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,pe.__webglColorRenderbuffer[de]);let ye=r.get(_[de]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ye,0)}e.blitFramebuffer(0,0,C,H,0,0,C,H,Q,e.NEAREST),l===!0&&(lt.length=0,Vt.length=0,lt.push(e.COLOR_ATTACHMENT0+de),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(lt.push(ce),Vt.push(ce),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Vt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,lt))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),I)for(let de=0;de<_.length;de++){i.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+de,e.RENDERBUFFER,pe.__webglColorRenderbuffer[de]);let ye=r.get(_[de]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+de,e.TEXTURE_2D,ye,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let _=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function Et(T){return Math.min(a.maxSamples,T.samples)}function D(T){let _=r.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function zt(T){let _=s.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function Ze(T,_){let C=T.colorSpace,H=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||C!==pa&&C!==Pi&&(He.getTransfer(C)===Qe?(H!==ri||Q!==Jt)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",C)),_}function ht(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=q,this.getTextureUnits=L,this.setTextureUnits=k,this.setTexture2D=ne,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=mt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=D,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function q_(e,t){function i(r,a=Pi){let n,s=He.getTransfer(a);if(r===Jt)return e.UNSIGNED_BYTE;if(r===ts)return e.UNSIGNED_SHORT_4_4_4_4;if(r===is)return e.UNSIGNED_SHORT_5_5_5_1;if(r===dl)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===pl)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===hl)return e.BYTE;if(r===ul)return e.SHORT;if(r===ua)return e.UNSIGNED_SHORT;if(r===es)return e.INT;if(r===fi)return e.UNSIGNED_INT;if(r===mi)return e.FLOAT;if(r===gi)return e.HALF_FLOAT;if(r===fl)return e.ALPHA;if(r===ml)return e.RGB;if(r===ri)return e.RGBA;if(r===Ci)return e.DEPTH_COMPONENT;if(r===or)return e.DEPTH_STENCIL;if(r===gl)return e.RED;if(r===rs)return e.RED_INTEGER;if(r===lr)return e.RG;if(r===as)return e.RG_INTEGER;if(r===ns)return e.RGBA_INTEGER;if(r===Ha||r===Wa||r===Xa||r===ja)if(s===Qe)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===Ha)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ja)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===Ha)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wa)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xa)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ja)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ss||r===os||r===ls||r===cs)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===ss)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===os)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ls)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===cs)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hs||r===us||r===ds||r===ps||r===fs||r===qa||r===ms)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===hs||r===us)return s===Qe?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===ds)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===ps)return n.COMPRESSED_R11_EAC;if(r===fs)return n.COMPRESSED_SIGNED_R11_EAC;if(r===qa)return n.COMPRESSED_RG11_EAC;if(r===ms)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===gs||r===_s||r===vs||r===Ss||r===Ms||r===xs||r===ys||r===Ts||r===bs||r===Es||r===ws||r===As||r===Rs||r===Cs)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===gs)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_s)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vs)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ss)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ms)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xs)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ys)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ts)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bs)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Es)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ws)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===As)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rs)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cs)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ps||r===Ls||r===Ds)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===Ps)return s===Qe?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ls)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ds)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ns||r===Us||r===Ya||r===Is)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===Ns)return n.COMPRESSED_RED_RGTC1_EXT;if(r===Us)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ya)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Is)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===da?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var Y_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Z_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ac(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new jt({vertexShader:Y_,fragmentShader:K_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new li(new nc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},J_=class extends Gi{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,c=null,u=null,d=null,h=null,f=null,M=typeof XRWebGLBinding<"u",v=new Z_,m={},p=t.getContextAttributes(),w=null,N=null,x=[],b=[],A=new ke,E=null,g=null,y=new ti;y.viewport=new _t;let G=new ti;G.viewport=new _t;let R=[y,G],O=new Yd,q=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let J=x[j];return J===void 0&&(J=new Ys,x[j]=J),J.getTargetRaySpace()},this.getControllerGrip=function(j){let J=x[j];return J===void 0&&(J=new Ys,x[j]=J),J.getGripSpace()},this.getHand=function(j){let J=x[j];return J===void 0&&(J=new Ys,x[j]=J),J.getHandSpace()};function k(j){let J=b.indexOf(j.inputSource);if(J===-1)return;let te=x[J];te!==void 0&&(te.update(j.inputSource,j.frame,l||n),te.dispatchEvent({type:j.type,data:j.inputSource}))}function K(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",V);for(let j=0;j<x.length;j++){let J=b[j];J!==null&&(b[j]=null,x[j].disconnect(J))}q=null,L=null,v.reset();for(let j in m)delete m[j];if(e.setRenderTarget(w),h=null,d=null,u=null,r=null,N=null,Ae.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),g!==null){let j=g.camera;j.fov=g.fov,j.zoom=g.zoom,j.updateProjectionMatrix(),g=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,i.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){s=j,i.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",K),r.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,te=null,_e=null;p.depth&&(_e=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=p.stencil?or:Ci,te=p.stencil?da:fi);let ve={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:a};u=this.getBinding(),d=u.createProjectionLayer(ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),N=new Ht(d.textureWidth,d.textureHeight,{format:ri,type:Jt,depthTexture:new wa(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let J={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};h=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),N=new Ht(h.framebufferWidth,h.framebufferHeight,{format:ri,type:Jt,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),Ae.setContext(r),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function V(j){for(let J=0;J<j.removed.length;J++){let te=j.removed[J],_e=b.indexOf(te);_e>=0&&(b[_e]=null,x[_e].disconnect(te))}for(let J=0;J<j.added.length;J++){let te=j.added[J],_e=b.indexOf(te);if(_e===-1){for(let le=0;le<x.length;le++)if(le>=b.length){b.push(te),_e=le;break}else if(b[le]===null){b[le]=te,_e=le;break}if(_e===-1)break}let ve=x[_e];ve&&ve.connect(te)}}let ne=new F,X=new F;function Y(j,J,te){ne.setFromMatrixPosition(J.matrixWorld),X.setFromMatrixPosition(te.matrixWorld);let _e=ne.distanceTo(X),ve=J.projectionMatrix.elements,le=te.projectionMatrix.elements,Ke=ve[14]/(ve[10]-1),qe=ve[14]/(ve[10]+1),Fe=(ve[9]+1)/ve[5],mt=(ve[9]-1)/ve[5],It=(ve[8]-1)/ve[0],Zt=(le[8]+1)/le[0],lt=Ke*It,Vt=Ke*Zt,bt=_e/(-It+Zt),Et=bt*-It;if(J.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Et),j.translateZ(bt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ve[10]===-1)j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let D=Ke+bt,zt=qe+bt,Ze=lt-Et,ht=Vt+(_e-Et),T=Fe*qe/zt*D,_=mt*qe/zt*D;j.projectionMatrix.makePerspective(Ze,ht,T,_,D,zt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function $(j,J){J===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(J.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let J=j.near,te=j.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(te=v.depthFar)),O.near=G.near=y.near=J,O.far=G.far=y.far=te,(q!==O.near||L!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),q=O.near,L=O.far),O.layers.mask=j.layers.mask|6,y.layers.mask=O.layers.mask&-5,G.layers.mask=O.layers.mask&-3;let _e=j.parent,ve=O.cameras;$(O,_e);for(let le=0;le<ve.length;le++)$(ve[le],_e);ve.length===2?Y(O,y,G):O.projectionMatrix.copy(y.projectionMatrix),g===null&&j.isPerspectiveCamera&&(g={camera:j,fov:j.fov,zoom:j.zoom}),Ce(j,O,_e)};function Ce(j,J,te){te===null?j.matrix.copy(J.matrixWorld):(j.matrix.copy(te.matrixWorld),j.matrix.invert(),j.matrix.multiply(J.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ga*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&h===null))return o},this.setFoveation=function(j){o=j,d!==null&&(d.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(O)},this.getCameraTexture=function(j){return m[j]};let ge=null;function We(j,J){if(c=J.getViewerPose(l||n),f=J,c!==null){let te=c.views;h!==null&&(e.setRenderTargetFramebuffer(N,h.framebuffer),e.setRenderTarget(N));let _e=!1;te.length!==O.cameras.length&&(O.cameras.length=0,_e=!0);for(let le=0;le<te.length;le++){let Ke=te[le],qe=null;if(h!==null)qe=h.getViewport(Ke);else{let mt=u.getViewSubImage(d,Ke);qe=mt.viewport,le===0&&(e.setRenderTargetTextures(N,mt.colorTexture,mt.depthStencilTexture),e.setRenderTarget(N))}let Fe=R[le];Fe===void 0&&(Fe=new ti,Fe.layers.enable(le),Fe.viewport=new _t,R[le]=Fe),Fe.matrix.fromArray(Ke.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ke.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(qe.x,qe.y,qe.width,qe.height),le===0&&(O.matrix.copy(Fe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),_e===!0&&O.cameras.push(Fe)}let ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){u=i.getBinding();let le=u.getDepthInformation(te[0]);le&&le.isValid&&le.texture&&v.init(le,r.renderState)}if(ve&&ve.includes("camera-access")&&M){e.state.unbindTexture(),u=i.getBinding();for(let le=0;le<te.length;le++){let Ke=te[le].camera;if(Ke){let qe=m[Ke];qe||(qe=new ac,m[Ke]=qe);let Fe=u.getCameraImage(Ke);qe.sourceTexture=Fe}}}}for(let te=0;te<x.length;te++){let _e=b[te],ve=x[te];_e!==null&&ve!==void 0&&ve.update(_e,J,l||n)}ge&&ge(j,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),f=null}let Ae=new _c;Ae.setAnimationLoop(We),this.setAnimationLoop=function(j){ge=j},this.dispose=function(){}}},$_=new ct,jc=new Be;jc.set(-1,0,0,0,1,0,0,0,1);function Q_(e,t){function i(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function r(m,p){p.color.getRGB(m.fogColor.value,oc(e)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function a(m,p,w,N,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?n(m,p):p.isMeshLambertMaterial?(n(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(n(m,p),d(m,p)):p.isMeshPhongMaterial?(n(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(n(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(n(m,p),M(m,p)):p.isMeshDepthMaterial?n(m,p):p.isMeshDistanceMaterial?(n(m,p),v(m,p)):p.isMeshNormalMaterial?n(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,N):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,i(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,i(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,i(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ft&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,i(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ft&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,i(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,i(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=t.get(p),N=w.envMap,x=w.envMapRotation;N&&(m.envMap.value=N,m.envMapRotation.value.setFromMatrix4($_.makeRotationFromEuler(x)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(jc),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,i(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,N){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=N*.5,p.map&&(m.map.value=p.map,i(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,i(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,i(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,i(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ft&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,m.specularIntensityMapTransform))}function M(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function ev(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){let A=b.program;r.uniformBlockBinding(x,A)}function c(x,b){let A=a[x.id];A===void 0&&(m(x),A=u(x),a[x.id]=A,x.addEventListener("dispose",w));let E=b.program;r.updateUBOMapping(x,E);let g=t.render.frame;n[x.id]!==g&&(h(x),n[x.id]=g)}function u(x){let b=d();x.__bindingPointIndex=b;let A=e.createBuffer(),E=x.__size,g=x.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,E,g),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,b,A),A}function d(){for(let x=0;x<o;x++)if(s.indexOf(x)===-1)return s.push(x),x;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let b=a[x.id],A=x.uniforms,E=x.__cache;e.bindBuffer(e.UNIFORM_BUFFER,b);for(let g=0,y=A.length;g<y;g++){let G=A[g];if(Array.isArray(G))for(let R=0,O=G.length;R<O;R++)f(G[R],g,R,E);else f(G,g,0,E)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(x,b,A,E){if(v(x,b,A,E)===!0){let g=x.__offset,y=x.value;if(Array.isArray(y)){let G=0;for(let R=0;R<y.length;R++){let O=y[R],q=p(O);M(O,x.__data,G),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(G+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(y,x.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,g,x.__data)}}function M(x,b,A){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,A)}function v(x,b,A,E){let g=x.value,y=b+"_"+A;if(E[y]===void 0)return typeof g=="number"||typeof g=="boolean"?E[y]=g:ArrayBuffer.isView(g)?E[y]=g.slice():E[y]=g.clone(),!0;{let G=E[y];if(typeof g=="number"||typeof g=="boolean"){if(G!==g)return E[y]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(G.equals(g)===!1)return G.copy(g),!0}}return!1}function m(x){let b=x.uniforms,A=0,E=16;for(let y=0,G=b.length;y<G;y++){let R=Array.isArray(b[y])?b[y]:[b[y]];for(let O=0,q=R.length;O<q;O++){let L=R[O],k=Array.isArray(L.value)?L.value:[L.value];for(let K=0,V=k.length;K<V;K++){let ne=k[K],X=p(ne),Y=A%E,$=Y%X.boundary,Ce=Y+$;A+=$,Ce!==0&&E-Ce<X.storage&&(A+=E-Ce),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=A,A+=X.storage}}}let g=A%E;return g>0&&(A+=E-g),x.__size=A,x.__cache={},this}function p(x){let b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",x),b}function w(x){let b=x.target;b.removeEventListener("dispose",w);let A=s.indexOf(b.__bindingPointIndex);s.splice(A,1),e.deleteBuffer(a[b.id]),delete a[b.id],delete n[b.id]}function N(){for(let x in a)e.deleteBuffer(a[x]);s=[],a={},n={}}return{bind:l,update:c,dispose:N}}var tv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;function iv(){return xi===null&&(xi=new Md(tv,16,16,lr,gi),xi.name="DFG_LUT",xi.minFilter=Rt,xi.magFilter=Rt,xi.wrapS=Ri,xi.wrapT=Ri,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}var rv=class{constructor(e={}){let{canvas:t=Iu(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Jt}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=n;let M=h,v=new Set([ns,as,rs]),m=new Set([Jt,fi,ua,da,ts,is]),p=new Uint32Array(4),w=new Int32Array(4),N=new F,x=null,b=null,A=[],E=[],g=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,G=!1,R=null,O=null,q=null,L=null;this._outputColorSpace=Gt;let k=0,K=0,V=null,ne=-1,X=null,Y=new _t,$=new _t,Ce=null,ge=new Xe(0),We=0,Ae=t.width,j=t.height,J=1,te=null,_e=null,ve=new _t(0,0,Ae,j),le=new _t(0,0,Ae,j),Ke=!1,qe=new Yl,Fe=!1,mt=!1,It=new ct,Zt=new F,lt=new _t,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},bt=!1;function Et(){return V===null?J:1}let D=i;function zt(S,P){return t.getContext(S,P)}let Ze,ht,T,_,C,H,Q,ce,pe,I,se,de,ye,ae,we,Re,Ie,Je,U,Z,ie,Se,Te;try{let S={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",$e,!1),D===null){let P="webgl2";if(D=zt(P,S),D===null)throw zt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}re()}catch(S){throw t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",$e,!1),Ne("WebGLRenderer: "+S.message),S}function re(){Ze=new ig(D),Ze.init(),ie=new q_(D,Ze),ht=new jm(D,Ze,e,ie),T=new X_(D,Ze),ht.reversedDepthBuffer&&d&&T.buffers.depth.setReversed(!0),O=D.createFramebuffer(),q=D.createFramebuffer(),L=D.createFramebuffer(),_=new ng(D),C=new L_,H=new j_(D,Ze,T,C,ht,ie,_),Q=new tg(y),ce=new sp(D),Se=new Wm(D,ce),pe=new rg(D,ce,_,Se),I=new og(D,pe,ce,Se,_),Je=new sg(D,ht,H),we=new qm(C),se=new P_(y,Q,Ze,ht,Se,we),de=new Q_(y,C),ye=new N_,ae=new k_(Ze),Ie=new Hm(y,Q,T,I,f,o),Re=new W_(y,I,ht),Te=new ev(D,_,ht,T),U=new Xm(D,Ze,_),Z=new ag(D,Ze,_),_.programs=se.programs,y.capabilities=ht,y.extensions=Ze,y.properties=C,y.renderLists=ye,y.shadowMap=Re,y.state=T,y.info=_}M!==Jt&&(g=new cg(M,t.width,t.height,s,r,a));let me=new J_(y,D);this.xr=me,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let S=Ze.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Ze.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(S){S!==void 0&&(J=S,this.setSize(Ae,j,!1))},this.getSize=function(S){return S.set(Ae,j)},this.setSize=function(S,P,W=!0){if(me.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=S,j=P,t.width=Math.floor(S*J),t.height=Math.floor(P*J),W===!0&&(t.style.width=S+"px",t.style.height=P+"px"),g!==null&&g.setSize(t.width,t.height),this.setViewport(0,0,S,P)},this.getDrawingBufferSize=function(S){return S.set(Ae*J,j*J).floor()},this.setDrawingBufferSize=function(S,P,W){Ae=S,j=P,J=W,t.width=Math.floor(S*W),t.height=Math.floor(P*W),this.setViewport(0,0,S,P)},this.setEffects=function(S){if(M===Jt){Ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let P=0;P<S.length;P++)if(S[P].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(Y)},this.getViewport=function(S){return S.copy(ve)},this.setViewport=function(S,P,W,z){S.isVector4?ve.set(S.x,S.y,S.z,S.w):ve.set(S,P,W,z),T.viewport(Y.copy(ve).multiplyScalar(J).round())},this.getScissor=function(S){return S.copy(le)},this.setScissor=function(S,P,W,z){S.isVector4?le.set(S.x,S.y,S.z,S.w):le.set(S,P,W,z),T.scissor($.copy(le).multiplyScalar(J).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(S){T.setScissorTest(Ke=S)},this.setOpaqueSort=function(S){te=S},this.setTransparentSort=function(S){_e=S},this.getClearColor=function(S){return S.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(S=!0,P=!0,W=!0){let z=0;if(S){let B=!1;if(V!==null){let oe=V.texture.format;B=v.has(oe)}if(B){let oe=V.texture.type,fe=m.has(oe),Me=Ie.getClearColor(),xe=Ie.getClearAlpha(),Le=Me.r,Ge=Me.g,je=Me.b;fe?(p[0]=Le,p[1]=Ge,p[2]=je,p[3]=xe,D.clearBufferuiv(D.COLOR,0,p)):(w[0]=Le,w[1]=Ge,w[2]=je,w[3]=xe,D.clearBufferiv(D.COLOR,0,w))}else z|=D.COLOR_BUFFER_BIT}P&&(z|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),R=S},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",$e,!1),Ie.dispose(),ye.dispose(),ae.dispose(),C.dispose(),Q.dispose(),I.dispose(),Se.dispose(),Te.dispose(),se.dispose(),me.dispose(),me.removeEventListener("sessionstart",Ih),me.removeEventListener("sessionend",Oh),Mr.stop()};function De(S){S.preventDefault(),bl("WebGLRenderer: Context Lost."),G=!0}function wt(){bl("WebGLRenderer: Context Restored."),G=!1;let S=_.autoReset,P=Re.enabled,W=Re.autoUpdate,z=Re.needsUpdate,B=Re.type;re(),_.autoReset=S,Re.enabled=P,Re.autoUpdate=W,Re.needsUpdate=z,Re.type=B}function $e(S){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ei(S){let P=S.target;P.removeEventListener("dispose",Ei),zi(P)}function zi(S){o0(S),C.remove(S)}function o0(S){let P=C.get(S).programs;P!==void 0&&(P.forEach(function(W){se.releaseProgram(W)}),S.isShaderMaterial&&se.releaseShaderCache(S))}this.renderBufferDirect=function(S,P,W,z,B,oe){P===null&&(P=Vt);let fe=B.isMesh&&B.matrixWorld.determinantAffine()<0,Me=h0(S,P,W,z,B);T.setMaterial(z,fe);let xe=W.index,Le=1;if(z.wireframe===!0){if(xe=pe.getWireframeAttribute(W),xe===void 0)return;Le=2}let Ge=W.drawRange,je=W.attributes.position,Ee=Ge.start*Le,tt=(Ge.start+Ge.count)*Le;oe!==null&&(Ee=Math.max(Ee,oe.start*Le),tt=Math.min(tt,(oe.start+oe.count)*Le)),xe!==null?(Ee=Math.max(Ee,0),tt=Math.min(tt,xe.count)):je!=null&&(Ee=Math.max(Ee,0),tt=Math.min(tt,je.count));let Mt=tt-Ee;if(Mt<0||Mt===1/0)return;Se.setup(B,z,Me,W,xe);let nt,st=U;if(xe!==null&&(nt=ce.get(xe),st=Z,st.setIndex(nt)),B.isMesh)z.wireframe===!0?(T.setLineWidth(z.wireframeLinewidth*Et()),st.setMode(D.LINES)):st.setMode(D.TRIANGLES);else if(B.isLine){let ft=z.linewidth;ft===void 0&&(ft=1),T.setLineWidth(ft*Et()),B.isLineSegments?st.setMode(D.LINES):B.isLineLoop?st.setMode(D.LINE_LOOP):st.setMode(D.LINE_STRIP)}else B.isPoints?st.setMode(D.POINTS):B.isSprite&&st.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))st.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let ft=B._multiDrawStarts,be=B._multiDrawCounts,Ot=B._multiDrawCount,xr=xe?ce.get(xe).bytesPerElement:1,ii=C.get(z).currentProgram.getUniforms();for(let wi=0;wi<Ot;wi++)ii.setValue(D,"_gl_DrawID",wi),st.render(ft[wi]/xr,be[wi])}else if(B.isInstancedMesh)st.renderInstances(Ee,Mt,B.count);else if(W.isInstancedBufferGeometry){let ft=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,be=Math.min(W.instanceCount,ft);st.renderInstances(Ee,Mt,be)}else st.render(Ee,Mt)};function Uh(S,P,W,z){R!==null&&S.isNodeMaterial&&R.setObject(z,S),Fe===!0&&we.setState(S,W,!1),S.transparent===!0&&S.side===di&&S.forceSinglePass===!1?(S.side=Ft,S.needsUpdate=!0,kn(S,P,z),S.side=ar,S.needsUpdate=!0,kn(S,P,z),S.side=di):kn(S,P,z)}this.compile=function(S,P,W=null){W===null&&(W=S),R!==null&&R.renderStart(S,P,W),b=ae.get(W),b.init(P),E.push(b),W.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),S!==W&&S.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),b.setupLights(),R!==null&&R.updateLights(b.state.lightsArray),mt=this.localClippingEnabled,Fe=we.init(this.clippingPlanes,mt),Fe===!0&&we.setGlobalState(this.clippingPlanes,P),R!==null&&Re.render(b.state.shadowsArray,W,P);let z=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let oe=B.material;if(oe)if(Array.isArray(oe))for(let fe=0;fe<oe.length;fe++){let Me=oe[fe];Uh(Me,W,P,B),z.add(Me)}else Uh(oe,W,P,B),z.add(oe)}),b=E.pop(),R!==null&&R.renderEnd(),z},this.compileAsync=function(S,P,W=null){let z=this.compile(S,P,W);return new Promise(B=>{function oe(){if(z.forEach(function(fe){let Me=C.get(fe).currentProgram;(Me===void 0||Me.isReady())&&z.delete(fe)}),z.size===0){B(S);return}setTimeout(oe,10)}Ze.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let jo=null;function l0(S){jo&&jo(S)}function Ih(){Mr.stop()}function Oh(){Mr.start()}let Mr=new _c;Mr.setAnimationLoop(l0),typeof self<"u"&&Mr.setContext(self),this.setAnimationLoop=function(S){jo=S,me.setAnimationLoop(S),S===null?Mr.stop():Mr.start()},me.addEventListener("sessionstart",Ih),me.addEventListener("sessionend",Oh),this.render=function(S,P){if(P!==void 0&&P.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;R!==null&&R.renderStart(S,P);let W=me.enabled===!0&&me.isPresenting===!0,z=g!==null&&(V===null||W)&&g.begin(y,V);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(g===null||g.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(P),P=me.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,P,V),b=ae.get(S,E.length),b.init(P),b.state.textureUnits=H.getTextureUnits(),E.push(b),It.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),qe.setFromProjectionMatrix(It,_i,P.reversedDepth),mt=this.localClippingEnabled,Fe=we.init(this.clippingPlanes,mt),x=ye.get(S,A.length),x.init(),A.push(x),me.enabled===!0&&me.isPresenting===!0){let oe=y.xr.getDepthSensingMesh();oe!==null&&qo(oe,P,-1/0,y.sortObjects)}qo(S,P,0,y.sortObjects),x.finish(),R!==null&&R.updateLights(b.state.lightsArray),y.sortObjects===!0&&x.sort(te,_e),bt=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,bt&&Ie.addToRenderList(x,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Fe===!0&&we.beginShadows();let B=b.state.shadowsArray;if(Re.render(B,S,P),Fe===!0&&we.endShadows(),(z&&g.hasRenderPass())===!1){let oe=x.opaque,fe=x.transmissive;if(b.setupLights(),P.isArrayCamera){let Me=P.cameras;if(fe.length>0)for(let xe=0,Le=Me.length;xe<Le;xe++){let Ge=Me[xe];Bh(oe,fe,S,Ge)}bt&&Ie.render(S);for(let xe=0,Le=Me.length;xe<Le;xe++){let Ge=Me[xe];Fh(x,S,Ge,Ge.viewport)}}else fe.length>0&&Bh(oe,fe,S,P),bt&&Ie.render(S),Fh(x,S,P)}V!==null&&K===0&&(H.updateMultisampleRenderTarget(V),H.updateRenderTargetMipmap(V)),z&&g.end(y),S.isScene===!0&&S.onAfterRender(y,S,P),Se.resetDefaultState(),ne=-1,X=null,E.pop(),E.length>0?(b=E[E.length-1],H.setTextureUnits(b.state.textureUnits),Fe===!0&&we.setGlobalState(y.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?x=A[A.length-1]:x=null,R!==null&&R.renderEnd()};function qo(S,P,W,z){if(S.visible===!1)return;if(S.layers.test(P.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(P);else if(S.isLightProbeGrid)b.pushLightProbeGrid(S);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(qe)){z&&lt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(It);let oe=I.update(S),fe=S.material;fe.visible&&x.push(S,oe,fe,W,lt.z,null,P)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(qe))){let oe=I.update(S),fe=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),lt.copy(S.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),lt.copy(oe.boundingSphere.center)),lt.applyMatrix4(S.matrixWorld).applyMatrix4(It)),Array.isArray(fe)){let Me=oe.groups;for(let xe=0,Le=Me.length;xe<Le;xe++){let Ge=Me[xe],je=fe[Ge.materialIndex];je&&je.visible&&x.push(S,oe,je,W,lt.z,Ge,P)}}else fe.visible&&x.push(S,oe,fe,W,lt.z,null,P)}}let B=S.children;for(let oe=0,fe=B.length;oe<fe;oe++)qo(B[oe],P,W,z)}function Fh(S,P,W,z){let{opaque:B,transmissive:oe,transparent:fe}=S;b.setupLightsView(W),Fe===!0&&we.setGlobalState(y.clippingPlanes,W),z&&T.viewport(Y.copy(z)),B.length>0&&Bn(B,P,W),oe.length>0&&Bn(oe,P,W),fe.length>0&&Bn(fe,P,W),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Bh(S,P,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[z.id]===void 0){let je=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[z.id]=new Ht(1,1,{generateMipmaps:!0,type:je?gi:Jt,minFilter:sr,samples:Math.max(4,ht.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:He.workingColorSpace})}let B=b.state.transmissionRenderTarget[z.id],oe=z.viewport||Y;B.setSize(oe.z*y.transmissionResolutionScale,oe.w*y.transmissionResolutionScale);let fe=y.getRenderTarget(),Me=y.getActiveCubeFace(),xe=y.getActiveMipmapLevel();y.setRenderTarget(B),y.getClearColor(ge),We=y.getClearAlpha(),We<1&&y.setClearColor(16777215,.5),y.clear(),bt&&Ie.render(W);let Le=y.toneMapping;y.toneMapping=pi;let Ge=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),Fe===!0&&we.setGlobalState(y.clippingPlanes,z),Bn(S,W,z),H.updateMultisampleRenderTarget(B),H.updateRenderTargetMipmap(B),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Ee=0,tt=P.length;Ee<tt;Ee++){let Mt=P[Ee],{object:nt,geometry:st,material:ft,group:be}=Mt;if(ft.side===di&&nt.layers.test(z.layers)){let Ot=ft.side;ft.side=Ft,ft.needsUpdate=!0,kh(nt,W,z,st,ft,be),ft.side=Ot,ft.needsUpdate=!0,je=!0}}je===!0&&(H.updateMultisampleRenderTarget(B),H.updateRenderTargetMipmap(B))}y.setRenderTarget(fe,Me,xe),y.setClearColor(ge,We),Ge!==void 0&&(z.viewport=Ge),y.toneMapping=Le}function Bn(S,P,W){let z=P.isScene===!0?P.overrideMaterial:null;for(let B=0,oe=S.length;B<oe;B++){let fe=S[B],{object:Me,geometry:xe,group:Le}=fe,Ge=fe.material;Ge.allowOverride===!0&&z!==null&&(Ge=z),Me.layers.test(W.layers)&&kh(Me,P,W,xe,Ge,Le)}}function kh(S,P,W,z,B,oe){R!==null&&B.isNodeMaterial&&R.setObject(S,B),S.onBeforeRender(y,P,W,z,B,oe),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(y,P,W,z,S,oe),B.transparent===!0&&B.side===di&&B.forceSinglePass===!1?(B.side=Ft,B.needsUpdate=!0,y.renderBufferDirect(W,P,z,B,S,oe),B.side=ar,B.needsUpdate=!0,y.renderBufferDirect(W,P,z,B,S,oe),B.side=di):y.renderBufferDirect(W,P,z,B,S,oe),S.onAfterRender(y,P,W,z,B,oe)}function kn(S,P,W){P.isScene!==!0&&(P=Vt);let z=C.get(S),B=b.state.lights,oe=b.state.shadowsArray,fe=B.state.version,Me=se.getParameters(S,B.state,oe,P,W,b.state.lightProbeGridArray),xe=se.getProgramCacheKey(Me),Le=z.programs;z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?P.environment:null,z.fog=P.fog;let Ge=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;z.envMap=Q.get(S.envMap||z.environment,Ge),z.envMapRotation=z.environment!==null&&S.envMap===null?P.environmentRotation:S.envMapRotation,Le===void 0&&(S.addEventListener("dispose",Ei),Le=new Map,z.programs=Le);let je=Le.get(xe);if(je!==void 0){if(z.currentProgram===je&&z.lightsStateVersion===fe)return zh(S,Me),je}else Me.uniforms=se.getUniforms(S),R!==null&&S.isNodeMaterial&&R.build(S,W,Me),S.onBeforeCompile(Me,y),je=se.acquireProgram(Me,xe),Le.set(xe,je),z.uniforms=Me.uniforms;let Ee=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ee.clippingPlanes=we.uniform),zh(S,Me),z.needsLights=d0(S),z.lightsStateVersion=fe,z.needsLights&&(Ee.ambientLightColor.value=B.state.ambient,Ee.lightProbe.value=B.state.probe,Ee.sunLights.value=B.state.sun,Ee.sunLightShadows.value=B.state.sunShadow,Ee.directionalLights.value=B.state.directional,Ee.directionalLightShadows.value=B.state.directionalShadow,Ee.spotLights.value=B.state.spot,Ee.spotLightShadows.value=B.state.spotShadow,Ee.rectAreaLights.value=B.state.rectArea,Ee.ltc_1.value=B.state.rectAreaLTC1,Ee.ltc_2.value=B.state.rectAreaLTC2,Ee.pointLights.value=B.state.point,Ee.pointLightShadows.value=B.state.pointShadow,Ee.hemisphereLights.value=B.state.hemi,Ee.sunShadowMatrix.value=B.state.sunShadowMatrix,Ee.sunShadowCascade.value=B.state.sunShadowCascade,Ee.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ee.spotLightMatrix.value=B.state.spotLightMatrix,Ee.spotLightMap.value=B.state.spotLightMap,Ee.pointShadowMatrix.value=B.state.pointShadowMatrix),z.lightProbeGrid=b.state.lightProbeGridArray.length>0,z.currentProgram=je,z.uniformsList=null,je}function Vh(S){if(S.uniformsList===null){let P=S.currentProgram.getUniforms();S.uniformsList=Pn.seqWithValue(P.seq,S.uniforms)}return S.uniformsList}function zh(S,P){let W=C.get(S);W.outputColorSpace=P.outputColorSpace,W.batching=P.batching,W.batchingColor=P.batchingColor,W.instancing=P.instancing,W.instancingColor=P.instancingColor,W.instancingMorph=P.instancingMorph,W.skinning=P.skinning,W.morphTargets=P.morphTargets,W.morphNormals=P.morphNormals,W.morphColors=P.morphColors,W.morphTargetsCount=P.morphTargetsCount,W.numClippingPlanes=P.numClippingPlanes,W.numIntersection=P.numClipIntersection,W.vertexAlphas=P.vertexAlphas,W.vertexTangents=P.vertexTangents,W.toneMapping=P.toneMapping}function c0(S,P){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;N.setFromMatrixPosition(P.matrixWorld);for(let W=0,z=S.length;W<z;W++){let B=S[W];if(B.texture!==null&&B.boundingBox.containsPoint(N))return B}return null}function h0(S,P,W,z,B){P.isScene!==!0&&(P=Vt),H.resetTextureUnits();let oe=P.fog,fe=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?P.environment:null,Me=V===null?y.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:He.workingColorSpace,xe=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Le=Q.get(z.envMap||fe,xe),Ge=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,je=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ee=!!W.morphAttributes.position,tt=!!W.morphAttributes.normal,Mt=!!W.morphAttributes.color,nt=pi;z.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(nt=y.toneMapping);let st=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ft=st!==void 0?st.length:0,be=C.get(z),Ot=b.state.lights;if(Fe===!0&&(mt===!0||S!==X)){let rt=S===X&&z.id===ne;we.setState(z,S,rt)}let xr=!1;z.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Ot.state.version||be.outputColorSpace!==Me||B.isBatchedMesh&&be.batching===!1||!B.isBatchedMesh&&be.batching===!0||B.isBatchedMesh&&be.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&be.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&be.instancing===!1||!B.isInstancedMesh&&be.instancing===!0||B.isSkinnedMesh&&be.skinning===!1||!B.isSkinnedMesh&&be.skinning===!0||B.isInstancedMesh&&be.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&be.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&be.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&be.instancingMorph===!1&&B.morphTexture!==null||be.envMap!==Le||z.fog===!0&&be.fog!==oe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==we.numPlanes||be.numIntersection!==we.numIntersection)||be.vertexAlphas!==Ge||be.vertexTangents!==je||be.morphTargets!==Ee||be.morphNormals!==tt||be.morphColors!==Mt||be.toneMapping!==nt||be.morphTargetsCount!==ft||!!be.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(xr=!0):(xr=!0,be.__version=z.version);let ii=be.currentProgram;xr===!0&&(ii=kn(z,P,B),R&&z.isNodeMaterial&&R.onUpdateProgram(z,ii,be));let wi=!1,ir=!1,aa=!1,it=ii.getUniforms(),gt=be.uniforms;if(T.useProgram(ii.program)&&(wi=!0,ir=!0,aa=!0),z.id!==ne&&(ne=z.id,ir=!0),be.needsLights){let rt=c0(b.state.lightProbeGridArray,B);be.lightProbeGrid!==rt&&(be.lightProbeGrid=rt,ir=!0)}if(wi||X!==S){T.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),it.setValue(D,"projectionMatrix",S.projectionMatrix),it.setValue(D,"viewMatrix",S.matrixWorldInverse);let rt=it.map.cameraPosition;rt!==void 0&&rt.setValue(D,Zt.setFromMatrixPosition(S.matrixWorld)),ht.logarithmicDepthBuffer&&it.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&it.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),X!==S&&(X=S,ir=!0,aa=!0)}if(be.needsLights&&(Ot.state.sunShadowMap.length>0&&it.setValue(D,"sunShadowMap",Ot.state.sunShadowMap,H),Ot.state.directionalShadowMap.length>0&&it.setValue(D,"directionalShadowMap",Ot.state.directionalShadowMap,H),Ot.state.spotShadowMap.length>0&&it.setValue(D,"spotShadowMap",Ot.state.spotShadowMap,H),Ot.state.pointShadowMap.length>0&&it.setValue(D,"pointShadowMap",Ot.state.pointShadowMap,H)),B.isSkinnedMesh){it.setOptional(D,B,"bindMatrix"),it.setOptional(D,B,"bindMatrixInverse");let rt=B.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),it.setValue(D,"boneTexture",rt.boneTexture,H))}B.isBatchedMesh&&(it.setOptional(D,B,"batchingTexture"),it.setValue(D,"batchingTexture",B._matricesTexture,H),it.setOptional(D,B,"batchingIdTexture"),it.setValue(D,"batchingIdTexture",B._indirectTexture,H),it.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&it.setValue(D,"batchingColorTexture",B._colorsTexture,H));let rr=W.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0)&&Je.update(B,W,ii),(ir||be.receiveShadow!==B.receiveShadow)&&(be.receiveShadow=B.receiveShadow,it.setValue(D,"receiveShadow",B.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&P.environment!==null&&(gt.envMapIntensity.value=P.environmentIntensity),gt.dfgLUT!==void 0&&(gt.dfgLUT.value=iv()),ir){if(it.setValue(D,"toneMappingExposure",y.toneMappingExposure),be.needsLights&&u0(gt,aa),oe&&z.fog===!0&&de.refreshFogUniforms(gt,oe),de.refreshMaterialUniforms(gt,z,J,j,b.state.transmissionRenderTarget[S.id]),be.needsLights&&be.lightProbeGrid){let rt=be.lightProbeGrid;gt.probesSH.value=rt.texture,gt.probesMin.value.copy(rt.boundingBox.min),gt.probesMax.value.copy(rt.boundingBox.max),gt.probesResolution.value.copy(rt.resolution)}Pn.upload(D,Vh(be),gt,H)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Pn.upload(D,Vh(be),gt,H),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&it.setValue(D,"center",B.center),it.setValue(D,"modelViewMatrix",B.modelViewMatrix),it.setValue(D,"normalMatrix",B.normalMatrix),it.setValue(D,"modelMatrix",B.matrixWorld),z.uniformsGroups!==void 0){let rt=z.uniformsGroups;for(let ka=0,na=rt.length;ka<na;ka++){let Hh=rt[ka];Te.update(Hh,ii),Te.bind(Hh,ii)}}return ii}function u0(S,P){S.ambientLightColor.needsUpdate=P,S.lightProbe.needsUpdate=P,S.sunLights.needsUpdate=P,S.sunLightShadows.needsUpdate=P,S.directionalLights.needsUpdate=P,S.directionalLightShadows.needsUpdate=P,S.pointLights.needsUpdate=P,S.pointLightShadows.needsUpdate=P,S.spotLights.needsUpdate=P,S.spotLightShadows.needsUpdate=P,S.rectAreaLights.needsUpdate=P,S.hemisphereLights.needsUpdate=P}function d0(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(S,P,W){let z=C.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),C.get(S.texture).__webglTexture=P,C.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,P){let W=C.get(S);W.__webglFramebuffer=P,W.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(S,P=0,W=0){V=S,k=P,K=W;let z=null,B=!1,oe=!1;if(S){let fe=C.get(S);if(fe.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(D.FRAMEBUFFER,fe.__webglFramebuffer),Y.copy(S.viewport),$.copy(S.scissor),Ce=S.scissorTest,T.viewport(Y),T.scissor($),T.setScissorTest(Ce),ne=-1;return}else if(fe.__webglFramebuffer===void 0)H.setupRenderTarget(S);else if(fe.__hasExternalTextures)H.rebindTextures(S,C.get(S.texture).__webglTexture,C.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Le=S.depthTexture;if(fe.__boundDepthTexture!==Le){if(Le!==null&&C.has(Le)&&(S.width!==Le.image.width||S.height!==Le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(S)}}let Me=S.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(oe=!0);let xe=C.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(xe[P])?z=xe[P][W]:z=xe[P],B=!0):S.samples>0&&H.useMultisampledRTT(S)===!1?z=C.get(S).__webglMultisampledFramebuffer:Array.isArray(xe)?z=xe[W]:z=xe,Y.copy(S.viewport),$.copy(S.scissor),Ce=S.scissorTest}else Y.copy(ve).multiplyScalar(J).floor(),$.copy(le).multiplyScalar(J).floor(),Ce=Ke;if(W!==0&&(z=O),T.bindFramebuffer(D.FRAMEBUFFER,z)&&T.drawBuffers(S,z),T.viewport(Y),T.scissor($),T.setScissorTest(Ce),B){let fe=C.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,fe.__webglTexture,W)}else if(oe){let fe=P;for(let Me=0;Me<S.textures.length;Me++){let xe=C.get(S.textures[Me]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Me,xe.__webglTexture,W,fe)}}else if(S!==null&&W!==0){let fe=C.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,fe.__webglTexture,W)}ne=-1};function Gh(S){let P=C.get(S);return(P.__readFormat!==S.format||P.__readType!==S.type)&&(P.__readFormat=S.format,P.__readType=S.type,P.__formatReadable=ht.textureFormatReadable(S.format),P.__typeReadable=ht.textureTypeReadable(S.type)),P}this.readRenderTargetPixels=function(S,P,W,z,B,oe,fe,Me=0){if(!(S&&S.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=C.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){T.bindFramebuffer(D.FRAMEBUFFER,xe);try{let Le=S.textures[Me],Ge=Le.format,je=Le.type;S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Me);let Ee=Gh(Le);if(Ee.__formatReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=S.width-z&&W>=0&&W<=S.height-B&&D.readPixels(P,W,z,B,ie.convert(Ge),ie.convert(je),oe)}finally{let Le=V!==null?C.get(V).__webglFramebuffer:null;T.bindFramebuffer(D.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(S,P,W,z,B,oe,fe,Me=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=C.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe)if(P>=0&&P<=S.width-z&&W>=0&&W<=S.height-B){T.bindFramebuffer(D.FRAMEBUFFER,xe);let Le=S.textures[Me],Ge=Le.format,je=Le.type;S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Me);let Ee=Gh(Le);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,tt),D.bufferData(D.PIXEL_PACK_BUFFER,oe.byteLength,D.STREAM_READ),D.readPixels(P,W,z,B,ie.convert(Ge),ie.convert(je),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Mt=V!==null?C.get(V).__webglFramebuffer:null;T.bindFramebuffer(D.FRAMEBUFFER,Mt);let nt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ou(D,nt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,tt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,oe),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(tt),D.deleteSync(nt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,P=null,W=0){let z=Math.pow(2,-W),B=Math.floor(S.image.width*z),oe=Math.floor(S.image.height*z),fe=P!==null?P.x:0,Me=P!==null?P.y:0;H.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,fe,Me,B,oe),T.unbindTexture()},this.copyTextureToTexture=function(S,P,W=null,z=null,B=0,oe=0){let fe,Me,xe,Le,Ge,je,Ee,tt,Mt,nt=S.isCompressedTexture?S.mipmaps[oe]:S.image;if(W!==null)fe=W.max.x-W.min.x,Me=W.max.y-W.min.y,xe=W.isBox3?W.max.z-W.min.z:1,Le=W.min.x,Ge=W.min.y,je=W.isBox3?W.min.z:0;else{let gt=Math.pow(2,-B);fe=Math.floor(nt.width*gt),Me=Math.floor(nt.height*gt),S.isDataArrayTexture?xe=nt.depth:S.isData3DTexture?xe=Math.floor(nt.depth*gt):xe=1,Le=0,Ge=0,je=0}z!==null?(Ee=z.x,tt=z.y,Mt=z.z):(Ee=0,tt=0,Mt=0);let st=ie.convert(P.format),ft=ie.convert(P.type),be;P.isData3DTexture?(H.setTexture3D(P,0),be=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(H.setTexture2DArray(P,0),be=D.TEXTURE_2D_ARRAY):(H.setTexture2D(P,0),be=D.TEXTURE_2D),T.activeTexture(D.TEXTURE0),T.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),T.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),T.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);let Ot=T.getParameter(D.UNPACK_ROW_LENGTH),xr=T.getParameter(D.UNPACK_IMAGE_HEIGHT),ii=T.getParameter(D.UNPACK_SKIP_PIXELS),wi=T.getParameter(D.UNPACK_SKIP_ROWS),ir=T.getParameter(D.UNPACK_SKIP_IMAGES);T.pixelStorei(D.UNPACK_ROW_LENGTH,nt.width),T.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt.height),T.pixelStorei(D.UNPACK_SKIP_PIXELS,Le),T.pixelStorei(D.UNPACK_SKIP_ROWS,Ge),T.pixelStorei(D.UNPACK_SKIP_IMAGES,je);let aa=S.isDataArrayTexture||S.isData3DTexture,it=P.isDataArrayTexture||P.isData3DTexture;if(S.isDepthTexture){let gt=C.get(S),rr=C.get(P),rt=C.get(gt.__renderTarget),ka=C.get(rr.__renderTarget);T.bindFramebuffer(D.READ_FRAMEBUFFER,rt.__webglFramebuffer),T.bindFramebuffer(D.DRAW_FRAMEBUFFER,ka.__webglFramebuffer);for(let na=0;na<xe;na++)aa&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,C.get(S).__webglTexture,B,je+na),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,C.get(P).__webglTexture,oe,Mt+na)),D.blitFramebuffer(Le,Ge,fe,Me,Ee,tt,fe,Me,D.DEPTH_BUFFER_BIT,D.NEAREST);T.bindFramebuffer(D.READ_FRAMEBUFFER,null),T.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||S.isRenderTargetTexture||C.has(S)){let gt=C.get(S),rr=C.get(P);T.bindFramebuffer(D.READ_FRAMEBUFFER,q),T.bindFramebuffer(D.DRAW_FRAMEBUFFER,L);for(let rt=0;rt<xe;rt++)aa?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,gt.__webglTexture,B,je+rt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,gt.__webglTexture,B),it?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,rr.__webglTexture,oe,Mt+rt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,rr.__webglTexture,oe),B!==0?D.blitFramebuffer(Le,Ge,fe,Me,Ee,tt,fe,Me,D.COLOR_BUFFER_BIT,D.NEAREST):it?D.copyTexSubImage3D(be,oe,Ee,tt,Mt+rt,Le,Ge,fe,Me):D.copyTexSubImage2D(be,oe,Ee,tt,Le,Ge,fe,Me);T.bindFramebuffer(D.READ_FRAMEBUFFER,null),T.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else it?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(be,oe,Ee,tt,Mt,fe,Me,xe,st,ft,nt.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(be,oe,Ee,tt,Mt,fe,Me,xe,st,nt.data):D.texSubImage3D(be,oe,Ee,tt,Mt,fe,Me,xe,st,ft,nt):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,oe,Ee,tt,fe,Me,st,ft,nt.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,oe,Ee,tt,nt.width,nt.height,st,nt.data):D.texSubImage2D(D.TEXTURE_2D,oe,Ee,tt,fe,Me,st,ft,nt);T.pixelStorei(D.UNPACK_ROW_LENGTH,Ot),T.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xr),T.pixelStorei(D.UNPACK_SKIP_PIXELS,ii),T.pixelStorei(D.UNPACK_SKIP_ROWS,wi),T.pixelStorei(D.UNPACK_SKIP_IMAGES,ir),oe===0&&P.generateMipmaps&&D.generateMipmap(be),T.unbindTexture()},this.initRenderTarget=function(S){C.get(S).__webglFramebuffer===void 0&&H.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?H.setTextureCube(S,0):S.isData3DTexture?H.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?H.setTexture2DArray(S,0):H.setTexture2D(S,0),T.unbindTexture()},this.resetState=function(){k=0,K=0,V=null,T.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}},qc={type:"change"},Ao={type:"start"},Yc={type:"end"},Dn=new hn,Kc=new Fi,av=Math.cos(70*$a.DEG2RAD),Tt=new F,kt=2*Math.PI,et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ro=1e-6,nv=class extends ap{constructor(e,t=null){super(e,t),this.state=et.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yr.ROTATE,MIDDLE:yr.DOLLY,RIGHT:yr.PAN},this.touches={ONE:Tr.ROTATE,TWO:Tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Li,this._lastTargetPosition=new F,this._quat=new Li().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mc,this._sphericalDelta=new mc,this._scale=1,this._panOffset=new F,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new F,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ov.bind(this),this._onPointerDown=sv.bind(this),this._onPointerUp=lv.bind(this),this._onContextMenu=mv.bind(this),this._onMouseWheel=uv.bind(this),this._onKeyDown=dv.bind(this),this._onTouchStart=pv.bind(this),this._onTouchMove=fv.bind(this),this._onMouseDown=cv.bind(this),this._onMouseMove=hv.bind(this),this._interceptControlDown=gv.bind(this),this._interceptControlUp=_v.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=et.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qc),this.update(),this.state=et.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Tt.copy(t).sub(this.target),Tt.applyQuaternion(this._quat),this._spherical.setFromVector3(Tt),this.autoRotate&&this.state===et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=kt:i>Math.PI&&(i-=kt),r<-Math.PI?r+=kt:r>Math.PI&&(r-=kt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=n!=this._spherical.radius}if(Tt.setFromSpherical(this._spherical),Tt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Tt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){let s=Tt.length();n=this._clampDistance(s*this._scale);let o=s-n;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),a=!!o}else if(this.object.isOrthographicCamera){let s=new F(this._mouse.x,this._mouse.y,0);s.unproject(this.object);let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=o!==this.object.zoom;let l=new F(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(s),this.object.updateMatrixWorld(),n=Tt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(Dn.origin.copy(this.object.position),Dn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Dn.direction))<av?this.object.lookAt(this.target):(Kc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Dn.intersectPlane(Kc,this.target))))}else if(this.object.isOrthographicCamera){let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Ro||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ro||this._lastTargetPosition.distanceToSquared(this.target)>Ro?(this.dispatchEvent(qc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?kt/60*this.autoRotateSpeed*e:kt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Tt.setFromMatrixColumn(t,0),Tt.multiplyScalar(-e),this._panOffset.add(Tt)}_panUp(e,t){this.screenSpacePanning===!0?Tt.setFromMatrixColumn(t,1):(Tt.setFromMatrixColumn(t,0),Tt.crossVectors(this.object.up,Tt)),Tt.multiplyScalar(e),this._panOffset.add(Tt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Tt.copy(r).sub(this.target);let a=Tt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,a=t-i.top,n=i.width,s=i.height;this._mouse.x=r/n*2-1,this._mouse.y=-(a/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let n=(e.pageX+t.x)*.5,s=(e.pageY+t.y)*.5;this._updateZoomParameters(n,s)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function sv(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function ov(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function lv(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yc),this.state=et.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function cv(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case yr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=et.DOLLY;break;case yr.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=et.ROTATE}break;case yr.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=et.PAN}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(Ao)}function hv(e){switch(this.state){case et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function uv(e){this.enabled===!1||this.enableZoom===!1||this.state!==et.NONE||(e.preventDefault(),this.dispatchEvent(Ao),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Yc))}function dv(e){this.enabled!==!1&&this._handleKeyDown(e)}function pv(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Tr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=et.TOUCH_ROTATE;break;case Tr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=et.TOUCH_PAN;break;default:this.state=et.NONE}break;case 2:switch(this.touches.TWO){case Tr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=et.TOUCH_DOLLY_PAN;break;case Tr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=et.TOUCH_DOLLY_ROTATE;break;default:this.state=et.NONE}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(Ao)}function fv(e){switch(this._trackPointer(e),this.state){case et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=et.NONE}}function mv(e){this.enabled!==!1&&e.preventDefault()}function gv(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _v(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var qt=Uint8Array,Zr=Uint16Array,vv=Int32Array,Zc=new qt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Jc=new qt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Sv=new qt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),$c=function(e,t){for(var i=new Zr(31),r=0;r<31;++r)i[r]=t+=1<<e[r-1];for(var a=new vv(i[30]),r=1;r<30;++r)for(var n=i[r];n<i[r+1];++n)a[n]=n-i[r]<<5|r;return{b:i,r:a}},Qc=$c(Zc,2),eh=Qc.b,Mv=Qc.r;eh[28]=258,Mv[258]=28;var th=$c(Jc,0),xv=th.b,m0=th.r,Co=new Zr(32768);for(Ye=0;Ye<32768;++Ye)ki=(Ye&43690)>>1|(Ye&21845)<<1,ki=(ki&52428)>>2|(ki&13107)<<2,ki=(ki&61680)>>4|(ki&3855)<<4,Co[Ye]=((ki&65280)>>8|(ki&255)<<8)>>1;var ki,Ye,Na=(function(e,t,i){for(var r=e.length,a=0,n=new Zr(t);a<r;++a)e[a]&&++n[e[a]-1];var s=new Zr(t);for(a=1;a<t;++a)s[a]=s[a-1]+n[a-1]<<1;var o;if(i){o=new Zr(1<<t);var l=15-t;for(a=0;a<r;++a)if(e[a])for(var c=a<<4|e[a],u=t-e[a],d=s[e[a]-1]++<<u,h=d|(1<<u)-1;d<=h;++d)o[Co[d]>>l]=c}else for(o=new Zr(r),a=0;a<r;++a)e[a]&&(o[a]=Co[s[e[a]-1]++]>>15-e[a]);return o}),Ua=new qt(288);for(Ye=0;Ye<144;++Ye)Ua[Ye]=8;var Ye;for(Ye=144;Ye<256;++Ye)Ua[Ye]=9;var Ye;for(Ye=256;Ye<280;++Ye)Ua[Ye]=7;var Ye;for(Ye=280;Ye<288;++Ye)Ua[Ye]=8;var Ye,ih=new qt(32);for(Ye=0;Ye<32;++Ye)ih[Ye]=5;var Ye,yv=Na(Ua,9,1),Tv=Na(ih,5,1),Po=function(e){for(var t=e[0],i=1;i<e.length;++i)e[i]>t&&(t=e[i]);return t},ci=function(e,t,i){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&i},Lo=function(e,t){var i=t/8|0;return(e[i]|e[i+1]<<8|e[i+2]<<16)>>(t&7)},bv=function(e){return(e+7)/8|0},Ev=function(e,t,i){return(t==null||t<0)&&(t=0),(i==null||i>e.length)&&(i=e.length),new qt(e.subarray(t,i))},wv=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],hi=function(e,t,i){var r=new Error(t||wv[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,hi),!i)throw r;return r},Av=function(e,t,i,r){var a=e.length,n=r?r.length:0;if(!a||t.f&&!t.l)return i||new qt(0);var s=!i,o=s||t.i!=2,l=t.i;s&&(i=new qt(a*3));var c=function(le){var Ke=i.length;if(le>Ke){var qe=new qt(Math.max(Ke*2,le));qe.set(i),i=qe}},u=t.f||0,d=t.p||0,h=t.b||0,f=t.l,M=t.d,v=t.m,m=t.n,p=a*8;do{if(!f){u=ci(e,d,1);var w=ci(e,d+1,3);if(d+=3,w)if(w==1)f=yv,M=Tv,v=9,m=5;else if(w==2){var N=ci(e,d,31)+257,x=ci(e,d+10,15)+4,b=N+ci(e,d+5,31)+1;d+=14;for(var A=new qt(b),E=new qt(19),g=0;g<x;++g)E[Sv[g]]=ci(e,d+g*3,7);d+=x*3;for(var y=Po(E),G=(1<<y)-1,R=Na(E,y,1),g=0;g<b;){var O=R[ci(e,d,G)];d+=O&15;var q=O>>4;if(q<16)A[g++]=q;else{var L=0,k=0;for(q==16?(k=3+ci(e,d,3),d+=2,L=A[g-1]):q==17?(k=3+ci(e,d,7),d+=3):q==18&&(k=11+ci(e,d,127),d+=7);k--;)A[g++]=L}}var K=A.subarray(0,N),V=A.subarray(N);v=Po(K),m=Po(V),f=Na(K,v,1),M=Na(V,m,1)}else hi(1);else{var q=bv(d)+4,ne=e[q-4]|e[q-3]<<8,X=q+ne;if(X>a){l&&hi(0);break}o&&c(h+ne),i.set(e.subarray(q,X),h),t.b=h+=ne,t.p=d=X*8,t.f=u;continue}if(d>p){l&&hi(0);break}}o&&c(h+131072);for(var Y=(1<<v)-1,$=(1<<m)-1,Ce=d;;Ce=d){var L=f[Lo(e,d)&Y],ge=L>>4;if(d+=L&15,d>p){l&&hi(0);break}if(L||hi(2),ge<256)i[h++]=ge;else if(ge==256){Ce=d,f=null;break}else{var We=ge-254;if(ge>264){var g=ge-257,Ae=Zc[g];We=ci(e,d,(1<<Ae)-1)+eh[g],d+=Ae}var j=M[Lo(e,d)&$],J=j>>4;j||hi(3),d+=j&15;var V=xv[J];if(J>3){var Ae=Jc[J];V+=Lo(e,d)&(1<<Ae)-1,d+=Ae}if(d>p){l&&hi(0);break}o&&c(h+131072);var te=h+We;if(h<V){var _e=n-V,ve=Math.min(V,te);for(_e+h<0&&hi(3);h<ve;++h)i[h]=r[_e+h]}for(;h<te;++h)i[h]=i[h-V]}}t.l=f,t.p=Ce,t.b=h,t.f=u,f&&(u=1,t.m=v,t.d=M,t.n=m)}while(!u);return h!=i.length&&s?Ev(i,0,h):i.subarray(0,h)},Rv=new qt(0),Cv=function(e){(e[0]!=31||e[1]!=139||e[2]!=8)&&hi(6,"invalid gzip data");var t=e[3],i=10;t&4&&(i+=(e[10]|e[11]<<8)+2);for(var r=(t>>3&1)+(t>>4&1);r>0;r-=!e[i++]);return i+(t&2)},Pv=function(e){var t=e.length;return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0};function Lv(e,t){var i=Cv(e);return i+8>e.length&&hi(6,"invalid gzip data"),Av(e.subarray(i,-8),{i:2},t&&t.out||new qt(Pv(e)),t&&t.dictionary)}var Dv=typeof TextDecoder<"u"&&new TextDecoder,Nv=0;try{Dv.decode(Rv,{stream:!0}),Nv=1}catch{}var Uv=class{constructor(e,t){this.software=!0,this.domElement=document.createElement("canvas"),this.ctx=this.domElement.getContext("2d"),this.color=new Xe(15329766),this.alpha=1,this.manifest=e,this.isMoving=t,this.textureCache=new WeakMap,this.width=1,this.height=1,this.mat=new ct,this.inv=new ct,this.actualPoints=0}setPixelRatio(){}getPixelRatio(){return this.ratio||1}setSize(e,t){this.ratio=Math.min(1,1100/e,900/t),this.width=Math.max(1,Math.round(e*this.ratio)),this.height=Math.max(1,Math.round(t*this.ratio)),this.domElement.width=this.width,this.domElement.height=this.height,this.frame=this.ctx.createImageData(this.width,this.height),this.pixels32=new Uint32Array(this.frame.data.buffer),this.depth=new Float32Array(this.width*this.height),this.mm=new Uint8Array(this.depth.length),this.dd=new Uint8Array(this.depth.length),this.ids=new Int32Array(this.depth.length),this.hit=new Uint8Array(this.depth.length),this.source=new Uint8Array(this.depth.length)}setClearColor(e,t=1){this.color.set(e),this.alpha=t}getClearColor(e){return e.copy(this.color)}getClearAlpha(){return this.alpha}texturePixels(e){if(this.textureCache.has(e))return this.textureCache.get(e);let t=e.image,i=document.createElement("canvas");i.width=t.width,i.height=t.height;let r=i.getContext("2d");r.drawImage(t,0,0);let a={data:r.getImageData(0,0,i.width,i.height).data,width:i.width,height:i.height};return this.textureCache.set(e,a),a}project(e,t,i){let r=this.mat.elements,a=r[3]*e+r[7]*t+r[11]*i+r[15];return[(r[0]*e+r[4]*t+r[8]*i+r[12])/a,(r[1]*e+r[5]*t+r[9]*i+r[13])/a,(r[2]*e+r[6]*t+r[10]*i+r[14])/a,a]}photo(e){let t=e.userData.corners.map(y=>[y[0]+e.position.x,y[1]+e.position.y,y[2]+e.position.z]),i=t.map(y=>this.project(...y));if(i.some(y=>y[3]<=0))return;let r=this.width,a=this.height,n=Math.max(0,Math.floor((Math.min(...i.map(y=>y[0]))+1)*r/2)),s=Math.min(r-1,Math.ceil((Math.max(...i.map(y=>y[0]))+1)*r/2)),o=Math.max(0,Math.floor((1-Math.max(...i.map(y=>y[1])))*a/2)),l=Math.min(a-1,Math.ceil((1-Math.min(...i.map(y=>y[1])))*a/2)),c=this.texturePixels(e.material.uniforms.imageMap.value),u=this.texturePixels(e.material.uniforms.classMap.value),d=e.material.uniforms.opacity.value,[h,f,,M]=t,v=f.map((y,G)=>y-h[G]),m=M.map((y,G)=>y-h[G]),p=[v[1]*m[2]-v[2]*m[1],v[2]*m[0]-v[0]*m[2],v[0]*m[1]-v[1]*m[0]],w=(y,G)=>y[0]*G[0]+y[1]*G[1]+y[2]*G[2],N=w(v,v),x=w(m,m),b=w(v,m),A=N*x-b*b,E=this.inv.elements,g=this.frame.data;for(let y=o;y<=l;y++)for(let G=n;G<=s;G++){let R=2*(G+.5)/r-1,O=1-2*(y+.5)/a,q=E[3]*R+E[7]*O-E[11]+E[15],L=E[3]*R+E[7]*O+E[11]+E[15],k=[(E[0]*R+E[4]*O-E[8]+E[12])/q,(E[1]*R+E[5]*O-E[9]+E[13])/q,(E[2]*R+E[6]*O-E[10]+E[14])/q],K=[(E[0]*R+E[4]*O+E[8]+E[12])/L,(E[1]*R+E[5]*O+E[9]+E[13])/L,(E[2]*R+E[6]*O+E[10]+E[14])/L],V=K.map((ve,le)=>ve-k[le]),ne=w(p,V);if(Math.abs(ne)<1e-10)continue;let X=w(p,h.map((ve,le)=>ve-k[le]))/ne;if(X<0||X>1)continue;let Y=k.map((ve,le)=>ve+X*V[le]),$=Y.map((ve,le)=>ve-h[le]),Ce=w($,v),ge=w($,m),We=(Ce*x-ge*b)/A,Ae=(ge*N-Ce*b)/A;if(We<0||We>=1||Ae<0||Ae>=1)continue;let j=(Math.floor(Ae*c.height)*c.width+Math.floor(We*c.width))*4;if(c.data[j+3]<26)continue;let J=y*r+G,te=this.project(...Y)[2];if(te>=this.depth[J])continue;let _e=J*4;this.depth[J]=te,this.hit[J]=2,this.source[J]=e.userData.sourceCode,this.mm[J]=u.data[j],this.dd[J]=u.data[j+1];for(let ve=0;ve<3;ve++)g[_e+ve]=c.data[j+ve]*d+g[_e+ve]*(1-d);g[_e+3]=255}}render(e,t){if(!this.frame)return;t.updateMatrixWorld(),this.mat.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this.inv.copy(this.mat).invert();let i=this.color.getHex(Gt),r=i>>16,a=i>>8&255,n=i&255;this.pixels32.fill(255<<24|n<<16|a<<8|r),this.depth.fill(1/0),this.mm.fill(0),this.dd.fill(0),this.ids.fill(-1),this.hit.fill(0),this.source.fill(0);let s=e.children;for(let v of s)v.visible&&v.isMesh&&v.material.uniforms?.imageMap&&this.photo(v);let o=s.filter(v=>v.visible&&v.isPoints).reduce((v,m)=>v+m.geometry.attributes.position.count,0),l=this.isMoving()?35e3:15e4,c=Math.max(1,Math.ceil(o/l)),u=0,d=this.mat.elements,h=this.width,f=this.height,M=this.frame.data;for(let v of s){if(!v.visible||!v.isPoints)continue;let m=v.geometry.attributes,p=m.position.array,w=m.rgb.array,N=m.mapCodes.array,x=m.pickId.array,b=v.material.uniforms.mode.value,A=Math.max(1,v.material.uniforms.size.value*this.ratio),E=Math.ceil(A/2),g=(A/2)**2,y=b===1?this.manifest.degradations:this.manifest.materials;for(let G=0;G<x.length;G+=c){if(v.material.uniforms.sourceCode.value===3&&m.overlap.array[G]&v.material.uniforms.overlayMask.value)continue;let R=G*3,O=p[R],q=p[R+1],L=p[R+2],k=d[3]*O+d[7]*q+d[11]*L+d[15];if(k<=0)continue;let K=(d[0]*O+d[4]*q+d[8]*L+d[12])/k,V=(d[1]*O+d[5]*q+d[9]*L+d[13])/k,ne=(d[2]*O+d[6]*q+d[10]*L+d[14])/k;if(Math.abs(K)>1||Math.abs(V)>1||Math.abs(ne)>1)continue;let X=Math.floor((K+1)*h/2),Y=Math.floor((1-V)*f/2),$=N[G*2],Ce=N[G*2+1],ge=w[R],We=w[R+1],Ae=w[R+2],j=b===1?Ce:$;if(b&&(j||b===3&&Ce)){let J=b===3?[...this.manifest.materials.filter(te=>te.id&&$&1<<te.id-1),...this.manifest.degradations.filter(te=>te.id&&Ce&1<<te.id-1)]:y.filter(te=>te.id&&j&1<<te.id-1);if(J.length){let te=J[Math.floor((X+Y)/5)%J.length].color;ge=parseInt(te.slice(1,3),16),We=parseInt(te.slice(3,5),16),Ae=parseInt(te.slice(5,7),16)}}for(let J=Math.max(0,Y-E);J<=Math.min(f-1,Y+E);J++)for(let te=Math.max(0,X-E);te<=Math.min(h-1,X+E);te++){if((te-X)**2+(J-Y)**2>Math.max(g,.1))continue;let _e=J*h+te;if(ne>=this.depth[_e])continue;this.depth[_e]=ne;let ve=_e*4;M[ve]=ge,M[ve+1]=We,M[ve+2]=Ae,this.mm[_e]=$,this.dd[_e]=Ce,this.ids[_e]=x[G],this.hit[_e]=1,this.source[_e]=v.material.uniforms.sourceCode.value}u++}}this.actualPoints=u,this.ctx.putImageData(this.frame,0,0);for(let v of s){if(!v.visible||!v.isLineSegments)continue;let m=v.geometry.attributes.position.array,p=this.ctx;p.strokeStyle="#"+v.material.color.getHexString(),p.globalAlpha=v.material.opacity,p.lineWidth=1,p.beginPath();for(let w=0;w<m.length;w+=6){let N=this.project(m[w],m[w+1],m[w+2]),x=this.project(m[w+3],m[w+4],m[w+5]);N[3]<=0||x[3]<=0||(p.moveTo((N[0]+1)*h/2,(1-N[1])*f/2),p.lineTo((x[0]+1)*h/2,(1-x[1])*f/2))}p.stroke(),p.globalAlpha=1}}legend(){let e=0,t=0,i=0,r=this.manifest.sources.map(()=>({mm:0,dd:0,samples:0}));for(let a=0;a<this.mm.length;a++)if(this.hit[a]){e|=this.mm[a],t|=this.dd[a],i++;let n=r[this.source[a]-1];n&&(n.mm|=this.mm[a],n.dd|=this.dd[a],n.samples++)}return{mm:e,dd:t,samples:i,perSource:r}}pointAt(e,t){e=Math.floor(e*this.ratio),t=Math.floor(t*this.ratio);let i=-1,r=99;for(let a=Math.max(0,t-3);a<=Math.min(this.height-1,t+3);a++)for(let n=Math.max(0,e-3);n<=Math.min(this.width-1,e+3);n++){let s=a*this.width+n,o=(n-e)**2+(a-t)**2;this.ids[s]>=0&&o<r&&(i=this.ids[s],r=o)}return i}},at=e=>document.getElementById(e),Iv=e=>String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),yi=new Map,pt={texts:{},inverted:!1},Do,rh=()=>{},ah=!1,Jr,fr,Ti={"document.title":["Titoli","G8 \xB7 Fenomeni di degrado e mappatura materiali"],"scene.raw":["Titoli","Nuvola di punti \xB7 colori originali"],"scene.classified":["Titoli","Nuvola classificata \xB7 materiali + degradi"],"scene.degradation":["Titoli","Nuvola classificata \xB7 degradi"],"scene.material":["Titoli","Nuvola classificata \xB7 materiali"],"scene.photo":["Titoli","Fotopiani \xB7 angolo Ovest\u2013Sud"],"legend.materials":["Legenda","Materiali"],"legend.degradations":["Legenda","Degradi"],"legend.materialsPresent":["Legenda","Materiali presenti"],"legend.degradationsPresent":["Legenda","Degradi presenti"],"legend.dxf":["Legenda","Disegno DXF"],"legend.architecture":["Legenda","Linee architettoniche"],"legend.degradation":["Legenda","Contorni dei degradi"],"legend.material":["Legenda","Contorni dei materiali"],"legend.photoCaption":["Legenda","Classi nelle porzioni visibili dei fotopiani."],"legend.classifiedCaption":["Legenda","Materiali e degradi insieme. Le bande alternano le classi sovrapposte."],"legend.pointCaption":["Legenda","Classi sui punti visibili. O = Ovest \xB7 S = Sud."],"projection.ortho":["Comandi","ORTOGRAFICA"],"projection.perspective":["Comandi","PROSPETTICA"],"settings.open":["Comandi","Apri +"],"settings.close":["Comandi","Chiudi \u2212"],"quality.base":["Comandi","Leggera \xB7 {n} milioni"],"quality.medium":["Comandi","Bilanciata \xB7 {n} milioni"],"quality.full":["Comandi","Dettagliata \xB7 {n} milioni"],"gesture.touch":["Istruzioni","Un dito ruota \xB7 due dita spostano e ingrandiscono"],"detail.id":["Dettaglio punto","Prospetto {source} \xB7 ID {id}"],"detail.order":["Dettaglio punto","Ordine del LAS originale"],"detail.boundary":["Dettaglio punto","Entro 30 mm da un confine della mappatura."],"count.software":["Stati","Compatibilit\xE0 3D \xB7 fino a 150.000 campioni"],"count.points":["Stati","{n} punti in scena"],"count.original":["Stati","{n} punti nel rilievo originale"],"status.photo":["Stati","Fotopiani \xB7 angolo della corte"],"status.software":["Stati","Compatibilit\xE0 3D \xB7 campionamento adattivo"],"status.loading":["Stati","Caricamento {source}\u2026"],"status.fullscreen":["Stati","Schermo intero non disponibile in questo browser"],"status.error":["Stati","Errore di apertura"],"error.heading":["Stati","Impossibile aprire la vista 3D"],"error.body":["Stati","{error}. Apri il file HTML in un browser con WebGL2."],"error.read":["Stati","Impossibile leggere {path}"],"capture.title":["Immagini esportate","{mark} \xB7 {title} / {scene}"],"capture.note":["Immagini esportate","Mappatura manuale DXF \xB7 registrazione interpretativa \xB7 {date}"],"scale.m":["Stati","{n} m"],"scale.cm":["Stati","{n} cm"],"scale.approx":["Stati","\u2248 {value}"],"points.size":["Comandi","{n} px"],percent:["Comandi","{n}%"],"canvas.label":["Accessibilit\xE0","{title}. Trascina per ruotare."],"editor.saved":["Editor","Modifiche salvate in questo browser. Scarica l\u2019HTML per conservarle nel file."],"editor.unavailable":["Editor","Salvataggio nel browser non disponibile. Scarica l\u2019HTML per conservare le modifiche."],"editor.exporting":["Editor","Preparazione del file HTML\u2026"],"editor.exported":["Editor","File pronto. Premi \xABScarica HTML pronto\xBB per salvarlo sul computer."],"editor.download":["Editor","\u2193 Scarica HTML pronto"],"editor.exportError":["Editor","Impossibile salvare l\u2019HTML: {error}"],"editor.empty":["Editor","Nessuna dicitura corrisponde alla ricerca."],"editor.fieldReset":["Accessibilit\xE0","Ripristina questa dicitura"],"editor.resetConfirm":["Editor","Ripristinare tutte le diciture originali?"],"editor.resetButton":["Editor","Ripristina"],"editor.placeholders":["Editor","Mantieni i segnaposto: {tokens}"],"editor.count":["Editor","{n} diciture modificabili"]};Ti["legend.portico"]=["Legenda","Portico generale"],Ti["legend.porticoNote"]=["Legenda","Colori originali del rilievo \xB7 nessuna mappatura attribuita"],Ti["detail.portico"]=["Dettaglio punto","Nuvola generale del portico. Colori originali; nessuna classificazione di materiali o degradi attribuita."],Ti["detail.id"][1]="{source} \xB7 ID {id}",Ti["count.original"][1]="{n} punti nelle sorgenti",Ti["scene.photo"][1]="Fotopiani \xB7 corte Ovest\u2013Sud\u2013Est",Ti["legend.pointCaption"][1]="Classi sui punti visibili. O = Ovest \xB7 S = Sud \xB7 E = Est.",Ti["web.indexReady"]=["Editor","Index pronto. Scaricalo e sostituisci index.html nella cartella portico-g8 del sito. I dati restano nella cartella data."],Ti["web.indexDownload"]=["Editor","\u2193 Scarica index.html pronto"];function ui(e,t,i="Comandi",r=t){yi.has(e)||yi.set(e,{key:e,value:String(t),group:i,label:String(r)})}function he(e,t={}){return(Object.hasOwn(pt.texts,e)?pt.texts[e]:yi.get(e)?.value??e).replace(/\{([a-zA-Z]+)\}/g,(i,r)=>Object.hasOwn(t,r)?t[r]:i)}function Ki(e,t={}){return Iv(he(e,t))}function Ia(e,t,i,r="name"){let a=`class.${e}.${t.id}.${r}`,n=i?`class.${i.key}.${e}.${t.id}.${r}`:null;return n&&Object.hasOwn(pt.texts,n)?he(n):Object.hasOwn(pt.texts,a)?he(a):he(n||a)}function Ov(){return pt.inverted}function No(){document.documentElement.classList.toggle("colors-inverted",pt.inverted),at("invert-toggle").checked=pt.inverted}function nh(){pt.inverted=!pt.inverted,$r(),No(),Nn()}function Nn(){try{return localStorage.setItem(Do,JSON.stringify(pt)),!0}catch{return!1}}function sh(){document.querySelectorAll("[data-copy]").forEach(e=>{let t=e.dataset.copy;yi.has(t)&&(e.textContent=he(t))}),document.querySelectorAll("[data-copy-attr]").forEach(e=>{for(let[t,i]of Object.entries(JSON.parse(e.dataset.copyAttr)))e.setAttribute(t,he(i))}),document.title=he("document.title")}function Fv(){sh(),No(),rh()}function mr(e,t){at("text-status").textContent=he(e,t)}function gr(){Fv(),mr(Nn()?"editor.saved":"editor.unavailable")}function $r(){fr&&(URL.revokeObjectURL(fr),fr=null),at("download-ready").hidden=!0,at("download-ready").removeAttribute("href"),at("save-html").hidden=!1}function Bv(e){let t=e.match(/^class\.(?:ovest|sud|est)\.(materials|degradations)\.(\d+)\.(name|code)$/);return t?`class.${t[1]}.${t[2]}.${t[3]}`:null}function oh(e){let t=Bv(e);return t&&Object.hasOwn(pt.texts,t)?he(t):yi.get(e).value}function lh(e){return Object.hasOwn(pt.texts,e)?he(e):oh(e)}function kv(e,t){t===oh(e)?delete pt.texts[e]:pt.texts[e]=t,$r(),Nn(),clearTimeout(Jr),Jr=setTimeout(gr,180)}function Un(){let e=at("text-search").value.trim().toLocaleLowerCase("it"),t=at("text-group").value,i=at("text-fields");i.replaceChildren();let r=0;for(let a of yi.values()){let{key:n,value:s,label:o}=a,l=lh(n);if(t&&a.group!==t||e&&!`${o} ${l} ${a.group}`.toLocaleLowerCase("it").includes(e))continue;let c=document.createElement("div");c.className="text-field";let u=document.createElement("label"),d="edit-"+n;u.htmlFor=d,u.textContent=o;let h=document.createElement("small");h.textContent=a.group;let f=document.createElement("textarea");f.id=d,f.value=l,f.rows=l.length>130?4:l.length>65?2:1,f.spellcheck=!0,f.addEventListener("input",()=>kv(n,f.value));let M=document.createElement("button");M.type="button",M.className="text-button text-reset",M.textContent=he("editor.resetButton"),M.setAttribute("aria-label",he("editor.fieldReset")+" \xB7 "+o),M.onclick=()=>{delete pt.texts[n],f.value=lh(n),$r(),gr()},c.append(h,u,f,M);let v=s.match(/\{[a-zA-Z]+\}/g);if(v){let m=document.createElement("small");m.textContent=he("editor.placeholders",{tokens:[...new Set(v)].join(", ")}),c.append(m)}i.append(c),r++}if(!r){let a=document.createElement("p");a.textContent=he("editor.empty"),i.append(a)}at("text-field-count").textContent=he("editor.count",{n:r})}function ch(e){e.classList.remove("colors-inverted"),e.querySelector("body").className="panel-open",e.querySelectorAll("dialog").forEach(t=>t.removeAttribute("open"));for(let t of["canvas-host","text-fields","legend-content","selection-content"])e.querySelector("#"+t)?.replaceChildren();e.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("active",t.dataset.mode==="raw")),e.querySelector("#orthographic").classList.add("active"),e.querySelector("#perspective").classList.remove("active"),e.querySelector("#loader").hidden=!1,e.querySelector("#selection").hidden=!0,e.querySelector("#settings-content").hidden=!0,e.querySelector("#controls-panel").removeAttribute("inert"),e.querySelector("#text-status").textContent="",e.querySelector("#text-field-count").textContent="",e.querySelector("#text-search").value="",e.querySelector("#text-search").removeAttribute("value"),e.querySelector("#download-ready").hidden=!0,e.querySelector("#download-ready").removeAttribute("href"),e.querySelector("#save-html").hidden=!1,e.querySelectorAll('#text-group option:not([value=""])').forEach(t=>t.remove()),e.querySelectorAll("button,select,input").forEach(t=>t.removeAttribute("disabled")),e.querySelectorAll("[data-copy]").forEach(t=>{let i=yi.get(t.dataset.copy);i&&(t.textContent=i.value)}),e.querySelectorAll("[data-copy-attr]").forEach(t=>{for(let[i,r]of Object.entries(JSON.parse(t.dataset.copyAttr)))t.setAttribute(i,yi.get(r).value)}),e.querySelectorAll("script").forEach(t=>{!t.hasAttribute("data-g8-asset")&&!["g8-custom-texts","g8-registration"].includes(t.id)&&t.remove()})}function Vv(){clearTimeout(Jr),$r(),gr();try{const e=document.documentElement.cloneNode(!0);ch(e);const t=["data/manifest.js","data/dxf.js","app.js"];for(const s of e.querySelectorAll("script[data-g8-asset]"))s.remove();const i=e.querySelector("#g8-registration");for(const s of t){const o=document.createElement("script");o.dataset.g8Asset=s,o.setAttribute("src",s),i.before(o)}for(const s of e.querySelectorAll("style"))s.remove();if(!e.querySelector('link[rel="stylesheet"]')){const s=document.createElement("link");s.rel="stylesheet",s.setAttribute("href","style.css"),e.querySelector("head").append(s)}const r={revision:globalThis.crypto?.randomUUID?.()||String(Date.now()),texts:{...pt.texts},inverted:pt.inverted};e.querySelector("#g8-custom-texts").textContent=JSON.stringify(r).replace(/</g,"\\u003c");const a=new Blob([`<!doctype html>
`,e.outerHTML],{type:"text/html;charset=utf-8"});fr=URL.createObjectURL(a);const n=at("download-ready");n.href=fr,n.download="index.html",n.textContent=he("web.indexDownload"),n.hidden=!1,mr("web.indexReady")}catch(e){mr("editor.exportError",{error:e.message})}}async function zv(){clearTimeout(Jr),$r(),gr();let e=at("save-html");e.disabled=!0,mr("editor.exporting");try{await new Promise(o=>setTimeout(o,50));let t=document.documentElement.cloneNode(!0);ch(t);let i=t.querySelector('script[data-g8-asset="app.js"]');if(!i)throw new Error("Script del visualizzatore assente");let r=["data/manifest.js","data/dxf.js","data/images.js",...window.__manifest.chunks.map(o=>"data/"+o.name+".js")];for(let o of[...r,"app.js"]){let l=t.querySelector(`script[data-g8-asset="${o}"]`);if(l||(l=document.createElement("script"),l.dataset.g8Asset=o,l.src=o,i.before(l)),l.hasAttribute("src")){let c=await fetch(l.getAttribute("src"));if(!c.ok)throw new Error(o);l.textContent=await c.text(),l.removeAttribute("src")}}for(let o of t.querySelectorAll('link[rel="stylesheet"]')){let l=await fetch(o.getAttribute("href"));if(!l.ok)throw new Error("Stile non disponibile");let c=document.createElement("style");c.textContent=await l.text(),o.replaceWith(c)}let a={revision:globalThis.crypto?.randomUUID?.()||String(Date.now()),texts:pt.texts,inverted:pt.inverted};t.querySelector("#g8-custom-texts").textContent=JSON.stringify(a).replace(/</g,"\\u003c");let n=new Blob([`<!doctype html>
`,t.outerHTML],{type:"text/html;charset=utf-8"});fr=URL.createObjectURL(n);let s=at("download-ready");s.href=fr,s.download="G8_CorteSinistra_Ovest_Sud_Est_personalizzato.html",s.textContent=he("editor.download"),s.hidden=!1,e.hidden=!0,mr("editor.exported")}catch(t){mr("editor.exportError",{error:t.message})}finally{e.disabled=!1}}function Gv(e,t){if(ah)return;ah=!0,rh=t;for(let[s,[o,l]]of Object.entries(Ti))ui(s,l,o);ui("facade.title",e.title,"Titoli","Titolo dei prospetti"),ui("facade.shortTitle",e.shortTitle,"Titoli","Titolo della scena"),ui("facade.footer","CORTE SINISTRA / "+e.facade.toUpperCase(),"Titoli","Dicitura in basso a destra");for(let s of e.sources)ui("source."+s.key+".name",s.name,"Titoli","Nome del prospetto "+s.name),ui("source."+s.key+".badge",s.name[0],"Legenda","Sigla del prospetto "+s.name);for(const s of e.sources)ui("source."+s.key+".heading",s.context?"Portico generale":"Prospetto "+s.name,"Titoli","Titolo vista "+s.name);for(let s of["materials","degradations"]){let o=s==="materials"?"Materiali":"Degradi";for(let l of e[s].filter(c=>c.id))for(let c of["code","name"])ui(`class.${s}.${l.id}.${c}`,l[c],o,`${l.code} \xB7 ${c==="code"?"Codice":"Dicitura comune"}`);for(let l of e.sources)for(let c of l[s].filter(u=>u.id))for(let u of["code","name"])ui(`class.${l.key}.${s}.${c.id}.${u}`,c[u],o+": "+l.name,`${c.code} \xB7 ${l.name} \xB7 ${u==="code"?"Codice":"Dicitura"}`)}document.querySelectorAll("[data-copy]").forEach(s=>ui(s.dataset.copy,s.textContent,s.dataset.copyGroup||"Comandi")),document.querySelectorAll("[data-copy-attr]").forEach(s=>{for(let[o,l]of Object.entries(JSON.parse(s.dataset.copyAttr)))ui(l,s.getAttribute(o),"Accessibilit\xE0")});let i={};try{i=JSON.parse(at("g8-custom-texts").textContent)}catch{}Do="g8-corte-texts-"+(i.revision||"pastel-v2");let r={};try{r=JSON.parse(localStorage.getItem(Do)||(i.revision==="corte-est-v4"?localStorage.getItem("g8-corte-texts-portico-v3")||localStorage.getItem("g8-corte-texts-pastel-v2"):null)||"{}")}catch{}let a={...i,...r};pt.inverted=!!a.inverted;for(let[s,o]of Object.entries(a.texts||{}))yi.has(s)&&typeof o=="string"&&(pt.texts[s]=o);let n=[...new Set([...yi.values()].map(s=>s.group))];for(let s of n){let o=document.createElement("option");o.value=s,o.textContent=s,at("text-group").append(o)}at("edit-texts").onclick=()=>{Un(),mr(Nn()?"editor.saved":"editor.unavailable"),at("text-dialog").showModal(),at("text-search").focus()},at("text-close").onclick=()=>{clearTimeout(Jr),gr(),at("text-dialog").close()},at("text-dialog").addEventListener("close",()=>{clearTimeout(Jr),gr()}),at("text-search").oninput=Un,at("text-group").onchange=Un,at("save-html").onclick=zv,at("save-web-index").onclick=Vv,at("reset-texts").onclick=()=>{confirm(he("editor.resetConfirm"))&&(pt.texts={},$r(),gr(),Un())},at("invert-toggle").onchange=nh,sh(),No()}var ee=e=>document.getElementById(e),Ut=window.__manifest,Zi=e=>e.toLocaleString("it-IT"),bi=e=>String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),St="raw",Oa=2,Qr="medium",Uo=0,Hv=null,Oe,ot,Ue,_r,In,Wv=!1,On=[],Vi=Ut.sources,hh=new Map(Vi.map(e=>[e.key,e])),ea=[],ta=[],Yt=1,Kt=1,Io=!0,Oo=0,vr=0,Fo=null,Ji=!0,ia=null,Bo=!1,Xv=!1,jv=[],ko=new Map,Vo=Ut.materials.filter(e=>e.id),zo=Ut.degradations.filter(e=>e.id),qv=new F(0,-.6,0),Yv=new Xi(new F(...Ut.bounds[0]),new F(...Ut.bounds[1])),Kv=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)/255);function uh(e){return"vec3("+Kv(e.color).map(t=>t.toFixed(6)).join(",")+")"}function dh(e,t){return(e&1<<t-1)!==0}function Fn(e,t){return t.filter(i=>dh(e,i.id))}function ph(e,t){let i="vec3 chosen=rgb; float count=0.0;";for(let r of e)i+=`if(mod(floor(${t}/${(2**(r.id-1)).toFixed(1)}),2.0)>0.5)count+=1.0;`;i+="float slot=mod(floor((gl_FragCoord.x+gl_FragCoord.y)/5.0),max(count,1.0));float seen=0.0;";for(let r of e)i+=`if(mod(floor(${t}/${(2**(r.id-1)).toFixed(1)}),2.0)>0.5){if(abs(slot-seen)<0.5)chosen=${uh(r)};seen+=1.0;}`;return i+"return chosen;"}function Zv(){let e=[...Vo.map(i=>({...i,mask:"m"})),...zo.map(i=>({...i,mask:"d"}))],t="vec3 chosen=rgb;float count=0.0;";for(let i of e)t+=`if(mod(floor(${i.mask}/${(2**(i.id-1)).toFixed(1)}),2.0)>0.5)count+=1.0;`;t+="float slot=mod(floor((gl_FragCoord.x+gl_FragCoord.y)/5.0),max(count,1.0));float seen=0.0;";for(let i of e)t+=`if(mod(floor(${i.mask}/${(2**(i.id-1)).toFixed(1)}),2.0)>0.5){if(abs(slot-seen)<0.5)chosen=${uh(i)};seen+=1.0;}`;return t+"return chosen;"}var fh=()=>({raw:0,degradation:1,material:2,classified:3,photo:0})[St],mh=`attribute vec3 rgb;attribute vec2 mapCodes;attribute float pickId;attribute float overlap;
 varying vec3 vRGB;varying vec2 vCodes;varying float vId;varying float vOverlap;uniform float size;uniform float ratio;
 void main(){vRGB=rgb;vCodes=mapCodes;vId=pickId;vOverlap=overlap;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);gl_PointSize=max(1.0,size*ratio);}`,gh=`precision highp float;varying vec3 vRGB;varying vec2 vCodes;varying float vId;
 uniform int mode;uniform int picking;uniform int sourceCode;uniform float overlayMask;varying float vOverlap;
 vec3 materials(float mask,vec3 rgb){${ph(Vo,"mask")}}
 vec3 degradations(float mask,vec3 rgb){${ph(zo,"mask")}}
 vec3 combined(float m,float d,vec3 rgb){${Zv()}}
 void main(){if(length(gl_PointCoord-vec2(0.5))>0.5)discard;
 if(sourceCode==3){if(mod(vOverlap,2.0)>0.5&&mod(overlayMask,2.0)>0.5)discard;if(mod(floor(vOverlap/2.0),2.0)>0.5&&mod(floor(overlayMask/2.0),2.0)>0.5)discard;if(floor(vOverlap/4.0)>0.5&&floor(overlayMask/4.0)>0.5)discard;}
 if(picking==1){gl_FragColor=vec4(vCodes/255.0,float(sourceCode)/255.0,1.0);return;}
 if(picking==2){float id=vId+1.0;gl_FragColor=vec4(mod(id,256.0)/255.0,mod(floor(id/256.0),256.0)/255.0,floor(id/65536.0)/255.0,1.0);return;}
 vec3 color=vRGB;if(mode==1)color=degradations(vCodes.y,color);if(mode==2)color=materials(vCodes.x,color);if(mode==3)color=combined(vCodes.x,vCodes.y,color);gl_FragColor=vec4(color,1.0);}`,Jv="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",$v="precision highp float;varying vec2 vUv;uniform sampler2D imageMap;uniform sampler2D classMap;uniform float opacity;uniform int picking;uniform int sourceCode;void main(){vec4 a=texture2D(imageMap,vUv);if(a.a<0.1)discard;if(picking==1){vec4 c=texture2D(classMap,vUv);gl_FragColor=vec4(c.rg,float(sourceCode)/255.0,1.0);return;}if(picking==2){gl_FragColor=vec4(0.0);return;}gl_FragColor=vec4(a.rgb,a.a*opacity);}",Go=new Ht(360,240,{depthBuffer:!0,stencilBuffer:!1,minFilter:ut,magFilter:ut}),Ho=new Ht(1,1,{depthBuffer:!0,stencilBuffer:!1,minFilter:ut,magFilter:ut}),$i=new Uint8Array(360*240*4),Fa=360,Sr=240;function _h(e){return new Promise((t,i)=>{let r=document.createElement("script");r.src=e,r.onload=()=>{r.remove(),t()},r.onerror=()=>{r.remove(),i(new Error(he("error.read",{path:e})))},document.head.append(r)})}function Qi(){Io=!0}function Ba(){Qi(),vr=0,Oo=performance.now()+180,Eh(),wh()}function vh(e,t){let i=Yt/Kt;return e?new go(-t*i/2,t*i/2,t/2,-t/2,.01,1e3):new ti(40,i,.01,1e3)}function Sh(e){ot&&ot.dispose(),ot=new nv(Oe,Ue.domElement),ot.target.copy(e),ot.enableDamping=!0,ot.dampingFactor=.12,ot.rotateSpeed=.65,ot.zoomSpeed=.9,ot.screenSpacePanning=!0,ot.zoomToCursor=!0,ot.minDistance=.15,ot.maxDistance=500,ot.minZoom=.02,ot.maxZoom=250,ot.addEventListener("change",Ba),ot.update()}function Mh(){return Ji?(Oe.top-Oe.bottom)/Oe.zoom:2*Oe.position.distanceTo(ot.target)*Math.tan($a.degToRad(Oe.fov)/2)}function xh(e){if(Ji===e)return;let t=Mh(),i=ot.target.clone(),r=Oe.position.clone().sub(i).normalize();Oe=vh(e,t),Oe.position.copy(i).addScaledVector(r,t/(2*Math.tan($a.degToRad(20)))),Ji=e,Oe.lookAt(i),Sh(i),ee("orthographic").classList.toggle("active",e),ee("perspective").classList.toggle("active",!e),Ba(),vr=0}function yh(){let e=ee("viewport").getBoundingClientRect();if(Yt=Math.max(1,e.width),Kt=Math.max(1,e.height),Ue.setSize(Yt,Kt),Ji){let t=Oe.top-Oe.bottom;Oe.left=-t*Yt/Kt/2,Oe.right=t*Yt/Kt/2}else Oe.aspect=Yt/Kt;Oe.updateProjectionMatrix(),Fa=360,Sr=Math.max(100,Math.round(360*Kt/Yt)),Sr>640&&(Fa=Math.round(360*640/Sr),Sr=640),Go.setSize(Fa,Sr),$i=new Uint8Array(Fa*Sr*4),Ba(),vr=0}function er(e){return ee(e+"-toggle").checked}function Th(e){let t=hh.get(e);return new Xi(new F(...t.bounds[0]),new F(...t.bounds[1]))}function Wo(){let e=new Xi;for(let t of Vi)er(t.key)&&e.union(Th(t.key));return e.isEmpty()?Yv.clone():e}function ra(e=Wo(),t=[-1,.78,.3]){let i=e.getCenter(new F),r=new F(...t).normalize(),a=new F().crossVectors(new F(0,1,0),r).normalize(),n=new F().crossVectors(r,a).normalize(),s=1/0,o=-1/0,l=1/0,c=-1/0;for(let d of[e.min.x,e.max.x])for(let h of[e.min.y,e.max.y])for(let f of[e.min.z,e.max.z]){let M=new F(d,h,f).sub(i),v=M.dot(a),m=M.dot(n);s=Math.min(s,v),o=Math.max(o,v),l=Math.min(l,m),c=Math.max(c,m)}let u=Math.max(c-l,(o-s)/(Yt/Kt))*1.27;Oe.up.set(0,1,0),Ji?(Oe.top=u/2,Oe.bottom=-u/2,Oe.left=-u*Yt/Kt/2,Oe.right=u*Yt/Kt/2,Oe.zoom=1,Oe.position.copy(i).addScaledVector(r,70)):Oe.position.copy(i).addScaledVector(r,u/(2*Math.tan($a.degToRad(20)))+e.getSize(new F).length()/3),ot.target.copy(i),Oe.lookAt(i),Oe.updateProjectionMatrix(),ot.update(),Ba()}function Qv(e){const t={west:["ovest",[0,0,1]],south:["sud",[-1,0,0]],east:["est",[0,0,-1]],portico:["portico",[-1,.78,.3]]}[e];if(t){for(const r of Vi)ee(r.key+"-toggle").checked=r.key===t[0];tr(),ra(Th(t[0]),t[1]);return}if(e==="iso"){for(const r of Vi)ee(r.key+"-toggle").checked=!0;tr()}const i={front:[0,0,1],back:[0,0,-1],left:[-1,0,0],right:[1,0,0],top:[0,1,1e-4],iso:[-1,.78,.3]};ra(Wo(),i[e]||i.iso)}function bh(e){Ji?(Oe.zoom=Math.min(250,Math.max(.02,Oe.zoom*e)),Oe.updateProjectionMatrix()):Oe.position.sub(ot.target).multiplyScalar(1/e).add(ot.target),ot.update(),Ba()}function Eh(){if(!Oe||!ot)return;let e=Mh()/Kt,t=e*85,i=10**Math.floor(Math.log10(t)),r=([1,2,5,10].find(a=>a*i>=t)||10)*i;ee("scale-bar").style.width=r/e+"px",ee("scale-text").textContent=Ji?he(r<1?"scale.cm":"scale.m",{n:Zi(r<1?Math.round(r*100):Math.round(r*100)/100)}):he("scale.approx",{value:he(r<1?"scale.cm":"scale.m",{n:Zi(r<1?Math.round(r*100):Math.round(r*100)/100)})})}function wh(){ee("projection-label").textContent=he(Ji?"projection.ortho":"projection.perspective")}function Ah(e,t){return{overlayMask:{value:0},sourceCode:{value:t},size:{value:Oa},ratio:{value:Ue.getPixelRatio()},mode:{value:fh()},picking:{value:e}}}async function Rh(e){if(ko.has(e))return;let t=Ut.chunks.find(x=>x.name===e),i=hh.get(t.source),r=i.transform;window.__cloudParts?.[e]||await _h("data/"+e+".js");let a=window.__cloudParts[e];delete window.__cloudParts[e];let n=Lv(Uint8Array.from(atob(a),x=>x.charCodeAt(0)));if(Ut.encoding==="columnar16-v1"){const x=n,b=n.length/16;n=new Uint8Array(x.length);for(let A=0;A<16;A++)for(let E=0;E<b;E++)n[E*16+A]=x[A*b+E]}let s=new DataView(n.buffer,n.byteOffset,n.byteLength),o=n.byteLength/16,l=new Float32Array(o*3),c=new Uint8Array(o*3),u=new Uint8Array(o*2),d=new Uint32Array(o),h=new Float32Array(o),f=new Uint8Array(o),M=Uo;for(let x=0;x<o;x++){let b=x*16;l[x*3]=s.getInt16(b,!0)/1e3,l[x*3+1]=s.getInt16(b+2,!0)/1e3,l[x*3+2]=s.getInt16(b+4,!0)/1e3,c[x*3]=n[b+6],c[x*3+1]=n[b+7],c[x*3+2]=n[b+8],u[x*2]=n[b+9],u[x*2+1]=n[b+10],f[x]=n[b+11],d[x]=s.getUint32(b+12,!0),h[x]=M+x}for(let x=0;x<o;x++){let b=x*3,A=l[b],E=l[b+1],g=l[b+2];l[b]=r[0][0]*A+r[0][1]*E+r[0][2]*g+r[0][3],l[b+1]=r[1][0]*A+r[1][1]*E+r[1][2]*g+r[1][3],l[b+2]=r[2][0]*A+r[2][1]*E+r[2][2]*g+r[2][3]}let v=new ei;v.setAttribute("position",new Dt(l,3)),v.setAttribute("rgb",new Dt(c,3,!0)),v.setAttribute("mapCodes",new Dt(u,2)),v.setAttribute("overlap",new Dt(Uint8Array.from(f,x=>i.context?x>>5&7:0),1)),v.setAttribute("originalId",new Dt(d,1)),v.setAttribute("pickId",new Dt(h,1)),v.computeBoundingSphere();let m=new jt({vertexShader:mh,fragmentShader:gh,uniforms:Ah(0,i.code),toneMapped:!1}),p=new jt({vertexShader:mh,fragmentShader:gh,uniforms:Ah(1,i.code),toneMapped:!1}),w=new tc(v,m),N=new tc(v,p);_r.add(w),In.add(N),ea.push({name:e,level:t.level,source:i,p:w,pp:N,n:o,flags:f,ids:d,codes:u,pos:l,pickStart:M}),ko.set(e,!0),jv.push(v),Uo+=o,tr()}async function Ch(e){if(Qr=e,Fo)return;Fo=!0,ee("quality").disabled=!0;let t={base:["base"],medium:["base","medium"],full:["base","medium","full"]};try{for(let i of Ut.chunks)t[e].includes(i.level)&&!ko.has(i.name)&&(ee("status").textContent=he("status.loading",{source:he("source."+i.source+".name")}),await Rh(i.name),await new Promise(r=>setTimeout(r,0)))}catch(i){ee("status").textContent=i.message,Xv=!0}finally{Fo=!1,ee("quality").disabled=!!Ue.software,tr()}}function tr(){const e=Vi.filter(a=>er(a.key)),t=e.length===1?"source."+e[0].key+".heading":"facade.shortTitle";ee("view-title").innerHTML=bi(he(t))+"<span>.</span>";let i=0;for(let a of ea){let n=a.level==="base"||a.level==="medium"&&Qr!=="base"||a.level==="full"&&Qr==="full",s=er(a.source.key);a.p.visible=a.pp.visible=St!=="photo"&&n&&s,a.p.material.uniforms.mode.value=fh(),a.p.material.uniforms.overlayMask.value=a.pp.material.uniforms.overlayMask.value=(er("ovest")?1:0)|(er("sud")?2:0)|(er("est")?4:0),n&&s&&St!=="photo"&&(i+=a.n)}for(let a of On){a.mesh.visible=a.pick.visible=(St==="photo"||ee("photo-toggle").checked)&&er(a.source.key);let n=St==="photo"?0:-.36;a.mesh.position.fromArray(a.source.normal).multiplyScalar(n),a.pick.position.copy(a.mesh.position)}let r=ee("dxf-toggle").checked;for(let a of ta)a.object.visible=r&&ee("dxf-"+a.kind).checked&&er(a.source);ee("point-count").textContent=Ue.software?he("count.software"):he("count.points",{n:Zi(i)}),ee("status").textContent=St==="photo"?he("status.photo"):Ue.software?he("status.software"):he("count.points",{n:Zi(i)}),ee("dxf-options").hidden=!r,ee("photo-opacity-wrap").hidden=!(St==="photo"||ee("photo-toggle").checked),ee("photo-toggle").disabled=St==="photo",ee("legend-caption").textContent=he(St==="photo"?"legend.photoCaption":St==="classified"?"legend.classifiedCaption":"legend.pointCaption"),ee("selection").hidden=!0,Qi(),vr=0}function Ph(e){St=e;for(let t of document.querySelectorAll("[data-mode]"))t.classList.toggle("active",t.dataset.mode===St);ee("scene-label").textContent=he("scene."+St),ee("selection").hidden=!0,tr()}async function e0(){window.__images||await _h("data/images.js");let e=new jd;for(let t of Vi.filter(i=>i.photoCorners)){let i=window.__images[t.key],[r,a]=await Promise.all([e.loadAsync(i.photo),e.loadAsync(i.classes)]);r.colorSpace=Pi,r.minFilter=r.magFilter=Rt,a.minFilter=a.magFilter=ut,a.generateMipmaps=!1;let n=new ei;n.setAttribute("position",new Bt(t.photoCorners.flat(),3)),n.setAttribute("uv",new Bt([0,1,1,1,1,0,0,0],2)),n.setIndex([0,2,1,0,3,2]);let s={imageMap:{value:r},classMap:{value:a},opacity:{value:1},picking:{value:0},sourceCode:{value:t.code}},o=new jt({vertexShader:Jv,fragmentShader:$v,uniforms:s,side:di,transparent:!0,toneMapped:!1,depthWrite:!0}),l=new li(n,o),c=o.clone();c.transparent=!1,c.uniforms.picking.value=1;let u=new li(n,c);l.userData.corners=t.photoCorners,l.userData.sourceCode=t.code,_r.add(l),In.add(u),On.push({source:t,mesh:l,pick:u})}delete window.__images,Wv=!0,tr()}function t0(){for(let e of window.__dxf.groups){let t=new ei;t.setAttribute("position",new Bt(e.positions.flat(),3));let i=new Kl({color:1513239,transparent:!0,opacity:.7,depthTest:!1,depthWrite:!1}),r=new Td(t,i);r.renderOrder=3,_r.add(r),ta.push({object:r,source:e.source,kind:e.kind,name:e.name})}delete window.__dxf}function Lh(e,t){let i=Ue.getClearColor(new Xe),r=Ue.getClearAlpha();Ue.setClearColor(0,0);for(let a of ea)a.pp.material.uniforms.picking.value=t,a.pp.material.uniforms.ratio.value=t===2?Ue.getPixelRatio():e.width/Yt;for(let a of On)a.pick.material.uniforms.picking.value=t;Ue.setRenderTarget(e),Ue.clear(),Ue.render(In,Oe),Ue.setRenderTarget(null),Ue.setClearColor(i,r)}function i0(){Oe.updateMatrixWorld();let e=new ct().multiplyMatrices(Oe.projectionMatrix,Oe.matrixWorldInverse),t=new Set,i=new F,r=new F;for(let a of ta){if(!a.object.visible||t.has(a.kind))continue;let n=a.object.geometry.attributes.position.array;for(let s=0;s<n.length;s+=6)if(i.set(n[s],n[s+1],n[s+2]).applyMatrix4(e),r.set(n[s+3],n[s+4],n[s+5]).applyMatrix4(e),Math.min(i.x,r.x)<=1&&Math.max(i.x,r.x)>=-1&&Math.min(i.y,r.y)<=1&&Math.max(i.y,r.y)>=-1&&Math.min(i.z,r.z)<=1&&Math.max(i.z,r.z)>=-1){t.add(a.kind);break}}return[...t]}function Xo(){if(Uo===0)return;let e=0,t=0,i=0,r=Vi.map(()=>({mm:0,dd:0,samples:0}));if(Ue.software)Ue.render(_r,Oe),{mm:e,dd:t,samples:i,perSource:r}=Ue.legend();else{Lh(Go,1),Ue.readRenderTargetPixels(Go,0,0,Fa,Sr,$i);for(let l=0;l<$i.length;l+=4){let c=$i[l+2]-1;c>=0&&c<Vi.length&&(e|=$i[l],t|=$i[l+1],r[c].mm|=$i[l],r[c].dd|=$i[l+1],r[c].samples++,i++)}}let a=Fn(e,Vo),n=Fn(t,zo),s="",o=(l,c,u,d)=>c.length?`<div class="legend-family">${bi(l)}</div>`+c.map(h=>{let f=Vi.filter((p,w)=>dh(r[w][d],h.id)),M=d==="mm"?"materials":"degradations",v=f.map(p=>he("source."+p.key+".name")+": "+Ia(M,h,p)).join(" \xB7 "),m=Ia(M,h,f.length===1?f[0]:null);return`<div class="legend-row" title="${bi(v)}">${u?`<i class="swatch" style="background:${h.color}"></i>`:""}<span class="legend-code">${bi(Ia(M,h,f.length===1?f[0]:null,"code"))}</span><span class="legend-name">${bi(m)}</span><span class="legend-sources">${f.map(p=>bi(he("source."+p.key+".badge"))).join("\xB7")}</span></div>`}).join(""):"";if(St==="degradation"?(s+=o(he("legend.degradations"),n,!0,"dd"),s+=o(he("legend.materialsPresent"),a,!1,"mm")):St==="material"?(s+=o(he("legend.materials"),a,!0,"mm"),s+=o(he("legend.degradationsPresent"),n,!1,"dd")):(s+=o(he("legend.materials"),a,St==="classified","mm"),s+=o(he("legend.degradations"),n,St==="classified","dd")),ee("dxf-toggle").checked){let l=i0();l.length&&(s+='<div class="legend-family">'+Ki("legend.dxf")+"</div>"+l.map(c=>`<div class="legend-row"><i class="swatch" style="background:#333;height:1px;margin-top:7px"></i><span class="legend-name">${Ki("legend."+c)}</span></div>`).join(""))}r[2]?.samples>0&&(s+='<div class="context-legend"><div class="legend-family">'+Ki("legend.portico")+'</div><p class="micro">'+Ki("legend.porticoNote")+"</p></div>"),ee("legend-content").innerHTML!==s&&(ee("legend-content").innerHTML=s),ee("legend-content").dataset.materialMask=e,ee("legend-content").dataset.degradationMask=t,ee("legend-content").dataset.sources=JSON.stringify(r),ee("legend-content").dataset.samples=i}function r0(e){if(St==="photo")return;let t=Ue.domElement.getBoundingClientRect(),i=-1;if(Ue.software)i=Ue.pointAt(e.clientX-t.left,e.clientY-t.top);else{let r=Math.floor((e.clientX-t.left)*Ue.getPixelRatio()),a=Math.floor((e.clientY-t.top)*Ue.getPixelRatio()),n=Math.round(Yt*Ue.getPixelRatio()),s=Math.round(Kt*Ue.getPixelRatio());Oe.setViewOffset(n,s,r-2,a-2,5,5),Oe.updateProjectionMatrix(),Ho.setSize(5,5),Lh(Ho,2);let o=new Uint8Array(100);Ue.readRenderTargetPixels(Ho,0,0,5,5,o),Oe.clearViewOffset(),Oe.updateProjectionMatrix();let l=100;for(let c=0;c<25;c++){let u=o[c*4]+o[c*4+1]*256+o[c*4+2]*65536-1,d=(c%5-2)**2+(Math.floor(c/5)-2)**2;u>=0&&d<l&&(i=u,l=d)}}if(i<0){ee("selection").hidden=!0,Qi();return}for(let r of ea){if(!r.p.visible)continue;let a=i-r.pickStart;if(a<0||a>=r.n)continue;let n=Fn(r.codes[a*2],r.source.materials.filter(l=>l.id)),s=Fn(r.codes[a*2+1],r.source.degradations.filter(l=>l.id)),o=`<small>${Ki("detail.id",{source:he("source."+r.source.key+".name"),id:Zi(r.ids[a]+1)})}<br>${Ki("detail.order")}</small>`;for(let[l,c]of[["materials",n],["degradations",s]])for(let u of c)o+=`<div class="select-item"><b>${bi(Ia(l,u,r.source,"code"))}</b><span>${bi(Ia(l,u,r.source))}</span></div>`;r.source.context&&(o+='<p class="micro">'+Ki("detail.portico")+"</p>"),r.flags[a]&1&&(o+='<p class="micro">'+Ki("detail.boundary")+"</p>"),ee("selection-content").innerHTML=o,ee("selection").hidden=!1,Hv=i;break}Qi()}function Dh(){requestAnimationFrame(Dh),ot.update();let e=performance.now();Io&&(Ue.render(_r,Oe),Io=!1),e>Oo&&vr===0&&e>220&&(Xo(),vr=e)}function a0(){ee("help-dialog").showModal()}function n0(){ee("settings-toggle").onclick=()=>{let t=ee("settings-content");t.hidden=!t.hidden,ee("settings-toggle").textContent=he(t.hidden?"settings.open":"settings.close"),ee("settings-toggle").setAttribute("aria-expanded",String(!t.hidden))},ee("dxf-toggle").addEventListener("change",()=>{ee("dxf-toggle").checked&&(ee("settings-content").hidden=!1,ee("settings-toggle").textContent=he("settings.close"),ee("settings-toggle").setAttribute("aria-expanded","true"))}),document.querySelectorAll("[data-mode]").forEach(t=>t.onclick=()=>Ph(t.dataset.mode)),document.querySelectorAll("[data-view]").forEach(t=>t.onclick=()=>Qv(t.dataset.view)),ee("orthographic").onclick=()=>xh(!0),ee("perspective").onclick=()=>xh(!1),ee("fit").onclick=()=>ra(),ee("zoom-in").onclick=()=>bh(1.35),ee("zoom-out").onclick=()=>bh(1/1.35),["ovest-toggle","sud-toggle","est-toggle","portico-toggle","dxf-toggle","dxf-architecture","dxf-degradation","dxf-material","photo-toggle"].forEach(t=>ee(t).onchange=tr),ee("dxf-opacity").oninput=t=>{let i=Number(t.target.value);ee("dxf-value").textContent=he("percent",{n:i}),ta.forEach(r=>r.object.material.opacity=i/100),Qi()},ee("photo-opacity").oninput=t=>{let i=Number(t.target.value);ee("photo-value").textContent=he("percent",{n:i});for(let r of On)r.mesh.material.uniforms.opacity.value=i/100;Qi()},ee("point-size").oninput=t=>{Oa=Number(t.target.value),ee("point-value").textContent=he("points.size",{n:Oa.toLocaleString("it-IT",{minimumFractionDigits:1})});for(let i of ea)i.p.material.uniforms.size.value=i.pp.material.uniforms.size.value=Oa;Qi(),vr=0},ee("quality").onchange=t=>Ch(t.target.value),ee("dark-toggle").onchange=t=>{Ue.setClearColor(t.target.checked?2105376:15329766,1),document.body.classList.toggle("is-dark",t.target.checked),ta.forEach(i=>i.object.material.color.set(t.target.checked?14804186:1513239)),Qi()},ee("fit-dxf").onclick=()=>{let t=Wo();for(let i of ta)i.object.visible&&(i.object.geometry.computeBoundingBox(),t.union(i.object.geometry.boundingBox));ra(t)},ee("help").onclick=ee("method").onclick=a0,ee("help-close").onclick=()=>ee("help-dialog").close(),ee("help-dialog").onclick=t=>{if(t.target===ee("help-dialog")){let i=t.target.getBoundingClientRect();(t.clientX<i.left||t.clientX>i.right||t.clientY<i.top||t.clientY>i.bottom)&&t.target.close()}};let e=t=>{document.body.classList.toggle("panel-open",t),ee("panel-toggle").setAttribute("aria-expanded",String(t)),ee("controls-panel").inert=!t};ee("panel-toggle").onclick=()=>e(!document.body.classList.contains("panel-open")),ee("panel-close").onclick=()=>e(!1),e(window.innerWidth>900),ee("close-selection").onclick=()=>ee("selection").hidden=!0,ee("fullscreen").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{ee("status").textContent=he("status.fullscreen")}},ee("capture").onclick=()=>{Ue.render(_r,Oe);let t=document.createElement("canvas"),i=Ue.domElement.width,r=Ue.domElement.height;t.width=i,t.height=r+70;let a=t.getContext("2d");a.fillStyle="#f7f7f4",a.fillRect(0,0,i,r+70),a.drawImage(Ue.domElement,0,0),a.fillStyle="#222",a.font="16px Helvetica,Arial,sans-serif",a.fillText(he("capture.title",{mark:he("brand.mark"),title:he("facade.shortTitle"),scene:ee("scene-label").textContent}),20,r+28),a.font="11px Helvetica,Arial,sans-serif",a.fillStyle="#666",a.fillText(he("capture.note",{date:new Date().toLocaleDateString("it-IT")}),20,r+50),Ov()&&(a.globalCompositeOperation="difference",a.fillStyle="#fff",a.fillRect(0,0,i,r+70),a.globalCompositeOperation="source-over");let n=document.createElement("a");n.download="CorteSinistra_"+St+".png",n.href=t.toDataURL("image/png"),n.click()},Ue.domElement.addEventListener("pointerdown",t=>{ia={x:t.clientX,y:t.clientY},Bo=!1}),Ue.domElement.addEventListener("pointermove",t=>{ia&&Math.hypot(t.clientX-ia.x,t.clientY-ia.y)>5&&(Bo=!0)}),Ue.domElement.addEventListener("pointerup",t=>{!Bo&&ia&&t.button===0&&r0(t),ia=null}),window.addEventListener("keydown",t=>{t.ctrlKey||t.metaKey||t.altKey||t.repeat||t.target.isContentEditable||["INPUT","SELECT","TEXTAREA"].includes(t.target.tagName)||document.querySelector("dialog[open]")||(t.key.toLowerCase()==="i"&&(t.preventDefault(),nh()),t.key.toLowerCase()==="f"&&ra(),/^[1-5]$/.test(t.key)&&Ph(["raw","classified","degradation","material","photo"][Number(t.key)-1]))}),new ResizeObserver(yh).observe(ee("viewport")),window.matchMedia("(pointer:coarse)").matches&&(ee("gesture-hint").textContent=he("gesture.touch"),Qr="base",ee("quality").value="base")}async function s0(){try{Gv(Ut,Nh),ee("facade-title").textContent=he("facade.title"),ee("view-title").innerHTML=bi(he("facade.shortTitle"))+"<span>.</span>",ee("footer-facade").textContent=he("facade.footer"),ee("loading-count").textContent=he("count.original",{n:Zi(Ut.count)}),document.title=he("document.title");let e=0;for(let t of Ut.parts){e+=t.count;let i=ee("quality").querySelector('[value="'+t.name+'"]');i.textContent=he("quality."+t.name,{n:(e/1e6).toLocaleString("it-IT",{maximumFractionDigits:2})})}try{Ue=new rv({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"})}catch{Ue=new Uv(Ut,()=>performance.now()<Oo),Qr="base",ee("quality").value="base"}Ue.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Ue.setClearColor(15329766,1),Ue.outputColorSpace=pa,Ue.domElement.setAttribute("aria-label",he("canvas.label",{title:he("facade.title")})),Ue.domElement.setAttribute("role","img"),ee("canvas-host").appendChild(Ue.domElement),_r=new Vl,In=new Vl,Yt=ee("viewport").clientWidth,Kt=ee("viewport").clientHeight,Oe=vh(!0,23),Oe.position.set(0,0,40),Sh(qv),t0(),n0(),yh(),ra(),Dh(),await Promise.all([...Ut.chunks.filter(t=>t.level==="base").map(t=>Rh(t.name)),e0()]),ee("loader").hidden=!0,await Ch(Qr),Nh(),Xo(),ee("status").textContent=Ue.software?he("status.software"):he("count.points",{n:Zi(ea.filter(t=>t.p.visible).reduce((t,i)=>t+i.n,0))})}catch(e){console.error(e),ee("loading-text").textContent=he("error.heading"),ee("loader").querySelector("span").textContent=he("error.body",{error:e.message}),ee("status").textContent=he("status.error")}}function Nh(){ee("facade-title").textContent=he("facade.title"),ee("view-title").innerHTML=bi(he("facade.shortTitle"))+"<span>.</span>",ee("footer-facade").textContent=he("facade.footer"),ee("scene-label").textContent=he("scene."+St),ee("loading-count").textContent=he("count.original",{n:Zi(Ut.count)}),ee("settings-toggle").textContent=he(ee("settings-content").hidden?"settings.open":"settings.close");let e=0;for(let t of Ut.parts)e+=t.count,ee("quality").querySelector('[value="'+t.name+'"]').textContent=he("quality."+t.name,{n:(e/1e6).toLocaleString("it-IT",{maximumFractionDigits:2})});ee("point-value").textContent=he("points.size",{n:Oa.toLocaleString("it-IT",{minimumFractionDigits:1})});for(let t of["photo","dxf"])ee(t+"-value").textContent=he("percent",{n:ee(t+"-opacity").value});window.matchMedia("(pointer:coarse)").matches&&(ee("gesture-hint").textContent=he("gesture.touch")),Ue&&(Ue.domElement.setAttribute("aria-label",he("canvas.label",{title:he("facade.title")})),tr(),Eh(),wh(),Xo())}s0()})();/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/})();
