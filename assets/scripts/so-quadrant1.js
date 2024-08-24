import './space-oddity'
import * as three from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

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
  