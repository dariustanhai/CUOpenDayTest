<script setup>
import { onMounted, ref } from "vue";

const feed = ref([]);

onMounted(async () => {
  const base = import.meta.env.BASE_URL || "/";
  const res = await fetch(`${base}api/OpenDay.json`);
  feed.value = await res.json();
  feed.value.topics = feed.value.topics.filter(
    (x) => x.name !== "General Talks and Activities"
  );
  feed.value.topics.sort((a, b) => a.name.localeCompare(b.name));
});
</script>

<template>
  <section class="mt-10 lg:mt-20 max-w-6xl mx-auto">
    <div class="bg-cardiff-red py-10 px-5">
      <h2 class="text-2xl font-medium uppercase text-cardiff-white">
        Timetable of Events
      </h2>
      <p class="text-cardiff-white max-w-2xl mt-5">
        The Open Day will run from 9:00 AM to 6:00 PM, with a variety of talks,
        tours, and activities scheduled throughout the day.
      </p>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
        <router-link
          v-for="course in feed.topics"
          :key="course.id"
          class="border text-cardiff-white rounded py-1 px-2 cursor-pointer hover:underline"
          :to="{ name: 'course', params: { id: course.id } }"
        >
          {{ course.name }}
        </router-link>
      </div>
      <div class="flex items-center mt-10">
        <div class="grid sm:flex gap-3 ml-auto">
          <router-link
            to="/CUOpenDayTest/course/38"
            class="border px-4 py-2 flex items-center gap-4 cursor-pointer hover:underline text-cardiff-white"
          >
            General talks & activities
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
              class="lucide lucide-move-right-icon lucide-move-right ml-auto"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </router-link>
          <router-link
            to="/CUOpenDayTest/courses"
            class="flex items-center gap-4 bg-cardiff-white px-4 py-2 font-medium uppercase text-sm cursor-pointer transition-colors duration-300 hover:text-cardiff-blue"
          >
            EXPLORE COURSES
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
              class="lucide lucide-move-right-icon lucide-move-right ml-auto"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
