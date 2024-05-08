<template>
    <div class="m-body">
        <div
            class="m-content"
            :class="{
                start: addClass,
            }"
        >
            <img class="u-content__bg" src="../../assets/img/treasure/content_bg.png" alt="" />
            <div class="m-left" :class="reelAddClass">
                <img class="u-left__img" src="../../assets/img/treasure/left.png" alt="" />
            </div>
            <div class="m-right" :class="reelAddClass">
                <img class="u-right__img" src="../../assets/img/treasure/right.png" alt="" />
            </div>
            <div class="m-qy-box">
                <!-- 普通奇遇 -->
                <div class="m-qy m-ordinary">
                    <div class="m-qy-list">
                        <div class="m-qy__row">
                            <div class="m-qy__item" v-for="(item, index) in Array(3)" :key="index">
                                <img class="u-qy__img" src="../../assets/img/treasure/pt/brm.png" alt="" />
                                <div class="m-qy__text">
                                    <img class="u-qy__bg" src="../../assets/img/treasure/pt/text_bg.png" alt="" />
                                    <span class="u-qy__text">白日梦梦</span>
                                </div>
                            </div>
                        </div>
                        <div class="m-qy__row">
                            <div class="m-qy__item" v-for="(item, index) in Array(3)" :key="index">
                                <img class="u-qy__img" src="../../assets/img/treasure/pt/brm.png" alt="" />
                                <div class="m-qy__text">
                                    <img class="u-qy__bg" src="../../assets/img/treasure/pt/text_bg.png" alt="" />
                                    <span class="u-qy__text">白日梦梦</span>
                                </div>
                            </div>
                        </div>
                        <div class="m-qy__row">
                            <div class="m-qy__item" v-for="(item, index) in Array(3)" :key="index">
                                <img class="u-qy__img" src="../../assets/img/treasure/pt/brm.png" alt="" />
                                <div class="m-qy__text">
                                    <img class="u-qy__bg" src="../../assets/img/treasure/pt/text_bg.png" alt="" />
                                    <span class="u-qy__text">白日梦梦</span>
                                </div>
                            </div>
                        </div>
                        <div class="m-qy__row">
                            <div class="m-qy__item" v-for="(item, index) in Array(3)" :key="index">
                                <img class="u-qy__img" src="../../assets/img/treasure/pt/brm.png" alt="" />
                                <div class="m-qy__text">
                                    <img class="u-qy__bg" src="../../assets/img/treasure/pt/text_bg.png" alt="" />
                                    <span class="u-qy__text">白日梦梦</span>
                                </div>
                            </div>
                        </div>
                        <div class="m-qy__row">
                            <div class="m-qy__item" v-for="(item, index) in Array(3)" :key="index">
                                <img class="u-qy__img" src="../../assets/img/treasure/pt/brm.png" alt="" />
                                <div class="m-qy__text">
                                    <img class="u-qy__bg" src="../../assets/img/treasure/pt/text_bg.png" alt="" />
                                    <span class="u-qy__text">白日梦梦</span>
                                </div>
                            </div>
                        </div>
                        <div class="m-qy__row">
                            <div class="m-qy__item" v-for="(item, index) in Array(3)" :key="index">
                                <img class="u-qy__img" src="../../assets/img/treasure/pt/brm.png" alt="" />
                                <div class="m-qy__text">
                                    <img class="u-qy__bg" src="../../assets/img/treasure/pt/text_bg.png" alt="" />
                                    <span class="u-qy__text">白日梦梦</span>
                                </div>
                            </div>
                        </div>
                        <div class="m-qy__row">
                            <div class="m-qy__item" v-for="(item, index) in Array(3)" :key="index">
                                <img class="u-qy__img" src="../../assets/img/treasure/pt/brm.png" alt="" />
                                <div class="m-qy__text">
                                    <img class="u-qy__bg" src="../../assets/img/treasure/pt/text_bg.png" alt="" />
                                    <span class="u-qy__text">白日梦梦</span>
                                </div>
                            </div>
                        </div>
                        <div class="m-qy__row">
                            <div class="m-qy__item" v-for="(item, index) in Array(3)" :key="index">
                                <img class="u-qy__img" src="../../assets/img/treasure/pt/brm.png" alt="" />
                                <div class="m-qy__text">
                                    <img class="u-qy__bg" src="../../assets/img/treasure/pt/text_bg.png" alt="" />
                                    <span class="u-qy__text">白日梦梦</span>
                                </div>
                            </div>
                        </div>
                        <div class="m-qy__row">
                            <div class="m-qy__item" v-for="(item, index) in Array(3)" :key="index">
                                <img class="u-qy__img" src="../../assets/img/treasure/pt/brm.png" alt="" />
                                <div class="m-qy__text">
                                    <img class="u-qy__bg" src="../../assets/img/treasure/pt/text_bg.png" alt="" />
                                    <span class="u-qy__text">白日梦梦</span>
                                </div>
                            </div>
                        </div>
                        <div class="m-qy__row">
                            <div class="m-qy__item" v-for="(item, index) in Array(3)" :key="index">
                                <img class="u-qy__img" src="../../assets/img/treasure/pt/brm.png" alt="" />
                                <div class="m-qy__text">
                                    <img class="u-qy__bg" src="../../assets/img/treasure/pt/text_bg.png" alt="" />
                                    <span class="u-qy__text">白日梦梦</span>
                                </div>
                            </div>
                        </div>
                        <div class="m-qy__row">
                            <div class="m-qy__item" v-for="(item, index) in Array(3)" :key="index">
                                <img class="u-qy__img" src="../../assets/img/treasure/pt/brm.png" alt="" />
                                <div class="m-qy__text">
                                    <img class="u-qy__bg" src="../../assets/img/treasure/pt/text_bg.png" alt="" />
                                    <span class="u-qy__text">白日梦梦</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="m-qy-count">
                        <img class="u-count__img" src="../../assets/img/treasure/pt_qy_bg_s.png" alt="" />
                        <div class="m-count-info">
                            <div>23</div>
                            <div>/</div>
                            <div>27</div>
                        </div>
                    </div>
                </div>
                <!-- 宠物奇遇 -->
                <div class="m-qy m-pet">
                    <div class="m-qy-list">
                        <div class="m-qy__row">
                            <div class="m-qy__item" v-for="(item, index) in Array(5)" :key="index">
                                <img
                                    class="u-qy__img"
                                    src="https://img.jx3box.com/adventure/adventure/std/reward/open/追魂骨_open.png"
                                    alt=""
                                />
                                <img class="u-qy__border" src="../../assets/img/treasure/pet_img_border.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="m-qy-count">
                        <img class="u-count__img" src="../../assets/img/treasure/pet_qy_bg_s.png" alt="" />
                        <div class="m-count-info">
                            <div>12</div>
                            <div>/</div>
                            <div>67</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 绝世奇遇 -->
            <div class="m-world">
                <img class="u-world__bg" src="../../assets/img/treasure/world/world_bg.svg" alt="" />
                <div class="m-world-count">
                    <img class="u-count__img" src="../../assets/img/treasure/world_qy_bg_s.png" alt="" />
                    <div class="m-count-info">
                        <div>23</div>
                        <div>/</div>
                        <div>27</div>
                    </div>
                </div>
                <div class="m-world-item sssh">
                    <img class="u-item__img" src="../../assets/img/treasure/world/三山四海激活.png" alt="" />
                    <div class="m-item__text">
                        <img class="u-item__bg" src="../../assets/img/treasure/world/text_bg_act.png" alt="" />
                        <span class="u-item__text">三山四海</span>
                    </div>
                </div>
                <div class="m-world-item lnrh">
                    <img class="u-item__img" src="../../assets/img/treasure/world/流年如虹未激活.png" alt="" />
                    <div class="m-item__text">
                        <img class="u-item__bg" src="../../assets/img/treasure/world/text_bg.png" alt="" />
                        <span class="u-item__text">流年如虹</span>
                    </div>
                </div>
                <div class="m-world-item zhg">
                    <img class="u-item__img" src="../../assets/img/treasure/world/追魂骨激活.png" alt="" />
                    <div class="m-item__text">
                        <img class="u-item__bg" src="../../assets/img/treasure/world/text_bg_act.png" alt="" />
                        <span class="u-item__text">追魂骨</span>
                    </div>
                </div>
                <div class="m-world-item yylj">
                    <img class="u-item__img" src="../../assets/img/treasure/world/阴阳两界未激活.png" alt="" />
                    <div class="m-item__text">
                        <img class="u-item__bg" src="../../assets/img/treasure/world/text_bg.png" alt="" />
                        <span class="u-item__text">阴阳两界</span>
                    </div>
                </div>
                <div class="m-world-item swbj">
                    <img class="u-item__img" src="../../assets/img/treasure/world/塞外宝驹未激活.png" alt="" />
                    <div class="m-item__text">
                        <img class="u-item__bg" src="../../assets/img/treasure/world/text_bg.png" alt="" />
                        <span class="u-item__text">塞外宝驹</span>
                    </div>
                </div>
                <div class="m-world-item xxjt">
                    <img class="u-item__img" src="../../assets/img/treasure/world/侠行囧途未激活.png" alt="" />
                    <div class="m-item__text">
                        <img class="u-item__bg" src="../../assets/img/treasure/world/text_bg.png" alt="" />
                        <span class="u-item__text">侠行囧途</span>
                    </div>
                </div>
                <div class="m-world-item qqj">
                    <img class="u-item__img" src="../../assets/img/treasure/world/千秋铸未激活.png" alt="" />
                    <div class="m-item__text">
                        <img class="u-item__bg" src="../../assets/img/treasure/world/text_bg.png" alt="" />
                        <span class="u-item__text">千秋铸</span>
                    </div>
                </div>
                <div class="m-world-item swxf">
                    <img class="u-item__img" src="../../assets/img/treasure/world/塞外西风未激活.png" alt="" />
                    <div class="m-item__text">
                        <img class="u-item__bg" src="../../assets/img/treasure/world/text_bg.png" alt="" />
                        <span class="u-item__text">塞外西风</span>
                    </div>
                </div>
                <div class="m-world-item jcs">
                    <img class="u-item__img" src="../../assets/img/treasure/world/济苍生未激活.png" alt="" />
                    <div class="m-item__text">
                        <img class="u-item__bg" src="../../assets/img/treasure/world/text_bg.png" alt="" />
                        <span class="u-item__text">济苍生</span>
                    </div>
                </div>
                <div class="m-world-item zzwg">
                    <img class="u-item__img" src="../../assets/img/treasure/world/吴钩争铸未激活.png" alt="" />
                    <div class="m-item__text">
                        <img class="u-item__bg" src="../../assets/img/treasure/world/text_bg.png" alt="" />
                        <span class="u-item__text">争铸吴钩</span>
                    </div>
                </div>
                <div class="m-world-item tjh">
                    <img class="u-item__img" src="../../assets/img/treasure/world/兔江湖激活.png" alt="" />
                    <div class="m-item__text">
                        <img class="u-item__bg" src="../../assets/img/treasure/world/text_bg.png" alt="" />
                        <span class="u-item__text">兔江湖</span>
                    </div>
                </div>
                <div class="m-world-item wldg">
                    <img class="u-item__img" src="../../assets/img/treasure/world/万灵当歌未激活.png" alt="" />
                    <div class="m-item__text">
                        <img class="u-item__bg" src="../../assets/img/treasure/world/text_bg.png" alt="" />
                        <span class="u-item__text">万灵当歌</span>
                    </div>
                </div>
                <div class="m-world-item scqf">
                    <img class="u-item__img" src="../../assets/img/treasure/world/三尺青锋未激活.png" alt="" />
                    <div class="m-item__text">
                        <img class="u-item__bg" src="../../assets/img/treasure/world/text_bg.png" alt="" />
                        <span class="u-item__text">三尺青锋</span>
                    </div>
                </div>
                <div class="m-world-item rjg">
                    <img class="u-item__img" src="../../assets/img/treasure/world/入蛟宫未激活.png" alt="" />
                    <div class="m-item__text">
                        <img class="u-item__bg" src="../../assets/img/treasure/world/text_bg.png" alt="" />
                        <span class="u-item__text">入蛟宫</span>
                    </div>
                </div>
            </div>
            <!-- 右侧内容 -->
            <div class="m-title">
                <img class="u-logo" src="../../assets/img/treasure/title_icon_h.png" alt="" />
                <div class="m-title-info">
                    <div class="m-tip">
                        天缘至时自会来，强求无果亦何哀。 <br />
                        有缘相遇堪称幸，愿君福泽早相开。
                    </div>
                    <div class="m-user">
                        <img class="u-icon" src="https://img.jx3box.com/image/xf/10028.png" alt="" />
                        <span class="u-name">侠士角色名称</span>
                    </div>
                </div>
            </div>
            <div class="m-producer">
                <img src="../../assets/img/treasure/producer.png" alt="" />
                <div class="u-producer__text">*剑网3魔盒提供技术支持，茗伊插件提供数据支持。</div>
            </div>
            <div class="m-qy-progress">
                <div class="u-progress">【奇遇进度】95.6%</div>
                <div class="u-time">【记录时间】2024年4月20日11:51:54</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "landscape",
    data: () => ({
        addClass: false,
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
