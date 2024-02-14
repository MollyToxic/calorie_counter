import { Outlet,Link } from "react-router-dom";

const PrivateRoute = function () {
    // если у пользователя есть токен
    const auth = true
    return (
        auth ? <Outlet /> : <Link to="/registration"/>
    );
}

export default PrivateRoute;