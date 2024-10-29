<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import CenterNavbar from './components/CenterNavbar.vue';
</script>

<template>
  <main class="relative min-h-screen">
    <div class="container mx-auto p-4">
      <CenterNavbar></CenterNavbar>
      <!-- Scrollable Content Area -->
      <RouterView v-slot="{ Component }">
        <Transition name="slide-page" mode="out-in" appear>
          <component :is="Component" :key="$route.path" />
        </Transition>
      </RouterView>
    </div>
  </main>
</template>

<style>
/* Base styles */
html,
body {
  overflow-x: hidden;
}

/* Container */
.container {
  max-width: 1000px;
}

/* Transitions */
.slide-page-enter-active,
.slide-page-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>