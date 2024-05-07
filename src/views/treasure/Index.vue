<template>
    <div>
        <Header></Header>
        <Nav @statusChange="statusChange"></Nav>
        <Main :class="navStatusClass" :withoutRight="true">
            <div class="m-main">
                <router-view></router-view>
            </div>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import Nav from "@/components/Nav_v4.vue";
export default {
    name: "Index",
    components: {
        Nav,
    },
    data: () => ({
        navStatusClass: "is-regular",
    }),
    methods: {
        statusChange(navStatusClass) {
            this.navStatusClass = navStatusClass;
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/app.less";
@import "~@/assets/css/treasure/Index.less";
</style>
