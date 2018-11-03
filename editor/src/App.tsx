import React, { Component } from 'react';
import * as Three from 'three';
import logo from './logo.svg';

class App extends Component {
  componentDidMount() {
    const element = document.getElementById('three');

    if (!element) return;
    const scene = new Three.Scene();
    const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new Three.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    element.appendChild(renderer.domElement);

    const geometry = new Three.BoxGeometry(1, 1, 1);
    const material = new Three.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new Three.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }
    animate();
  }
  render() {
    return (
      <div className="App" id="three">
        none
      </div>
    );
  }
}

export default App;
