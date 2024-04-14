import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamFooter from './components/teams/TeamFooter.vue';
import UserFooter from './components/users/UserFooter.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      //  component: TeamsList
      redirect: '/teams',
    },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamFooter },
      children: [
        //you have to mention router-view in parent component
        {
          name: 'nested-route',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    // { path: '/teams', component: TeamsList, alias: '/' },
    {
      path: '/users',
      components: { default: UsersList, footer: UserFooter },
      name: 'users',
      beforeEnter(to, from, next) {
        console.log('user brforeEnter');
        console.log(to, from);
        next(true);
      },
    },

    // { path: '/teams/:teamId', component: TeamMembers, props: true },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active', //here we are giving new class name to the router-link
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});
//here we are applying navigation guard for entire router
router.beforeEach(function (to, from, next) {
  console.log('global beforeEach');
  console.log(to, from);
  // next(false); // if you pass as a argument false;we cant navigate from one page to another page
  next();
  if (to.meta.needsAuth) {
    console.log('needs auth');
    next();
  }
});
router.afterEach(function (to, from) {
  //sending analytics data
  console.log('global after each');
  console.log(to, from);
});
const app = createApp(App);
app.use(router);
app.mount('#app');
