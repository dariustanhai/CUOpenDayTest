<script setup lang="ts">
import { ref } from "vue";

const isHeroLoaded = ref(false);
</script>

<template>
  <header>
    <div class="relative max-h-120 overflow-hidden">
      <h1
        class="absolute top-1/2 transform -translate-y-1/2 text-cardiff-white text-2xl lg:text-6xl font-bold p-5 lg:pl-30 max-w-[40%]"
      >
        Undergraduate Courses
      </h1>
      <img
        src="/images/courses-thumbnail.jpg"
        alt="Teaching Lecturing Thumbnail"
        class="w-full"
        :class="[isHeroLoaded ? 'hidden' : 'block']"
      />
      <img
        src="/images/courses.jpg"
        alt="Teaching Lecturing"
        class="w-full"
        :class="[isHeroLoaded ? 'block' : 'hidden']"
        @load="isHeroLoaded = true"
      />
    </div>
    <div class="lg:-mt-12 mb-6">
      <div
        class="w-full flex gap-5 items-center justify-center bg-cardiff-red text-cardiff-white drop-shadow-lg p-5 lg:max-w-4xl mx-auto lg:rounded"
      >
        <div class="flex items-center">
          <h1 class="text-2xl font-bold">Courses</h1>
        </div>
        <div class="ml-auto"></div>
      </div>
    </div>
  </header>
</template>
