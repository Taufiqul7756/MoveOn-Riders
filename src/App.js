import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch,Redirect, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header></Header>
    </Router>
  );
}

export default App;
