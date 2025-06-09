import { Typography } from '@mui/material'
import React from 'react'

const ActiveLeads = () => {
  return (
    <div style ={{
        display:'flex',
        flexDirection:"column",
        padding: "2vw 7vw 2vw 7vw",
        borderRadius:"1vw",
        boxShadow:"4px 4px 10px 4px rgba(0, 0, 0, 0.3)",
        backgroundColor:"#f0f0f0",
        justifyContent:"center",
        alignItems:"center",
    }}>
      <Typography variant='h4' style={{fontFamily:'font-family: "Bebas Neue", sans-serif',fontWeight:"600",color:"rgb(150,150,150)"}}>ACTIVE LEADS</Typography>
      <Typography variant='h3' style={{fontFamily:'font-family: "Bebas Neue", sans-serif',fontWeight:"600",color:"rgb(125,150,255)"}}>300</Typography>
    </div>
  )
}

export default ActiveLeads