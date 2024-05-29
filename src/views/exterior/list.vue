<template>
    <div class="p-main" :class="pageStatus" v-loading="loading">
        <div class="u-back__status" @click="pageStatus = 'list'">返回列表</div>
        <div class="m-left">
            <CommonToolbar search @update="updateToolbar"></CommonToolbar>

            <div class="m-list">
                <div class="m-box">
                    <p class="u-box__title">商城上新</p>
                    <div class="m-new__list">
                        <div class="m-item" @click="pageStatus = 'fewer'" v-for="item in Array(15)" :key="item">
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
            <div class="m-info" :class="[selectColor, selectBg]">
                <div class="m-info__top">
                    <div class="m-body">
                        <span class="u-item">成男</span>
                        <span class="u-item act">成男</span>
                        <span class="u-item">成男</span>
                        <span class="u-item">成男</span>
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
                                    <div class="u-title">包身礼盒</div>
                                </div>
                                <div class="m-list__li">
                                    <div class="u-title">售价</div>
                                    <div class="u-value">￥880</div>
                                </div>
                            </div>
                            <div class="m-list__ul">
                                <div class="m-list__li">
                                    <div class="u-title">发行时间</div>
                                    <div class="u-value">2023-05-18</div>
                                </div>
                                <div class="m-list__li">
                                    <div class="u-title">获取方式</div>
                                    <div class="u-value">限时抢购</div>
                                </div>
                            </div>
                            <div class="m-list__ul">
                                <div class="m-list__li">
                                    <div class="u-title">内含单品</div>
                                </div>
                            </div>
                        </div>
                        <div class="m-goods">
                            <div class="m-item">
                                <div class="u-img"></div>
                            </div>
                            <div class="m-item">
                                <div class="u-img"></div>
                            </div>
                            <div class="u-gap">选一</div>
                            <div class="m-item">
                                <div class="u-img"></div>
                            </div>
                            <div class="m-item">
                                <div class="u-img"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="m-info__bottom">
                    <div class="m-info__title">
                        <div class="u-line"></div>
                        <div class="u-title">外观预览</div>
                        <div class="u-line"></div>
                    </div>
                    <img class="u-exterior" src="" />
                </div>
            </div>
            <div class="m-action">
                <div class="m-close">
                    <div class="u-action u-close" @click="pageStatus = 'list'">
                        <img class="u-img" src="@/assets/img/exterior/icon/close.png" />
                    </div>
                </div>
                <div class="m-quick">
                    <div class="u-action u-like">
                        <img class="u-img" src="@/assets/img/exterior/icon/mdi_heart.png" />
                        <div class="u-text">1/5</div>
                    </div>
                    <div class="u-action u-bag">
                        <img class="u-img" src="@/assets/img/exterior/icon/solar_inbox-in-bold.png" />
                    </div>
                    <div class="u-action u-wbl">
                        <img class="u-img" src="@/assets/img/exterior/icon/wbl-icon.png" />
                    </div>
                    <div class="u-action u-unfold" @click="pageStatus = 'unfold'">
                        <img class="u-img" src="@/assets/img/exterior/icon/icomoon-free_new-tab.png" />
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
import CommonToolbar from "@/components/common/toolbar.vue";
import { __clients } from "@jx3box/jx3box-common/data/jx3box.json";
import { getExteriorsList } from "@/service/exterior";
export default {
    name: "ExamList",
    components: {
        CommonToolbar,
    },
    data() {
        return {
            loading: false,
            pageStatus: "list",
            selectBg: "info-bg1",
            selectColor: "color1",
        };
    },
    computed: {},
    watch: {},
    mounted() {
        getExteriorsList();
    },
    methods: {
        updateToolbar(data) {},
    },
};
</script>
<style lang="less">
@import "~@/assets/css/exterior/list.less";
</style>
