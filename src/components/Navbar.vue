<template>
  <div class="col-span-1 flex items-center">
    <nav class="sticky top-8">
      <ul class="flex flex-col space-y-4">
        <li v-for="(item, index) in items" :key="item"
          class="transform translate-x-0 transition-all duration-300 hover:translate-x-2" :style="{
            animationDelay: `${index * 200}ms`,
            animation: 'slideIn 0.5s ease-out forwards'
          }">
          <div class="flex justify-start items-center">
            <component :is="item.icon"></component>
            <a :href="item.url" class="text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-transparent
                          px-4 py-2 rounded-lg block transition-all duration-200">
              {{ item.name }}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { User, Projector, Library, } from 'lucide-vue-next';
export default {
  name: "Navbar",
  components: {
    Projector, User, Library
  },
  data() {
    return {
      items: [{
        name: "Me",
        url: "/",
        icon: User
      }, {
        name: "Projects",
        url: "projects",
        icon: Projector
      }, {
        name: "Blog",
        url: "blog",
        icon: Library
      }]
    }
  }
}
</script>