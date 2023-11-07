import { NavLink } from "react-router-dom";
import classes from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={classes.notFound}>
        <h1>Страница не найдена</h1>
        <NavLink className={classes.link} to={'/'}>Вернуться на главную</NavLink>
    </div>
  );
}

export default NotFound;