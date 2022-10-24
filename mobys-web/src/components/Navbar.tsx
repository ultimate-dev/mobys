import NAVS from "constants/navs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {NAVS.map((nav, index) => (
        <Link to={nav.to} key={index}>
          {nav.name}
        </Link>
      ))}
    </div>
  );
};
export default Navbar;
