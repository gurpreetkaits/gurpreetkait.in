<script setup lang="ts">
import SocialIcons from '@/components/SocialIcons.vue'
import UrlBox from '@/components/UrlBox.vue'
import LarachampImage from '@/assets/icons/larachamp.png'
import { Book, SquareCode, Briefcase, Calendar } from 'lucide-vue-next'

const links = {
  larachamp: [{
    url: "https://larachamp.com",
    title: 'larachamp.com',
    iconUrl: LarachampImage,
    addClass: 'm-2'
  }]
}

interface Experience {
  company: string
  role: string
  type: string
  period: string
  location: string
  description?: string
  skills?: string[]
  current?: boolean,
  url: string
}

const experiences: Experience[] = [
  {
    company: "skü.io",
    url: "https://sku.io",
    role: "Full-stack Developer",
    type: "Full-time",
    period: "Jul 2024 - Present",
    location: "United States · Remote",
    description: "Full Stack Developer (Laravel, VueJs), Product for multi-channel e-commerce retailers",
    current: true
  },
  {
    company: "42Works",
    role: "PHP Developer",
    url: "https://42works.net",
    type: "Full-time",
    period: "Nov 2023 - Jul 2024",
    location: "On-site",
    description: "PHP Developer, Working on outsourced projects"
  },
  {
    company: "Innerx Informatics",
    role: "Mid Level PHP Developer",
    url: "https://innerxinformatics.net",
    type: "Full-time",
    period: "May 2023 - Oct 2023",
    location: "India · Remote",
    description: "At Innerxcrm, I primarily worked on an internal CRM system"
  }
]
</script>

<template>
  <div id="homeViewContainer" class="mb-32 flex flex-col items-start my-7 transition-shadow ease-in-out duration-300">
    <div class="container mx-auto p-4">
      <!-- Introduction -->
      <div class="max-w-32 pl-4">
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
                    contributing to open-source while crafting my own projects.
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

                  <hr>
                  </hr>

                  <!-- Experience Section -->
                  <div class="space-y-4">
                    <h2 class="font-semibold text-xl text-gray-900">Experience</h2>
                    <div class="space-y-6">
                      <div v-for="exp in experiences" :key="exp.company" class="flex gap-4">
                        <div class="relative mt-1">
                          <div class="w-2 h-2 rounded-full bg-gray-400" :class="{ 'bg-green-500': exp.current }"></div>
                          <div class="absolute top-3 left-1 w-[1px] h-full -ml-px bg-gray-200" v-if="!exp.current">
                          </div>
                        </div>
                        <div class="flex-1 pb-4">
                          <div class="flex items-center justify-between mb-1">
                            <h3 class="font-medium text-gray-900">{{ exp.role }}</h3>
                            <span class="text-sm text-gray-500 flex items-center gap-1">
                              <Calendar class="w-4 h-4" />
                              {{ exp.period }}
                            </span>
                          </div>
                          <div class="text-gray-600">
                            <div class="flex items-center gap-2">
                              <span class="font-medium"><a :href="exp.url" target="_blank">{{ exp.company }}</a></span>
                              <span class="text-sm">· {{ exp.type }}</span>
                            </div>
                            <div class="text-sm text-gray-500">{{ exp.location }}</div>
                          </div>
                          <p v-if="exp.description" class="mt-2 text-sm text-gray-600">
                            {{ exp.description }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>