<script setup lang="ts"></script>

<template>
  <div class="sticky top-0 sm:relative w-full bg-cardiff-white z-10 px-10">
    <nav
      class="hidden lg:flex items-center gap-5 py-5 max-w-[1230px] mx-auto border-b border-gray-300"
    >
      <a href="https://www.cardiff.ac.uk/" rel="noopener noreferrer">
        <img
          src="/images/cu-logo.svg"
          alt="Cardiff University Logo"
          class="h-16 w-auto"
        />
      </a>
      <a
        class="text-xl hover:opacity-50"
        href="https://www.cardiff.ac.uk/"
        rel="noopener noreferrer"
      >
        Study
      </a>
      <a
        class="text-xl hover:opacity-50"
        href="https://www.cardiff.ac.uk/"
        rel="noopener noreferrer"
      >
        Research
      </a>
      <a
        class="text-xl hover:opacity-50"
        href="https://www.cardiff.ac.uk/"
        rel="noopener noreferrer"
      >
        Work with us
      </a>
      <a
        class="text-xl hover:opacity-50"
        href="https://www.cardiff.ac.uk/"
        rel="noopener noreferrer"
      >
        Community
      </a>
      <a
        class="text-xl hover:opacity-50"
        href="https://www.cardiff.ac.uk/"
        rel="noopener noreferrer"
      >
        Global
      </a>
      <a
        class="text-xl hover:opacity-50"
        href="https://www.cardiff.ac.uk/"
        rel="noopener noreferrer"
      >
        About
      </a>
      <a
        class="ml-auto text-md border p-2 font-medium border-gray-400 hover:bg-gray-200"
        href="https://www.cardiff.ac.uk/"
        rel="noopener noreferrer"
      >
        Cymraeg
      </a>
    </nav>
    <nav
      class="sticky top-0 flex lg:hidden items-center gap-5 py-5 max-w-[1230px] mx-auto"
    >
      <a
        href="https://www.cardiff.ac.uk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/cu-logo.svg"
          alt="Cardiff University Logo"
          class="h-10 w-auto"
        />
      </a>
      <button
        class="ml-auto bg-cardiff-green text-cardiff-white px-4 py-2 font-bold uppercase text-sm cursor-pointer hover:bg-green-800 transition-colors duration-300"
      >
        Book Your Place
      </button>
      <div class="cursor-pointer">
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
          class="lucide lucide-menu-icon lucide-menu"
        >
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
      </div>
    </nav>
  </div>
</template>
