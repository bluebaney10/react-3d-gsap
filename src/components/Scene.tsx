import { Canvas } from "@react-three/fiber";
import ModelBottle from "./ModelBottle";
import { ContactShadows } from "@react-three/drei";

const Scene = () => {
  return (
    <div className="fixed h-dvh top-0 left-0 w-screen z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <directionalLight intensity={60} position={[1, 2, 3]} />
        <ModelBottle />
        <ContactShadows opacity={0.3} position={[0, -1.5, 0]} />
      </Canvas>
    </div>
  );
};

export default Scene;
