import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import './Contact.css'

class ContactForm extends Component {

  render() {
    return (
      <div className = "Contact">
        <FormGroup>
        <TextField
          margin="dense"
          id="name"
          label="Name"
          type="name"
          
        />
        <TextField
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          
        />
        <TextField
          margin="dense"
          id="message"
          label="Your Message"
          type="message"
          multiline={true}
          rows={4}
          
        />
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </FormGroup>
      </div>
      
    );
  }
}

export default ContactForm;
