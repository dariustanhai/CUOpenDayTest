<script setup lang="ts">
import { ref } from "vue";

const isImageLoaded = ref(false);
</script>

<template>
  <section
    class="bg-cardiff-light py-10 px-5 flex justify-center mt-10 lg:mt-20"
  >
    <div class="grid lg:flex gap-10 items-start mx-auto max-w-6xl">
      <img
        src="/images/what-to-expect-thumbnail.jpg"
        alt="Students & Parents Talking Thumbnail"
        class="w-full max-w-md"
        loading="lazy"
        style="aspect-ratio: 4/3; object-fit: cover; min-height: 180px"
        :class="[isImageLoaded ? 'hidden' : 'block']"
      />
      <img
        src="/images/what-to-expect.jpg"
        alt="Students & Parents Talking"
        class="w-full max-w-md"
        loading="lazy"
        style="aspect-ratio: 4/3; object-fit: cover; min-height: 180px"
        :class="[isImageLoaded ? 'block' : 'hidden']"
        @load="isImageLoaded = true"
      />
      <div>
        <h2 class="text-2xl font-medium mb-5 uppercase">What to expect</h2>
        <ul>
          <li class="list-disc ml-5">
            <span class="font-medium">Meet the people who will teach you:</span>
            Our teaching staff are experts in their fields, combining academic
            excellence with real-world experience.
          </li>
          <li class="list-disc ml-5">
            <span class="font-medium">Explore our campus and facilities:</span>
            Discover how our facilities support your studies and future career.
          </li>
          <li class="list-disc ml-5">
            <span class="font-medium">Hear from current students:</span>
            Our students will share their experiences of life and learning at
            Cardiff University.
          </li>
          <li class="list-disc ml-5">
            <span class="font-medium">Ask us your questions:</span>
            From fees to student life, our staff and student ambassadors are
            available all day to answer your questions.
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
