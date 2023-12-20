"use client";

import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import DiscordButton from "./DiscordButton";
import LoadingBar from "./LoadingBar";
import NexusLogo from "./NexusLogo";

export default function Hero() {
  const [loadingBarState, setLoadingBarState] = useState('fade-in'); // 'fade-in', 'fade-out', or ''
  const [fadeInContent, setFadeInContent] = useState(false);

  useEffect(() => {
    // Start by fading in the loading bar
    let timer1 = setTimeout(() => {
      // After 5 seconds, fade out the loading bar
      setLoadingBarState('fade-out');
    }, 5000);

    let timer2 = setTimeout(() => {
      // After 6 seconds, remove the loading bar and fade in the rest of the content
      setLoadingBarState('');
      setFadeInContent(true);
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <Box
      className="flex flex-col justify-center items-center w-full h-screen space-y-6"
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
      {/* The background image is always rendered without any condition */}
      <Image
        src="/images/nexus-hero-4.png"
        alt="Nexus hero image"
        fill={true}
        priority
        className="animate-fade-in-half initial-hidden"
        style={{
            zIndex: -1,
            objectFit: 'cover',
            opacity: 0.33,
        }}
        />

      {/* Loading bar is controlled for fading in and out */}
      {loadingBarState && (
        <Box className={`flex flex-col justify-center items-center ${loadingBarState}`}>
          <LoadingBar section="" progressMessage="INITIALIZING SIMULATION" completeMessage="LOADING UNIVERSE..." />
        </Box>
      )}

      {/* Rest of the content fades in after the loading bar fades out */}
      {fadeInContent && (
        <>
          <NexusLogo />
          <Box className="flex flex-col justify-center items-center space-y-0 mb-6">
            <Typography variant="h1" className="gradient-animation">Ai-powered.</Typography>
            <Typography variant="h1" className="gradient-animation">Open source.</Typography>
            <Typography variant="h1" className="gradient-animation">Competitive TCG.</Typography>
          </Box>
          <Typography
            variant="h5"
            className="text-white gradient-animation"
          >
            Create custom cards with the help of AI.<br />Create the game with community.
          </Typography>
          <DiscordButton />
        </>
      )}
    </Box>
  );
}
