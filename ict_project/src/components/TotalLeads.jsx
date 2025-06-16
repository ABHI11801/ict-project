import { Typography, Card, CardContent, Box } from "@mui/material"
import { Assessment } from "@mui/icons-material"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

const TotalLeads = () => {
  const [total,setTotal] = useState()
    useEffect(()=>{
      axios.get('http://localhost:5000/getLeadsCount')
      .then((res)=>{
        setTotal(res.data.total)
      })
    },[])
  return (
    <Card
      elevation={3}
      sx={{
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        borderRadius: 3,
        minWidth: 280,
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255,255,255,0.8)",
              fontWeight: 500,
              letterSpacing: "0.5px",
            }}
          >
            TOTAL LEADS
          </Typography>
          <Assessment sx={{ color: "rgba(255,255,255,0.8)", fontSize: 28 }} />
        </Box>
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontWeight: 700,
            fontSize: "3rem",
            lineHeight: 1,
          }}
        >
          {total}
        </Typography>
        <Box
          sx={{
            mt: 1,
            height: 4,
            background: "rgba(255,255,255,0.3)",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              background: "rgba(255,255,255,0.8)",
              borderRadius: 2,
            }}
          />
        </Box>
      </CardContent>
    </Card>
  )
}

export default TotalLeads
