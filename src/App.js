import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import Tab from './components/tab.js';
import Home from './components/home.js';
import ContactForm from './components/contact.js';
import Resume from './components/resume.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div>
            <Tab />
            <div>
              <Switch>
                <Route path="/contact" component={ContactForm}/>
                <Route path="/resume" component={Resume}/>
                <Route path="/" component={Home}/>
              </Switch>
            </div>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
