'use client';
import React, { useEffect } from 'react';
import api from '@api';

export default function SingleTrip({ params }: { params: { slug: string } }) {
  useEffect(() => {
    api.trip.getTrips({ _id: params.slug });
  }, [params]);
  return <p>Post: {params.slug}</p>;
}
