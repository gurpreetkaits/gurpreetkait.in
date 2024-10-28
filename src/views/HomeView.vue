<script setup lang="ts">
import SocialIcons from '@/components/SocialIcons.vue'
import UrlBox from '@/components/UrlBox.vue'
import LarachampImage from '@/assets/icons/larachamp.png'
import { Book, SquareCode } from 'lucide-vue-next';

const links = {
  larachamp: [{
    url: "https://larachamp.com",
    title: 'larachamp.com',
    iconUrl: LarachampImage,
    addClass: 'm-2'
  }]
}
</script>

<template>
  <div id="homeViewContainer" class="mb-32 flex flex-col items-start my-7 transition-shadow ease-in-out duration-300">
    <div class="container mx-auto p-4">
      <!-- Introduction -->
      <div class="max-w-32 pl-4 flex items-center">
        <div>
          <div class="grid grid-col-1 mb-2">
            <img src="@/assets/gurpreetkait.jpeg" class="rounded-full w-32 h-32" />
          </div>
          <div>
            <div class="flex items-start space-x-8">
              <div class="flex-1">
                <h1 class="font-bold text-3xl mb-6">Gurpreet Kait</h1>

                <div class="space-y-6 text-gray-600">
                  <p class="tracking-wide">
                    Hey, I'm Gurpreet, a software developer exploring the intersection of web and AI. Currently
                    contributing to open-source chess libraries while crafting my own projects.
                  </p>

                  <div class="space-y-3">
                    <p>
                      Building with PHP/Laravel in production, diving deep into Python for computer vision projects. You
                      can find my technical writings at
                      <UrlBox :links="links.larachamp" /> where I share insights about
                      Laravel development.
                    </p>

                    <p>
                      Active member of the Laravel community. Currently
                      experimenting with ML models while dreaming up ideas for tools that make developers' lives easier.
                    </p>

                    <div class="pt-2">
                      <p>When I'm not coding:</p>
                      <div class="pl-4 pt-1 space-y-1">
                        <p class="flex gap-1">
                          <Book width="14px"></Book> Reading { Philosophy, Punjabi Literature, Indian Fiction }
                        </p>
                        <p class="flex gap-1">
                          <SquareCode width="14px"></SquareCode> Planning the next side project
                        </p>
                      </div>
                    </div>
                  </div>

                  <SocialIcons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>