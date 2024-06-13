import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const List = () => import("@/views/exterior/list.vue");
const House = () => import("@/views/exterior/house.vue");

const routes = [
    { name: "list", path: "/", component: List },
    { name: "house", path: "/house", component: House },
];

const router = new VueRouter({
    mode: "history",
    base: "/exterior",
    routes,
});

export default router;
