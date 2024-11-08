import { createRouter, createWebHistory } from 'vue-router'
import SigninView from '../views/SigninView.vue'
import DashView from '../views/DashView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/signin',
            name: 'signin',
            component: SigninView,
        },
        {
            path: '/',
            name: 'Dash',
            component: DashView,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue'),
        },
    ],
})

export default router
