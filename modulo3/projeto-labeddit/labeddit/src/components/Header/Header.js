import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { goToFeedPage, goToLoginPage } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';



export default function Header() {

    const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button onClick={()=> goToFeedPage(navigate)} color="inherit">LabEddit</Button>
            
          </Typography>
          <Button onClick={()=> goToLoginPage(navigate)} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
