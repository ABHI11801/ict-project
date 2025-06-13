import { Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';


const CreateUser = () => {
  const navigate = useNavigate();
    const style ={
        paddingTop:"1vw",
        paddingBottom:"1vw",
        paddingRight:"3vw",
        paddingLeft:"3vw",
        borderRadius:"1vw",
        boxShadow:"4px 4px 10px 4px rgba(0, 0, 0, 0.2)",
        backgroundColor: "rgb(125,150,255)"
    }
  return (
     
    <div style={{width:"100%"}}>
        <Button variant='contained' sx={style} onClick={() => navigate('/UserDetails')}><Typography variant='h5'>CREATE NEW USER</Typography></Button>
    </div>
  
  )
}

export default CreateUser