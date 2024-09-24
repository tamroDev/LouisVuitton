import { createRouter, createWebHistory } from 'vue-router';
import AuthLayout from '../layout/AuthLayout.vue';
import MainLayout from '../layout/MainLayout.vue';

import HomeView from '/src/views/client/home/HomeView.vue';
import ProductView from '/src/views/client/product/ProductView.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: HomeView,
      },
      {
        path: '/products',
        name: 'Product',
        component: ProductView,
      },
    ],
  },
  {
    path: '/auth/',
    component: AuthLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
