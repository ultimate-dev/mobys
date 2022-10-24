import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const MarbleBlock = () => {
  const textures = useLoader(
    THREE.TextureLoader,
    ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"].map(() =>
      require("assets/images/marble/rossolevanto.jpeg")
    )
  );
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry attach="geometry" args={[3, 3, 3]} />
      {textures.map((texture) => (
        <meshPhongMaterial attach="material" key={texture.uuid} map={texture} />
      ))}
    </mesh>
  );
};
export default MarbleBlock;
