import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const List = () => import("@/views/exterior/list.vue");

const routes = [{ name: "list", path: "/", component: List }];

const router = new VueRouter({
    mode: "history",
    base: "/exterior",
    routes,
});

export default router;
