import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Home from "./pages/Home";


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/hero/:id" exact component={Hero} />
            </Switch>
        </BrowserRouter>
    );
}