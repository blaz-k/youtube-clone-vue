import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ChosenVideo from "../views/ChosenVideo.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/chosen-video/:detailsId",
    name: "ChosenVideo",
    component: ChosenVideo,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
