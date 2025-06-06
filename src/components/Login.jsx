import React from 'react'
import {Button, Card, CardContent, CardHeader, TextField, Typography} from '@mui/material'
const Login = () => {
  return (
    <div style={{backgroundColor:'rgb(63, 215, 253)', minHeight:"5vw",justifySelf:"center",borderRadius:'20px',boxShadow:' 4px 4px 10px 4px rgba(255, 255, 255, 0.3)'}}>
        <Card sx={{padding:'2vw',borderRadius:'20px'}}>
            <CardHeader title="CRM" sx={{width:'100%',padding:'0',paddingBottom:'1vw',justifyContent:'center',flexDirection:'column'}}/>
            <br/>
            <CardContent sx={{display:'flex',flexDirection:'column'}}>
                <TextField label='Username'/>
                <br/>
                <TextField label='Password'/>
                <br/>
                <br/>
                <Button variant='outlined' sx={{color:'rgb(3, 196, 45)',fontSize:'1vw',fontWeight:'600',borderColor:"black"}}>LOGIN</Button>
            </CardContent>
        </Card>
    </div>
  )
}

export default Login