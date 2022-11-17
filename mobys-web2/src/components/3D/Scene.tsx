import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

class SceneProps {
  children: any;
}
const Scene = ({ children }: SceneProps) => {
  return (
    <Canvas style={{ width: 500, height: 500 }} className="border bg-dark">
      <Suspense fallback={null}>
        <ambientLight />
        {children}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </Suspense>
    </Canvas>
  );
};
export default Scene;
