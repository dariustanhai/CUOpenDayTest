<script setup lang="ts">
import { ref } from "vue";

const isHeroLoaded = ref(false);
const isHeroMobileLoaded = ref(false);
</script>

<template>
  <header>
    <div class="relative lg:max-h-120 overflow-hidden">
      <div
        class="p-5 lg:pl-30 lg:max-w-[60%] absolute top-1/2 transform -translate-y-1/2"
      >
        <h1 class="text-cardiff-white text-2xl lg:text-6xl font-bold">
          University Open Day
        </h1>
        <p
          class="text-cardiff-white font-medium lg:mt-4 text-sm max-w-[75%] lg:text-xl flex items-center gap-2"
        >
          What's next for you? Explore your options at our undergraduate Open
          Day.
        </p>
        <p
          class="text-cardiff-white font-medium mt-2 lg:mt-4 text-xs md:text-md lg:text-lg flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-calendar-range-icon lucide-calendar-range"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M16 2v4" />
            <path d="M3 10h18" />
            <path d="M8 2v4" />
            <path d="M17 14h-6" />
            <path d="M13 18H7" />
            <path d="M7 14h.01" />
            <path d="M17 18h.01" />
          </svg>
          Friday, June 27th 2025
        </p>
        <p
          class="text-cardiff-white font-medium mt-2 lg:mt-4 text-xs md:text-md lg:text-lg flex items-center gap-2"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-user-round-icon lucide-user-round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
          </span>
          Undergraduate Students
        </p>
      </div>
      <!-- Mobile thumbnail (low priority) -->
      <img
        :src="'./images/hero-image-mobile-thumbnail.jpeg'"
        alt="Cardiff St Mary Street Thumbnail"
        class="w-full"
        loading="lazy"
        style="aspect-ratio: 16/9; object-fit: cover; min-height: 180px"
        :class="[isHeroMobileLoaded ? 'hidden' : 'sm:hidden']"
      />
      <!-- Mobile main (LCP on mobile) - fetchpriority high so browser loads it earlier -->
      <img
        :src="'./images/hero-image-mobile.jpeg'"
        alt="Cardiff St Mary Street"
        class="w-full"
        fetchpriority="high"
        style="aspect-ratio: 16/9; object-fit: cover; min-height: 180px"
        :class="[isHeroMobileLoaded ? 'sm:hidden' : 'hidden']"
        @load="isHeroMobileLoaded = true"
      />
      <!-- Desktop thumbnail (low priority) -->
      <img
        :src="'./images/hero-image-thumbnail.jpeg'"
        alt="Cardiff St Mary Street Thumbnail"
        class="hidden sm:block w-full"
        loading="lazy"
        style="aspect-ratio: 16/9; object-fit: cover; min-height: 300px"
        :class="[isHeroLoaded ? '!hidden' : 'sm:!block']"
      />
      <!-- Desktop main (LCP on desktop) - fetchpriority high -->
      <img
        :src="'./images/hero-image.jpeg'"
        alt="Cardiff St Mary Street"
        class="hidden sm:block w-full"
        fetchpriority="high"
        style="aspect-ratio: 16/9; object-fit: cover; min-height: 300px"
        :class="[isHeroLoaded ? 'sm:!block' : '!hidden']"
        @load="isHeroLoaded = true"
      />
    </div>
    <div class="lg:-mt-12 mb-6 lg:px-10">
      <div
        class="w-full flex flex-col gap-5 items-center justify-center bg-cardiff-red text-cardiff-white drop-shadow-lg p-5 lg:rounded lg:max-w-4xl mx-auto"
      >
        <div class="gap-5 grid sm:flex items-center w-full">
          <h1 class="text-2xl font-bold">Plan your open day</h1>
          <div
            class="flex flex-col md:flex-row ml-auto text-right lg:text-auto"
          >
            <router-link
              to="/courses"
              class="cursor-pointer underline hover:opacity-50"
              >Browse by course</router-link
            >
            <router-link
              to="/course/38"
              class="cursor-pointer underline md:ml-5 hover:opacity-50"
              >General talks & activities</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
