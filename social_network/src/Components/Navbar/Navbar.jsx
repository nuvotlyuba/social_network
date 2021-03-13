import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    
      <nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink to="/profile" activeClassName={classes.active}>
            Profile
          </NavLink>
          </div>
        <div className={classes.item}>
          <NavLink to="/dialogs" activeClassName={classes.active}>
            Messages
          </NavLink>
          </div>
        <div className={classes.item}>
          <NavLink to="/friends" activeClassName={classes.active}>
            Friends
          </NavLink>
          </div>
        <div className={classes.item}>
          <NavLink to="/music" activeClassName={classes.active}>
            Musics
          </NavLink>
          </div>
        <div className={classes.item}>
          <NavLink to="/settings" activeClassName={classes.active}>
            Settings
          </NavLink>
          </div>
      </nav>
  );
};

export default Navbar;
