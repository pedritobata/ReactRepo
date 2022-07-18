import { Switch, Route, useRouteMatch } from "react-router-dom";
import projectLinkBackHoc from "../shared/hoc/projectLinkBackHoc";
import Counter from "./counter-1/Counter";
import PokemonHome from "./pokemon/pages/Home";
import Index from "./Index";
import LoginAndCollaboratorsIndex from "./LoginAndUsersList/pages/Index";
import Provider from "./LoginAndUsersList/store/context";

export enum Routes {
  counter = "counter",
  loginAndCollaborators = "loginAndCollaborators",
  pokemon = "pokemon"
}

export default function Router01() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={Index} />
      <Route
        path={`${match.path}/${Routes.counter}`}
        component={projectLinkBackHoc(Counter, match.path)}
      />
      <Route
        path={`${match.path}/${Routes.pokemon}`}
        component={projectLinkBackHoc(PokemonHome, match.path)}
      />
      <Provider>
        <Route
          path={`${match.path}/${Routes.loginAndCollaborators}`}
          component={LoginAndCollaboratorsIndex}
        />
      </Provider>
      
    </Switch>
  );
}
