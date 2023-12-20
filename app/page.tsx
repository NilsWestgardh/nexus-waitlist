"use client";

import React, { useState, useEffect } from 'react';
import { Container, Box } from "@mui/material";
import Section from "./components/Section";
import Hero from './components/Hero';

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
          image: "void_woods.jpg",
        }} />

        {/* VISION */}
        <Section props={{
          reverse: true,
          section: "VISION",
          headline: "Headline goes here",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
          image: "void_woods.jpg",
        }} />

        <Section props={{
          reverse: false,
          section: "STORY",
          headline: "Headline goes here",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
          image: "void_woods.jpg",
        }} />

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
      </Container>
    </Box>
  )
}
