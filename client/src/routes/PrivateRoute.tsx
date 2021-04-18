import { Redirect, Route } from "react-router";

interface IRoute {
    exact: boolean;
    path: string;
    component: React.ComponentType
}

export const PrivateRoute: React.FC<IRoute> = (props) => {
    const user = localStorage.getItem("user");
    if(user) return <Redirect to="/desktop" />
    return <Route {...props} />
}
