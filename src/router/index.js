import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import("../views/HomeView.vue");
const ContactView = () => import("../views/ContactView.vue");
const AboutMeView = () => import("../views/AboutMeView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: "/home"
    },
    {
      path: '/home',
      component: HomeView,
    },
    {
      path: "/contact",
      component: ContactView
    },
    {
      path: '/about-me',
      component: AboutMeView
    }
  ],
})

export default router;
