import { NavLink, Outlet } from "react-router-dom";

function Layout() {
    return (
    <div className="layout">
        <header>
            <NavLink to="/">Users</NavLink>
            <NavLink to="/albums">Albums</NavLink>
        </header>
        
        <main>
            <Outlet />
        </main>
        
        <footer>
        </footer>
    </div>
    );
  }
  
  export default Layout;