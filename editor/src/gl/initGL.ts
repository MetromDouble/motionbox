import * as Three from 'three';

import { Cursor3D } from './Cursor3D';

export const scene = new Three.Scene();
export const renderer = new Three.WebGLRenderer();
export let camera: Three.PerspectiveCamera;
export const updateStack: Function[] = [];
export const cursor3D = new Cursor3D();

export const initGL = (element: HTMLDivElement): void => {
  camera = new Three.PerspectiveCamera(75, element.offsetWidth / element.offsetHeight, 0.1, 1000);

  renderer.setSize(element.offsetWidth, element.offsetHeight);

  element.appendChild(renderer.domElement);

  camera.position.z = 5;

  scene.add(cursor3D.mesh);

  function animate() {
    requestAnimationFrame(animate);

    cursor3D.mesh.rotateX(0.01);
    cursor3D.mesh.rotateY(0.02);

    if (updateStack.length) updateStack.forEach(func => func());

    renderer.render(scene, camera);
  }
  animate();
};
