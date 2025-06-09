import React from 'react'
import Typography from '@mui/material/Typography/';
import { Button, TextField } from '@mui/material';
import Nav from './Nav';

const Contactus = () => {
  return (
    <div style={{height:"100%",marginTop:"0"}}>
    <Nav/>
    <div style={{backgroundColor:"rgb(190, 186, 186)"}}>
      <Typography variant='h1' sx={{ flexGrow: 1,textAlign:'center'}} color="textPrimary">Contact Us</Typography>
      <Typography variant='h5'  sx={{ flexGrow: 1,textAlign:'center'}} color="textDisabled">Need to get in touch with us?</Typography><br />
      <TextField variant='standard' label='Name' ></TextField><br />
      <TextField variant='standard' label='Email'></TextField><br /><br />
      <Button variant='contained'>SUBMIT</Button>

    </div>
    </div>
  )
}

export default Contactus
