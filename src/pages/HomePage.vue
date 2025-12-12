<script setup lang="ts">
import { onMounted, ref } from "vue";
import cuLogo from "/cu-logo.svg";

const feed = ref([]);

onMounted(async () => {
  console.log("hit");
  const base = import.meta.env.BASE_URL || "/";
  const res = await fetch(`${base}api/OpenDay.json`);
  feed.value = await res.json();
  console.log(feed.value.topics);
});
</script>

<template>
  <div class="min-h-screen bg-cardiff-white font-sans px-2 py-6">
    <div
      class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
    >
      <a
        href="https://www.cardiff.ac.uk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="cuLogo" alt="Cardiff University Logo" class="h-16 w-auto" />
      </a>
    </div>
    <h1
      class="text-3xl sm:text-5xl font-bold text-cardiff-red mb-8 text-center"
    >
      Cardiff University Open Day
    </h1>
    <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <div
        class="bg-cardiff-grey rounded-lg shadow p-6 flex flex-col"
        v-for="topic in feed.topics"
        :key="topic.id"
      >
        <img
          :src="topic.cover_image || cuLogo"
          :alt="topic.name"
          class="h-32 w-full object-cover rounded mb-4"
        />
        <h2 class="text-xl font-bold text-cardiff-red mb-2">
          {{ topic.name }}
        </h2>
        <p class="text-cardiff-dark mb-2">{{ topic.description || "" }}</p>
        <div class="mt-2" v-if="topic.programs && topic.programs.length">
          <h3 class="font-semibold text-cardiff-dark mb-1">Events:</h3>
          <ul class="list-disc list-inside text-sm">
            <li v-for="prog in topic.programs" :key="prog.id">
              <span class="font-semibold">{{ prog.title }} </span>
              <span v-if="prog.start_time" class="text-xs text-cardiff-dark">
                ({{
                  new Date(prog.start_time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                }}
                {{
                  prog.end_time
                    ? " - " +
                      new Date(prog.end_time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : ""
                }})
              </span>
              <span class="text-xs" v-if="prog.room">{{ prog.room }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
