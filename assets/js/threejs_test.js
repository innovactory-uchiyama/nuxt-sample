//ここから盗みました
//https://ics.media/tutorial-three/quickstart/

import * as THREE from 'three';

let renderer, camera

function init() {

    // サイズを指定
    const width = window.innerWidth * 0.8;
    const height = window.innerHeight * 0.8;;

    // レンダラーを作成
    renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#myCanvas')
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);
    camera.aspect = window.innerWidth / window.innerHeight;

    // 箱を作成
    const geometry = new THREE.BoxGeometry(200, 200, 200);
    const material = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    tick();

    window.addEventListener('resize', onWindowResize);

    // 毎フレーム時に実行されるループイベントです
    function tick() {
      box.rotation.y += 0.01;
      renderer.render(scene, camera); // レンダリング

      requestAnimationFrame(tick);
    }
  }

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  
  renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);

}

export { init }
