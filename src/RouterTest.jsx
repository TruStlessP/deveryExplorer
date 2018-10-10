import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import About from './About.jsx';
import Services from './Services.jsx';
import TestPage from './AppTest.jsx';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

class App extends Component {
    render() {

      return(
        <div>
          <h1>YO</h1>
          <Router>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Manage Services</Link></li>
                <li><Link to="/testpage">Test Page</Link></li>
              </ul>

              <hr/>

              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/services" component={Services}/>
              <Route path="/testpage" component={TestPage}/>
            </div>
          </Router>
        </div>
      );
    }
}

export default hot(module)(App);
