<template>
    <div class="m-house-item" :class="type">
        <template v-if="type == 'warehouse'">
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
        </template>
        <template v-if="type == 'shop'">
            <div class="m-item__top">
                <img class="u-img" src="" alt="" />
                <div class="m-info">
                    <div class="u-title">春山鸟归 · 鹤 · 豪华</div>
                    <div class="m-label">
                        <div class="u-item">盒子</div>
                        <div class="u-item u-color">￥880</div>
                    </div>
                </div>
            </div>
            <div class="m-item__center"></div>
            <div class="m-item__bottom">
                <div class="u-item">历史最高：￥1200</div>
                <div class="u-item">交易热度：646</div>
            </div>
        </template>
        <div
            class="m-hover"
            :style="{
                opacity: hoverStatus ? 1 : 0,
            }"
        >
            <template v-if="!hoverStatus">
                <div class="m-icon">
                    <img
                        v-if="type == 'warehouse'"
                        class="u-icon delete"
                        @click="hoverStatus = 'delete'"
                        svg-inline
                        src="@/assets/img/exterior/house/delete.svg"
                    />
                    <img
                        v-if="type == 'shop'"
                        class="u-icon cancel"
                        @click="hoverStatus = 'cancel'"
                        svg-inline
                        src="@/assets/img/exterior/house/cancel_favorite.svg"
                    />
                </div>
                <div class="m-btn__box">
                    <div class="u-btn__detail" @click="dialogVisibleType = 'detail'">查看详情</div>
                    <img
                        v-if="type == 'shop'"
                        class="u-btn__put"
                        svg-inline
                        @click="dialogVisibleType = 'putIn'"
                        src="@/assets/img/exterior/house/solar_inbox-in-bold.svg"
                    />
                </div>
            </template>
            <div class="m-modal" v-if="hoverStatus == 'delete'">
                <div class="u-title">确认移除</div>
                <div class="u-content">春山鸟归 · 鹤 · 豪华</div>
                <div class="m-btn">
                    <div class="u-btn">是</div>
                    <div class="u-btn" @click="hoverStatus = false">否</div>
                </div>
            </div>
            <div class="m-modal m-cancel" v-if="hoverStatus == 'cancel'">
                <div class="u-title">取消收藏</div>
                <div class="u-content">春山鸟归 · 鹤 · 豪华</div>
                <div class="m-btn">
                    <div class="u-btn">是</div>
                    <div class="u-btn" @click="hoverStatus = false">否</div>
                </div>
            </div>
        </div>

        <el-dialog :visible.sync="dialogVisibleType"> 123123 </el-dialog>
    </div>
</template>

<script>
export default {
    name: "item",
    props: ["item", "type"],
    data: function () {
        return {
            hoverStatus: false,
            dialogVisibleType: false,
        };
    },
    computed: {},
    methods: {},
};
</script>

<style lang="less">
@import "~@/assets/css/exterior/item.less";
</style>
