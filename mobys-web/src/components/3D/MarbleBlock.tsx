import { useTexture } from "@react-three/drei";

const MarbleBlock = ({ x, y, z, dices = [] }: any) => {
  console.log("dices", dices);
  const textures = useTexture([...dices]);
  console.log("textures", textures);
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry attach="geometry" args={[x, y, z]} />
      {textures.map((texture) => (
        <meshPhongMaterial attach="material" key={texture.uuid} map={texture} />
      ))}
    </mesh>
  );
};
export default MarbleBlock;
