'use client';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Profile() {
  const router = useRouter();

  const Logout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };
  return (
    <div>
      Profile
      <Button onClick={Logout}>Logout</Button>
    </div>
  );
}
