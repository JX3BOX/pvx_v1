import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const Index = () => import("@/views/treasure/Index.vue");
const landscape = () => import("@/views/treasure/landscape.vue");
const portrait = () => import("@/views/treasure/portrait.vue");

const routes = [
    {
        name: "index",
        path: "/",
        component: Index,
        redirect: {
            name: "landscape",
        },
    },
    {
        name: "landscape",
        path: "/landscape",
        component: landscape,
        meta: {
            name: "横屏",
        },
    },
    {
        name: "portrait",
        path: "/portrait",
        component: portrait,
        meta: {
            name: "竖屏",
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: "/treasure",
    routes,
});

export default router;
