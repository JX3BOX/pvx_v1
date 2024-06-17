<template>
    <div class="p-exterior">
        <div class="m-left">
            <div class="m-author">
                <img class="u-avatar" src="" />
                <img class="u-icon" svg-inline src="../../assets/img/exterior/house/user.svg" alt="" />
            </div>
            <div class="m-sidebar_warehouse">
                <div class="m-top">
                    <div class="m-top_left">
                        <img class="u-icon" src="../../assets/img/exterior/house/bxs_package.svg" alt="" />
                        <span class="u-title">我的仓库</span>
                    </div>
                    <div class="m-top_right">
                        <img class="u-icon" svg-inline src="../../assets/img/exterior/house/refresh.svg" alt="" />
                        <img class="u-icon" svg-inline src="../../assets/img/exterior/house/launch.svg" alt="" />
                    </div>
                </div>
                <div class="u-update">Updata time 2024-4-13 14:47:31</div>
                <div class="m-price">
                    <div class="m-item">
                        <span>成本：</span>
                        <span class="u-value">114.14</span>
                        <div class="u-unit">元</div>
                    </div>
                    <div class="m-item">
                        <span>成本：</span>
                        <span class="u-value">
                            <b>+ 114514.14</b>
                        </span>
                        <div class="u-unit">元</div>
                    </div>
                </div>
                <div class="m-list">
                    <div class="m-page">
                        <div class="u-item" v-for="index in 8" :key="index">{{ index }}</div>
                    </div>
                    <div class="m-goods">
                        <div class="m-item" v-for="index in 8" :key="index">
                            <div class="m-item__top">
                                <div class="u-logo"></div>
                                <div class="m-info">
                                    <div class="u-title">春山鸟归 · 鹤 · 豪华</div>
                                    <div class="u-type">盒子</div>
                                </div>
                                <div class="u-number">x 2</div>
                            </div>
                            <div class="m-item__bottom">
                                <div class="m-detail">
                                    <div class="m-detail__box">
                                        <div class="u-title">成本</div>
                                        <div class="u-value">422.76</div>
                                    </div>
                                    <div class="m-detail__box">
                                        <div class="u-title">近期价</div>
                                        <div class="u-value">10422.77</div>
                                    </div>
                                </div>
                                <div class="m-detail">
                                    <div class="m-detail__box">
                                        <div class="u-title">预计收益</div>
                                        <div class="u-value">
                                            <span>+ 10000.01</span>
                                            <span>( 20000.2 )</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="m-center"></div>
        <div class="m-right"></div>
    </div>
</template>
<script>
import { getMyInfo } from "@/service/exterior";
export default {
    name: "House",
    components: {},
    inject: ["__imgPath"],
    data() {
        return {
            userInfo: {
                uid: 8,
                name: "匿名",
                user_avatar: "https://img.jx3box.com/image/common/avatar.png",
                user_avatar_frame: "default",
                bio: "-",
                sign: 0,
            },
        };
    },
    computed: {
        client() {
            return this.$store.state.client;
        },
    },
    watch: {},
    mounted() {
        getMyInfo().then((res) => {
            if (res.data.data) {
                this.userInfo = res.data.data;
                console.log(this.userInfo);
            }
        });
    },
    methods: {},
};
</script>
<style lang="less">
@import "~@/assets/css/exterior/house.less";
</style>
