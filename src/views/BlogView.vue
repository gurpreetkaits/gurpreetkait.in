<template>
  <section class="w-full">
    <div class="container px-4 md:px-6">
      <div class="space-y-4 text-center">
        <p class="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Check out some of the projects I've worked on. Each one showcases my skills and expertise in various
          technologies.
        </p>
      </div>
      <template v-for="blog in blogs" :key="blog.id">
        <article>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-1 mt-12" v-if="blogs.length > 0">
            <div class="grid gap-2">
              <h3 class="text-xl font-semibold">{{ blog.title }}</h3>
              <p class="text-muted-foreground">{{ blog.excerpt }}</p>
            </div>
          </div>
        </article>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {getPosts} from '@/services/api';

const blogs = ref([]);
const loading = ref(true);
const error = ref('');

const fetchPosts = async () => {
  try {
    let {posts} = await getPosts();
    blogs.value = posts;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchPosts();
});
</script>

<style scoped>
/* Add your styles here */
</style>
