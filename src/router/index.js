import { createRouter, createWebHistory } from "vue-router"

import HomeView from "@/views/HomeView.vue"
import InboxView from "@/views/InboxView.vue"
import InboxSubView from "@/views/InboxSubView.vue"
import PersonView from "@/views/PersonView.vue"
import ListingView from "@/views/ListingView.vue"
import CommentsView from "@/views/CommentsView.vue"
import CommentsDeleteView from "@/views/CommentsDeleteView.vue"
import CommentsAddView from "@/views/CommentsAddView.vue"
import LifeCycleView from "@/views/LifeCycleView.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/life',
            component: LifeCycleView
        },
        {
            path: '/listing',
            component: ListingView
        },
        {
            path: '/inbox',
            name: 'Inbox',
            component: InboxView,
            meta: {
                isSecret: true
            },
            children: [
                {
                    path: 'sub',
                    component: InboxSubView
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
        },
        {
            path: '/comments',
            component: CommentsView
        },
        {
            path: '/comments-delete',
            component: CommentsDeleteView
        },
        {
            path: '/comments-add',
            component: CommentsAddView
        }
    ]
})

router.beforeEach((to, from) => {
    // console.log('🐱‍🐉', to, from)
    // if(to.meta.isSecret){
    //     console.log('👮‍♂️', document.cookie)
    // }
})

export default router