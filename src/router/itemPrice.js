import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const Single = () => import("@/views/itemPrice/ItemPriceInfo.vue");

const routes = [
    { name: "Single", path: "/:itemId(\\d+)", component: Single },
];

const router = new VueRouter({
    mode: "history",
    base : '/itemprice',
    routes,
});

export default router;
