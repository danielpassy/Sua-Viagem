'use client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const router = useRouter();
    router.push('/login');
  }, []);
  return <main></main>;
}
