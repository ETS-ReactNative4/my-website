import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from "@material-ui/core/TextField";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Projects extends React.Component
{

  render() {
    return (
      <div>
        <TextField
          margin="dense"
          id="search"
          label="Search"
          type="search"
          fullWidth
        />
        <List>
          <ListItem>
            <Paper>
              <Typography variant="h4">
                    <div><strong>FindAWay</strong>  - Website, Hackathon Project (4 people)</div>
              </Typography>
              <Typography component="subtitle2">
                <i>
                  Technologies: JavaScript, HTML/CSS, Bootstrap, JQuery, Google Maps
                </i>
              </Typography>
              <Typography component="p">
                <ul>
                  <li>
                    Parsed existing amenities information on Vancouver Open Data catalogue and plotted them on google maps.
                  </li>
                </ul>
              </Typography>
              <Typography component="subtitle2">
                <a href="https://github.com/hskdian/FindAWay">
                {/* <img src = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width= "40"></img> */}
                Github Link
                </a>
              </Typography>
            </Paper>
          </ListItem>

          <ListItem>
            <Paper>
              <Typography variant="h4">
                <div><strong>XAMPP Hotel Database app (March 2017)</strong></div>
              </Typography>
              <Typography component="subtitle2">
                <i>
                  Technologies: XAMPP, Apache HTTP Server, MySQL, PHP, JavaScript, HTML/CSS, CanvasJS, Bootstrap, JQuery
                </i>
              </Typography>
              <Typography component="p">
                <ul>
                  <li>
                    Developed an hotel booking database application using XAMPP framework. Architected and developed backend and
                    frontend to utilize database model designed with team.
                  </li>
                </ul>
              </Typography>
              <Typography component="subtitle2">
                <a href="https://github.com/hskdian/phpHotel">
                {/* <img src = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width= "40"></img> */}
                Github Link
                </a>
              </Typography>
            </Paper>
          </ListItem>
          <ListItem>
            <Paper>
              <Typography variant="h4">
                <strong>XAMPP Hotel Database app</strong>
              </Typography>
              <Typography component="subtitle2">
                <i>
                  Technologies: XAMPP, Apache HTTP Server, MySQL, PHP, JavaScript, HTML/CSS, CanvasJS, Bootstrap, JQuery
                </i>
              </Typography>
              <Typography component="p">
                <ul>
                  <li>
                    Developed an hotel booking database application using XAMPP framework. Architected and developed backend and
                    frontend to utilize database model designed with team.
                  </li>
                </ul>
              </Typography>
              <Typography component="subtitle2">
                <a href="https://github.com/hskdian/phpHotel">
                {/* <img src = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width= "40"></img> */}
                Github Link
                </a>
              </Typography>
            </Paper>
          </ListItem>
          <ListItem>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItem>
        </List>
      </div>

    );
  }

}
export default (Projects);
