<script setup>
import { computed } from "vue";

const props = defineProps({
  program: Object,
});

const convertTo24Hour = (date) => {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes} ${parseInt(hours) >= 12 ? "PM" : "AM"}`;
};

const startTime = computed(() => {
  const date = new Date(props.program.start_time);
  return convertTo24Hour(date);
});

const endTime = computed(() => {
  const date = new Date(props.program.end_time);
  return convertTo24Hour(date);
});

const address = computed(() => {
  const loc = props.program.location;
  return encodeURIComponent(`${loc.title}, ${loc.address}, ${loc.postcode}}`);
});
</script>

<template>
  <div
    class="flex gap-10 items-center my-5 bg-cardiff-white drop-shadow-sm p-5"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-clock-icon lucide-clock hidden sm:flex"
    >
      <path d="M12 6v6l4 2" />
      <circle cx="12" cy="12" r="10" />
    </svg>
    <div class="hidden sm:flex flex-col gap-1 pr-5 text-cardiff-blue grow">
      <p>{{ startTime }}</p>
      <p>{{ endTime }}</p>
    </div>
    <div class="grow">
      <div class="max-w-3xl">
        <h3 class="font-bold">{{ program.title }}</h3>
        <div class="sm:hidden text-cardiff-blue grow mt-2">
          <p>{{ startTime }} - {{ endTime }}</p>
        </div>
        <p class="mt-2 text-light">{{ program.description }}</p>
        <div class="flex flex-wrap gap-3 mt-5">
          <a
            class="text-sm flex gap-2 items-center cursor-pointer hover:opacity-50"
            :href="`https://www.google.com/maps/search/?api=1&query=${address}`"
            target="_blank"
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
              class="lucide lucide-map-pin-icon lucide-map-pin"
            >
              <path
                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
              />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p>
              {{ program.room }}, {{ program.location.address }},
              {{ program.location.postcode }}
            </p>
          </a>
          <a
            class="text-sm flex gap-2 items-center cursor-pointer hover:opacity-50"
            :href="`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${program.title}&dates=${props.program.start_time}/${props.program.end_time}&location=${address}`"
            target="_blank"
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
              class="lucide lucide-calendar-icon lucide-calendar"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
            </svg>
            Add to calendar
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
