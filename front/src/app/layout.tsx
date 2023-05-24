import './globals.css'
import { Inter } from 'next/font/google'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
const inter = Inter({ subsets: ['latin'] })
import CssBaseline from '@mui/material/CssBaseline';

export const metadata = {
  // title: 'Tudo-totoso',
  description: 'Planeje sua próxima viagem juntos!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const newClassName = `${inter.className} flex justify-center mt-5`
  return (
    <>
      <title>
        Tudo-totoso
      </title>

      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta
        name="description"
        content="Planeje sua próxima viagem juntos! App de planejamento de viagem em conjunto"
        key="desc"
      />
      <html lang="en">
        <body className={newClassName}>{children}</body>
      </html >
    </>
  )
}
