precision mediump float;

uniform float u_time;
uniform mat4 u_modelViewProj;

attribute vec3 a_position;

void main() {
  vec4 pos = vec4(a_position, 1.0);
  pos.x += 0.1 * pos.y * cos(u_time * 0.0013 + pos.y * 2.0 * cos(u_time * 0.0001) + pos.x * 5.0 * cos(u_time * 0.0001));
  pos.z += 0.1 * pos.y * sin(u_time * 0.001 + pos.y * 2.0 * sin(u_time * 0.00011) + pos.z * 5.0 * sin(u_time * 0.0001));
  gl_Position = u_modelViewProj * pos;
}
