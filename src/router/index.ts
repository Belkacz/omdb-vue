import { createRouter, createWebHistory } from 'vue-router'
import MovieView from '@/views/MovieView.vue'
import MovieDetailsView from '@/views/MovieDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Movie',
      component: MovieView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/movie-details/:id',
      name: 'MovieDetailsView',
      component: MovieDetailsView,
      props: true,
    },
  ],
})

export default router
