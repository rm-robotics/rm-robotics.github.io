import * as THREE from 'https://cdn.skypack.dev/three';
import { OrbitControls } from "https://cdn.skypack.dev/three/examples/jsm/controls/OrbitControls.js";
const canvas = document.getElementById("3dcanvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
camera.position.set(15, 10, 0);
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(canvas.width, canvas.height);
let domElem = renderer.domElement;
document.getElementById("container").appendChild(domElem);
domElem.style.border = "2px solid black";
canvas.remove();
const geometry = new THREE.IcosahedronGeometry(10);
const material = new THREE.MeshNormalMaterial();
const light = new THREE.AmbientLight(0x404040);
light.position.set(10, 0, 0).normalize();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
scene.add(light);
camera.position.z = 5;
const myControls = new OrbitControls(camera, domElem);

var grid = new THREE.GridHelper(100, 10);
scene.add(grid);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    myControls.update();
    renderer.render(scene, camera);
}
animate();