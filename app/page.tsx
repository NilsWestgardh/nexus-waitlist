"use client";

import React, { useState, useEffect } from 'react';
import { Container, Box, Typography } from "@mui/material";
import FullWidthImage from './components/FullWidthImage';
import Section from "./components/Section";
import Hero from './components/Hero';
import Link from 'next/link';

export default function Home() {

  return (
    <Box className="
      flex
      flex-col
      w-full
      space-y-6
      md:space-y-12
      "
    >
      {/* HERO */}
      <Hero props={{
        h1: ["AI-POWERED", "OPEN SOURCE.", "DIGITAL TCG."],
        subheader: ["Create playable custom cards with AI.", "Then, create the game with the community."]
      }} />

      {/* MAIN CONTENT */}
      <Container>
        {/* CARD CREATION */}
        <Section props={{
          reverse: false,
          section: "CARDS",
          headline: "Imagine it, then play it.",
          body: "Nexus's AI-powered Card Creator tool makes it easy go from idea to your own custom card. Beat your friends with it in a casual match right away, or submit it for review to be included in the official game.",
          image: "nexus_cards.png",
          alt: "Nexus cards",
          caption: "Nexus card teaser.",
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
          caption: 'Card: Team Up. <i>"United, we strike as one."</i>',
          showCta: true,
          cta: "Join the Nexus Discord",
          link: "https://discord.gg/wVtZJuxfQN",
        }} />
      </Container>

      <FullWidthImage
        url="nexus_seer.jpg"
        alt="Nexus elf seer"
      />

      <Container>
        {/* REWARDS */}
        <Section props={{
          reverse: true,
          section: "REWARDS",
          headline: "Make plays, and money.",
          body: "The community votes on submitted cards. Top cards make it into the game, and earn their creator a share of generated revenue. Join the Discord to start making cards when the card creator launches.",
          image: "nexus_mine.jpg",
          alt: "",
          caption: "Card: Miner Inconvenience. <i>Bristyl are a continous thorn in the side of dwarven mining operations on Glintara.</i>",
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
          alt: "Nexus Starship Salvager",
          caption: "Card: Starship Salvager. <i>The criteria for a usuable part, is that it hasn't exploded. Yet.</i>",
          showCta: false,
          cta: "",
          link: "",
        }} />
      </Container>

      <FullWidthImage
        url="nexus_fade.jpg"
        alt="Nexus wormhole"
      />

      <Container>
        {/* STORY */}
        <Section props={{
          reverse: true,
          section: "STORY",
          headline: "Battle across the universe.",
          body: "Nexus is a simulated universe filled with unique worlds to explore, inhabited by all kinds of entities. From fantasy staples like Elves and Vampires, to sci-fi beings like Cyborgs and Technomancers. Recruit them to join you in battle.",
          image: "nexus_hydra.jpg",
          alt: "Nexus cybernetic hydra",
          caption: "",
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
          alt: 'Card: Orgokh, Galactic Headhunter.',
          caption: "",
          showCta: true,
          cta: "Join the Nexus Discord",
          link: "https://discord.gg/wVtZJuxfQN",
        }} />
      </Container>

      <FullWidthImage
        url="nexus_rocketpack.jpg"
        alt="Nexus Overclocked Rocket Pack"
      />

      <Container>
        {/* ROADMAP */}
        <Section props={{
          reverse: true,
          section: "ROADMAP",
          headline: "The start of an epic journey.",
          body: "Making a game takes a long time. Here is the high-level roadmap for Nexus: 1. Create the card creator (in progress). 2. Create the community. 3. Create the game. 4. Create the marketplace.",
          image: "nexus_tree.jpg",
          alt: "Card: Blossoming Treant. <i>When their flowers bloom for the third time, Cherry Treants venture out into the forests of Yomix to find a peaceful place to put their roots down.</i>",
          caption: "",
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
          alt: "Card: Treetop Tutor. <i></i>",
          caption: "",
          showCta: true,
          cta: "Join the Nexus Discord",
          link: "https://discord.gg/wVtZJuxfQN",
        }} />
      </Container>

      <FullWidthImage
        url="nexus_wolf.jpg"
        alt="nexus Woods"
      />

      <Container>
        {/* ABOUT*/}
        <Section props={{
          reverse: false,
          section: "ABOUT",
          headline: "Hello, I'm Nils.",
          body: "Nexus is my brainchild and passion project. I've played trading card games since the 90s. I've made hundreds of custom MTG and Hearthstone cards. But I've never played them. With Nexus I want everyone to be able play cards they create.",
          image: "nexus_nils.jpg",
          alt: "Nexus Nils",
          caption: "",
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
          alt: 'Card: Vampire Blood-Letterer. <i>"My dear, I will spare not a drop of blood as I pour a heart out, professing my undying love for you."</i>',
          caption: "",
          showCta: true,
          cta: "Join the Nexus Discord",
          link: "https://discord.gg/wVtZJuxfQN",
        }} />
      </Container>

      <Box className="
        flex
        flex-row
        justify-center
        items-center
      text-white
        w-full
        mt-6 mb-12
        "
      >
        <Typography variant="overline">
          Copyright Nexus 2023
        </Typography>

        <Typography variant="overline">
          Images are generated by DALL-E
        </Typography>

        <Link href="" target="_blank">
          <Typography variant="overline">
            Discord
          </Typography>
        </Link>

        <Link href="" target="_blank">
          <Typography variant="overline">
            X
          </Typography>
        </Link>

        <Link href="" target="_blank">
          <Typography variant="overline">
            Reddit (Coming soon)
          </Typography>
        </Link>

        <Link href="" target="_blank">
          <Typography variant="overline">
            LinkedIn
          </Typography>
        </Link>

      </Box>

    </Box>
  )
}
