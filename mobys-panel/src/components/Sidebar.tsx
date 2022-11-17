import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
// Constants
import NAVS from "constants/navs";
import ROUTES from "constants/routes";
import IStore from "store/instant.store";
import { observer } from "mobx-react-lite";

const Sidebar = () => {
  return (
    <div className="vertical-menu">
      <div data-simplebar className="h-100">
        <SimpleBar style={{ maxHeight: "100%" }}>
          <div id="sidebar-menu">
            <ul className="metismenu list-unstyled" id="side-menu">
              {NAVS.filter(({ roles }) =>
                roles ? roles.length == 0 || roles.includes(IStore.user?.role) : true
              ).map((nav: any, index: number) => {
                if (nav.section)
                  return (
                    <li key={index} className="menu-title">
                      {nav.section}
                    </li>
                  );
                else
                  return (
                    <li key={index}>
                      <Link
                        to={!nav?.menu ? nav.to : "#"}
                        className={"waves-effect " + (nav?.menu ? "has-arrow" : "")}
                      >
                        <i className={"ri ri-" + nav?.icon}></i>
                        <span>{nav.name}</span>
                      </Link>
                      {nav?.menu && (
                        <ul className="sub-menu" aria-expanded="true">
                          {nav?.menu.map((item: any, index: number) => (
                            <li>
                              <Link to={nav.to + item.to}>{item.name}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
              })}
            </ul>
          </div>
        </SimpleBar>
      </div>
    </div>
  );
};

export default observer(Sidebar);
