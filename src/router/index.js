import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WelcomeView from '../views/WelcomeView.vue'
import RulesView from '@/views/RulesView.vue'
import SearchView from '../views/SearchView.vue'
import SearchRoomView from '../views/SearchRoomView.vue'
import InterrogateView from '../views/InterrogateView.vue'
import InterrogateCharacterView from '../views/InterrogateCharacterView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomeView
    },
    {
      path: '/rules',
      name: 'rules',
      component: RulesView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/search/:id',
      name: 'searchRoom',
      component: SearchRoomView
    },
    {
      path: '/interrogate',
      name: 'interrogate',
      component: InterrogateView
    },
    {
      path: '/interrogate/:id',
      name: 'interrogateCharacter',
      component: InterrogateCharacterView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFoundView
    },
  ]
})

export default router
