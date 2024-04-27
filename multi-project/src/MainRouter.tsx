import { Switch, Route } from 'react-router-dom';
import Router01 from './01-reforzamiento/Router01';
import PDFViewer from './02-pdf-viewer';
import MainLinks from './MainLinks';

export default function MainRouter() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={MainLinks} />
                <Route path="/01-reforzamiento" component={Router01} />
                <Route path="/02-pdf-viewer" component={PDFViewer} />
            </Switch>
        </div>
    )
}
