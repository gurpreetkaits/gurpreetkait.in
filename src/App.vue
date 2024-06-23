<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'

</script>

<template>
  <Navbar></Navbar>
  <main class="mx-auto my-12  overflow-x-hidden px-6 text-gray-1200 antialiased sm:my-32 md:my-16"
        style="max-width:740px">
    <RouterView />
  </main>
</template>