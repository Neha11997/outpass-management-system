import { RouteUtil } from "@utils/";
import { Switch } from "react-router";
import { RouteConfig } from "./RouteConfig";

const Routes: React.FunctionComponent = () : JSX.Element => (
    <Switch>
        {RouteUtil.getRoute(RouteConfig)}
    </Switch>
)

export default Routes;
