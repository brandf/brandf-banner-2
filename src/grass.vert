precision mediump float;

uniform mat4 u_modelViewProj;

attribute vec3 a_position;

void main() {
  gl_Position = u_modelViewProj * vec4(a_position, 1.0);
}
