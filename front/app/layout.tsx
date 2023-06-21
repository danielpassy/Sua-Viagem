'use client';
import { SnackBarContextProvider } from '@/app/context/snack-context';
import './globals.css';
import { AuthContextProvider } from '@/app/context/auth-context';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import theme from '@/app/theme';
import { ThemeProvider } from '@mui/material';
import AppSnackbar from '@/app/components/app/app-snackbar';

// const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const className = `flex justify-center h-screen`;
  return (
    <html lang="en">
      <body className={className}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <SnackBarContextProvider>
              <AuthContextProvider>
                <AppSnackbar />
                {children}
              </AuthContextProvider>
            </SnackBarContextProvider>
          </LocalizationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
