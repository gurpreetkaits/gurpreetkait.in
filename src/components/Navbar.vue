<template>
  <nav class="bg-transparent p-4 mt-5">
    <div class="container mx-auto flex justify-center items-center">
      <div class="hidden md:flex md:items-center md:justify-center w-full md:w-auto" id="nav-content">
        <ul class="text-black flex justify-center bg-white border rounded-full">
          <li>
            <RouterLink to="/"
                        activeClass="font-medium"
                        class="block py-2 px-6 mx-1 hover:font-medium duration-150 rounded-lg transition-all ease-in-out">
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/blogs"
                        activeClass="font-medium"
                        class="block py-2 px-6 mx-1 hover:font-medium duration-150 rounded-lg transition-all ease-in-out">
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