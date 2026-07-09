import * as THREE from 'https://unpkg.com/three@0.165.0/build/three.module.js';

import { OrbitControls } from 'https://unpkg.com/three@0.165.0/examples/jsm/controls/OrbitControls.js';
const container = document.getElementById("container");

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020);
// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 2, 8);
