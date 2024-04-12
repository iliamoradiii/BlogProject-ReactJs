import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import BookIcon from '@mui/icons-material/Book';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position='sticky'>
        <Container maxWidth="lg">
            <Toolbar>
                <Typography component="h1" variant='h5' fontWeight="700" flex={1}>
                  <Link to="/" style={{textDecoration:"none", color:"white"}}>وبلاگ</Link>
                </Typography>
                <BookIcon />
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Header
