import * as THREE from "three";
import fontJson from "../fonts/UbuntuMonoBold.json";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TTFLoader } from "three/examples/jsm/loaders/TTFLoader";
import { TextGeometry } from "three/examples/jsm/loaders/TextGeometry";

const Text = ({ text, color, size, height }) => {
  const fontLoader = new FontLoader();

  fontLoader.load(fontJson, (font) => {
    const textGeometry = new TextGeometry(text, {
      height: 2,
      size: 10,
      font,
    });
    const textMaterial = new THREE.MeshNormalMaterial();
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.x = -36;
    textMesh.position.y = 5;
  });

  const textOptions = {
    font,
    size: 5,
    height: 1,
  };

  return (
    <mesh>
      <textGeometry attach="geometry" args={[{ text }, textOptions]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

export default Text;
