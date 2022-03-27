import "./App.css";
import Header from "./Components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import "../src/Components/Header/Header.css";
import Destination from "./Components/Destination/Destination";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import SignIn from "./Components/Login/SignIn";
import SignUp from "./Components/Login/SignUp";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/destination">
          <Destination/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
        <Route path="/contact">
          <SignUp/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
