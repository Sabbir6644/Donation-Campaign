import { NavLink } from "react-router-dom";
import logo from "/src/images/Logo.png"

const Header = () => {
     return (
          <div className="max-w-7xl mx-auto">
               <div className="flex gap-5 flex-col md:flex-row justify-center md:justify-between items-center md:pr-3">
                    <img src={logo} alt="" />
                    <div className="flex gap-3">
                    <NavLink
  to="/"
  style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "black",
      textDecoration: isActive? "underline" : "none"
    };
  }}
>
  Home
</NavLink>
                    <NavLink
  to="/Donation"
  style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "black",
      textDecoration: isActive? "underline" : "none"
    };
  }}
>
Donation
</NavLink>
                    <NavLink
  to="/Statistics"
  style={({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "black",
      textDecoration: isActive? "underline" : "none"
    };
  }}
>
Statistics
</NavLink>
                    </div>
               </div>
          </div>
     );
};

export default Header;