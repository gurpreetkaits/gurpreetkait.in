<template>
  <div class="blog-view container p-4 min-h-screen">
    <p class="p-2 rounded-md font-medium headings">Blogs</p>
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
    <div v-else>
      <div v-for="post in posts.posts" :key="post.id"
           class="my-4 flex cursor-pointer items-center pl-2 mt-3 rounded-lg transition-all p-3 ease-in-out hover:bg-gray-100">
        <div>
          <p class="post-title text-base text-gray-700">{{ post.title }}</p>
          <p class="text-xs mt-2 text-gray-600">{{ formatDate(post.updated_at) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {getPosts} from '@/services/api';

const posts = ref([]);
const loading = ref(true);
const error = ref('');

const fetchPosts = async () => {
  try {
    posts.value = await getPosts();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchPosts();
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});
};
</script>

<style scoped>
/* Add your styles here */
</style>
