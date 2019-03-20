import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';

// const backgroundstyles = {
//   backgroundImage: `url(${Background})`
// };

class Home extends Component {

  render() {
    return (
      <Paper>
        <div>

        </div>
        <div class="jumbotron" >
          <h1 class="display-4">Hi, My name is Ian</h1>
          <Avatar
            alt="Ian Lin"
            size={1000}
          />
          <p class="lead">I am a UBC student with a degree in Psychology and Computer Science currently looking for a job.</p>
          <hr class="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>
      </Paper>
    );
  }
}

export default Home;
