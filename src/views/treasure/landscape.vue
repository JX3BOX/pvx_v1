<template>
    <div class="m-body">
        <div
            class="m-content"
            :class="{
                start: addClass,
            }"
        >
            <img class="u-content__img" src="../../assets/img/treasure/bg.png" alt="" />
            <div class="m-left" :class="reelAddClass">
                <img class="u-left__img" src="../../assets/img/treasure/left.png" alt="" />
            </div>
            <div class="m-right" :class="reelAddClass">
                <img class="u-right__img" src="../../assets/img/treasure/right.png" alt="" />
            </div>
            <!-- 普通奇遇 -->
            <div class="m-pt">
                <div class="m-pt__row">
                    <div class="m-pt__item" v-for="(item, index) in Array(3)" :key="index">
                        <img class="u-pt__img" src="../../assets/img/treasure/pt/brm.png" alt="" />
                        <div class="m-pt__text">
                            <img class="u-pt__bg" src="../../assets/img/treasure/pt/text_bg.png" alt="" />
                            <span class="u-pt__text">白日梦梦</span>
                        </div>
                    </div>
                </div>
                <div class="m-pt__row">
                    <div class="m-pt__item" v-for="(item, index) in Array(3)" :key="index">
                        <img class="u-pt__img" src="../../assets/img/treasure/pt/brm.png" alt="" />
                        <div class="m-pt__text">
                            <img class="u-pt__bg" src="../../assets/img/treasure/pt/text_bg.png" alt="" />
                            <span class="u-pt__text">白日梦</span>
                        </div>
                    </div>
                </div>
                <div class="m-pt__row">
                    <div class="m-pt__item" v-for="(item, index) in Array(1)" :key="index">
                        <img class="u-pt__img" src="../../assets/img/treasure/pt/brm.png" alt="" />
                        <div class="m-pt__text">
                            <img class="u-pt__bg" src="../../assets/img/treasure/pt/text_bg.png" alt="" />
                            <span class="u-pt__text">白日梦</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "landscape",
    data: () => ({
        mainAddClass: false,
        reelAddClass: false,
    }),
    mounted() {
        setTimeout(() => {
            this.addClass = true;
            this.reelAddClass = "start";
        }, 1000);
    },
    methods: {},
};
</script>

<style lang="less">
@import "~@/assets/css/app.less";
@import "~@/assets/css/treasure/landscape.less";
</style>
