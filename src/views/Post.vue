<template>
  <div class="single-post-view container p-4 min-h-screen">
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
    <div v-else>
      <h1 class="post-title text-2xl font-bold mb-4">{{ post.title }}</h1>
      <p class="text-sm text-gray-600 mb-6">{{ formatDate(post.updated_at) }}</p>
      <div class="post-content" v-html="post.body"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import axios from 'axios';
import {getPost} from "@/services/api";

const route = useRoute();
const post = ref(null);
const loading = ref(true);
const error = ref('');

const fetchPost = async (id: string) => {
  try {
    const response = await getPost(id);
    post.value = response.post;
  } catch (err) {
    error.value = 'Error fetching the post';
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchPost(route.params.id as string);
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});
};
</script>

<style scoped>
/* Add your styles here */
</style>
