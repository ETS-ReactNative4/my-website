import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './WorkDetail.css'

function Work(props) {

  const dutiesList = props.job.duties.map((duty)=>{
    return <li key = {duty.id}>{duty}</li>
  })

  return (
    <div className = "WorkDetail">
      <Paper >
        <Typography variant="h4">
          <strong>{props.job.title}</strong>
        </Typography>
        <Typography variant="h6">
          {props.job.employer} 
        </Typography>
        <Typography variant="subtitle1">
          {props.job.duration}
        </Typography>
        <Typography component="p">
          <ul>
            {dutiesList}
          </ul>
        </Typography>
        <Typography component="subtitle2">
          <i>
            Skills: {props.job.skills}
          </i>
        </Typography>
      </Paper>

    </div>
  );
}

export default Work;
