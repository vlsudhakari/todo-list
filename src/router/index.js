import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: HomeView
    },
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LogInView.vue')
    },
    {
      path: '/todo-list',
      name: 'todo-list',
      component: () => import('../views/TodoListView.vue')
    },
    {
      path: '/add-todo-item',
      name: 'add-todo-item',
      component: () => import('../views/AddTodoItemView.vue')
    }
  ]
})

export default router
