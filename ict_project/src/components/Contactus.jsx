import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography/';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Nav from './Nav';

const Contactus = () => {
  var [pro, setPro] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/viewcontact").then((res) => {
      console.log(res.data)
      setPro(res.data)
    }).catch((err) => console.log(err))
  }, [])

  return (
    <div style={{ height: "100%", marginTop: "0", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Nav />
      {
        ['executive', 'manager', 'admin'].map((role) => {
          return (
            <div key={role} style={{ width: '100%' }}>
              <Typography variant="h6" align="center" sx={{ mt: 4, textTransform: 'capitalize' }}>
                {role}
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                {pro.filter(val => val.Role.toLowerCase() === role).map((val, i) => {
                  let borderColor = '#000';
                  if (val.Role.toLowerCase() === 'executive') borderColor = 'green';
                  else if (val.Role.toLowerCase() === 'admin') borderColor = 'red';
                  else if (val.Role.toLowerCase() === 'manager') borderColor = 'blue';

                  return (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                      <Card
                        sx={{
                          maxWidth: 400,
                          borderRadius: '20px',
                          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                          mt: 5,
                          textAlign: 'center'
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="200"
                          image="https://www.shareicon.net/data/256x256/2017/05/24/886399_user_512x512.png"
                          sx={{
                            borderRadius: '50%',
                            width: 120,
                            height: 120,
                            objectFit: 'cover',
                            mx: 'auto',
                            mt: 2,
                            border: `4px solid ${borderColor}`
                          }}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                            {val.Name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {val.Email} <br />
                            {val.Phone} <br />
                            {val.Role}
                          </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center' }}>
                          <Button size="small">Share</Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          );
        })
      }
    </div>
  )
}

export default Contactus;
