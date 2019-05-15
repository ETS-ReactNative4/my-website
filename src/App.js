import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Tab from './components/tab.js';
import Home from './components/Home.js';
import ContactForm from './components/Contact.js';
import WorkPage from './components/WorkPage.js';
import Projects from './components/projects.js';
import PodcastSearch from './components/PodcastSearch';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="App">
            <div>
              <Tab />
              <div>
                <Switch>
                  <Route path="/contact" component={ContactForm}/>
                  <Route path="/work" component={WorkPage}/>
                  <Route path="/projects" component={Projects}/>
                  <Route path="/podcastSearch" component={PodcastSearch}/>
                  <Route path="/" component={Home}/>
                </Switch>
              </div>
            </div>

          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
