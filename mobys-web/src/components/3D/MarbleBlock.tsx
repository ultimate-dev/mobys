import { useTexture } from "@react-three/drei";

const MarbleBlock = ({ x, y, z, dice1, dice2, dice3, dice4, dice5, dice6 }: any) => {
  const textures = useTexture([dice1, dice2, dice3, dice4, dice5, dice6]);

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
