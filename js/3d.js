const canvas = document.getElementById("3dcanvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(canvas.width, canvas.height);
let domElem = renderer.domElement;
document.body.appendChild(domElem);
domElem.style.border = "2px solid black";
document.body.removeChild(canvas);
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();