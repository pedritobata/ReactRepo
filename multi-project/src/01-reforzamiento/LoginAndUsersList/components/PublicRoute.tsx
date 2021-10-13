import { FC } from "react";
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { LoginAndCollaboratorsRoutes } from "../pages/Index";
import { getPrevRoute } from "../utils/utils";

type Props = {
  token: string;
  Component: FC;
  path: string;
};

const PublicRoute = ({ token, path, Component, ...rest }: Props & RouteProps) => {
  return (
    <Route path={path} {...rest}>
      {!token ? (
        <Component />
      ) : (
        <Redirect to={`${path}/${LoginAndCollaboratorsRoutes.home}`} />
      )}
    </Route>
  );
};

export default PublicRoute;
