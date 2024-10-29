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
  <div class="w-full md:w-48 flex items-center">
    <nav class="sticky top-8">
      <ul class="flex flex-col gap-2">
        <li v-for="(item, index) in items" :key="item.name" :style="{
          animationDelay: `${index * 100}ms`,
          animation: 'slideIn 0.5s ease-out forwards'
        }">
          <router-link :to="item.url" v-slot="{ isActive, isExactActive }">
            <a :href="item.url" class="group flex items-center gap-3 px-4 py-2.5 rounded-lg
           transition-all duration-200 ease-in-out
           relative" :class="[
            (isActive || isExactActive)
              ? 'text-gray-900 bg-gray-100/50 font-bold'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
          ]">
              <span class="font-medium text-sm">
                <component :is="item.icon" width="13" />
              </span>
              <span class="font-medium text-sm hidden lg:block">
                {{ item.name }}
              </span>

              <div class="absolute left-0 top-1/5 -translate-y-1/2 w-1 h-8
                        rounded-r-full bg-gray-900 scale-y-0 opacity-0
                        group-hover:scale-y-100 group-hover:opacity-100
                        transition-all duration-200 ease-in-out">
              </div>
            </a>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Optional: Add active class styles */
.router-link-active {
  @apply bg-gray-100/50 text-gray-900;
}

.router-link-active .icon {
  @apply text-gray-900;
}

.router-link-active .indicator {
  @apply scale-y-100 opacity-100;
}
</style>