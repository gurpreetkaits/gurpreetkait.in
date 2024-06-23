<template>
  <nav class="bg-transparent pt-20 px-4">
    <div class="container mx-auto flex justify-center items-center">
      <div class="hidden md:flex md:items-center md:justify-center w-full md:w-auto" id="nav-content">
        <ul class="text-black flex justify-center bg-white rounded-full">
          <li class="block px-4 py-2 mx-1 hover:font-medium duration-150 rounded-lg transition-all ease-in-out">
            <RouterLink to="/"
                        class="px-4 py-2 duration-150 transition-all rounded-xl "
                        activeClass="border "
                        >
              Home
            </RouterLink>
          </li>
          <li  class="block px-4 py-2 mx-1 hover:font-medium hover: duration-150 rounded-lg transition-all ease-in-out">
            <RouterLink to="/projects"
                        class="px-4 py-2 duration-150 transition-all rounded-xl "
                        activeClass="border"
                       >
              Projects
            </RouterLink>
          </li>
          <li class="block px-4 py-2 mx-1 hover:font-medium duration-150 rounded-lg transition-all ease-in-out">
            <RouterLink to="/blogs"
                        class="px-4 py-2 duration-150 transition-all rounded-xl "
                        activeClass="border"
                        >
              Blogs
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
</script>