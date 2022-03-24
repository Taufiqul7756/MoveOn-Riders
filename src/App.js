import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch,Redirect, Route } from "react-router-dom";
import Home from './Components/Home/Home';

function App() {
  return (
    <Router>
      <Header></Header>
      <Home/>

    </Router>
  );
}

export default App;
