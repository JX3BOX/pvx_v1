<template>
    <div class="p-exterior">
        <div class="m-left">
            <div class="m-author">
                <img class="u-avatar" src="" />
                <img class="u-icon" svg-inline src="@/assets/img/exterior/house/user.svg" />
            </div>
            <div class="m-sidebar_warehouse" v-if="!leftStatus">
                <div class="m-top">
                    <div class="m-top_left">
                        <img class="u-icon" src="@/assets/img/exterior/house/bxs_package.svg" />
                        <span class="u-title">我的仓库</span>
                    </div>
                    <div class="m-top_right">
                        <img class="u-icon" svg-inline src="@/assets/img/exterior/house/refresh.svg" />
                        <img
                            class="u-icon"
                            @click="leftStatus = true"
                            svg-inline
                            src="@/assets/img/exterior/house/launch.svg"
                        />
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
                        <span>预计盈利：</span>
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
            <div class="m-sidebar_collection" v-else>
                <div class="m-top">
                    <div class="m-top_left">
                        <img class="u-icon" svg-inline src="@/assets/img/exterior/house/mdi_heart.svg" />
                        <span class="u-title">我的收藏</span>
                    </div>
                </div>
                <div class="u-update">Updata time 2024-4-13 14:47:31</div>
                <div class="m-page">
                    <div class="u-item" v-for="index in 8" :key="index">{{ index }}</div>
                </div>
                <div class="m-list">
                    <marketItem type="shop" v-for="index in 8" :key="index" />
                </div>
            </div>
        </div>
        <div class="m-center" v-if="!leftStatus">
            <div class="m-search">
                <input class="u-search__input" type="text" />
                <div class="m-search__icon">
                    <img class="u-icon" src="@/assets/img/exterior/house/search.svg" />
                </div>
            </div>
            <div class="m-index">
                <div class="m-box">
                    <div class="m-title">
                        <img class="u-icon" src="@/assets/img/exterior/house/mdi_heart.svg" />
                        <span>我的收藏</span>
                    </div>
                    <div class="m-list">
                        <marketItem type="shop" v-for="index in 8" :key="index" />
                    </div>
                </div>
                <div class="m-box">
                    <div class="m-title">
                        <img class="u-icon" src="@/assets/img/exterior/house/mdi_hot.svg" />
                        <span>近期热门</span>
                    </div>
                    <div class="m-list">
                        <marketItem type="shop" v-for="index in 8" :key="index" />
                    </div>
                </div>
            </div>
        </div>
        <div class="m-center__warehouse" v-else>
            <div class="m-top">
                <div class="m-top_left">
                    <img class="u-icon" src="@/assets/img/exterior/house/bxs_package.svg" />
                    <span class="u-title">我的仓库</span>
                </div>
                <div class="m-top_right">
                    <img class="u-icon" svg-inline src="@/assets/img/exterior/house/refresh.svg" />
                    <img
                        class="u-icon"
                        @click="leftStatus = false"
                        svg-inline
                        src="@/assets/img/exterior/house/symbols_close.svg"
                    />
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
                    <span>预计盈利：</span>
                    <span class="u-value">
                        <b>+ 114514.14</b>
                    </span>
                    <div class="u-unit">元</div>
                </div>
            </div>
            <div class="m-list">
                <div class="m-search">
                    <input class="u-search__input" type="text" />
                    <div class="m-search__icon">
                        <img class="u-icon" src="@/assets/img/exterior/house/search.svg" />
                    </div>
                </div>
                <table class="m-table">
                    <thead>
                        <tr>
                            <th>外观名字</th>
                            <th>入库时间</th>
                            <th>数量</th>
                            <th>入库价格</th>
                            <th>预期收益</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="m-name">
                                <img class="u-icon" src="" />
                                外观名字超出十二字省略...
                            </td>
                            <td>2024-5-8 22:52:40</td>
                            <td>2</td>
                            <td>880</td>
                            <td>+22</td>
                            <td class="m-action">
                                <span>加仓</span>
                                <span>售出</span>
                                <span>置顶</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="m-name">
                                <img class="u-icon" src="" />
                                外观名字超出十二字省略...
                            </td>
                            <td>2024-5-8 22:52:40</td>
                            <td>2</td>
                            <td>880</td>
                            <td>+22</td>
                            <td class="m-action">
                                <span>加仓</span>
                                <span>售出</span>
                                <span>置顶</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="m-name">
                                <img class="u-icon" src="" />
                                外观名字超出十二字省略...
                            </td>
                            <td>2024-5-8 22:52:40</td>
                            <td>2</td>
                            <td>880</td>
                            <td>+22</td>
                            <td class="m-action">
                                <span>加仓</span>
                                <span>售出</span>
                                <span>置顶</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="m-name">
                                <img class="u-icon" src="" />
                                外观名字超出十二字省略...
                            </td>
                            <td>2024-5-8 22:52:40</td>
                            <td>2</td>
                            <td>880</td>
                            <td>+22</td>
                            <td class="m-action">
                                <span>加仓</span>
                                <span>售出</span>
                                <span>置顶</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="m-page">
                    <div class="u-item" v-for="index in 8" :key="index">{{ index }}</div>
                </div>
            </div>
        </div>
        <div class="m-right" v-if="!rightStatus">
            <div class="m-top">
                <div class="m-fold" @click="rightStatus = true">
                    <img class="u-icon" svg-inline src="@/assets/img/exterior/house/ri_skip-left-line.svg" />
                </div>
                <div class="m-wbl">
                    <img class="u-wbl" src="@/assets/img/exterior/house/wbl_logo.png" />
                </div>
            </div>
            <div class="m-box">
                <div class="m-title">
                    <img class="u-icon" src="@/assets/img/exterior/house/cib_marketo.svg" />
                    <span>今日涨跌</span>
                </div>
                <div class="m-list">
                    <div class="m-rank" v-for="index in 8" :key="index">
                        <div class="m-img">
                            <img class="u-img" src="" />
                            <span>春山鸟归 · 鹤 · 豪华</span>
                        </div>
                        <div class="m-info">
                            <span class="u-price">￥432 </span>
                            <img class="u-line" src="@/assets/img/exterior/house/mid_rise.svg" />
                            <span class="u-range u-rise">2%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-box">
                <div class="m-title">
                    <img class="u-icon" src="@/assets/img/exterior/house/read-filled.svg" />
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
        <div class="m-right__mini" v-else>
            <div class="u-item" @click="rightStatus = false">
                <img class="u-img" svg-inline src="@/assets/img/exterior/house/iconoir_star-solid.svg" />
            </div>
            <div class="u-item">
                <img class="u-img" svg-inline src="@/assets/img/exterior/icon/wbl-icon.png" />
            </div>
        </div>
    </div>
</template>
<script>
import { getMyInfo, entWarehouse } from "@/service/exterior";
import { userStoreList, starTopList } from "@/service/house";
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
            leftStatus: false,
            rightStatus: false,
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
        this.Init();
    },
    methods: {
        Init() {
            userStoreList().then((res) => {
                console.log(res);
            });
            starTopList().then((res) => {
                console.log(res);
            });
        },
    },
};
</script>
<style lang="less">
@import "~@/assets/css/exterior/house.less";
</style>
