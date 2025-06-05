import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// === TEXT SPRITE FUNCTION ===
function createTextSprite(text, position, fontSize) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const font = `Bold ${fontSize}px Arial`;
  context.font = font;
  const textMetrics = context.measureText(text);
  const textWidth = textMetrics.width;
  const textHeight = fontSize;

  canvas.width = textWidth;
  canvas.height = textHeight + 5;
  context.font = font;
  context.fillStyle = "white";
  context.fillText(text, 0, fontSize);

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({ map: texture });
  const sprite = new THREE.Sprite(material);
  sprite.position.copy(position);
  sprite.scale.set(textWidth / 10, textHeight / 10, 1);
  return sprite;
}

// === HEADING ===
// const headingSprite = createTextSprite(
//   "STELLAR CREW",
//   new THREE.Vector3(0, 18, 0),
//   36,
//   "Bold 60px Georgia", // Use a classy serif title font
//   "#ffd700"
// );
// scene.add(headingSprite);

const avatarData = [
  {
    texture: "avatar-1.png",
    z: 0,
    messages: ["Name", "Function"],
  },
  {
    texture: "avatar-2.png",
    z: 175,
    messages: ["Name", "Function"],
  },
  {
    texture: "avatar-3.png",
    z: 275,
    messages: ["Name", "Function"],
  },
];

const avatars = [];

for (const data of avatarData) {
  const position = new THREE.Vector3(0, 0, data.z);
  const avatarTexture = new THREE.TextureLoader().load(data.texture);

  const avatar = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshBasicMaterial({
      map: avatarTexture,
      side: THREE.DoubleSide,
    })
  );
  avatar.position.copy(position);
  scene.add(avatar);

  let spaceY = 0;
  data.messages.forEach((line) => {
    const textSprite = createTextSprite(
      line,
      position.clone().add(new THREE.Vector3(0, -12 - spaceY, 0)),
      20
    );

    const headingSprite = createTextSprite(
      "STELLAR CREW",
      position.clone().add(new THREE.Vector3(0, 18, 0)),
      36,
      "Bold 60px Georgia", // Use a classy serif title font
      "#ffd700"
    );

    scene.add(textSprite);
    scene.add(headingSprite);
    spaceY += 3;
  });

  avatars.push(avatar);
}

// === LIGHTING & STARS ===
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 0, 60);
pointLight.intensity = 1;
scene.add(pointLight);

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

// === CONTROLS ===
const controls = new OrbitControls(camera, renderer.domElement);

// === ANIMATION LOOP ===
function animate() {
  requestAnimationFrame(animate);
  avatars.forEach((avatar) => {
    // avatar.rotation.y += 0.01; // gentle spin
  });
  controls.update();
  renderer.render(scene, camera);
}
animate();
