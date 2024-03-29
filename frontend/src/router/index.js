import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../page/PageNotFound/NotFoundPage.vue';
import Login from '../page/login/login.vue';
import Home from '../page/home/home.vue';
import Layout from '../layout/layout.vue';
// import { getJwtToken } from '../utils/helpers';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: Login, name: 'login' },
    { path: '/sign-up', component: Login, name: 'sign-up' },
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: '/home',
          component: Home,
          name: 'home',
        },
      ],
    },
    { path: '/:notFound(.*)', component: NotFound, name: 'NotFound' },
  ],
});
// router.beforeEach((to, from, next) => {
//   const token = getJwtToken();
//   if (!token && to.path !== '/login') {
//     next({ path: '/login' });
//   }
//   if (token && to.path === '/login') {
//     next(from.path);
//   } else {
//     next();
//   }
// });
