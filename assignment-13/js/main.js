/*(var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
    color: 0x00ffaa
});
var material2 = new THREE.MeshBasicMaterial({
    color: 0x00ffee
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
var cube2 = new THREE.Mesh(geometry,material2);
scene.add(cube2);

camera.position.z = 5;
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    cube.rotation.x += 0.03;
    cube.rotation.y += 0.02;
    cube2.rotation.x += 0.02;
    cube2.rotation.y += 0.01;
}
animate();*/
var scene = new THREE.Scene()
        //scene.overrideMaterial = new THREE.MeshBasicMaterial({
            //color: 'white'
        //});
        scene.background = new THREE.Color('grey');
        var camera = new THREE.PerspectiveCamera(5, window.innerWidth / window.innerHeight, 0.1, 200 )
        var renderer = new THREE.WebGLRenderer()
        camera.position.x = 100
        camera.position.y = -100
        camera.position.z = 100


        renderer.setClearColor(0xdddddd)
        renderer.setSize(window.innerWidth, window.innerHeight)

        document.body.appendChild(renderer.domElement)
        var loader = new THREE.GLTFLoader();

        var geometry = new THREE.BoxGeometry();
        var material = new THREE.MeshBasicMaterial({
            color: 0x00ffaa
        });
        var material2 = new THREE.MeshBasicMaterial({
            color: 0x00ffee
        });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        var cube2 = new THREE.Mesh(geometry,material2);
        scene.add(cube2);


        // change to the name of your glb
        loader.load('Duck.glb', function(gltf) {

            scene.add(gltf.scene);

        }, undefined, function(error) {

            console.error(error);

        });
        var rotation = 0

        function spinCamera() {
            rotation += 0.001
            camera.position.z = Math.sin(rotation) * 95;
            camera.position.x = Math.cos(rotation) * 95;
            camera.lookAt(scene.position)
        }
        var render = function() {

            requestAnimationFrame(render);
            spinCamera();

            renderer.render(scene, camera);
        };
        function animate() {
            requestAnimationFrame( animate );
            renderer.render( scene, camera );
            cube.rotation.x += 0.03;
            cube.rotation.y += 0.02;
            cube2.rotation.x += 0.02;
            cube2.rotation.y += 0.01;
        }
        animate();

        render();
