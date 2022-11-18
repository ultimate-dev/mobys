import { Spin } from "antd";
import { observer } from "mobx-react-lite";
import IStore from "store/instant.store";

const Loading = () => {
  if (IStore.loading)
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner-chase">
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
          </div>
        </div>
      </div>
    );
  else return null;
};

export const Loader = observer(({ children }: { children: JSX.Element | JSX.Element[] | null }) => {
  return <Spin spinning={IStore.loader == true}>{children}</Spin>;
});
export default observer(Loading);
