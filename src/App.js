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
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRouting/PrivateRouting";

export const UserContext = createContext();


function App() {
  const [loggedInUser,setloggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setloggedInUser]}>
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/login">
          <SignIn />
        </Route>
        <PrivateRoute path="/destination">
          <Destination/>
        </PrivateRoute>
        <PrivateRoute path="/blog">
          <Blog/>
        </PrivateRoute>
        <Route path="/signup">
          <SignUp/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>

      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
