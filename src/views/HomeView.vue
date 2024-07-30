<script setup>
import SocialIcons from '@/components/SocialIcons.vue'
</script>

<template>
  <div id="homeViewContainer" class="mb-32 flex flex-col items-start my-7 transition-shadow ease-in-out duration-300	">
    <div class="container mx-auto p-4">
      <!--     Introduction     -->
      <div class="max-w-32 pl-4 flex items-center">
        <div>
          <div class="grid grid-col-1 mb-2">
            <img src="@/assets/gurpreetkait.jpeg" class="rounded-full w-32 h-32"/>
          </div>
          <div class="font-medium text-3xl	mb-3">
            Gurpreet Kait
          </div>
          <div>
            <p class="tracking-wide text-gray-600 my-8">
              Hello 👋
              <br><br>
              I'm Gurpreet, a passionate software developer who started with PHP but is constantly expanding my horizons. Currently, I’m diving into Python to explore the exciting worlds of ML and AI.🚀
              <br>
              I aspire to become a digital nomad, combining my love for technology with my desire to explore the world. 🌏
              <br><br>
              Outside of coding, you'll find me:
              <br>🚴‍♂️ Cycling and enjoying the outdoors
              <br>🎶 Playing the flute
              <br>✨ Dreaming big – my next few years are dedicated to building something meaningful and helping people.
              <br><br>
            </p>
            <SocialIcons></SocialIcons>
          </div>
        </div>
      </div>
      <div class="mt-8m ml-3">
      </div>
    </div>
  </div>
</template>

