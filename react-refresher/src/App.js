import "./App.css";
import { Switch, Route } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import AddMeetup from "./pages/AddMeetup";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/add-meetup">
          <AddMeetup />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
