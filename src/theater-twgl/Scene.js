import twgl from 'twgl.js';
import { Scene } from 'theater.js';

export default class WGLScene extends Scene {
  constructor(canvas) {
    super();
    twgl.setDefaults({ attribPrefix: 'a_' });
    const gl = twgl.getWebGLContext(canvas);
    this.gl = gl;
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);

    const animationFrame = (time) => {
      twgl.resizeCanvasToDisplaySize(gl.canvas);
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      // eslint-disable-next-line no-bitwise
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      this.tick(time);
      requestAnimationFrame(animationFrame);
    };
    requestAnimationFrame(animationFrame);
  }
}
