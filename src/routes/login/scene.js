import * as THREE from 'three';

// Texture Loader
const loader = new THREE.TextureLoader();
const cross = loader.load('./cross.png');

/**
 * Sizes
 */
 const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

//Scene 
const scene = new THREE.Scene();

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

/**
 * Objects for the scene
 */
//Sphere
const geometry = new THREE.TorusGeometry( .7, .2, 16, 100);

//Star particles
const particlesGeometry = new THREE.BufferGeometry;
const particlesCnt = 7000;
const posArray = new Float32Array(particlesCnt * 3);
for(let i = 0; i < particlesCnt * 3; i++){
    //posArray[i] = Math.random();
    //posArray[i] = Math.random() - 0.5;
    posArray[i] = (Math.random() - 0.5) * (Math.random() * 5);
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray,3));


/**
 * Materials
 */
//Sphere
const material = new THREE.PointsMaterial({
    size: 0.005
});

//Particles
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    map: cross,
    transparent: true,
    color: 'white',

});

//Mesh
const sphere = new THREE.Points(geometry, material);
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(sphere, particlesMesh);

//Lights
const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

/**
 * The createScene call from Three JS to renderer the scene upon the canvas
 * @param {el} el the canvas to renderer the THREE Scene on 
 */
// @ts-ignore
export function createScene(el) {
	/**
    * Renderer
    */
    let renderer = new THREE.WebGLRenderer({
        canvas: el
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    //renderer.setClearColor(new THREE.Color('#21282a'),1)

    let mouseX = 0
    let mouseY = 0
    //Mouse 
    document.addEventListener('mousemove', (event) => {
        mouseY = event.clientY
        mouseX = event.clientX
    });

    /**
    * Animate
    */
    const clock = new THREE.Clock()

    const tick = () =>
    {
 
        const elapsedTime = clock.getElapsedTime()
 
        // Update objects
        sphere.rotation.y = .5 * elapsedTime
        particlesMesh.rotation.y = -.1 * elapsedTime

        if(mouseX > 0){
            particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.00001)
            particlesMesh.rotation.y = -mouseX * (elapsedTime * 0.00001)
        }
 
        // Update Orbital Controls
        // controls.update()
 
        // Render
        renderer.render(scene, camera);
 
        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
    }
 
    tick()

    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })
};

