'use client';

import { Box, Card, CardContent, IconButton, Typography, styled } from '@mui/material';
import NavBar from '@/app/components/app/navbar';
import { SearchBox } from '@/app/components/SearchBox';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DestinationCarousel from '@/app/destinations-carousel';
import { Person } from '@mui/icons-material';

const StyledIconButton = styled(IconButton)(() => ({
  position: 'relative',
  '&::before': {
    content: '""',
    zIndex: 1,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgb(59 130 246 / 0.7)',
  },
}));

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  return (
    <main
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#29589e',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          pt: '2vh',
          pb: '4vh',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            pl: '10%',
            pb: '4%',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Box sx={{ width: '50%' }}>
            <Typography color="white" variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
              Qual sua próxima aventura?
            </Typography>
          </Box>
          <Box sx={{ width: '50%', display: 'flex' }}>
            <StyledIconButton
              sx={{
                position: 'absolute',
                right: 10,
                top: '2vh',
              }}
              onClick={() => ({})}
            >
              <Person sx={{ color: 'white', zIndex: 2, fontSize: '1.25em' }} />
            </StyledIconButton>{' '}
          </Box>
        </Box>
        <SearchBox
          setDestination={(value: string) => setSearchTerm(value)}
          destination={searchTerm}
          submit={() => router.push(`new-trip?searchTerm=${searchTerm}`)}
        />
      </Box>
      <Card sx={{ borderRadius: '30px', backgroundColor: 'white' }}>
        <CardContent>
          <Typography variant="h5">
            Explore roteiros que seus amigos fizeram:
          </Typography>
          <DestinationCarousel />
        </CardContent>
      </Card>
      <NavBar />
    </main>
  );
}
