// import "./style.css";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const renderer = new THREE.WebGL1Renderer({
//   canvas: document.querySelector("#bg"),
// });
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
// camera.position.setZ(30);

// const mercuryTexture = new THREE.TextureLoader().load("mercury texture.jpg");

// const mercury = new THREE.Mesh(
//   new THREE.SphereGeometry(3, 32, 32),
//   new THREE.MeshStandardMaterial({
//     map: mercuryTexture,
//   })
// );

// const moonTexture = new THREE.TextureLoader().load("moon texture.jpeg");

// const moon = new THREE.Mesh(
//   new THREE.SphereGeometry(3.6, 45, 45),
//   new THREE.MeshStandardMaterial({
//     map: moonTexture,
//   })
// );

// const earthTexture = new THREE.TextureLoader().load("earth texture.jpg");

// const earth = new THREE.Mesh(
//   new THREE.SphereGeometry(6.4, 90, 90),
//   new THREE.MeshStandardMaterial({
//     map: earthTexture,
//   })
// );

// const diamondTexture = new THREE.TextureLoader().load("diamond texture.jpg");
// const diamond = new THREE.Mesh(
//   new THREE.SphereGeometry(12, 180, 180),
//   new THREE.MeshPhongMaterial({
//     map: diamondTexture,
//     shininess: 100,
//     specular: 0xffffff,
//     ambient: 0x333333,
//   })
// );

// const sunTexture = new THREE.TextureLoader().load("sun texture.jpeg");

// const sun = new THREE.Mesh(
//   new THREE.SphereGeometry(24, 360, 360),
//   new THREE.MeshStandardMaterial({
//     map: sunTexture,
//   })
// );

// const galaxyTexture = new THREE.TextureLoader().load("galaxy texture 1.jpg");

// const galaxy = new THREE.Mesh(
//   new THREE.SphereGeometry(48, 900, 900),
//   new THREE.MeshStandardMaterial({
//     map: galaxyTexture,
//   })
// );

// const pointLight = new THREE.PointLight(0xffffff);
// pointLight.position.set(0, 0, 60);
// pointLight.intensity = 1;
// // const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(pointLight);

// const controls = new OrbitControls(camera, renderer.domElement);

// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Adding ambient light
// scene.add(ambientLight);

// function addStar() {
//   const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//   const material = new THREE.MeshStandardMaterial({
//     color: 0xffffff,
//     emissive: 0xffffff,
//   });
//   const star = new THREE.Mesh(geometry, material);

//   const [x, y, z] = Array(3)
//     .fill()
//     .map(() => THREE.MathUtils.randFloatSpread(1500));
//   star.position.set(x, y, z);
//   scene.add(star);
// }

// Array(8000).fill().forEach(addStar);

// mercury.position.set(0, 0, 0);
// moon.position.set(0, 0, 75);
// earth.position.set(0, 0, 175);
// diamond.position.set(0, 0, 375);
// sun.position.set(0, 0, 775);
// galaxy.position.set(0, 0, 1375);

// scene.add(mercury, moon, earth, diamond, sun, galaxy);

// function animate() {
//   requestAnimationFrame(animate);
//   mercury.rotation.y += 0.018;
//   moon.rotation.y += 0.015;
//   earth.rotation.y += 0.0125;
//   diamond.rotation.y += 0.01;
//   sun.rotation.y += 0.0075;
//   galaxy.rotation.y += 0.005;
//   controls.update();
//   renderer.render(scene, camera);
//   requestAnimationFrame(update);
// }

// // Create a heart shape using Three.js
// // Create a heart shape using Three.js
// const heartShape = new THREE.Shape();
// heartShape.moveTo(0, -40);
// heartShape.bezierCurveTo(0, -40, 20, -80, 60, -80);
// heartShape.bezierCurveTo(90, -80, 90, -40, 90, -40);
// heartShape.bezierCurveTo(90, -20, 70, 0, 0, 40);
// heartShape.bezierCurveTo(-70, 0, -90, -20, -90, -40);
// heartShape.bezierCurveTo(-90, -40, -90, -80, -60, -80);
// heartShape.bezierCurveTo(-20, -80, 0, -40, 0, -40);

// // Extrude the heart shape to give it depth
// const extrudeSettings = {
//   steps: 2,
//   depth: 20,
//   bevelEnabled: true,
//   bevelThickness: 5,
//   bevelSize: 5,
//   bevelSegments: 2,
// };

// const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);

// // Create a mesh with a basic material
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const heartMesh = new THREE.Mesh(geometry, material);
// heartMesh.position.set(0, 0, 1875);

// // Rotate the heart so it's properly oriented
// heartMesh.rotation.x = Math.PI;

// // Optionally, add more materials or lights to enhance the appearance
// // For example:
// // const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });

// // Add the heart mesh to the scene
// scene.add(heartMesh);

// animate();

// import "./style.css";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const renderer = new THREE.WebGL1Renderer({
//   canvas: document.querySelector("#bg"),
// });
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
// camera.position.setZ(20);

// // Function to create text sprite
// function createTextSprite(text, position) {
//   const canvas = document.createElement("canvas");
//   const context = canvas.getContext("2d");
//   context.font = "Bold 36px Arial";
//   context.fillStyle = "white";
//   context.fillText(text, 0, 36);

//   const texture = new THREE.CanvasTexture(canvas);
//   const material = new THREE.SpriteMaterial({ map: texture });
//   const sprite = new THREE.Sprite(material);
//   sprite.position.copy(position);
//   sprite.scale.set(30, 15, 1); // Adjust scale as needed
//   return sprite;
// }

// // Add heading
// const headingSprite = createTextSprite(
//   "Planet Size Comparison",
//   new THREE.Vector3(0, 5, 0)
// );
// scene.add(headingSprite);

// const planets = [];
// const planetNames = ["Mercury", "Moon", "Earth", "Diamond", "Sun", "Galaxy"];

// const textures = [
//   "mercury texture.jpg",
//   "moon texture.jpeg",
//   "earth texture.jpg",
//   "diamond texture.jpg",
//   "sun texture.jpeg",
//   "galaxy texture 1.jpg",
// ];

// function createPlanet(radius, texture, position, name, speed) {
//   const planetTexture = new THREE.TextureLoader().load(texture);
//   const planet = new THREE.Mesh(
//     new THREE.SphereGeometry(radius, 32, 32),
//     new THREE.MeshStandardMaterial({
//       map: planetTexture,
//     })
//   );
//   planet.position.copy(position);
//   planet.speed = speed;
//   scene.add(planet);

//   const textTexture = createTextTexture(name);
//   const spriteMaterial = new THREE.SpriteMaterial({ map: textTexture });
//   const textSprite = new THREE.Sprite(spriteMaterial);
//   textSprite.position.set(position.x, position.y + radius, position.z);
//   textSprite.scale.set(5, 2, 1); // Adjust the scale as needed
//   scene.add(textSprite);

//   return planet;
// }

// function createTextTexture(text) {
//   const canvas = document.createElement("canvas");
//   const context = canvas.getContext("2d");
//   context.font = "Bold 24px Arial";
//   context.fillStyle = "white";
//   context.fillText(text, 0, 24);

//   const texture = new THREE.Texture(canvas);
//   texture.needsUpdate = true;
//   return texture;
// }

// for (let i = 0; i < planetNames.length; i++) {
//   const planet = createPlanet(
//     [3, 3.6, 6.4, 12, 24, 48][i],
//     textures[i],
//     new THREE.Vector3(0, 0, [0, 75, 175, 375, 775, 1375][i]),
//     planetNames[i],
//     [0.02, 0.015, 0.0125, 0.01, 0.0075, 0.005][i]
//   );
//   planets.push(planet);
// }

// const heartShape = new THREE.Shape();
// heartShape.moveTo(0, -40);
// heartShape.bezierCurveTo(0, -40, 20, -80, 60, -80);
// heartShape.bezierCurveTo(90, -80, 90, -40, 90, -40);
// heartShape.bezierCurveTo(90, -20, 70, 0, 0, 40);
// heartShape.bezierCurveTo(-70, 0, -90, -20, -90, -40);
// heartShape.bezierCurveTo(-90, -40, -90, -80, -60, -80);
// heartShape.bezierCurveTo(-20, -80, 0, -40, 0, -40);

// // Extrude the heart shape to give it depth
// const extrudeSettings = {
//   steps: 2,
//   depth: 20,
//   bevelEnabled: true,
//   bevelThickness: 5,
//   bevelSize: 5,
//   bevelSegments: 2,
// };

// //   new THREE.MeshStandardMaterial({
// //     map: galaxyTexture,
// //   })
// const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);

// // Create a mesh with a basic material
// const material = new THREE.MeshBasicMaterial({
//   color: 0xff0000,
// });
// const heartMesh = new THREE.Mesh(geometry, material);
// heartMesh.position.set(0, 0, 1875);

// // Rotate the heart so it's properly oriented
// heartMesh.rotation.x = Math.PI;
// scene.add(heartMesh);

// const pointLight = new THREE.PointLight(0xffffff);
// pointLight.position.set(0, 0, 60);
// pointLight.intensity = 1;
// scene.add(pointLight);

// const controls = new OrbitControls(camera, renderer.domElement);

// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(ambientLight);

// function addStar() {
//   const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//   const material = new THREE.MeshStandardMaterial({
//     color: 0xffffff,
//     emissive: 0xffffff,
//   });
//   const star = new THREE.Mesh(geometry, material);

//   const [x, y, z] = Array(3)
//     .fill()
//     .map(() => THREE.MathUtils.randFloatSpread(1500));
//   star.position.set(x, y, z);
//   scene.add(star);
// }

// Array(8000).fill().forEach(addStar);

// function animate() {
//   requestAnimationFrame(animate);
//   planets.forEach((planet) => {
//     planet.rotation.y += planet.speed;
//   });
//   controls.update();
//   renderer.render(scene, camera);
// }

// animate();
import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Function to create text sprite
// Function to create text sprite
function createTextSprite(text, position, fontSize) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const font = `Bold ${fontSize}px Arial`; // Update font style
  context.font = font;
  const textMetrics = context.measureText(text);
  const textWidth = textMetrics.width;
  const textHeight = fontSize; // We assume the text height equals the font size
  canvas.width = textWidth;
  canvas.height = textHeight + 5;
  context.font = font; // Set font again after resizing canvas
  context.fillStyle = "white";
  context.fillText(text, 0, fontSize);

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({ map: texture });
  const sprite = new THREE.Sprite(material);
  sprite.position.copy(position);
  sprite.scale.set(textWidth / 10, textHeight / 10, 1); // Adjust scale as needed
  return sprite;
}

// Add heading
const headingSprite = createTextSprite(
  "Size Comparison (factual values used)",
  new THREE.Vector3(0, 18, 0),
  36
);
scene.add(headingSprite);

const planets = [];
const planetData = [
  { name: "Mercury", radius: 3, texture: "mercury texture.jpg", speed: 0.018 },
  { name: "Moon", radius: 3.6, texture: "moon texture.jpeg", speed: 0.015 },
  { name: "Earth", radius: 6.4, texture: "earth texture.jpg", speed: 0.0125 },
  { name: "Diamond", radius: 12, texture: "diamond texture.jpg", speed: 0.01 },
  { name: "Sun", radius: 24, texture: "sun texture.jpeg", speed: 0.0075 },
  { name: "Galaxy", radius: 48, texture: "galaxy texture 1.jpg", speed: 0.005 },
];

const dist_nameSprite = [5, 5, 5, 7, 8, 14];
const dist_textSprite = [5, 5, 5, 7, 8, 14];
const dist_sizeSprite = [2, 2, 2, 4, 5, 11];
const font_name = [24, 24, 24, 24, 24, 40];
const font_text = [18, 18, 18, 18, 18, 30];
const font_size = [14, 14, 14, 14, 14, 24];
const text_text = [
  [
    "Smallest Planet in the Solar System",
    "But not really that small, it's about 1/3rd size of earth",
  ],
  ["a", "b"],
  ["a", "b"],
  ["a", "b"],
  ["a", "b"],
  ["a", "b"],
];
const size_text = [
  "(~ 5,000 km)",
  "(~ 6,500 km)",
  "(~ 10,000 km)",
  "(~ 100,000 km)",
  "(~ 1,000,000 km)",
  "(~ 100,000,000+ km)",
];
let i = 0;

for (const data of planetData) {
  let position = new THREE.Vector3(0, 0, 0);
  if (data.name !== "Heart") {
    position.z = [0, 175, 275, 475, 875, 1475][planetData.indexOf(data)];
  } else {
    position = new THREE.Vector3(0, 0, 1875); // Heart's position
  }

  const planetTexture = data.texture
    ? new THREE.TextureLoader().load(data.texture)
    : null;
  const planet = new THREE.Mesh(
    new THREE.SphereGeometry(data.radius, 32, 32),
    new THREE.MeshStandardMaterial({
      map: planetTexture,
    })
  );
  planet.position.copy(position);
  planet.speed = data.speed;
  scene.add(planet);

  const nameSprite = createTextSprite(
    data.name,
    position
      .clone()
      .add(new THREE.Vector3(0, data.radius + dist_nameSprite[i], 0)),
    font_name[i]
  );
  scene.add(nameSprite);

  const sizeSprite = createTextSprite(
    // `Size: ${data.radius} units`,
    `Size : ${size_text[i]}`,
    position
      .clone()
      .add(new THREE.Vector3(0, data.radius + dist_sizeSprite[i], 0)),
    font_size[i]
  );
  scene.add(sizeSprite);

  let space_text = 0;
  text_text[i].forEach((one_text) => {
    let textSprite = createTextSprite(
      one_text,
      position
        .clone()
        .add(
          new THREE.Vector3(
            0,
            -data.radius - dist_textSprite[i] - space_text,
            0
          )
        ),
      font_text[i]
    );

    scene.add(textSprite);
    space_text += 2;
  });

  i += 1;

  planets.push(planet);
}

const heartShape = new THREE.Shape();
heartShape.moveTo(0, -40);
heartShape.bezierCurveTo(0, -40, 20, -80, 60, -80);
heartShape.bezierCurveTo(90, -80, 90, -40, 90, -40);
heartShape.bezierCurveTo(90, -20, 70, 0, 0, 40);
heartShape.bezierCurveTo(-70, 0, -90, -20, -90, -40);
heartShape.bezierCurveTo(-90, -40, -90, -80, -60, -80);
heartShape.bezierCurveTo(-20, -80, 0, -40, 0, -40);

// Extrude the heart shape to give it depth
const extrudeSettings = {
  steps: 2,
  depth: 20,
  bevelEnabled: true,
  bevelThickness: 5,
  bevelSize: 5,
  bevelSegments: 2,
};

const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);

// Create a mesh with a basic material
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});
const heartMesh = new THREE.Mesh(geometry, material);
heartMesh.position.set(0, 0, 1875);
heartMesh.rotation.x = Math.PI;

// Add "My love for you" text

scene.add(heartMesh);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 0, 60);
pointLight.intensity = 1;
scene.add(pointLight);

const controls = new OrbitControls(camera, renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
  });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(1500));
  star.position.set(x, y, z);
  scene.add(star);
}

Array(8000).fill().forEach(addStar);

function animate() {
  requestAnimationFrame(animate);
  planets.forEach((planet) => {
    planet.rotation.y += planet.speed;
  });
  controls.update();
  renderer.render(scene, camera);
}

animate();
