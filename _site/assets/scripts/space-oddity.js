// Import dependencies as needed
import * as three from 'three';
const scene = new three.Scene();

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Define some meta elements (camera, renderer, e.g.)
const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new three.WebGLRenderer({
  canvas: document.querySelector('#quadrant1'),
});

// Imports textures
const textureLoader = new three.TextureLoader().load('/assets/img/space-oddity/pentablet-texture.png', function(texture) {
  texture.minFilter = three.NearestFilter;
  texture.magFilter = three.NearestFilter;
});

// Imports external 3D models
const loader = new GLTFLoader();
loader.load( '/assets/3d/so-tablet.glb', function ( gltf ) {
  const tabletMaterial = new three.MeshBasicMaterial( { map: textureLoader } );
	scene.add( gltf.scene );
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material = tabletMaterial;
    }
  });
}, undefined, function ( error ) {
	console.error( error );

} );

// Creates 3D elements for the scene (lighting, models, textures, e.g.)

// Lighting
scene.add(new three.AmbientLight(0xffffff));

// Geometry


// Helpers 
const gridHelper = new three.GridHelper(200, 50);
// Adds these elements
scene.add(gridHelper);
// Initialises the camera and renderer
camera.position.setZ(30);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);

// Renders the scene
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate()