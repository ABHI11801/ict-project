import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Nav = ({ role }) => {
    const navigate = useNavigate()
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            CRM Dashboard
          </Typography>

          <Button component={Link} to="/about" color="inherit">
            About
          </Button>
          <Button component={Link} to="/contact" color="inherit">
            Contact
          </Button>
          {role ? (
            <Button component={Link} to="/dashboard" color="inherit">
              Dashboard
            </Button>
          ) : (
            <Button onClick={()=>{navigate('/login',{replace:true});localStorage.clear();}} color="inherit">Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 8 }} />
    </>
  );
};

export default Nav;
