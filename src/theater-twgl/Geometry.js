import twgl from 'twgl.js';

export default class WGLGeometry {
  constructor(scene, type, arrays) {
    this.gl = scene.gl;
    this.type = type;
    this.bufferInfo = twgl.createBufferInfoFromArrays(this.gl, arrays);
  }
  draw(material, materialInfo) {
    this.gl.useProgram(material.programInfo.program);
    twgl.setBuffersAndAttributes(this.gl, material.programInfo, this.bufferInfo);
    material.setUniforms(materialInfo);
    twgl.drawBufferInfo(this.gl, this.type, this.bufferInfo);
  }
}
