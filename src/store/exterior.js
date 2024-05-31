import Vue from "vue";
import Vuex from "vuex";
import { exteriorUserStar } from "@/service/exterior";

Vue.use(Vuex);

let store = {
    state: {
        client: location.href.includes("origin") ? "origin" : "std",
        userStarExteriorList: [],
    },
    mutations: {
        toState(state, data) {
            Object.keys(data).forEach((item) => {
                state[item] = data[item];
            });
        },
        toExteriorList(state, data) {
            state.userStarExteriorList = data;
        },
    },

    actions: {
        getExteriorUserStar(ctx) {
            exteriorUserStar().then((res) => {
                ctx.commit("toExteriorList", res.data.data);
            });
        },
    },
};

export default new Vuex.Store(store);
