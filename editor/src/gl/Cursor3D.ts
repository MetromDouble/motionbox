import * as Three from 'three';
import cursorSprite from '../assets/images/3d-cursor-circle.svg';

export class Cursor3D {
  public object: Three.Object3D;

  constructor() {
    const geometry = new Three.BufferGeometry();
    const vertices = new Float32Array([
      0.0,0.0,0.0, -0.05,0.5,0.0, 0.05,0.5,0.0,
      0.0,0.0,0.0, 0.05,0.5,0.0, -0.05,0.5,0.0,
      0.0,0.0,0.0, 0.0,0.5,-0.05, 0.0,0.5,0.05,
      0.0,0.0,0.0, 0.0,0.5,0.05, 0.0,0.5,-0.05,

      0.0,0.0,0.0, 0.5,0.05,0.0, 0.5,-0.05,0.0,
      0.0,0.0,0.0, 0.5,-0.05,0.0, 0.5,0.05,0.0,
      0.0,0.0,0.0, 0.5,0.0,0.05, 0.5,0.0,-0.05,
      0.0,0.0,0.0, 0.5,0.0,-0.05, 0.5,0.0,0.05,

      0.0,0.0,0.0, -0.05,-0.5,0.0, 0.05,-0.5,0.0,
      0.0,0.0,0.0, 0.05,-0.5,0.0, -0.05,-0.5,0.0,
      0.0,0.0,0.0, 0.0,-0.5,-0.05, 0.0,-0.5,0.05,
      0.0,0.0,0.0, 0.0,-0.5,0.05, 0.0,-0.5,-0.05,

      0.0,0.0,0.0, -0.5,0.05,0.0, -0.5,-0.05,0.0,
      0.0,0.0,0.0, -0.5,-0.05,0.0, -0.5,0.05,0.0,
      0.0,0.0,0.0, -0.5,0.0,0.05, -0.5,0.0,-0.05,
      0.0,0.0,0.0, -0.5,0.0,-0.05, -0.5,0.0,0.05,

      0.0,0.0,0.0, -0.05,0.0,0.5, 0.05,0.0,0.5,
      0.0,0.0,0.0, 0.05,0.0,0.5, -0.05,0.0,0.5,
      0.0,0.0,0.0, 0.0,-0.05,0.5, 0.0,0.05,0.5,
      0.0,0.0,0.0, 0.0,0.05,0.5, 0.0,-0.05,0.5,

      0.0,0.0,0.0, -0.05,0.0,-0.5, 0.05,0.0,-0.5,
      0.0,0.0,0.0, 0.05,0.0,-0.5, -0.05,0.0,-0.5,
      0.0,0.0,0.0, 0.0,-0.05,-0.5, 0.0,0.05,-0.5,
      0.0,0.0,0.0, 0.0,0.05,-0.5, 0.0,-0.05,-0.5,
    ]);

    geometry.addAttribute('position', new Three.BufferAttribute(vertices, 3));
    const material = new Three.MeshBasicMaterial({ color: 0xff0000 });
    const mesh = new Three.Mesh(geometry, material);

    const circleGeometry = new Three.BufferGeometry();
    circleGeometry.addAttribute('position', new Three.Float32BufferAttribute([0.0, 0.0, 0.0], 3));
    const circleSprite = new Three.TextureLoader().load(cursorSprite);
    const circleMaterial = new Three.PointsMaterial({ size: 32, sizeAttenuation: false, map: circleSprite, transparent: true });
    const circleParticle = new Three.Points(circleGeometry, circleMaterial);
    circleParticle.renderOrder = 999;

    const object = new Three.Object3D();
    object.add(mesh);
    object.add(circleParticle);

    object.renderOrder = 999;

    this.object = object;
  }
}
