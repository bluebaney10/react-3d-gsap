import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const ModelBottle = () => {
  const gltf = useLoader(GLTFLoader, "./assets/models/josta.glb");
  return (
    <primitive object={gltf.scene} position={[0, 1, 0]} children-0-castShadow />
  );
};

export default ModelBottle;
