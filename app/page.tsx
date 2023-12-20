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
          section: "USP",
          headline: "Headline goes here",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
          image: "nexus_cards.png",
        }} />

        {/* VISION */}
        <Section props={{
          reverse: true,
          section: "VISION",
          headline: "Headline goes here",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
          image: "void_woods.jpg",
        }} />

        {/* STORY */}
        <Section props={{
          reverse: false,
          section: "STORY",
          headline: "Headline goes here",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
          image: "void_woods.jpg",
        }} />

      </Container>

      <FullWidthImage url="void_woods.jpg" alt="Void Woods" />

      <Container>

        {/* GAMEPLAY */}
        <Section props={{
          reverse: true,
          section: "GAMEPLAY",
          headline: "Headline goes here",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
          image: "void_woods.jpg",
        }} />

        {/* COMMUNITY */}
        <Section props={{
          reverse: false,
          section: "COMMUNITY",
          headline: "Headline goes here",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
          image: "void_woods.jpg",
        }} />

        {/* PLAYTEST */}
      <Section props={{
          reverse: true,
          section: "PLAYTEST",
          headline: "Headline goes here",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
          image: "void_woods.jpg",
        }} />

      </Container>

      <FullWidthImage url="void_woods.jpg" alt="Void Woods" />

      <Container>

        {/* ROADMAP */}
        <Section props={{
          reverse: false,
          section: "ROADMAP",
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
