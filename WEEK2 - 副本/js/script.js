
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, window.innerWidth/ window.innerHeight,300,10000);
var renderer = new THREE.WebGLRenderer({
    antialias: true
  });
renderer.setClearColor('#000000');
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


function geometry() {
 var light1 = new THREE.AmbientLight(0xffffff,0.5);
   scene.add(light1);
 var light2 = new THREE.PointLight(0xffffff,0.5);
  scene.add(light2);

 var geometry = new THREE.SphereGeometry(100,100,100);
 var texture = new THREE.TextureLoader().load('./js/EARTH.png');
 var material = new THREE.MeshBasicMaterial({
   map:texture,
 })
 mesh1 = new THREE.Mesh(geometry, material);
 mesh1.position.z = -1000;
 scene.add(mesh1);


var geometry2 = new THREE.SphereGeometry(50,50,50);
var texture2 = new THREE.TextureLoader().load('./js/MOON.png');
var material2 = new THREE.MeshBasicMaterial({
  map:texture2,
  })
mesh2 = new THREE.Mesh(geometry2, material2);
mesh2.position.z = -1000;
scene.add(mesh2);

}


let angle = 0;
function render() {
    requestAnimationFrame(render);
    mesh1.rotation.y += 0.02;
    renderer.render(scene, camera);
    angle += 0.01;
  var x = 400*Math.sin(angle)
  var z = 400*Math.cos(angle)-1000
  mesh2.position.set(x,x,z);
};


geometry();
render();
