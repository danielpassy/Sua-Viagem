import { AppBar, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import FlightIcon from '@mui/icons-material/Flight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Help from '@mui/icons-material/Help';
import { useRouter } from 'next/navigation';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const navBarHeight = '56px';

export default function NavBar() {
  const router = useRouter();
  const iconsClass = { fontSize: 30 };
  return (
    <AppBar color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <IconButton
          onClick={() => router.push('/trips')}
          color="inherit"
          aria-label="trips"
        >
          <FlightIcon sx={iconsClass} />
        </IconButton>

        <IconButton
          onClick={() => router.push('/')}
          color="inherit"
          aria-label="newTrip"
        >
          <AddCircleOutlineIcon sx={iconsClass} />
        </IconButton>

        <IconButton
          onClick={() => router.push('/profile')}
          color="inherit"
          aria-label="profile"
        >
          <AccountCircleIcon sx={iconsClass} />
        </IconButton>

        {/* <IconButton
          onClick={() => router.push('/help')}
          color="inherit"
          aria-label="help"
        >
          <Help sx={iconsClass} />
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
}
