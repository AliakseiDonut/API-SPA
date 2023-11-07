import { NavLink, Outlet } from "react-router-dom";
import classes from "./Layout.module.css";

function Layout() {
    return (
    <div className={classes.layout}>
        <header>
            <NavLink className={({isActive}) => isActive ? `${classes.link_active}` : `${classes.link}`} to="/" end={true}>Users</NavLink>
            <NavLink className={({isActive}) => isActive ? `${classes.link_active}` : `${classes.link}`} to="/albums" end={true}>Albums</NavLink>
        </header>
        
        <main>
            <Outlet />
        </main>
        
        <footer>
            <span>Created by: Alexey Domut</span>
            <span>BSU: 2023</span>
        </footer>
    </div>
    );
  }
  
  export default Layout;