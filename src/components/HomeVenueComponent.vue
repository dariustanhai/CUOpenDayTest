<template>
  <section
    class="bg-cardiff-light p-10 flex justify-center my-10 lg:my-20 mx-auto max-w-6xl"
  >
    <div class="grid lg:flex gap-10 items-start">
      <img
        :src="'./images/what-to-expect.jpg'"
        alt="What to expect at Cardiff
      University Open Day"
        class="w-full max-w-md"
        loading="lazy"
        style="aspect-ratio: 4/3; object-fit: cover; min-height: 180px"
      />
      <div>
        <h2 class="text-2xl font-medium mb-5 uppercase">Venue Information</h2>
        <p class="mb-5">
          Cardiff University is located in the heart of Cardiff, the vibrant
          capital city of Wales. The main campus is easily accessible by public
          transport, with Cardiff Central Railway Station just a short walk
          away. There are also numerous bus routes that serve the campus.
        </p>
        <div class="grid sm:flex items-center gap-5">
          <div class="flex gap-2 items-center">
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
              class="lucide lucide-map-icon lucide-map"
            >
              <path
                d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"
              />
              <path d="M15 5.764v15" />
              <path d="M9 3.236v15" />
            </svg>
            <a
              href="https://www.cardiff.ac.uk/visit/map"
              target="_blank"
              class="hover:opacity-50"
            >
              Map of the campus
            </a>
          </div>
          <div class="flex gap-2 items-center">
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
            <a
              href="https://www.cardiff.ac.uk/visit/directions"
              target="_blank"
              class="hover:opacity-50"
            >
              How to get here
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
