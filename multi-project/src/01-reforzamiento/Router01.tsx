import { Switch, Route, useRouteMatch } from "react-router-dom";
import projectLinkBackHoc from "../shared/hoc/projectLinkBackHoc";
import Counter from "./counter-1/Counter";
import Index from "./Index";

export enum Routes {
  counter = "counter",
}

export default function Router01() {
  const match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={`${match.path}`} component={Index} />
        <Route
          path={`${match.path}/${Routes.counter}`}
          component={projectLinkBackHoc(Counter, match.path)}
        />
      </Switch>
    </>
  );
}
