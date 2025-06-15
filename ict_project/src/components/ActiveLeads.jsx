import { Typography, Card, CardContent, Box } from "@mui/material"
import { TrendingUp } from "@mui/icons-material"

const ActiveLeads = () => {
  return (
    <Card
      elevation={3}
      sx={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
            ACTIVE LEADS
          </Typography>
          <TrendingUp sx={{ color: "rgba(255,255,255,0.8)", fontSize: 28 }} />
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
          300
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
              width: "75%",
              background: "rgba(255,255,255,0.8)",
              borderRadius: 2,
            }}
          />
        </Box>
      </CardContent>
    </Card>
  )
}

export default ActiveLeads
