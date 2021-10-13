import { useContext } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import projectLinkBackHoc from "../../../shared/hoc/projectLinkBackHoc";
import Login from "./Login";
import { getPrevRoute } from "../utils/utils";
import Home from "./Home";
import PrivateRoute from "../components/PrivateRoute";
import { Context } from "../store/context";
import PublicRoute from "../components/PublicRoute";

export enum LoginAndCollaboratorsRoutes {
  home = "home",
}

export const Index = () => {
  const match = useRouteMatch();
  const ctx = useContext(Context);
  return (
    <Switch>
      <PublicRoute
        exact
        token={ctx.authState.token}
        path={`${match.path}`}
        Component={projectLinkBackHoc(Login, getPrevRoute(match.path, 1))}
      />
      <PrivateRoute
        token={ctx.authState.token}
        path={`${match.path}/${LoginAndCollaboratorsRoutes.home}`}
        Component={projectLinkBackHoc(Home, getPrevRoute(match.path, 1))}
      />
    </Switch>
  );
};

export default Index;
