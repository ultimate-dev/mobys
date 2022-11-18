import React, { useState, useEffect } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import i18n from "i18n";
import Avatar from "antd/lib/avatar/avatar";
import IStore from "store/instant.store";
import { Observer } from "mobx-react-lite";

const ProfileMenu = () => {
  const [menu, setMenu] = useState(false);

  return (
    <React.Fragment>
      <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="d-inline-block">
        <DropdownToggle
          className="btn header-item waves-effect"
          id="page-header-user-dropdown"
          tag="button"
        >
          <Observer
            render={() => (
              <Avatar shape="square" className="bg-primary text-white">
                {IStore.user?.letters}
              </Avatar>
            )}
          />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <Link to="/account" className="dropdown-item">
            <i className="mdi mdi-account-circle font-size-17 text-muted align-middle me-1" />
            <span>{i18n.t("routes.account")}</span>
          </Link>
          <div className="dropdown-divider" />
          <Link to="/auth/login" className="dropdown-item text-danger">
            <i className="mdi mdi-power font-size-17 align-middle me-1 text-danger" />
            <span>{i18n.t("auth.logOut")}</span>
          </Link>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default ProfileMenu;
