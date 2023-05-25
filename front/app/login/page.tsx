'use client'
import { Facebook, Google } from '@mui/icons-material'
import { Box, Button, Card, CardContent, Divider, Icon, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'


export default function login() {
  const centerFlex = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  }

  return (
    <Box sx={{
      width: { lg: '30vw', sm: '50vw', xs: '90vw' },
      pt: 3
    }} >
      <Card>
        <CardContent sx={centerFlex}>
          <Typography variant="h4" component="div">
            Login
          </Typography>
          <Box className='py-2' />
          <Box className='px-3' sx={centerFlex}>
            <TextField className='py-2' label="Username" variant="outlined" />
            <TextField className='py-2' label="Password" variant="outlined" />
            <Button className='py-2' variant="outlined">
              Login
            </Button>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" component="span">
                Or Login With
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Button variant='contained' sx={{ mx: 'auto', backgroundColor: 'blue' }}>
                <Google sx={{ mr: 1 }} />
                Google
              </Button>
              <Divider sx={{ my: 1.5 }} orientation='vertical' flexItem />
              <Button color="error" variant='contained' sx={{ mx: 'auto', backgroundColor: 'light-blue' }}>
                <Facebook sx={{ mr: 1 }} />
                Facebook
              </Button>

            </Box>
          </Box>
          {/* <SpaceBar /> */}
        </CardContent>
      </Card>
    </Box >
  )
}
