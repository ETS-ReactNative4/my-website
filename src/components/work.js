import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function Work(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h4">
          <strong>Contractor</strong>
        </Typography>
        <Typography variant="h6">
          UBC Health and Adult Development Lab, Vancouver
        </Typography>
        <Typography variant="subtitle1">
          Jan 2018 – April 2018, 4 months
        </Typography>
        <Typography component="p">
          <ul>
            <li>
              Created a python parser to process raw text files into legible csv file for a research study
            </li>
          </ul>
        </Typography>
        <Typography component="subtitle2">
          <i>
            Skills: Python
          </i>
        </Typography>
      </Paper>

      <Paper className={classes.root} elevation={1}>
        <Typography variant="h4">
          <strong>iXp Intern, Agile Developer - Performance and Reliability (Co-op)</strong>
        </Typography>
        <Typography variant="h6">
          SAP Labs Vancouver, Vancouver
        </Typography>
        <Typography variant="subtitle1">
          May 2017 – Dec 2017, 8 months
        </Typography>
        <Typography component="p">
          <ul>
            <li>
              Improved internal technologies, including Java and Selenium tools, as well as Jenkins automation
            </li>
            <li>
              Isolated root cause of performance issues to a single commit on a monolithic business analysis product with millions of lines of code
            </li>
            <li>
              Set up reverse proxy and development proxy through Apache HTTP Server
            </li>
            <li>
              Maintained and managed existing performance testing environments
            </li>
          </ul>
        </Typography>
        <Typography component="subtitle2">
          <i>
            Skills: JavaScript, Java, Jenkins, Selenium, Eclipse, Protractor, Git, Batch, Shell, Agile (Sprints)
          </i>
        </Typography>
      </Paper>

      <Paper className={classes.root} elevation={1}>
        <Typography variant="h4">
          <strong>Quality Software Intern (Co-op)</strong>
        </Typography>
        <Typography variant="h6">
          Shift Health Paradigm, Vancouver
        </Typography>
        <Typography variant="subtitle1">
          Aug 2016 – Dec 2016, 4 months
        </Typography>
        <Typography component="p">
          <ul>
            <li>
              Managed automated testing in Protractor on company’s proprietary survey web application
            </li>
            <li>
              Updated existing test cases to increase performance and compatibility
            </li>
            <li>
              Wrote scripts to test new features pending for deployment
            </li>
            <li>
              Created a web parser that collected useful facilities given a person’s location and specific needs
            </li>
          </ul>
        </Typography>
        <Typography component="subtitle2">
          <i>
            Skills: JavaScript, Protractor, Selenium, Node.js, Git, Bash, Agile (Sprints)
          </i>
        </Typography>
      </Paper>
    </div>
  );
}

Work.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Work);
