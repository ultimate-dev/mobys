import MarbleBlock from "components/3D/MarbleBlock";
import Scene from "components/3D/Scene";
import MarbleBlockController from "controllers/marbleBlock.controller";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

const HomePage = () => {
  let [marbleBlockC] = useState(new MarbleBlockController());
  useEffect(() => {
    marbleBlockC.get();
  }, []);
  return (
    <>
      {marbleBlockC.marbleBlocks.map((marbleBlock, index) => (
        <>
          <div>
            <Scene>
              <MarbleBlock {...marbleBlock} />
            </Scene>
            <div>{marbleBlock.weight} Ton</div>
            <div>{marbleBlock.color}</div>
            <div>{marbleBlock.class} Sınıf</div>
          </div>
          <hr />
        </>
      ))}
    </>
  );
};

export default observer(HomePage);
