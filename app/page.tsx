"use client";

import React, { useState, useEffect } from 'react';
import { Container, Box } from "@mui/material";
import Section from "./components/Section";
import Hero from './components/Hero';
import FullWidthImage from './components/FullWidthImage';

export default function Home() {

  return (
    <Box className="flex flex-col w-full space-y-6 md:space-y-12">
      {/* HERO */}
      <Hero />

      {/* MAIN CONTENT */}
      <Container>

        {/* CARD CREATION */}
        <Section props={{
          reverse: false,
          section: "CARDS",
          headline: "Imagine it, then play it.",
          body: "Nexus's AI-powered Card Creator tool makes it easy go from idea to your own custom card. Beat your friends with it in a casual match right away, or submit it for review to be included in the official game.",
          image: "nexus_cards.png",
          alt: "",
          showCta: false,
          cta: "",
          link: "",
        }} />

        {/* COMMUNITY */}
        <Section props={{
          reverse: true,
          section: "COMMUNITY",
          headline: "Get involved. Get heard.",
          body: "Nexus will be co-developed with the community. Contribute with feedback, playtesting, story ideas, cards, and votes for submitted custom cards. Join the Discord to get started.",
          image: "nexus_team.jpg",
          alt: "",
          showCta: true,
          cta: "Join the Nexus Discord",
          link: "https://discord.gg/wVtZJuxfQN",
        }} />

      </Container>

      <FullWidthImage url="nexus_seer.jpg" alt="Nexus elf seer" />

      <Container>

        {/* REWARDS */}
        <Section props={{
          reverse: true,
          section: "REWARDS",
          headline: "Make plays, and money.",
          body: "The community votes on submitted cards. Top cards make it into the game, and earn their creator a share of generated revenue. Join the Discord to start making cards when the card creator launches.",
          image: "nexus_mine.jpg",
          alt: "",
          showCta: true,
          cta: "Join the Nexus Discord",
          link: "https://discord.gg/wVtZJuxfQN",
        }} />

        {/* MARKETPLACE */}
        <Section props={{
          reverse: false,
          section: "MARKETPLACE",
          headline: "Your trash, my treasure.",
          body: "Get rid of old cards, trade with your friends, and sell to the community. Just like IRL. Long term, we want to build a marketplace for trading, selling, and buying Nexus cards.",
          image: "nexus_engine.jpg",
          alt: "Nexus goblin engineer",
          showCta: false,
          cta: "",
          link: "",
        }} />

      </Container>

      <FullWidthImage url="nexus_fade.jpg" alt="Nexus wormhole" />

      <Container>

        {/* STORY */}
        <Section props={{
          reverse: true,
          section: "STORY",
          headline: "Battle across the universe.",
          body: "Nexus is a simulated universe filled with unique worlds to explore, inhabited by all kinds of entities. From fantasy staples like Elves and Vampires, to sci-fi beings like Cyborgs and Technomancers. Recruit them to join you in battle.",
          image: "nexus_hydra.jpg",
          alt: "Nexus cybernetic hydra",
          showCta: false,
          cta: "",
          link: "",
        }} />
        
        {/* GAMEPLAY */}
        <Section props={{
          reverse: false,
          section: "GAMEPLAY",
          headline: "Competitive core, casual.",
          body: "The core game mode of Nexus will be 1vs1 competitive. That said, try out your cards and experience chaotic matches in the casual game mode. Join the Discord to help shape the gameplay.",
          image: "nexus_merc.jpg",
          alt: "Nexus magma cyborg paladin",
          showCta: true,
          cta: "Join the Nexus Discord",
          link: "https://discord.gg/wVtZJuxfQN",
        }} />

      </Container>

      <FullWidthImage url="nexus_jetpack.jpg" alt="nexus Woods" />

      <Container>

        {/* ROADMAP */}
        <Section props={{
          reverse: true,
          section: "ROADMAP",
          headline: "The start of an epic journey.",
          body: "Making a game takes a long time. Here is the high-level roadmap for Nexus: 1. Create the card creator (in progress). 2. Create the community. 3. Create the game. 4. Create the marketplace.",
          image: "nexus_tree.jpg",
          alt: "Nexus cherry-blossom tree",
          showCta: false,
          cta: "",
          link: "",
        }} />

        {/* PLAYTEST */}
        <Section props={{
          reverse: false,
          section: "PLAYTEST",
          headline: "Your feedback is wanted.",
          body: "Interesting in trying Nexus? We want to hear what you think! Starting in early 2024, we'll be hosting IRL playtests in Stockholm, Sweden. Join the Discord for event announcements.",
          image: "nexus_friends.jpg",
          alt: "Nexus vervai friends",
          showCta: true,
          cta: "Join the Nexus Discord",
          link: "https://discord.gg/wVtZJuxfQN",
        }} />

      </Container>

      <FullWidthImage url="nexus_wolf.jpg" alt="nexus Woods" />

      <Container>

        {/* ABOUT*/}
        <Section props={{
          reverse: false,
          section: "ABOUT",
          headline: "Hello, I'm Nils.",
          body: "Nexus is my brainchild and passion project. I've played trading card games since the 90s. I've made hundreds of custom MTG and Hearthstone cards. But I've never played them. With Nexus I want everyone to be able play cards they create.",
          image: "nexus_nils.jpg",
          alt: "Nexus Nils",
          showCta: false,
          cta: "",
          link: "",
        }} />

        {/* CONTACT */}
        <Section props={{
          reverse: true,
          section: "CONTACT",
          headline: "Write me a line..",
          body: "Got a question? Want to get involved? Just want to say hi? Join the Discord and send me a DM.",
          image: "nexus_letter.jpg",
          alt: "Nexus vampire blood-letterer",
          showCta: true,
          cta: "Join the Nexus Discord",
          link: "https://discord.gg/wVtZJuxfQN",
        }} />

      </Container>

      <Box className="flex flex-col justify-center items-center text-white" sx={{ width: "100%", height: "200px" }}>
        Copyright Nexus 2023
      </Box>

    </Box>
  )
}
