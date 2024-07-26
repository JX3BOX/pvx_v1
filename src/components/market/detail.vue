<template>
    <div>
        <div class="m-guise_detail">
            <div class="m-info" :class="[selectColor, selectBg]" v-if="exteriorDetail">
                <div class="m-info__scroll">
                    <div class="m-info__top">
                        <div class="m-body" v-if="bodyList.length > 1">
                            <span
                                class="u-item"
                                v-for="(item, index) in bodyList"
                                :class="{
                                    act: item.key == bodySelectKey,
                                }"
                                :key="index"
                                @click="bodySelectKey = item.key"
                                >{{ item.name }}</span
                            >
                        </div>
                        <div class="m-preview">
                            <div
                                class="u-img"
                                :style="{
                                    backgroundImage: `url(${getImgPath(
                                        exteriorDetail.id + '-封面' + bodySelectKey + '.png'
                                    )})`,
                                }"
                            ></div>
                        </div>
                        <div class="m-detail">
                            <p class="u-name">{{ exteriorDetail.name }}</p>
                            <div class="m-info__list">
                                <div class="m-list__ul">
                                    <div
                                        class="m-list__li"
                                        v-for="(item, index) in exteriorDetail.meta.tags"
                                        :key="index"
                                    >
                                        <div class="u-title">{{ item }}</div>
                                    </div>
                                    <div class="m-list__li">
                                        <div class="u-title">售价</div>
                                        <div class="u-value">￥{{ exteriorDetail.meta.price / 100 }}</div>
                                    </div>
                                </div>
                                <div class="m-list__ul">
                                    <div
                                        class="m-list__li"
                                        v-for="(item, index) in exteriorDetail.meta.get_types"
                                        :key="index"
                                    >
                                        <div class="u-title">{{ splitByColon(item)[0] }}</div>
                                        <div class="u-value" v-if="splitByColon(item)[1]">
                                            {{ splitByColon(item)[1] }}
                                        </div>
                                    </div>
                                </div>
                                <div class="m-list__ul" v-if="exteriorDetail.sub_exteriors">
                                    <div class="m-list__li">
                                        <div class="u-title">内含单品</div>
                                    </div>
                                </div>
                            </div>
                            <div class="m-goods">
                                <div class="m-item" v-for="(item, index) in exteriorDetail.sub_exteriors" :key="index">
                                    <div
                                        class="u-img"
                                        :style="{
                                            backgroundImage: `url(${iconLink(item.meta.icon_id, client)})`,
                                        }"
                                    ></div>
                                </div>
                                <!-- <div class="u-gap">选一</div>
                                <div class="m-item">
                                    <div class="u-img"></div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="m-info__bottom">
                        <div class="m-info__title">
                            <div class="u-line"></div>
                            <div class="u-title">外观预览</div>
                            <div class="u-line"></div>
                        </div>
                        <template v-for="(item, index) in exteriorDetail.meta.img_urls">
                            <img
                                class="u-exterior"
                                :key="index"
                                v-if="item.indexOf('详情') > -1"
                                :src="getImgPath(item)"
                            />
                        </template>
                        <div class="m-info__title">
                            <div class="u-line"></div>
                            <div class="u-title">近期价格走势</div>
                            <div class="u-line"></div>
                        </div>
                        <div class="m-trend-chart">
                            <div id="u-chart"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-action">
                <div class="m-close">
                    <div class="u-action u-close" @click="detailClose" :class="[selectColor]">
                        <img class="u-img" src="@/assets/img/exterior/icon/close.png" />
                    </div>
                </div>
                <div class="m-quick">
                    <div class="u-action u-like" @click="userStar">
                        <div class="m-img__pr" v-if="!exteriorDetail.isStar">
                            <img class="u-img" src="@/assets/img/exterior/icon/mdi_heart.svg" />
                            <img class="u-img u-img__hover" src="@/assets/img/exterior/icon/mdi_heart_act.svg" />
                        </div>
                        <template v-else>
                            <img class="u-img" src="@/assets/img/exterior/icon/mdi_heart_act.svg" />
                            <img class="u-img u-img__fill" src="@/assets/img/exterior/icon/ri_dislike-fill.svg" />
                        </template>
                        <div class="u-text">{{ `${userStarExteriorList.length}/5` }}</div>
                    </div>
                    <div class="u-action u-bag" @click="userEntWarehouse">
                        <div class="m-img__pr">
                            <img class="u-img" src="@/assets/img/exterior/icon/solar_inbox-in-bold.png" />
                            <img
                                class="u-img u-img__hover"
                                src="@/assets/img/exterior/icon/solar_inbox-in-bold_act.svg"
                            />
                        </div>
                    </div>
                    <div class="u-action u-wbl" @click="jumpWBL">
                        <img class="u-img" src="@/assets/img/exterior/icon/wbl-icon.png" />
                    </div>
                    <div class="u-action u-unfold" @click="openNewDetail">
                        <div class="m-img__pr">
                            <img class="u-img" src="@/assets/img/exterior/icon/icomoon-free_new-tab.svg" />
                            <img
                                class="u-img u-img__hover"
                                src="@/assets/img/exterior/icon/icomoon-free_new-tab_act.svg"
                            />
                        </div>
                    </div>
                </div>
                <div class="m-change_bg">
                    <div
                        class="u-change__btn"
                        v-for="(item, index) in ['iconamoon_cloud-fill', 'jam_flower', 'game-icons_rolled-cloth']"
                        :key="index"
                        :class="{
                            act: selectBg == `info-bg${index + 1}`,
                        }"
                        @click="selectBg = `info-bg${index + 1}`"
                    >
                        <img class="u-img" :src="require(`@/assets/img/exterior/icon/${item}.png`)" />
                    </div>
                </div>
                <div class="m-change_color">
                    <div
                        class="u-change__btn color1"
                        v-for="index in 3"
                        :class="[`color${index}`, { act: selectColor == `color${index}` }]"
                        :key="index"
                        @click="selectColor = `color${index}`"
                    ></div>
                </div>
            </div>
        </div>
        <putIn ref="putInRef" />
    </div>
</template>
<script>
import User from "@jx3box/jx3box-common/js/user";
import { __Links } from "@jx3box/jx3box-common/data/jx3box.json";
import { userStarExterior, getExteriorsPriceTrending } from "@/service/exterior";
import { iconLink } from "@jx3box/jx3box-common/js/utils";
import { Chart } from "@antv/g2";
import putIn from "./putIn.vue";
export default {
    name: "",
    props: {},
    inject: ["__imgPath", "__cdn"],
    components: { putIn },
    data() {
        return {
            selectBg: "info-bg1",
            selectColor: "color1",

            bodyList: [],
            bodySelectKey: "",

            exteriorDetail: false,

            trendChart: null,

            login_url: __Links.account.login + "?redirect=" + location.href,
        };
    },
    computed: {
        userStarExteriorList() {
            return this.$store.state.userStarExteriorList;
        },
        client() {
            return this.$store.state.client;
        },
    },
    watch: {},
    mounted() {},
    methods: {
        iconLink,
        reset(exteriorDetail) {
            this.exteriorDetail = exteriorDetail;
            this.bodyList = [];
            this.bodySelectKey = "";

            this.exteriorDetail.meta.img_urls.map((item) => {
                if (item.indexOf("m2") > -1) {
                    this.bodyList.push({
                        name: "成男",
                        key: "-m2",
                    });
                } else if (item.indexOf("封面.png") > -1) {
                    this.bodyList.push({
                        name: "成女",
                        key: "-f2",
                    });
                } else if (item.indexOf("m1") > -1) {
                    this.bodyList.push({
                        name: "正太",
                        key: "-m1",
                    });
                } else if (item.indexOf("f2") > -1) {
                    this.bodyList.push({
                        name: "萝莉",
                        key: "",
                    });
                }
            });

            this.bodySelectKey = this.bodyList.length > 1 ? this.bodyList[0]?.key : "";

            this.$nextTick(() => {
                setTimeout(() => {
                    getExteriorsPriceTrending({
                        ids: this.exteriorDetail.id,
                    }).then((res) => {
                        if (!res.data.data) {
                            return;
                        }
                        if (!this.trendChart) {
                            this.trendChart = new Chart({
                                container: "u-chart",
                                autoFit: true,
                                width: "100%",
                                height: 300,
                                padding: [20, 50, 20, 50], // 上, 右, 下, 左的间距
                            });
                        } else {
                            this.trendChart.clear();
                        }
                        this.trendChart.axis("avg_price", {
                            label: {
                                formatter: (val) => {
                                    return "￥" + (val / 100).toFixed(2) * 1;
                                },
                            },
                        });
                        this.trendChart.tooltip({
                            showCrosshairs: true,
                            shared: true,
                            customItems: (items) => {
                                items.forEach((item) => {
                                    item.name = "平均价";
                                    item.value = `￥` + ((item.value * 1) / 100).toFixed(2) * 1;
                                });
                                return items;
                            },
                        });

                        this.trendChart.line().color("#886542").position("date*avg_price");
                        this.trendChart.point().color("#886542").position("date*avg_price");
                        this.trendChart.data(res.data.data[this.exteriorDetail.id]).render();
                    });
                }, 300);
            });
        },
        userEntWarehouse() {
            this.$refs.putInRef.open(this.exteriorDetail);
        },
        userStar() {
            if (!User.isLogin()) {
                location.href = this.login_url;
                return;
            }
            let reqType = this.exteriorDetail.isStar ? "delete" : "post";
            userStarExterior(reqType, this.exteriorDetail.id, {
                order: 0,
            }).then((res) => {
                this.exteriorDetail.isStar = !this.exteriorDetail.isStar;
                this.$store.dispatch("getExteriorUserStar");
            });
        },
        detailClose() {
            this.$emit("close");
        },
        jumpWBL() {
            window.open("https://jx3.seasunwbl.com/buyer?t=skin", "_blank");
        },
        openNewDetail() {
            window.open(`${location.origin}/exterior?id=${this.exteriorDetail.id}`);
        },
        getImgPath(path) {
            return `${this.__cdn}design/exterior/${path}`;
        },
    },
};
</script>
<style lang="less">
@import "~@/assets/css/exterior/detail.less";
</style>
