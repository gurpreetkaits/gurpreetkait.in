import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import BlogView from '@/views/BlogView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import Post from "@/views/Post.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/blogs',
            name: 'blogs',
            component: BlogView
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsView
        },
        {
            path: '/blog/:id', // Add a route for single post
            name: 'single-post',
            component: Post
        }

    ]
})

export default router
