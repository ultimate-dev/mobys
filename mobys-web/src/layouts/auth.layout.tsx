import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import IStore from "store/instant.store";
import MStore from "store/main.store";

function AuthLayout() {
  useEffect(() => {
    MStore.clearToken();
    IStore.clearUser();
    IStore.socket?.disconnect();
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
}

export default AuthLayout;
