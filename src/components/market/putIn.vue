<template>
    <div class="m-house-item">
        <el-dialog class="m-mask_layout" :visible.sync="storageVisible">
            <div class="m-mask_box">
                <div class="m-info">
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
                        <div class="u-title">{{ exteriorDetail.name }}</div>
                        <div class="m-brief">
                            <span class="u-item">类型：包身礼盒</span>
                            <span class="u-item">原价：{{ exteriorDetail.meta.price / 100 }}</span>
                            <span class="u-item">发行时间：{{ formatDate(exteriorDetail.meta.shop_start) }}</span>
                        </div>
                        <div class="m-input">
                            <div class="m-item">
                                <div>购入时间</div>
                                <div>
                                    {{ datePickerVal || "选择日期" }}
                                    <el-date-picker
                                        @change="datePickerChange"
                                        v-model="datePickerVal"
                                        type="date"
                                        value-format="yyyy-MM-dd"
                                    >
                                    </el-date-picker>
                                </div>
                            </div>
                            <div class="m-select" @click="changeDate('now')">
                                <span>今天</span>
                                <div
                                    :class="{
                                        act: dateType == 'now',
                                    }"
                                ></div>
                            </div>
                            <div class="m-select" @click="changeDate('release')">
                                <span>发售日</span>
                                <div
                                    :class="{
                                        act: dateType == 'release',
                                    }"
                                ></div>
                            </div>
                        </div>
                        <div class="m-input">
                            <div class="m-item">
                                <div>购入价格</div>
                                <div>
                                    <input
                                        @click="priceType = 'input'"
                                        v-model="params.in_price"
                                        class="u-input"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div class="m-select" @click="priceType = 'old'">
                                <span>原价</span>
                                <div
                                    :class="{
                                        act: priceType == 'old',
                                    }"
                                ></div>
                            </div>
                        </div>
                        <div class="m-input">
                            <div class="m-item">
                                <div>数量</div>
                                <div class="m-number">
                                    <input v-model="params.count" class="u-input" type="text" />
                                </div>
                            </div>
                        </div>
                        <button class="u-enter">入库</button>
                    </div>
                </div>
                <div class="m-close">
                    <img class="u-img" @click="storageVisible = false" src="@/assets/img/exterior/icon/close.png" />
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "putIn",
    inject: ["__imgPath", "__cdn"],
    data: function () {
        return {
            storageVisible: false,
            exteriorDetail: {},

            bodyList: [],
            bodySelectKey: "",

            dateType: "input",
            datePickerVal: "",
            priceType: "",
            params: {
                count: "",
                in_price: "",
            },
        };
    },
    computed: {},
    methods: {
        open(exteriorDetail) {
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

            this.storageVisible = true;
        },
        datePickerChange() {
            this.dateType = "input";
        },
        changeDate(type) {
            this.dateType = type;
        },
        formatDate(timestamp) {
            var date = new Date(timestamp * 1000);
            var year = date.getFullYear();
            var month = (date.getMonth() + 1).toString().padStart(2, "0");
            var day = date.getDate().toString().padStart(2, "0");
            var hours = date.getHours().toString().padStart(2, "0");
            var minutes = date.getMinutes().toString().padStart(2, "0");
            var seconds = date.getSeconds().toString().padStart(2, "0");

            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        },
        getImgPath(path) {
            return `${this.__cdn}design/exterior/${path}`;
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/exterior/putIn.less";
</style>
