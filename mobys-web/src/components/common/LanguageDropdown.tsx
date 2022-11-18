import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { browserLocale, translations } from "i18n";
import MStore from "store/main.store";
import { observer } from "mobx-react-lite";

const LanguageDropdown = () => {
  const [menu, setMenu] = useState(false);
  let locale = MStore.locale || browserLocale;

  const toggle = () => {
    setMenu(!menu);
  };

  return (
    <>
      <Dropdown isOpen={menu} toggle={toggle} className="d-none d-lg-inline-block ms-2">
        <DropdownToggle className="btn header-item waves-effect" tag="button">
          <img
            src={require("assets/images/flags/" + locale + ".png")}
            height="22"
            className="me-2"
          />
          {translations[locale].label}
          <span className="mdi mdi-chevron-down"></span>
        </DropdownToggle>
        <DropdownMenu className="language-switch dropdown-menu-end">
          {Object.entries(translations).map(([key, translate]: any) => {
            return (
              <DropdownItem
                key={key}
                onClick={() => MStore.setLocale(key)}
                className={`notify-item ${locale === key ? "active" : "none"}`}
              >
                <img
                  src={require("assets/images/flags/" + key + ".png")}
                  className="me-1"
                  height="22"
                />
                <span className="align-middle">{translate.label}</span>
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default observer(LanguageDropdown);
