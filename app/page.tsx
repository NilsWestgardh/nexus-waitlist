"use client";

import React, { useState, useEffect } from 'react';
import { Container, Box } from "@mui/material";
import Section from "./components/Section";
import Hero from './components/Hero';
import FullWidthImage from './components/FullWidthImage';
import DiscordButton from './components/DiscordButton';

export default function Home() {

  return (
    <Box className="flex flex-col space-y-12 md:space-y-24">
      {/* HERO */}
      <Hero />

      {/* MAIN CONTENT */}
      <Container>

        {/* USP */}
        <Section props={{
          reverse: false,
          section: "AI-POWERED CARD CREATION",
          headline: "Imagine it. Create it. Play it.",
          body: "Both by the Nexus team and by the community create cards. The AI-powered card creator tool makes it easy go from idea to awesome custom card. The community submits and votes on cards, and the top voted cards are added to the game.",
          image: "nexus_cards.png",
        }} />
        
        {/* COMMUNITY */}
        <Section props={{
          reverse: false,
          section: "COMMUNITY-DRIVEN DEVELOPMENT",
          headline: "Get involved. Get heard.",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
          image: "nexus_friends.jpg",
        }} />

      </Container>

      <FullWidthImage url="nexus_flower.jpg" alt="Void Woods" />

      <Container>

        {/* STORY */}
        <Section props={{
          reverse: true,
          section: "A UNIVERSE OF POSSIBILITIES",
          headline: "Fight across the universe.",
          body: "Nexus is the simulated universe in which the game is set. Filled with unique worlds to explore, inhabited by entities ready to aid you in battle. From fantasy staples, to science fiction marvels.",
          image: "nexus_hydra.jpg",
        }} />

        {/* GAMEPLAY */}
        <Section props={{
          reverse: false,
          section: "GAMEPLAY",
          headline: "Headline goes here",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
          image: "void_woods.jpg",
        }} />

      </Container>

      <FullWidthImage url="void_woods.jpg" alt="Void Woods" />

      <Container>

        {/* MARKETPLACE */}
        <Section props={{
          reverse: true,
          section: "A UNIVERSE OF POSSIBILITIES",
          headline: "Fight across the universe.",
          body: "Nexus is the simulated universe in which the game is set. Filled with unique worlds to explore, inhabited by entities ready to aid you in battle. From fantasy staples, to science fiction marvels.",
          image: "void_woods.jpg",
        }} />

        {/* ROADMAP */}
        <Section props={{
          reverse: false,
          section: "ROADMAP",
          headline: "Headline goes here",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
          image: "void_woods.jpg",
        }} />

      </Container>

      <FullWidthImage url="void_woods.jpg" alt="Void Woods" />

      <Container>

        {/* PLAYTEST*/}
        <Section props={{
          reverse: false,
          section: "LOREM IPSUM",
          headline: "Headline goes here",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
          image: "void_woods.jpg",
        }} />

        {/* ABOUT */}
        <Section props={{
          reverse: true,
          section: "ABOUT",
          headline: "Headline goes here",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
          image: "void_woods.jpg",
        }} />

        {/* CTA */}
        <Box className="flex flex-col justify-center items-center my-12 text-white bg-lime-800" sx={{ width: "100%", height: "400px" }}>
          CTA GOES HERE
          <DiscordButton />
        </Box>


      </Container>

      <Box className="flex flex-col justify-center items-center text-white" sx={{ width: "100%", height: "200px" }}>
        Copyright Nexus 2023
      </Box>

    </Box>
  )
}
