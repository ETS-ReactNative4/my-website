import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import House from '@material-ui/icons/Home';
import Phone from '@material-ui/icons/Phone';
import Work from '@material-ui/icons/Work';
import Assignment from '@material-ui/icons/Assignment';
import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class TabsButtonForce extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };


  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Home" icon={<House />} component={Link} to="/"></Tab>
            <Tab label="Work" icon={<Work />} component={Link} to="/work"/>
            <Tab label="Projects" icon={<Assignment />} component={Link} to="/project"/>
            <Tab label="Contact" icon={<Phone />} component={Link} to="/contact"/>
            <Tab label="Under Consctruction" icon={<HelpIcon />} disabled />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

TabsButtonForce.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsButtonForce);
