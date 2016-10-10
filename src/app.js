import { Actor, Camera } from 'theater.js';
import Scene from './theater-twgl/Scene';
import Geometry from './theater-twgl/Geometry';
import Material from './theater-twgl/Material';
import './app.css';
import vs from './grass.vert';
import fs from './grass.frag';

const scene = new Scene(document.getElementById('gl'));
const camera = new Camera();
camera.moveTo(10, 10, 20);
camera.lookAt(10, 0, 9);
scene.addChild(camera);

const points = [];
for (let i = 0; i < 100; i++) {
  points.push(0); points.push(i * 0.1); points.push(0);
}

const grassMaterial = new Material(scene, vs, fs);
const grassGeometry = new Geometry(scene, scene.gl.LINE_STRIP, {
  position: points,
});

for (let y = 0; y < 10; y++) {
  for (let x = 0; x < 10; x++) {
    const grass = new Actor({
      material: grassMaterial,
      geometry: grassGeometry,
    });
    grass.moveTo(x * 2, 0, y * 2);
    scene.addChild(grass);
  }
}

