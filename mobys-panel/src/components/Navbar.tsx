import { APP_NAME, OWNER_NAME } from "configs";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
// Store
import IStore from "store/instant.store";
import MStore from "store/main.store";
// Components
import LanguageDropdown from "./common/LanguageDropdown";
import ProfileMenu from "./common/ProfileMenu";

const Navbar = () => {
  function toggle() {
    var body = document.body;
    body.classList.toggle("vertical-collpsed");
    body.classList.toggle("sidebar-enable");
  }

  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box p-0">
              <Link
                to="/"
                className="logo logo-light d-flex align-items-center justify-content-center"
                style={{ height: 70 }}
              >
                <span className="logo-sm" style={{ lineHeight: 1.15 }}>
                  <img src={require("assets/images/logo-light.png")} alt="" height="40" />
                </span>
                <span className="logo-lg" style={{ lineHeight: 1.15 }}>
                  <div className="d-flex align-items-center justify-content-center">
                    <img src={require("assets/images/logo-light.png")} alt="" height="40" />
                    <div className="d-inline-flex flex-column align-items-start justify-content-center ps-2">
                      <h4 className="text-primary m-0 p-0" style={{ fontWeight: 900 }}>
                        {APP_NAME}
                      </h4>
                    </div>
                  </div>
                </span>
              </Link>
            </div>

            <button
              type="button"
              onClick={toggle}
              className="btn btn-sm px-3 font-size-24 header-item waves-effect vertical-menu-btn"
              id="vertical-menu-btn"
            >
              <i className="mdi mdi-menu"></i>
            </button>
            <div className="d-none d-sm-block">
              {IStore.user?.supplier && (
                <Dropdown color="light" className="d-inline-block" disabled>
                  <div className="dropdown dropdown-topbar pt-3 mt-1 d-inline-block">
                    <DropdownToggle className="btn btn-light" tag="button">
                      #{IStore.user.supplier.name}
                    </DropdownToggle>
                  </div>
                </Dropdown>
              )}
            </div>
          </div>
          <div className="d-flex">
            <div className="dropdown d-none d-lg-inline-block">
              <button
                type="button"
                onClick={() => {
                  document.fullscreenElement != null
                    ? IStore.fullScreen.exit()
                    : IStore.fullScreen.enter();
                }}
                className="btn header-item noti-icon waves-effect"
                data-toggle="fullscreen"
              >
                <i className="mdi mdi-fullscreen font-size-24"></i>
              </button>
            </div>
            <ProfileMenu />
          </div>
        </div>
      </header>
    </>
  );
};

export default observer(Navbar);
