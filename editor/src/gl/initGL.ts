import * as Three from 'three';

import { Cursor3D } from './Cursor3D';

export const scene = new Three.Scene();
export const renderer = new Three.WebGLRenderer({ antialias: true  });
export let camera: Three.PerspectiveCamera;
export const updateStack: Function[] = [];
export const cursor3D = new Cursor3D();

const onMouseDown = (width: number, height: number, object: Three.Object3D) => (ev: MouseEvent) => {
  var vectorMouse = new Three.Vector3( //vector from camera to mouse
    -(window.innerWidth / 2 - ev.clientX) * 2 / window.innerWidth,
    (window.innerHeight / 2 - ev.clientY) * 2 / window.innerHeight,
    -1 / Math.tan(22.5 * Math.PI / 180)); //22.5 is half of camera frustum angle 45 degree
  vectorMouse.applyQuaternion(camera.quaternion);
  vectorMouse.normalize();

  var vectorObject = new Three.Vector3(); //vector from camera to object
  vectorObject.set(
    object.position.x - camera.position.x,
    object.position.y - camera.position.y,
    object.position.z - camera.position.z
  );
  vectorObject.normalize();
  console.log(vectorObject);
  if (vectorMouse.angleTo(vectorObject) * 180 / Math.PI < 1) {
    //mouse's position is near object's position
    console.log('HOORAAHH!!');
  }
}

export const initGL = (element: HTMLDivElement): void => {
  camera = new Three.PerspectiveCamera(75, element.offsetWidth / element.offsetHeight, 0.1, 1000);

  renderer.setSize(element.offsetWidth, element.offsetHeight);

  element.appendChild(renderer.domElement);

  element.addEventListener('click', onMouseDown(element.offsetWidth, element.offsetHeight, cursor3D.object));

  camera.position.z = 5;

  scene.add(cursor3D.object);

  function animate() {
    requestAnimationFrame(animate);

    cursor3D.object.rotateX(0.001);
    cursor3D.object.rotateY(0.002);

    if (updateStack.length) updateStack.forEach(func => func());

    renderer.render(scene, camera);
  }
  animate();
};
