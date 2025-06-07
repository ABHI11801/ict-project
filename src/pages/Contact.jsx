import React from 'react'
import { TextField, Typography, Button } from '@mui/material'

const Contact = () => {
  return (
    <div className>
          <Typography variant='h1' sx={{ flexGrow: 1,textAlign:'center'}} color="textPrimary">Contact Us</Typography>
          <Typography variant='h5'  sx={{ flexGrow: 1,textAlign:'center'}} color="textDisabled">Need to get in touch with us?</Typography><br />
          <TextField variant='standard' label='Name' ></TextField><br />
          <TextField variant='standard' label='Email'></TextField><br /><br />
          <Button variant='contained'>SUBMIT</Button>
        </div>
  )
}

export default Contact
