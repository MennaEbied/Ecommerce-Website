import links from "../utils/Links";
import { NavLink } from "react-router-dom";

const Navlinks = ({ mobile, closeMenu }) => {
  return (
    <div className={mobile ? "flex flex-col items-center space-y-6" : "flex space-x-3"}>
      {links.map((link) => {
        return (
          <NavLink 
            to={link.path} 
            key={link.id} 
            className={({ isActive }) => 
              `font-semibold text-gray-900 hover:text-gray-500 transition-colors dark:text-gray-500 dark:hover:text-white ${
                isActive ? "text-primary dark:text-white" : ""
              }`
            }
            onClick={closeMenu}
          >
            {link.text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navlinks;