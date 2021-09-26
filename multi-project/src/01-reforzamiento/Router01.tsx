import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Counter from './Counter';

export default function Router01() {
    const match = useRouteMatch();

    return (
        <>
            <Switch>
                <Route path={`${match.path}/counter`} component={Counter} />
            </Switch>
        </>
    )
}
