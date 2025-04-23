<script setup lang="ts">
const isMobile = useIsMobile();
const { data } = await useAsyncData('milestones', () =>
  queryContent('/milestones').findOne(),
);
</script>

<template>
  <NuxtLayout name="section">
    <SkillsContainer />
    <figure id="about" class="figure">
      <figcaption v-if="isMobile">
        <h2 class="hero">About <span class="empty">me</span></h2>
      </figcaption>
      <img
        class="image"
        src="/images/colin.webp"
        alt=""
        width="256"
        height="384"
        loading="lazy"
      />
      <figcaption class="figcaption">
        <h2 v-if="!isMobile" class="hero">
          About <span class="empty">me</span>
        </h2>
        <p class="paragraph">
          I am a French <strong>fullstack engineer</strong> working from Limoges
          and Paris.<br /><br />
          I am passionate about <strong>creating interfaces</strong>, both from
          a design and development perspective, and I love to test new trends
          and technologies.<br /><br />
          I recently joined <strong>Mobsuccess</strong> where I create
          interfaces using <strong>React</strong> and
          <strong>Typescript</strong>, but I also do side projects on my free
          time.<br /><br />
          To discover my tech stack,
          <strong class="blink">click anywhere</strong>...
        </p>
      </figcaption>
    </figure>
    <ul
      v-if="data"
      class="list"
      data-scroll
      data-scroll-class="visible"
      :data-scroll-offset="isMobile ? '0' : '25%'"
    >
      <li class="timeline" />
      <li
        v-for="(milestone, index) in data.milestones"
        :key="index"
        class="list-item"
      >
        <span class="circle" />
        <div class="content">
          <h3 class="title">{{ milestone.start }} - {{ milestone.end }}</h3>
          <p class="description">
            <strong>{{ milestone.name }}</strong>
          </p>
          <p class="sub">
            <strong>{{ milestone.description }}</strong>
          </p>
        </div>
      </li>
    </ul>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.figure {
  @include mixins.section;

  padding: 0;
  width: min(100%, 55rem);

  @include screens.laptop {
    flex-direction: row;

    .figcaption {
      display: flex;
      flex-direction: column;
      gap: 4rem;

      .hero {
        white-space: nowrap;
      }
    }
  }

  .hero {
    @include typography.heading-2;

    .empty {
      @include mixins.text-stroke;
    }
  }

  .image {
    border-radius: 99rem;
  }

  .paragraph {
    @include typography.paragraph;

    color: variables.$grey;

    strong {
      color: variables.$white;
    }

    .blink {
      @include mixins.blink;
    }
  }
}

.list {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;

  @include screens.laptop {
    gap: 8rem;
    right: 2.5rem;
  }

  .timeline {
    position: absolute;
    top: 2rem;
    bottom: 2rem;
    left: calc(1rem - 1px);
    width: 2px;
    background-image: linear-gradient(
      to bottom,
      variables.$blue,
      variables.$green
    );
    z-index: -1;
    clip-path: inset(0 0 100% 0);
    transition: clip-path 1.5s variables.$ease-in-out;

    @include screens.laptop {
      left: calc(1.5rem - 1px);
      top: -6rem;
    }
  }

  .list-item {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @include screens.laptop {
      gap: 3rem;
    }

    .circle {
      flex: 0 0 auto;
      width: 2rem;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background-color: variables.$dark;
      border: 2px solid variables.$white;
      scale: 0;
      transition: scale 0.5s 0.25s variables.$ease-in-out;

      @include screens.laptop {
        width: 3rem;
      }

      &.full {
        background-color: variables.$white;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      opacity: 0;
      translate: 0 1rem;
      transition: 0.5s 0.25s variables.$ease-in-out;

      .title {
        @include typography.heading-3;
      }

      .sub {
        color: variables.$grey;
      }
    }

    &:nth-of-type(2) * {
      transition-delay: 0.5s;
    }

    &:nth-of-type(3) * {
      transition-delay: 0.75s;
    }

    &:nth-of-type(4) * {
      transition-delay: 1s;
    }

    &:nth-last-of-type(1) .circle {
      background-color: variables.$white;
    }
  }

  &.visible {
    .timeline {
      clip-path: inset(0);
    }

    .list-item {
      .circle {
        scale: 1;
      }

      .content {
        translate: 0;
        opacity: 1;
      }
    }
  }
}
</style>
