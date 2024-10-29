<script setup lang="ts">
import { User, Projector, Library } from 'lucide-vue-next'

interface NavItem {
  name: string
  url: string
  icon: typeof User
}

const items: NavItem[] = [
  {
    name: "Me",
    url: "/",
    icon: User
  },
  {
    name: "Projects",
    url: "/projects",
    icon: Projector
  },
  {
    name: "Blog",
    url: "/blog",
    icon: Library
  }
]
</script>

<template>
  <div class="fixed top-0 left-0 right-0 bg-white backdrop-blur-sm z-50 border-b">
    <nav class="max-w-screen-xl mx-auto">
      <ul class="flex justify-center gap-8 p-4">
        <li v-for="(item, index) in items" :key="item.name" :style="{
          animationDelay: `${index * 100}ms`,
          animation: 'slideIn 0.5s ease-out forwards'
        }">
          <router-link :to="item.url" v-slot="{ isActive, isExactActive }">
            <a :href="item.url" class="group flex flex-col items-center transition-all duration-200 ease-in-out" 
              :class="[
                (isActive || isExactActive)
                  ? 'text-gray-900 font-bold'
                  : 'text-gray-600 hover:text-gray-900'
              ]">
              <component :is="item.icon" class="w-6 h-6 mb-1" />
              <span class="font-medium text-xs hidden md:block">
                {{ item.name }}
              </span>
            </a>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>

  <!-- Spacer to prevent content from going under fixed navbar -->
  <div class="h-20"></div>
</template>

<style scoped>
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.router-link-active {
  @apply text-gray-900;
}
</style>