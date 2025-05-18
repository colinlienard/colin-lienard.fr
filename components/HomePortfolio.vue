<script setup lang="ts">
const { data } = await useAsyncData('projects', () =>
  queryContent('/projects/').sort({ order: 1 }).find(),
);

const hovered = ref<null | number>(null);
</script>

<template>
  <NuxtLayout name="section">
    <h2 id="portfolio" class="hero">
      <strong>Portfolio</strong> <span class="empty">2025</span>
    </h2>
    <ul class="list">
      <PortfolioItem
        v-for="(project, index) in data"
        :key="index"
        :index="index"
        :title="project.title as string"
        :description="project.description"
        :image="project.image"
        :link="project._path as string"
        :transparent="hovered === null ? false : hovered !== index"
        @mouseenter="hovered = index"
        @mouseleave="hovered = null"
      />
    </ul>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.hero {
  @include typography.heading-2;

  .empty {
    @include mixins.text-stroke;
  }
}

.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @include screens.laptop {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem 3rem;
  }

  .item {
    background-color: variables.$dark;

    @include screens.laptop {
      &:nth-of-type(2n) {
        translate: 0 16rem;
      }
    }

    .image {
      width: 100%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
    }

    .title {
      @include typography.heading-3;

      margin: 1em 0 0.5em;
    }

    .description {
      @include typography.paragraph;

      color: variables.$grey;
    }
  }
}
</style>
