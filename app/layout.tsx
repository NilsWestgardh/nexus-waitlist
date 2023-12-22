import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './styles/globals.css'

const inter = Inter({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nexus: AI-powered TCG',
  description: 'Nexus is a competitive digital strategic trading card game where players can make and play their own cards, which they create with the help of AI.',
  metadataBase: new URL('https://play.nexus'),
}

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;
  
  return (
    <html lang="en" className= {robotoMono.className}>
      <body className="bg-background text-foreground bg-black">
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </body>
    </html>
  )
}
