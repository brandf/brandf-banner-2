import { Actor, Camera, vec3 } from 'theater.js';
import Scene from './theater-twgl/Scene';
import Geometry from './theater-twgl/Geometry';
import Material from './theater-twgl/Material';
import './app.css';
import vs from './grass.vert';
import fs from './grass.frag';

const points = [];
for (let i = 0; i < 100; i++) {
  points.push(0); points.push(i * 0.01); points.push(0);
}

const scene = new Scene(document.getElementById('gl'));
const camera = new Camera();
vec3.set(camera.pose.position, 0, 0, -50);
scene.addChild(camera);

const grassMaterial = new Material(scene, vs, fs);
const grassGeometry = new Geometry(scene, scene.gl.LINE_STRIP, { position: points });

for (let y = 0; y < 20; y++) {
  for (let x = 0; x < 20; x++) {
    const grass = new Actor({
      material: grassMaterial,
      geometry: grassGeometry,
    });
    vec3.set(grass.pose.position, x, 0, -y);
    scene.addChild(grass);
  }
}
