import { FC } from 'react';
import { Route, Redirect,  } from 'react-router-dom';
import { getPrevRoute } from '../utils/utils';

type Props = {
    token: string;
    Component: FC;
    path: string;
}

const PrivateRoute = ({token, path, Component, ...rest}: Props) => {
    return (
        <Route path={path} {...rest}>
            {token ? (<Component />) : (<Redirect to={getPrevRoute(path, 1)} />)}
        </Route>
    )
};

export default PrivateRoute;


