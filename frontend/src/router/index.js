import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../page/PageNotFound/NotFoundPage.vue';
import Login from '../page/login/login.vue';
import login_tuyendung from '../page/login-tuyendung/Login-tuyendung.vue';
import SignUp_tuyendung from '../page/login-tuyendung/SignUp-tuyendung.vue';
import Home from '../page/home/home.vue';
import Layout from '../layout/layout.vue';
import TopCompany from '../page/company/top_company/TopCompany.vue';
// import ListCompany from '../page/company/list_company/ListCompany.vue';

// import { getJwtToken } from '../utils/helpers';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
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
        {
          path: '/top-company',
          component: TopCompany,
          name: 'TopCompany',
        },
        {
          path: '/list-company',
          component: TopCompany,
          name: 'ListCompany',
        },
      ],
    },
    { path: '/login', component: Login, name: 'login' },
    { path: '/sign-up', component: Login, name: 'sign-up' },
    {
      path: '/login-tuyendung',
      component: login_tuyendung,
      name: 'login_tuyendung',
    },
    {
      path: '/signup-tuyendung',
      component: SignUp_tuyendung,
      name: 'SignUp_tuyendung',
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
