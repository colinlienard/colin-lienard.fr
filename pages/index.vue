<script setup lang="ts">
useHead({
  title: 'Colin Lienard | Fullstack Engineer',
  meta: [
    {
      name: 'description',
      content:
        "Hi! I'm Colin Lienard, a Fullstack Engineer with a passion for frontend development. I use React, Typescript and Svelte.",
    },
  ],
  script: [
    {
      src: 'https://cursor-party.colinlienard.partykit.dev/cursors.js',
      tagPosition: 'bodyClose',
    },
  ],
});
</script>

<template>
  <NuxtLayout name="page">
    <HomeHeroSection />
    <HomePortfolio />
    <HomeAbout />
    <HomeContact />
    <BaseFooter />
  </NuxtLayout>
</template>
