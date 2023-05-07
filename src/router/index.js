import { createRouter, createWebHistory } from "vue-router"

import HomeView from "@/views/HomeView.vue"
import InboxView from "@/views/InboxView.vue"
import DetailView from "@/views/DetailView.vue"
import PersonView from "@/views/PersonView.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/inbox',
            name: 'inbox',
            component: InboxView,
            children: [
                {
                    path: 'mail',
                    component: DetailView
                }
            ]
        },
        {
            path: '/person',
            component: PersonView,
            children: [
                {
                    path: ':personId',
                    component: PersonView
                }
            ]
        }
    ]
})

export default router