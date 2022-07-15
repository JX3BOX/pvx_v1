import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const Single = () => import("@/views/item-price/item_price_info.vue");

const routes = [
    { name: "Single", path: "/:itemId(\\d+)", component: Single },
];

const router = new VueRouter({
    mode: "history",
    base : '/item-price',
    routes,
});

export default router;
