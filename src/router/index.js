import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { userStore } from '@/stores/user'


const routes = [
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
    meta: { requiresAuth: true },
    component: () => import('../views/TodoListView.vue')
  },
  {
    path: '/add-todo-item',
    name: 'add-todo-item',
    meta: { requiresAuth: true },
    component: () => import('../views/AddTodoItemView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const storeUser = userStore()
  if (to.meta.requiresAuth && !storeUser.isAuthenticated) {
    next('/');
  } else {
    next();
  }
});



export default router
