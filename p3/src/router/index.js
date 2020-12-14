import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Favorites from '@/views/Favorites.vue';
import Cart from '@/views/Cart.vue';
import RecipeDetail from '@/views/RecipeDetail.vue';
import AuthForm from '@/views/AuthForm.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/recipe-detail/:id',
    name: 'RecipeDetail',
    component: RecipeDetail,
    props: true,
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      isLogin: true,
    },
    component: AuthForm,
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      isLogin: false,
    },
    component: AuthForm,
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
