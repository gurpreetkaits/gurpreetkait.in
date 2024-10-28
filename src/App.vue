<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <main class="mx-auto my-12 text-gray-1200 antialiased sm:my-32 md:my-16" style="max-width:1000px">
    <div class="container mx-auto p-4">
      <div class="grid grid-cols-5 gap-6"> <!-- 20/80 split using 5 columns -->
        <Navbar />
        <div class="col-span-4">
          <transition type="transition" :duration="1000" name="slide-fade" mode="in-out">
            <RouterView />
          </transition>
        </div>
      </div>
    </div>
  </main>
</template>