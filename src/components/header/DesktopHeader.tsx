import NavLinkTemplate from "../layout/button/NavLinkTemplate";
import { Link } from "react-router-dom";
import Search from "../layout/search/Search";
import logo from "../../assets/logo.jpeg";
import calendar from "../../assets/calender-icon.jpeg";
import user from "../../assets/user-icon-copy.png";
import "./Header.scss";

const DesktopHeader = () => {
  return (
    <nav className="desktop-top-nav">
      <div className="left-nav">
        <Link to="/">
          <img src={logo} alt="logo" className="logo"></img>
        </Link>
        <Link to="/" className="tlc">
          TLC
        </Link>
        <NavLinkTemplate content={"Associations"} to={"/associations"} />
        <NavLinkTemplate content={"Feed"} to={"/volunteering"} />
        <NavLinkTemplate content={"Founders"} to={"/Founders"} />
      </div>

      <div className="right-nav">
        <Search />
        <Link to="/signin">
          <img src={user} alt="user"></img>
        </Link>
        <Link to="/calendar">
          <img src={calendar} alt="calendar" className="calendar"></img>
        </Link>
      </div>
    </nav>
  );
};

export default DesktopHeader;
