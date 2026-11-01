const clamp = value => Math.max(-1, Math.min(1, value));

// Relative pose only: no identity, gaze estimation or persistent face data.
export function measureHead(points) {
  const left = points[33], right = points[263], nose = points[1];
  const width = Math.hypot(right.x-left.x, right.y-left.y);
  if (!Number.isFinite(width) || width < .015) return null;
  const x = (left.x+right.x)/2, y = (left.y+right.y)/2;
  return {x, y, width, yaw: (nose.x-x)/width, pitch: (nose.y-y)/width};
}

export function headOffset(pose, origin) {
  return [
    clamp((pose.x-origin.x)/origin.width*1.8 + (pose.yaw-origin.yaw)*.65),
    clamp(-(pose.y-origin.y)/origin.width*1.8 - (pose.pitch-origin.pitch)*.45)
  ];
}
