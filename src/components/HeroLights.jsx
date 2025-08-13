import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Model } from "./Gaming_headphone.jsx";

const HeroLights = () => {
  return (
    <Canvas 
      camera={{ position: [0, 2, 8], fov: 50 }} 
      style={{ width: '100%', height: '500px' }} 
    >
      <Stage environment="city" intensity={0.6}>
        <Model 
          scale={3.5} 
          position={[0, -1.5, 0]} 
          rotation={[0, -0.5, 0]} 
        />
      </Stage>
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default HeroLights;
