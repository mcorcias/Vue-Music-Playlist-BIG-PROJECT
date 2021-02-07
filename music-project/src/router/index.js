import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Auth/Login.vue';
import Signup from '../views/Auth/Signup.vue';
import CreatePlaylist from '../views/playlists/CreatePlaylist';
import PlaylistDetails from '../views/playlists/PlaylistDetails';

// route guard
import { projectAuth } from '../firebase/config';

// if the user is not connecting
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: 'Login' });
  } else {
    next();
  }
};

// if the user is connecting
const requireLoggout = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) {
    next({ name: 'Home' });
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: requireLoggout,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    beforeEnter: requireLoggout,
  },
  {
    path: '/playlists/create',
    name: 'CreatePlaylist',
    component: CreatePlaylist,
    beforeEnter: requireAuth,
  },
  {
    path: '/playlists/:id',
    name: 'PlaylistDetails',
    component: PlaylistDetails,
    beforeEnter: requireAuth,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
