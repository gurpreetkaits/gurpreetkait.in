<template>
  <div class="blog-view container p-4 min-h-screen">
    <div class="space-y-4 text-center">
      <p class="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        Checkout my latest blogs.
      </p>
    </div>
    <div class='pt-8'>
      <BlogList/>
    </div>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
<script setup lang="ts">
import BlogList from "@/views/BlogList.vue";
</script>