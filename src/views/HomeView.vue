<script setup>
import BlogView from '@/views/BlogView.vue'
import SocialIcons from '@/components/SocialIcons.vue'
import BlogList from "@/views/BlogList.vue";
</script>

<template>
  <div id="homeViewContainer" class="mb-32 flex flex-col items-start my-7 transition-shadow ease-in-out duration-300	">
    <div class="container mx-auto p-4">
      <!--     Introduction     -->
      <div class="max-w-32 pl-4 flex items-center">
        <div>
          <div class="font-medium text-3xl	mb-3">
            Gurpreet Kait
          </div>
          <div>
            <p class="tracking-wide text-gray-600 my-8">
              A software developer with a passion for design, blogging, and building cool stuff. I work with Laravel,
              Vue, React, and TypeScript to create sleek, functional web applications. I love sharing my journey and
              insights through my blog, connecting with fellow devs, and staying ahead of the curve. Let's make
              something awesome together!
            </p>
            <SocialIcons></SocialIcons>
          </div>
        </div>
      </div>
      <div class="mt-8">
      <BlogList />
      </div>
    </div>
  </div>
</template>

