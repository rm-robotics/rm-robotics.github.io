import * as THREE from 'three';
import { OrbitControls } from "orbitalControls";
import { OBJLoader } from 'objLoader';
const canvas = document.getElementById("3dcanvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
camera.position.set(0, 30, -60); // set camera position

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(canvas.width, canvas.height);
let domElem = renderer.domElement;
document.getElementById("container").appendChild(domElem);
//domElem.style.border = "2px solid black";
domElem.style = canvas.style;
canvas.remove();
const geometry = new THREE.IcosahedronGeometry(40);
const material = new THREE.MeshNormalMaterial();
const light = new THREE.AmbientLight(0x404040);
light.position.set(10, 0, 0).normalize();
const cube = new THREE.Mesh(geometry, material);
// load the secret amogus
const loader = new OBJLoader();
loader.load(
    // resource URL
    '/assets/models/amogus_easter_egg.obj',
    // called when resource is loaded
    function(object) {
        object.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                child.material = material;
            }
        });
        scene.add(object);

    },
    // called when loading is in progresses
    function(xhr) {

        console.log((xhr.loaded / xhr.total * 100) + '% loaded');

    },
    // called when loading has errors
    function(error) {

        console.log('An error happened');

    }
);
scene.add(cube);
scene.add(light);
//camera.position.y = 20;
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