<template>
  <div v-if="loading" class="text-center">Loading...</div>
  <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
  <div v-else>
    <div class="grid gap-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
      <div v-for="post in posts.posts" :key="post.id" class="my-1">
        <article
            class="flex flex-col cursor-pointer items-start p-2 rounded-lg hover:shadow-sm transition-all ease-in-out">
          <h2 class=" text-base text-gray-700">{{ post.title }}</h2>
          <p class="text-xs mt-2 text-gray-600">{{ formatDate(post.updated_at) }}</p>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
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

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});
};
</script>