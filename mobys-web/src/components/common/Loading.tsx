import { COLOR_PRIMARY } from "constants/configs";
import { observer } from "mobx-react-lite";
import { ClassicSpinner } from "react-spinners-kit";
// Store
import IStore from "store/instant.store";

const Loading = () => {
  if (IStore.loading)
    return (
      <div>
        <ClassicSpinner color={COLOR_PRIMARY} />
        Loading...
      </div>
    );
  else return null;
};
export default observer(Loading);
