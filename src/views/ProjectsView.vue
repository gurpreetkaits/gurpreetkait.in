<template>
  <Transition type="transition" :duration="1000" name="slide-fade" mode="in-out">
  <div class="project-view container p-4 mt-3 min-h-screen">
    <section class="w-full">
      <div class="container px-4 md:px-6">
        <div class="space-y-4 text-center">
          <p class="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Check out some of the projects I've worked on, showcasing my skills and expertise in various technologies. As a freelancer and as part of teams in different organizations, I have contributed to a wide range of projects.
          </p>
        </div>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-1 mt-12">
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm group" data-v0-t="card">
            <div class="flex flex-col space-y-1.5 p-6">
              <h3 class="whitespace-nowrap text-large font-semibold leading-none tracking-tight">E-commerce Website</h3>
            </div>
            <div class="p-6 space-y-4">
              <p class="text-gray-600">Developed a fully functional e-commerce website with a modern, responsive design using React, Redux, and Node.js.</p>
              <div class="flex items-center gap-4">
                <a href="#" class="inline-flex items-center gap-2 text-primary hover:underline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg> Live Demo
                </a>
                <a href="#" class="inline-flex items-center gap-2 text-primary hover:underline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg> Source Code
                </a>
              </div>
            </div>
          </div>
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm group" data-v0-t="card">
            <div class="flex flex-col space-y-1.5 p-6">
              <h3 class="whitespace-nowrap text-large font-semibold leading-none tracking-tight">Task Management App</h3>
            </div>
            <div class="p-6 space-y-4">
              <p class="text-muted-foreground">Developed a task management app with real-time updates, user authentication, and a clean UI using React, Firebase, and Material-UI.</p>
              <div class="flex items-center gap-4">
                <a href="#" class="inline-flex items-center gap-2 text-primary hover:underline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg> Live Demo
                </a>
                <a href="#" class="inline-flex items-center gap-2 text-primary hover:underline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg> Source Code
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
  </Transition>
</template>
<script setup lang="ts">
</script>