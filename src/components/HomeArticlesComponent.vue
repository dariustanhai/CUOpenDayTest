<script setup lang="ts">
import { ref } from "vue";

const isFirstArticleImageLoaded = ref(false);
const isSecondArticleImageLoaded = ref(false);
</script>

<template>
  <section class="max-w-6xl mx-auto my-10 lg:my-20 px-5">
    <h2 class="text-2xl font-medium mb-10 text-center uppercase">
      Is Cardiff University right for me?
    </h2>
    <div class="grid lg:grid-cols-2 items-right gap-10 lg:gap-20">
      <a
        href="https://www.cardiff.ac.uk/study/undergraduate/why-study-with-us-as-an-undergraduate"
        target="_blank"
        class="flex flex-col cursor-pointer group"
      >
        <img
          src="/images/why-choose-cardiff-thumbnail.jpg"
          alt="Cardiff Castle"
          :class="[isFirstArticleImageLoaded ? 'hidden' : 'block']"
        />
        <img
          src="/images/why-choose-cardiff.jpg"
          alt="Cardiff Castle Thumbnail"
          :class="[isFirstArticleImageLoaded ? 'block' : 'hidden']"
          @load="isFirstArticleImageLoaded = true"
        />
        <p
          class="text-xl font-medium text-cardiff-blue group-hover:underline mt-5"
        >
          Why should I choose Cardiff?
        </p>
        <p class="text-cardiff-dark max-w-3xl line-clamp-3 text-lg text-light">
          Discover why Cardiff University is a top choice for students from
          around the world.
        </p>
      </a>
      <a
        href="https://www.cardiff.ac.uk/study/student-life/living-in-cardiff"
        target="_blank"
        class="flex flex-col cursor-pointer group"
      >
        <img
          src="/images/living-in-cardiff-thumbnail.jpg"
          alt="Millennium Centre"
          :class="[isSecondArticleImageLoaded ? 'hidden' : 'block']"
        />
        <img
          src="/images/living-in-cardiff.jpg"
          alt="Millennium Centre Thumbnail"
          :class="[isSecondArticleImageLoaded ? 'block' : 'hidden']"
          @load="isSecondArticleImageLoaded = true"
        />
        <p
          class="text-xl font-medium text-cardiff-blue group-hover:underline mt-5"
        >
          Living in Cardiff
        </p>
        <p class="text-cardiff-dark max-w-3xl line-clamp-3 text-lg text-light">
          Our students fall in love with Cardiff. So what makes the Welsh
          capital so appealing?
        </p>
      </a>
    </div>
  </section>
</template>
