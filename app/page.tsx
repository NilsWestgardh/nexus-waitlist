import { Container, Box, Typography, Button, SvgIcon } from "@mui/material";
import Image from 'next/image';

export default function Home() {
  return (
    <Box>
      {/* HERO */}
      <Box
        sx={{
            position: 'relative',
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        }}
    >
        <Image
            src="/images/nexus-hero-2.png"
            alt="Nexus hero image"
            fill={true}
            objectFit="cover"
            style={{
              zIndex: -1,
            }}
        />
        <Typography variant="subtitle1" color="primary.contrastText" sx={{ mb: 3 }}>
            ...initializing nexus_v1.0.0
        </Typography>
        <Typography variant="h1" component="h1" color="primary.contrastText">
            Enter Nexus
        </Typography>
        <Typography variant="h5" color="primary.contrastText" sx={{ my: 3 }}>
            Join our waitlist and stay updated
        </Typography>
        <Button
            variant="outlined"
            size="large"
            color="primary"
        >
            Send
        </Button>
    </Box>

        {/* MAIN CONTENT */}
      <Container>
        {/* USP */}
        <Box>
          
              <Box className="flex flex-col justify-center p-12 my-24 mx-12 space-y-6 rounded-xl bg-gray-800 border border-gray-700 shadow-2xl shadow-black">
              
              <Typography variant="h3" component="h3" color="primary.contrastText">USP</Typography>
              <Typography variant="subtitle1" component="" color="primary.contrastText">USP</Typography>
            </Box>
        </Box>
            
        {/* VISION */}

        {/* ROADMAP */}

        {/* PLAYTEST */}

        {/* ABOUT */}

        {/* CTA */}
      </Container>
    </Box>
    
  )
}
