import { Canvas } from "@react-three/fiber";
//import { ContactShadows } from "@react-three/drei";
import ModelBottle from "./ModelBottle";
import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  return (
    <div className="fixed inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <directionalLight intensity={2} position={[1, 2, 3]} />
        <ModelBottle />
        {/*     <axesHelper scale={2} />
        <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

export default Scene;
