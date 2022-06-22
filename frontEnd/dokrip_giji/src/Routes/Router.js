import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Home from "./Home"
import KakaoMapTest from "./KakaoMapTest";

function Router(){
    return(
        <BrowserRouter>
            {/*<Headers/>*/}
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/test">
                    <KakaoMapTest/>
                </Route>
                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;