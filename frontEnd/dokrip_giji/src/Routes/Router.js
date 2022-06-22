import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import MainPage from "./MainPage";
import Header from "../Components/Header";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/main">
          <MainPage />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
