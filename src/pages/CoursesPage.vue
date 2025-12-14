<script setup>
import { onMounted, ref } from "vue";
import HeroComponent from "../components/CoursesHeroComponent.vue";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent.vue";

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
  <BreadcrumbsComponent>
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
      :class="{ underline: $route.name === 'course' }"
      to="/CUOpenDayTest/courses"
      >Courses</router-link
    >
  </BreadcrumbsComponent>
  <HeroComponent></HeroComponent>
  <main class="p-5 lg:px-10 max-w-6xl mx-auto mb-10">
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <section
        class="flex flex-col gap-4 overflow-hidden"
        v-for="topic in feed.topics"
        :key="topic.id"
      >
        <router-link
          :to="{ name: 'course', params: { id: topic.id } }"
          class="flex flex-col gap-2 cursor-pointer group"
        >
          <div class="overflow-hidden">
            <img
              :src="topic.cover_image"
              :alt="topic.name"
              class="h-50 w-full"
            />
          </div>
          <p
            class="text-xl font-medium text-cardiff-blue group-hover:underline"
          >
            {{ topic.name }}
          </p>
          <p
            class="text-cardiff-dark max-w-3xl line-clamp-3 text-lg text-light"
          >
            {{ topic.description || "" }}
          </p>
          <div
            class="flex items-center gap-3"
            v-if="topic.programs && topic.programs.length"
          >
            <div class="block bg-green-500 rounded-full w-4 h-4"></div>
            <p>
              {{ topic.programs.length }}
              {{ topic.programs.length === 1 ? "event" : "events" }} available
            </p>
          </div>
        </router-link>
      </section>
    </div>
  </main>
</template>
