<script setup>
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent.vue";
import TimetableComponent from "../components/TimetableComponent.vue";

const location = ref([]);
const course = ref({});
const route = useRoute();

onMounted(async () => {
  course.value = await getCourse(route.params.id);
  location.value = await getLocation();
});

const getCourse = async (courseId) => {
  const base = import.meta.env.BASE_URL || "/";
  const response = await fetch(`${base}api/OpenDay.json`);
  const courses = await response.json();
  const course = courses.topics.find(
    (course) => course.id === parseInt(courseId)
  );
  return course;
};

const getLocation = async () => {
  const base = import.meta.env.BASE_URL || "/";
  const response = await fetch(`${base}api/Locations.json`);
  return response.json();
};

const programsGroupedByHour = computed(() => {
  if (!course.value.programs) {
    return {};
  }
  const programsGroupedByHour = Object.groupBy(
    course.value.programs,
    (program) => program.room
  );
  for (const key in programsGroupedByHour) {
    if (key === "null") {
      console.log("programsGroupedByHour");
      delete programsGroupedByHour[key];
    }
  }
  return programsGroupedByHour;
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
      class="text-lg text-light cursor-pointer hover:opacity-50 underline"
      to="/CUOpenDayTest/courses"
      >Courses</router-link
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
      :to="{ name: 'course', params: { id: course.id } }"
      class="text-lg text-light cursor-pointer hover:opacity-50"
      >{{ course.name }}</router-link
    >
  </BreadcrumbsComponent>
  <main class="mb-10">
    <img
      :src="course.cover_image"
      :alt="course.name"
      class="w-full lg:h-100 object-cover"
    />
    <div class="mb-5 bg-cardiff-red">
      <div class="p-5 max-w-6xl mx-auto">
        <h1 class="text-2xl lg:text-4xl font-bold text-cardiff-white">
          {{ course.name }}
        </h1>
      </div>
    </div>
    <div class="p-5 max-w-6xl mx-auto">
      <p class="text-lg lg:text-2xl max-w-4xl">{{ course.description }}</p>
      <h2 class="text-center my-10 text-lg lg:text-2xl font-medium underline">
        Open Day Timetable for {{ course.name }}
      </h2>
      <article v-for="(programs, hour) in programsGroupedByHour" :key="hour">
        <h2 class="mt-10">
          <div class="flex items-center gap-3">
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
              class="lucide lucide-building-icon lucide-building"
            >
              <path d="M12 10h.01" />
              <path d="M12 14h.01" />
              <path d="M12 6h.01" />
              <path d="M16 10h.01" />
              <path d="M16 14h.01" />
              <path d="M16 6h.01" />
              <path d="M8 10h.01" />
              <path d="M8 14h.01" />
              <path d="M8 6h.01" />
              <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
              <rect x="4" y="2" width="16" height="20" rx="2" />
            </svg>
            {{ programs[0].room }}
          </div>
        </h2>
        <div class="space-y-4">
          <section v-for="program in programs" :key="program.id">
            <TimetableComponent :program="program" />
          </section>
        </div>
      </article>
    </div>
  </main>
</template>
