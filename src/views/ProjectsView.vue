<script setup lang="ts">
interface Project {
  title: string
  description: string
  demoUrl?: string
  sourceUrl?: string
}

const projects: Project[] = [
  {
    title: "E-commerce Website",
    description: "A modern e-commerce platform built with React, Redux, and Node.js focusing on user experience and performance.",
    demoUrl: "#",
    sourceUrl: "#"
  },
  {
    title: "Task Management App",
    description: "Real-time task management application using React, Firebase, and Material-UI with focus on simplicity.",
    demoUrl: "#",
    sourceUrl: "#"
  }
]
</script>

<template>
  <Transition name="fade" mode="out-in">
    <div class="max-w-3xl mx-auto px-6 py-12">
      <!-- Intro -->
      <p class="text-gray-600 text-lg mb-16">
        Here are some projects I've worked on. Each represents a unique challenge and learning experience.
      </p>

      <!-- Projects Grid -->
      <div class="space-y-12">
        <article v-for="project in projects" :key="project.title" class="group space-y-4 p-6 rounded-xl 
                 border border-gray-100 hover:border-gray-200
                 transition-all duration-300">
          <header>
            <h3 class="text-xl font-medium text-gray-900">
              {{ project.title }}
            </h3>
          </header>

          <p class="text-gray-600 leading-relaxed">
            {{ project.description }}
          </p>

          <footer class="flex gap-4 pt-2">
            <a v-if="project.demoUrl" :href="project.demoUrl" class="inline-flex items-center gap-2 text-gray-600 
                     hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              <span class="text-sm">Demo</span>
            </a>

            <a v-if="project.sourceUrl" :href="project.sourceUrl" class="inline-flex items-center gap-2 text-gray-600 
                     hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span class="text-sm">Source</span>
            </a>
          </footer>
        </article>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>