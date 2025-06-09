import React, { useEffect, useState } from 'react'
import { Button, Card, CardContent, CardHeader, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  var [Username, setUserName] = useState('')
  var [Password, setPassWord] = useState('')
  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassWord(e.target.value);
  };
  const checkUser = () => {
    console.log("button clicked")
    axios.post('http://localhost:5000/login', { Username, Password })
      .then((res) => {
        if (res.status == 200) {
          localStorage.setItem("role", res.data.Role)
          localStorage.setItem("team", res.data.Team)
          navigate(`/${res.data.Role}`, { replace: true })
        }
      })
      .catch((err) => { console.log(err) })
  }
  return (
    <div style={{ backgroundColor: 'rgb(63, 215, 253)', justifySelf: "center", borderRadius: '20px', boxShadow: ' 4px 4px 10px 4px rgba(255, 255, 255, 0.3)', marginTop: "10vw"}}>
      <Card sx={{ padding: '3vw', borderRadius: '20px' }}>
        <CardHeader title="CRM-LOGIN" sx={{ width: '100%', padding: '0', paddingBottom: '1vw', justifyContent: 'center', flexDirection: 'column' }} titleTypographyProps={{ fontSize: '1.8rem', fontWeight: 'bold', textAlign: 'center' }} />

        <br />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', minWidth: '20vw' }}>
          <TextField label='Username' name='Username' onChange={userNameHandler} />
          <br />
          <TextField label='Password' name='Password' onChange={passwordHandler} />
          <br />
          <br />
          <Button variant='outlined' sx={{ color: 'rgb(3, 196, 45)', fontSize: '1vw', fontWeight: '600', borderColor: "black" }} onClick={checkUser}>LOGIN</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login