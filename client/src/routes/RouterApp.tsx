import { Redirect, Route, Switch } from "react-router-dom";
import { DesktopPage } from "../pages/DesktopPage";
import { QueuePage } from "../pages/QueuePage";
import { SingInPage } from "../pages/SingInPage";
import { TicketPage } from "../pages/TicketPage";
import { PrivateRoute } from "./PrivateRoute";

export const RouterApp = () => {
    return (
        <Switch>
            <PrivateRoute exact path="/sign-in" component={SingInPage} />
            <Route exact path="/queue" component={QueuePage} />
            <Route exact path="/create-ticket" component={TicketPage} />
            <Route exact path="/desktop" component={DesktopPage} />
            <Route exact path="/">
                <Redirect to="/sign-in" />
            </Route>
        </Switch>
    )
}
