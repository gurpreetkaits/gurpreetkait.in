<script setup lang="ts">
import { Link, Github } from 'lucide-vue-next'

interface Project {
  title: string
  description: string
  techStack: string[]
  demoUrl?: string
  sourceUrl?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'Daily Expense Tracker',
    description: 'Effortlessly track your expenses, understand your spending patterns, and make better financial decisions.',
    techStack: ['Vue','Tailwind','Pinia', 'Laravel', 'Mariadb'],
    demoUrl: 'https://dailyexpensetracker.in/',
    sourceUrl: '#',
    featured: true
  },
  {
    title: 'Minimal Task Management App',
    description: 'Real-time task management application using React, Firebase, and Material-UI with focus on simplicity.',
    techStack: ['HTML', 'CSS', 'Vanilla JS','Vercel'],
    demoUrl: 'https://mtm-pwa.vercel.app/',
    sourceUrl: 'https://github.com/gurpreetkaits/my-minimal-tm',
    featured: true
  },{
    title: '$this (Portfolio)',
    description: 'A personal blog.',
    techStack: ['Vue', 'Tailwind', 'Vanilla JS','Vercel'],
    demoUrl: '/',
    sourceUrl: 'https://github.com/gurpreetkaits/gurpreetkait.in',
    featured: true
  }
  // Add more projects
]
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-white">
    <!-- Header -->
    <div class="max-w-4xl mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-gray-900 mb-4 text-center">Projects</h1>
      <p class="text-gray-600 text-lg text-center">
        Here are some projects I've worked on. Each represents a unique challenge and learning experience.
      </p>
    </div>

    <!-- Projects Grid -->
    <div class="max-w-4xl mx-auto px-4 pb-20">
      <div class="grid grid-cols-2 gap-8">
        <div v-for="project in projects" :key="project.title" class="group relative bg-white/60 backdrop-blur-sm rounded-xl p-6 transition-all
                    hover:shadow-lg hover:bg-white/80 border border-gray-100">

          <!-- Project Header -->
          <div class="flex items-start justify-between mb-4">
            <h3 class="text-xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
              {{ project.title }}
            </h3>

            <!-- Links -->
            <div class="flex gap-3">
              <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank"
                class="text-gray-400 hover:text-emerald-500 transition-colors">
                <Link class="w-5 h-5" />
              </a>
              <a v-if="project.sourceUrl" :href="project.sourceUrl" target="_blank"
                class="text-gray-400 hover:text-emerald-500 transition-colors">
                <Github class="w-5 h-5" />
              </a>
            </div>
          </div>

          <!-- Description -->
          <p class="text-gray-600 mb-4">{{ project.description }}</p>

          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in project.techStack" :key="tech" class="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600
                         group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
              {{ tech }}
            </span>
          </div>

          <!-- Hover Effect Gradient -->
          <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/0 to-emerald-500/0 
                      opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
</style>