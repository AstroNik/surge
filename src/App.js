import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home"
import NewPage from "./components/NewPage";

class App extends Component {
  render(){
    return (
        <Router>
          <div>
            <section>
              <NavBar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/testing' component={NewPage}/>
                </Switch>
            </section>
          </div>
        </Router>
    )
  }
}

export default App
