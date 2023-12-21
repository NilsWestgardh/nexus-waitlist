"use client";

import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from "next/image";
import DiscordButton from "./DiscordButton";
import LoadingBar from "./LoadingBar";
import NexusLogo from "./NexusLogo";
import clsx from "clsx";

type HeroProps = {
  props: {
    h1: string[];
    subheader: string[];
  };
};

export default function Hero({ props }: HeroProps) {
  const [loadingBarState, setLoadingBarState] = useState('fade-in');
  const [fadeInBgImage, setFadeInBgImage] = useState(false);
  const [fadeInContent, setFadeInContent] = useState(false);

  const smallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
  const mediumScreen = useMediaQuery((theme: any) => theme.breakpoints.between('sm', 'md'));

  useEffect(() => {
    // Start by fading in the loading bar
    let timer1 = setTimeout(() => {
      // After 5 seconds, fade out the loading bar
      setLoadingBarState('fade-out');
    }, 3000);

    let timer2 = setTimeout(() => {
      // After 4 seconds, remove the loading bar and fade in the bg image
      setLoadingBarState('');
      setFadeInBgImage(true);
    }, 4000);

    let timer3 = setTimeout(() => {
      // After 5.5 seconds, fade in the rest of the content
      setFadeInContent(true);
    }, 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
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
      {fadeInBgImage && (<Image
        src="/images/nexus-hero-4.png"
        alt="Nexus hero image"
        fill={true}
        priority
        className="initial-hidden"
        style={{
            zIndex: -1,
            objectFit: 'cover',
            opacity: 0.25,
        }}
        />)}

      {loadingBarState && (
        <Box className={`flex flex-col justify-center items-center ${loadingBarState}`}>
          <LoadingBar
            progressMessage="INITIALIZING SIMULATION" completeMessage="LOADING UNIVERSE..." />
        </Box>
      )}

      {fadeInContent && (
        <>
          <NexusLogo />
          <Box className="flex flex-col justify-center items-center space-y-0 mb-6">
            <Typography
              variant="h1"
              className={clsx('gradient-animation', {
                'small-screen-h1': smallScreen,
                'medium-screen-h1': mediumScreen,
              })}
            >
              {props.h1[0]}
              {/* AI-POWERED. */}
            </Typography>
            <Typography
              variant="h1"
              className={clsx('gradient-animation', {
                'small-screen-h1': smallScreen,
                'medium-screen-h1': mediumScreen,
              })}
            >
              {props.h1[1]}
              {/* OPEN SOURCE. */}
            </Typography>
            <Typography
              variant="h1"
              className={clsx('gradient-animation', {
                'small-screen-h1': smallScreen,
                'medium-screen-h1': mediumScreen,
              })}
            >
              {props.h1[2]}
              {/* COMPETITIVE TCG. */}
            </Typography>
          </Box>
          <Typography
            variant="h5"
            className="text-white"
          >
            {props.subheader[0]}<br />{props.subheader[1]}
            Create playable custom cards with AI.<br />Create the game with the community.
          </Typography>
          <Typography
            variant="subtitle2"
            color="primary"
            className=""
          >
            Join Discord to get updates and get involved.
          </Typography>
          <DiscordButton />
        </>
      )}
    </Box>
  );
}
