'use client';
import { SnackBarContextProvider } from '@/app/context/snack-context';
import './globals.css';
import { Inter } from 'next/font/google';
import { AuthContextProvider } from '@/app/context/auth-context';
import AppSnackbar from '@/app/app-snackbar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const className = `flex justify-center h-screen`;
  return (
    <html lang="en">
      <body className={className}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <SnackBarContextProvider>
            <AuthContextProvider>
              <AppSnackbar />
              {children}
            </AuthContextProvider>
          </SnackBarContextProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
