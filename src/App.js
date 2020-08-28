import React from 'react';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Search from './components/Search';
import SearchPage from './pages/SearchPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

