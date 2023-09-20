import { OrbitControls } from './three.js/OrbitControls.js';
import { STLLoader } from './three.js/STLLoader.js';
import * as THREE from './three.js/three.module.js'; //importamos la biblioteca

var scene, camera, renderer, figura; //variables globales

function init(){
// ------------------------------escena-----------------------
scene= new THREE.Scene();
scene.background = new THREE.Color(0x2a003b);

//---------------------------camara--------------------------
camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/ window.innerHeight,
    0.1,
    1000
);
camera.position.z= 12;

//---------------------------- Renderer--------------------

renderer= new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene.add(figura);
//----controles del mouse
let control = new OrbitControls(camera,renderer.domElement);
//---------luces
let light = new THREE.DirectionalLight(0xffffffff);
light.position.set(0,3,3);
scene.add(light);
// --------animacion
animated();

function animated(){
 requestAnimationFrame(animated);//recursividad
 renderer.render(scene,camera);
}


}
//--------------------------figura-----------------------
let loader= new STLLoader();
loader.load('/modeloSTL/PikachuThick_tail.stl',(model)=>{//permite cargar el modelo

    
    figura = new THREE.Mesh(
        model,
        new THREE.MeshLambertMaterial({color:'orange'})
        );

    figura.position.set(0,-3,0);
    figura.scale.set(0.1,0.1,0.1);
    figura.rotation.x=-Math.PI/2;
    

    init();

});

