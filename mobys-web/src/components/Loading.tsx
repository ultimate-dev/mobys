import { observer } from "mobx-react-lite";
import IStore from "store/instant.store";

const Loading = () => {
  if (IStore.loading) return <div>Loading</div>;
  else return null;
};
export default observer(Loading);
