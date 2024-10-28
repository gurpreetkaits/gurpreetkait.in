<script setup lang="ts">
interface Link {
    url: string
    title: string
    iconUrl: string
    addClass: string|null
}

defineProps < {
    links: Link[]
} > ()
</script>

<template>
    <div class="inline-flex flex-wrap gap-2">
        <a v-for="item in links" :key="item.url" :href="item.url" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-2 px-1
             bg-gray-50/50 hover:bg-gray-100/50
             border border-gray-200/50 hover:border-gray-300/50
             rounded-md transition-all duration-200
             text-gray-600 hover:text-gray-900" :class="item.addClass">
            <img :src="item.iconUrl" :alt="item.title"
                class="w-4 h-4 object-contain opacity-75 group-hover:opacity-100" />
            <span class="text-sm font-medium whitespace-nowrap">
                {{ item.title }}
            </span>
        </a>
    </div>
</template>

<style scoped>
/* Optional: Add custom styles if needed */
</style>