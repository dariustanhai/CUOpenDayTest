<script setup lang="ts"></script>

<template>
  <nav
    class="hidden lg:block bg-cardiff-white sticky top-0 py-5 z-30 drop-shadow-md px-5"
  >
    <div class="flex items-center gap-3 max-w-[1230px] mx-auto">
      <a
        class="text-lg font-light cursor-pointer hover:opacity-50 underline"
        href="https://www.cardiff.ac.uk/"
        >Home</a
      >
      <svg
        class="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 19.75 32"
      >
        <title>Chevron right</title>
        <path
          d="M6.13,28.28L18.41,16,6.13,3.72,9.84,0l16,16-16,16Z"
          transform="translate(-6.13 0)"
        ></path>
      </svg>
      <a
        class="text-lg text-light cursor-pointer hover:opacity-50 underline"
        href="https://www.cardiff.ac.uk/"
        >Study</a
      >
      <svg
        class="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 19.75 32"
      >
        <title>Chevron right</title>
        <path
          d="M6.13,28.28L18.41,16,6.13,3.72,9.84,0l16,16-16,16Z"
          transform="translate(-6.13 0)"
        ></path>
      </svg>
      <router-link
        class="text-lg text-light cursor-pointer hover:opacity-50"
        :class="{ underline: $route.name !== 'home' }"
        to="/"
        >Open Day</router-link
      >
      <slot></slot>
      <button
        class="ml-auto bg-cardiff-green text-cardiff-white px-4 py-2 font-bold uppercase text-sm cursor-pointer hover:bg-green-800 transition-colors duration-300"
      >
        Book Your Place
      </button>
    </div>
  </nav>
</template>
