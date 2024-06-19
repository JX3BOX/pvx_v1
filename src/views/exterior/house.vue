<template>
    <div class="p-exterior">
        <div class="m-left">
            <div class="m-author">
                <img class="u-avatar" src="" />
                <img class="u-icon" svg-inline src="@/assets/img/exterior/house/user.svg" alt="" />
            </div>
            <div class="m-sidebar_warehouse">
                <div class="m-top">
                    <div class="m-top_left">
                        <img class="u-icon" src="@/assets/img/exterior/house/bxs_package.svg" alt="" />
                        <span class="u-title">我的仓库</span>
                    </div>
                    <div class="m-top_right">
                        <img class="u-icon" svg-inline src="@/assets/img/exterior/house/refresh.svg" alt="" />
                        <img class="u-icon" svg-inline src="@/assets/img/exterior/house/launch.svg" alt="" />
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
                        <marketItem type="warehouse" v-for="index in 8" :key="index" />
                    </div>
                </div>
            </div>
        </div>
        <div class="m-center">
            <div class="m-search">
                <input class="u-search__input" type="text" />
                <div class="m-search__icon">
                    <img class="u-icon" src="@/assets/img/exterior/house/search.svg" alt="" />
                </div>
            </div>
            <div class="m-index">
                <div class="m-box">
                    <div class="m-title">
                        <img class="u-icon" src="@/assets/img/exterior/house/mdi_heart.svg" alt="" />
                        <span>我的收藏</span>
                    </div>
                    <div class="m-list">
                        <marketItem type="shop" v-for="index in 8" :key="index" />
                    </div>
                </div>
                <div class="m-box">
                    <div class="m-title">
                        <img class="u-icon" src="@/assets/img/exterior/house/mdi_hot.svg" alt="" />
                        <span>近期热门</span>
                    </div>
                    <div class="m-list">
                        <marketItem type="shop" v-for="index in 8" :key="index" />
                    </div>
                </div>
            </div>
        </div>
        <div class="m-right">
            <div class="m-top">
                <div class="m-fold">
                    <img class="u-icon" svg-inline src="@/assets/img/exterior/house/ri_skip-left-line.svg" alt="" />
                </div>
                <div class="m-wbl">
                    <img class="u-wbl" src="@/assets/img/exterior/house/wbl_logo.png" alt="" />
                </div>
            </div>
            <div class="m-box">
                <div class="m-title">
                    <img class="u-icon" src="@/assets/img/exterior/house/cib_marketo.svg" alt="" />
                    <span>今日涨跌</span>
                </div>
                <div class="m-list">
                    <div class="m-rank" v-for="index in 8" :key="index">
                        <div class="m-img">
                            <img class="u-img" src="" alt="" />
                            <span>春山鸟归 · 鹤 · 豪华</span>
                        </div>
                        <div class="m-info">
                            <span class="u-price">￥432 </span>
                            <img class="u-line" src="@/assets/img/exterior/house/mid_rise.svg" alt="" />
                            <span class="u-range u-rise">2%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-box">
                <div class="m-title">
                    <img class="u-icon" src="@/assets/img/exterior/house/read-filled.svg" alt="" />
                    <span>拓展阅读</span>
                </div>
                <div class="m-list">
                    <div class="m-news" v-for="index in 8" :key="index">
                        <div class="u-img"></div>
                        <div class="u-title">标题</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getMyInfo } from "@/service/exterior";
import marketItem from "@/components/market/item";
export default {
    name: "House",
    components: { marketItem },
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
