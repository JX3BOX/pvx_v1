<template>
    <div class="p-exterior" :class="pageStatus" v-loading="loading">
        <div class="u-back__status" @click="pageStatus = 'list'">返回列表</div>
        <div class="m-left">
            <CommonToolbar
                color="#fff7ef"
                actColor="#DA8029"
                search
                @update="updateToolbar"
                :types="pageStatus == 'list' ? tabList : []"
            >
                <template v-slot:append v-if="pageStatus == 'fewer'">
                    <div class="u-filter">
                        <el-popover placement="bottom-start" trigger="hover" v-model="filterOpen">
                            <div class="m-common-filter">
                                <el-radio-group v-model="searchType">
                                    <el-radio-button
                                        class="u-filter"
                                        v-for="(item, index) in tabList"
                                        :key="index"
                                        :label="item.value"
                                        >{{ item.label }}</el-radio-button
                                    >
                                </el-radio-group>
                            </div>
                            <img svg-inline src="@/assets/img/filter.svg" slot="reference" />
                        </el-popover>
                    </div>
                </template>
            </CommonToolbar>

            <div class="m-list">
                <template v-if="searchType > 0">
                    <div class="m-box">
                        <p class="u-box__title">{{ searchKey ? "搜索结果" : tabList[searchType].label }}</p>
                        <div class="m-new__list">
                            <div
                                class="m-item"
                                @click="openDetail(item)"
                                v-for="(item, index) in otherExteriorList"
                                :key="index"
                            >
                                <div class="m-item__img">
                                    <div
                                        class="u-img"
                                        :style="{
                                            backgroundImage: `url(${getImgPath(item.id + '-封面.png')})`,
                                        }"
                                    ></div>
                                </div>
                                <div class="u-title">{{ item.name }}</div>
                            </div>
                        </div>
                        <el-empty
                            v-if="!otherExteriorList.length"
                            description="未找到您要找的物品"
                            :image="__imgPath + `/img/common/empty.png`"
                            :image-size="200"
                        >
                        </el-empty>
                    </div>
                </template>
                <template v-else>
                    <div class="m-box">
                        <p class="u-box__title">商城上新</p>
                        <div class="m-new__list">
                            <div
                                class="m-item"
                                @click="openDetail(item)"
                                v-for="(item, index) in newExteriorList"
                                :key="index"
                            >
                                <div class="m-item__img">
                                    <div
                                        class="u-img"
                                        :style="{
                                            backgroundImage: `url(${getImgPath(item.id + '-封面.png')})`,
                                        }"
                                    ></div>
                                </div>
                                <div class="u-title">{{ item.name }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="m-box">
                        <p class="u-box__title">其他</p>
                        <el-row :gutter="20" class="m-more__list">
                            <el-col
                                :xs="24"
                                :sm="12"
                                :md="12"
                                :lg="6"
                                :xl="6"
                                v-for="(item, index) in otherExteriorList"
                                :key="index"
                                class="u-more_col"
                            >
                                <div class="m-item" @click="openDetail(item)">
                                    <div
                                        class="u-img"
                                        :style="{
                                            backgroundImage: `url(${iconLink(item.meta.icon_id, client)})`,
                                        }"
                                    ></div>
                                    <span class="u-title">{{ item.name }}</span>
                                </div>
                            </el-col>
                        </el-row>

                        <el-pagination
                            class="m-archive-pages"
                            background
                            layout="total, prev, pager, next, jumper"
                            :hide-on-single-page="true"
                            :page-size="per_page"
                            :total="total"
                            :current-page.sync="page"
                        ></el-pagination>
                    </div>
                </template>
            </div>
        </div>
        <div class="m-right">
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
                    <div class="u-action u-close" @click="pageStatus = 'list'" :class="[selectColor]">
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
    </div>
</template>
<script>
import { Chart } from "@antv/g2";
import CommonToolbar from "@/components/common/toolbar.vue";
import { __clients, __Links } from "@jx3box/jx3box-common/data/jx3box.json";
import { getExteriorsList, getExteriorsDetail, getExteriorsPriceTrending, userStarExterior } from "@/service/exterior";
import User from "@jx3box/jx3box-common/js/user";
import { iconLink } from "@jx3box/jx3box-common/js/utils";
export default {
    name: "ExamList",
    components: {
        CommonToolbar,
    },
    inject: ["__imgPath", "__cdn"],
    data() {
        return {
            loading: false,
            pageStatus: "list",
            selectBg: "info-bg1",
            selectColor: "color1",

            page: 1,
            per_page: 50,
            total: 0,

            newExteriorList: [],
            otherExteriorList: [],

            exteriorDetail: false,

            bodyList: [],
            bodySelectKey: "",

            trendChart: null,
            searchKey: "",
            searchType: 0,
            searchTime: "",

            login_url: __Links.account.login + "?redirect=" + location.href,

            tabList: [
                { label: "自定义", list: [], value: 0, client: ["std", "origin"], page: 1, pages: 1 },
                { label: "物品", list: [], value: 1, client: ["std", "origin"], page: 1, pages: 1 },
                { label: "外观", list: [], value: 2, client: ["std", "origin"], page: 1, pages: 1 },
                { label: "头发", list: [], value: 3, client: ["std"], page: 1, pages: 1 },
                { label: "挂件", list: [], value: 4, client: ["std", "origin"], page: 1, pages: 1 },
                { label: "脚印&环绕", list: [], value: 5, client: ["std", "origin"], page: 1, pages: 1 },
                { label: "其他", list: [], value: 6, client: ["std", "origin"], page: 1, pages: 1 },
                { label: "宠物", list: [], value: 7, client: ["std", "origin"], page: 1, pages: 1 },
            ],
            filterOpen: false,
        };
    },
    computed: {
        client() {
            return this.$store.state.client;
        },
        userStarExteriorList() {
            return this.$store.state.userStarExteriorList;
        },
        params() {
            let _params = {
                page: this.page || 1,
                pageSize: 20,
                skip: this.searchKey ? 0 : 10,
                client: this.client,
                source: this.searchType,
            };
            if (this.searchKey) {
                _params.keyword = this.searchKey;
            }
            return _params;
        },
    },
    watch: {
        params: {
            deep: true,
            handler(val) {
                this.getListData();
            },
        },
    },
    mounted() {
        // 获取商城上新
        getExteriorsList({
            pageSize: 10,
        }).then((res) => {
            this.newExteriorList = res.data.data.list;
        });
        // 获取其他类的外观
        this.getListData();
        this.$store.dispatch("getExteriorUserStar");

        if (this.$route.query?.id) {
            this.openDetail(
                {
                    id: this.$route.query.id,
                },
                "unfold"
            );
        }
    },
    methods: {
        iconLink,
        updateToolbar(data) {
            if (data.type != this.searchType) {
                this.searchType = data.type;
            } else {
                clearTimeout(this.searchTime);
                this.searchTime = setTimeout(() => {
                    this.searchKey = data.search;
                }, 500);
            }
        },
        openDetail(itemData, type) {
            getExteriorsDetail(itemData.id).then((res) => {
                res.data.data.isStar = this.userStarExteriorList.some((item) => item.exterior_id === res.data.data.id);
                this.exteriorDetail = res.data.data;
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
                if (type) {
                    this.pageStatus = type;
                } else {
                    if (window.innerWidth < 1280) {
                        this.pageStatus = "unfold";
                    } else {
                        this.pageStatus = "fewer";
                    }
                }

                this.$nextTick(() => {
                    setTimeout(() => {
                        getExteriorsPriceTrending({
                            ids: itemData.id,
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
                            this.trendChart.data(res.data.data[itemData.id]).render();
                        });
                    }, 300);
                });
            });
        },
        getListData() {
            getExteriorsList(this.params).then((res) => {
                this.total = res.data.data.total;
                this.otherExteriorList = res.data.data.list;
            });
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
        userEntWarehouse() {
            // entWarehouse({
            //     exterior_id: this.exteriorDetail.id,
            //     count: 1,
            // }).then((res) => {});
        },
        splitByColon(text) {
            const regex = /[:：]/;
            const parts = text.split(regex);
            if (parts.length > 1) {
                return [parts[0].trim(), parts[1].trim()];
            } else {
                return [parts[0].trim(), ""];
            }
        },
        getImgPath(path) {
            return `${this.__cdn}design/exterior/${path}`;
        },
        jumpWBL() {
            window.open("https://jx3.seasunwbl.com/buyer?t=skin", "_blank");
        },
        openNewDetail() {
            window.open(`${location.origin}/exterior?id=${this.exteriorDetail.id}`);
        },
    },
};
</script>
<style lang="less">
@import "~@/assets/css/exterior/list.less";
</style>
