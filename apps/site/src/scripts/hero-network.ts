// Animated network background for the home hero (WebGL). Falls back to the plain
// dark background if WebGL is unavailable, and draws a single frame when the
// visitor prefers reduced motion.
const VS = 'attribute vec2 a; void main(){ gl_Position = vec4(a, 0.0, 1.0); }';
const FS = `precision highp float;
uniform vec2 r; uniform float t; uniform vec2 m; uniform vec3 acc; uniform float fl;
float h1(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
vec2 h2(vec2 p){ return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453); }
vec2 pt(vec2 c){ vec2 o = h2(c); return c + 0.5 + 0.36*sin(t*0.35 + 6.2831*o); }
float seg(vec2 p, vec2 a, vec2 b, out float k){ vec2 pa = p-a, ba = b-a; k = clamp(dot(pa,ba)/dot(ba,ba), 0.0, 1.0); return length(pa - ba*k); }
vec3 net(vec2 p, float sc, float w, vec2 mp){
  p *= sc; vec2 mq = mp*sc; vec2 c = floor(p); vec3 col = vec3(0.0);
  for(int j = -1; j <= 1; j++){ for(int i = -1; i <= 1; i++){
    vec2 n = c + vec2(float(i), float(j)); vec2 a = pt(n);
    float near = exp(-length(a - mq)*0.9/sc*3.0);
    float dn = length(p - a);
    col += vec3(0.92, 0.96, 1.0) * smoothstep(0.075, 0.0, dn) * (0.55 + near);
    col += acc * smoothstep(0.35, 0.0, dn) * 0.06 * (1.0 + 4.0*near);
    for(int e = 0; e < 3; e++){
      vec2 o = e == 0 ? vec2(1.0, 0.0) : (e == 1 ? vec2(0.0, 1.0) : vec2(1.0, 1.0));
      if(e == 2 && h1(n + 3.1) < 0.55) continue;
      vec2 b = pt(n + o); float k; float d = seg(p, a, b, k);
      float ln = smoothstep(w, 0.0, d);
      float ph = fract(t*0.28 + h1(n*1.7 + o*5.3));
      float pulse = exp(-abs(k - ph)*26.0) * step(0.45, h1(n + o*9.0 + floor(t*0.28 + h1(n*1.7 + o*5.3))));
      col += acc * ln * (0.10 + 0.5*near) * (1.0 + 2.2*fl) + acc * smoothstep(w*3.5, 0.0, d) * pulse * (1.4 + 2.0*fl);
    }
  }}
  return col;
}
void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5*r) / r.y;
  vec2 mp = (m*r - 0.5*r) / r.y;
  vec2 par = mp * 0.04;
  vec3 col = vec3(0.012, 0.016, 0.024);
  col += net(uv + par*0.5 + vec2(t*0.006, 0.0), 2.6, 0.02, mp) * 0.35;
  col += net(uv + par + vec2(-t*0.01, 0.0), 1.45, 0.012, mp) * 0.9;
  col += acc * 0.07 * exp(-length(uv - mp)*2.4);
  col *= smoothstep(1.7, 0.2, length(uv*vec2(0.7, 1.0) - vec2(0.25, 0.0)));
  col += (h1(gl_FragCoord.xy + fract(t)*91.0) - 0.5) * 0.035;
  gl_FragColor = vec4(col, 1.0);
}`;

function rgb(hex: string): [number, number, number] {
  let h = hex.trim().replace('#', '');
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  const n = parseInt(h, 16);
  if (Number.isNaN(n)) return [0.36, 0.94, 0.78];
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

/** Starts the animation. Returns flash(): a brief glow across the network, used when a block is agreed. */
export function startNetwork(c: HTMLCanvasElement, area: HTMLElement): { flash: () => void } {
  let fl = 0;
  const api = { flash: () => { fl = 1; } };
  const gl = c.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'high-performance' });
  if (!gl) return api;
  const mk = (type: number, src: string) => { const s = gl.createShader(type)!; gl.shaderSource(s, src); gl.compileShader(s); return s; };
  const pr = gl.createProgram()!;
  gl.attachShader(pr, mk(gl.VERTEX_SHADER, VS));
  gl.attachShader(pr, mk(gl.FRAGMENT_SHADER, FS));
  gl.linkProgram(pr);
  if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return api;
  gl.useProgram(pr);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(pr, 'a');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const uR = gl.getUniformLocation(pr, 'r'), uT = gl.getUniformLocation(pr, 't');
  const uM = gl.getUniformLocation(pr, 'm'), uA = gl.getUniformLocation(pr, 'acc'), uF = gl.getUniformLocation(pr, 'fl');
  const acc = rgb(getComputedStyle(document.documentElement).getPropertyValue('--acc') || '#5BF0C8');
  const mouse = [0.7, 0.6], target = [0.7, 0.6];
  area.addEventListener('mousemove', (e) => {
    const b = area.getBoundingClientRect();
    target[0] = (e.clientX - b.left) / b.width;
    target[1] = 1 - (e.clientY - b.top) / b.height;
  });
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let last = performance.now(), time = 12;
  const frame = (now: number) => {
    const dt = Math.min(0.05, (now - last) / 1000); last = now; time += dt;
    const scale = Math.min(devicePixelRatio || 1, 1.5) * 0.75;
    const w = Math.max(1, Math.round(c.clientWidth * scale)), h = Math.max(1, Math.round(c.clientHeight * scale));
    if (c.width !== w || c.height !== h) { c.width = w; c.height = h; }
    gl.viewport(0, 0, w, h);
    mouse[0] += (target[0] - mouse[0]) * 0.05;
    mouse[1] += (target[1] - mouse[1]) * 0.05;
    gl.uniform2f(uR, w, h); gl.uniform1f(uT, time);
    fl *= Math.pow(0.12, dt);
    gl.uniform2f(uM, mouse[0], mouse[1]); gl.uniform3f(uA, acc[0], acc[1], acc[2]); gl.uniform1f(uF, fl);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    if (!reduce) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
  return api;
}
