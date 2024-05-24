<template>
    <div class="p-main" v-loading="loading">
        <div class="m-left">
            <CommonToolbar search @update="updateToolbar"></CommonToolbar>

            <div class="m-list">
                <div class="m-box">
                    <p class="u-box__title">商城上新</p>
                    <div class="m-new__list">
                        <div class="m-item" v-for="item in Array(15)" :key="item">
                            <div class="m-item__img">
                                <div
                                    class="u-img"
                                    :style="{
                                        backgroundImage: `url(${require('@/assets/img/exterior/test.png')})`,
                                    }"
                                ></div>
                            </div>
                            <div class="u-title">彩 · 朝云幕霞</div>
                        </div>
                    </div>
                </div>
                <div class="m-box">
                    <p class="u-box__title">其他</p>
                    <el-row :gutter="20" class="m-more__list">
                        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" v-for="item in Array(21)" :key="item">
                            <div class="m-item">
                                <div class="u-img"></div>
                                <span class="u-title">外观名字</span>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <div class="m-right">
            <div class="m-info">
                <div class="m-info__top">
                    <div class="m-body">
                        <span class="u-body">成男</span>
                        <span class="u-body">成女</span>
                        <span class="u-body">正太</span>
                        <span class="u-body">萝莉</span>
                    </div>
                    <div class="m-preview">
                        <div
                            class="u-img"
                            :style="{
                                backgroundImage: `url(${require('@/assets/img/exterior/test.png')})`,
                            }"
                        ></div>
                    </div>
                    <div class="m-detail">
                        <p class="u-name">花醉良辰·凤卜礼盒</p>
                        <div class="m-info__list">
                            <div class="m-list__ul">
                                <div class="m-list__li">
                                    <span class="u-title">包身礼盒</span>
                                </div>
                                <div class="m-list__li">
                                    <span class="u-title">售价</span>
                                    <span class="u-value">￥880</span>
                                </div>
                            </div>
                            <div class="m-list__ul">
                                <div class="m-list__li">
                                    <span class="u-title">发行时间</span>
                                    <span class="u-value">2023-05-18</span>
                                </div>
                                <div class="m-list__li">
                                    <span class="u-title">获取方式</span>
                                    <span class="u-value">限时抢购</span>
                                </div>
                            </div>
                            <div class="m-list__ul">
                                <div class="m-list__li">
                                    <span class="u-title">内含单品</span>
                                </div>
                            </div>
                        </div>
                        <div class="m-goods">
                            <div class="u-item"></div>
                            <div class="u-item"></div>
                            <div class="u-gap">选一</div>
                            <div class="u-item"></div>
                            <div class="u-item"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
</template>
<script>
import CommonToolbar from "@/components/common/toolbar.vue";
import { __clients } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "ExamList",
    components: {
        CommonToolbar,
    },
    data() {
        return {
            loading: false,
        };
    },
    computed: {},
    watch: {},
    mounted() {},
    methods: {
        updateToolbar(data) {},
    },
};
</script>
<style lang="less">
@import "~@/assets/css/exterior/list.less";
</style>
