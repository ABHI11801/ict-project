import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = ({ setRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin') setRole('Admin');
    else if (username === 'manager') setRole('Manager');
    else setRole('Executive');

    navigate('/dashboard');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5vw' }}>
      <Card sx={{ padding: 4, width: 400 }}>
        <CardHeader title="CRM Login" />
        <CardContent>
          <TextField fullWidth label="Username" value={username} onChange={e => setUsername(e.target.value)} margin="normal" />
          <TextField fullWidth label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} margin="normal" />
          <Button fullWidth variant='contained' onClick={handleLogin}>Login</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;

