'use client';
import NavBar from '@/app/components/app/navbar';
import React, { useEffect, useState } from 'react';
import api from '@api';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

export default function Page() {
  const [trips, setTrips] = useState<Array<any>>([]);

  useEffect(() => {
    const getTrips = async () => {
      const trips = await api.trip.getTrips();
      setTrips(trips);
    };
    getTrips();
  }, []);

  return (
    <div>
      Yours trips
      {trips.map((trip) => (
        <Card key={trip.id}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {trip.destination} {trip.duration | trip.initialDate}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Edit
            </Button>
            <Button size="small" color="primary">
              Cronograma
            </Button>
          </CardActions>
        </Card>
      ))}
      <NavBar />
    </div>
  );
}
