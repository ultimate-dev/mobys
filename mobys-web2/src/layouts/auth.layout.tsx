import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import IStore from "store/instant.store";
import MStore from "store/main.store";

const AuthLayout = () => {
  useEffect(() => {
    MStore.clearToken();
    IStore.clearUser();
    IStore.socket?.disconnect();
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default AuthLayout;
