<template>
    <div class="m-body">
        <div class="m-related-roles">
            <el-select
                v-if="isLogin"
                v-model="currentRole"
                value-key="ID"
                placeholder="请选择当前角色"
                :disabled="!isLogin"
                popper-class="m-related-roles-options"
                size="small"
            >
                <span slot="prefix" class="u-prefix">
                    角色
                    <el-tooltip
                        v-if="!isVirtual && !isSync"
                        class="item"
                        effect="dark"
                        content="请先在游戏中同步成就"
                        placement="top"
                    >
                        <a href="/tool/74559" target="_blank"><i class="el-icon-warning-outline"></i></a>
                    </el-tooltip>
                    <el-tooltip
                        v-else
                        class="item"
                        effect="dark"
                        content="虚拟角色即为魔盒账号本身，可自定义进度"
                        placement="top"
                    >
                        <a href="/tool/74559" target="_blank"><i class="el-icon-warning-outline"></i></a>
                    </el-tooltip>
                </span>
                <el-option v-if="isLogin" :value="virtualRole" :label="virtualRole.name + '<虚拟角色>'">
                    <span class="u-role">
                        <span class="u-role-name"
                            ><img class="u-role-icon" :src="virtualRole.avatar" />{{ virtualRole.name }}</span
                        >
                        <span class="u-role-server"> &lt;虚拟角色&gt;</span>
                    </span>
                </el-option>
                <el-option v-for="role in roleList" :key="role.ID" :value="role" :label="role.name">
                    <span class="u-role">
                        <span class="u-role-name"
                            ><img class="u-role-icon" :src="showSchoolIcon(role.mount)" />{{ role.name }}</span
                        >
                        <span class="u-role-server">{{ role.server }}</span>
                    </span>
                </el-option>
            </el-select>

            <el-select
                v-model="currentCamp"
                placeholder="请选择阵营"
                popper-class="m-related-roles-options"
                size="small"
            >
                <span slot="prefix" class="u-prefix">所在阵营</span>
                <el-option value="hq" label="浩气盟阵营"> </el-option>
                <el-option value="er" label="恶人谷阵营"> </el-option>
            </el-select>
        </div>
        <div id="capture" ref="capture">
            <div
                class="m-content"
                :class="{
                    start: addClass,
                    over: isOver,
                }"
                :style="{
                    zoom: contentZoom,
                }"
                v-if="userAchievement"
            >
                <img class="u-content__bg" src="../../assets/img/treasure/content_bg.png" />
                <div class="m-left" :class="reelAddClass">
                    <img class="u-left__img" src="../../assets/img/treasure/landscape/left.png" />
                </div>
                <div class="m-right" :class="reelAddClass">
                    <img class="u-right__img" src="../../assets/img/treasure/landscape/right.png" />
                </div>
                <div class="m-qy-box">
                    <!-- 普通奇遇 -->
                    <div class="m-qy m-ordinary">
                        <div class="m-qy-list" v-if="userAchievement.normal.length">
                            <div class="m-qy__row" v-for="(ele, eleIndex) in userAchievement.normal" :key="eleIndex">
                                <div class="m-qy__item" v-for="(item, index) in ele" :key="index">
                                    <template v-if="[4, 118].indexOf(item.dwID) > -1">
                                        <img
                                            v-show="currentCamp == 'hq'"
                                            class="u-qy__img"
                                            :src="require(`../../assets/img/treasure/pt/${item.dwID}_hq.png`)"
                                        />
                                        <img
                                            v-show="currentCamp == 'er'"
                                            class="u-qy__img"
                                            :src="require(`../../assets/img/treasure/pt/${item.dwID}_er.png`)"
                                        />
                                    </template>
                                    <img
                                        v-else
                                        class="u-qy__img"
                                        :src="require(`../../assets/img/treasure/pt/${item.dwID}.png`)"
                                    />
                                    <div class="m-qy__text">
                                        <img class="u-qy__bg" src="../../assets/img/treasure/pt/text_bg.png" />
                                        <span class="u-qy__text">{{ item.szName }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="u-no-qy" v-else>
                            <img src="../../assets/img/treasure/landscape/no_qy.png" />
                        </div>
                        <div class="m-qy-count">
                            <img class="u-count__img" src="../../assets/img/treasure/landscape/pt_qy_bg.png" />
                            <div class="m-count-info">
                                <div>{{ userAchievement.normalNowNum }}</div>
                                <div>/</div>
                                <div>{{ userAchievement.normalAllNum }}</div>
                            </div>
                        </div>
                    </div>
                    <!-- 宠物奇遇 -->
                    <div class="m-qy m-pet">
                        <div class="m-qy-list" v-if="userAchievement.pet.length">
                            <div class="m-qy__row" v-for="(ele, eleIndex) in userAchievement.pet" :key="eleIndex">
                                <div class="m-qy__item" v-for="(item, index) in ele" :key="index">
                                    <img class="u-qy__img" :src="getImgUrl(item)" />
                                    <img class="u-qy__border" src="../../assets/img/treasure/pet_img_border.png" />
                                </div>
                            </div>
                        </div>
                        <div class="u-no-qy" v-else>
                            <img src="../../assets/img/treasure/landscape/no_qy.png" />
                        </div>
                        <div class="m-qy-count">
                            <img class="u-count__img" src="../../assets/img/treasure/landscape/pet_qy_bg.png" />
                            <div class="m-count-info">
                                <div>{{ userAchievement.petNowNum }}</div>
                                <div>/</div>
                                <div>{{ userAchievement.petAllNum }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 绝世奇遇 -->
                <div class="m-world">
                    <img class="u-world__bg" src="../../assets/img/treasure/world/world_bg.svg" />
                    <div class="m-world-count">
                        <img class="u-count__img" src="../../assets/img/treasure/landscape/world_qy_bg.png" />
                        <div class="m-count-info">
                            <div>{{ userAchievement.perfectNowNum }}</div>
                            <div>/</div>
                            <div>{{ userAchievement.perfectAllNum }}</div>
                        </div>
                    </div>
                    <div
                        class="m-world-item"
                        v-for="(item, index) in userAchievement.perfect"
                        :key="index"
                        :class="item.hasClass"
                        :style="{
                            zIndex: item.zIndex,
                        }"
                    >
                        <img
                            class="u-item__img"
                            :src="
                                require(`../../assets/img/treasure/world/${item.dwID}${item.isAct ? '_act' : ''}.png`)
                            "
                        />
                        <div class="m-item__text">
                            <img
                                class="u-item__bg"
                                :src="require(`../../assets/img/treasure/world/text_bg${item.isAct ? '_act' : ''}.png`)"
                            />
                            <span class="u-item__text">{{ item.szName }}</span>
                        </div>
                    </div>
                </div>
                <!-- 右侧内容 -->
                <div class="m-title">
                    <img class="u-logo" src="../../assets/img/treasure/landscape/title_icon.png" />
                    <div class="m-title-info">
                        <div class="m-tip">
                            天缘至时自会来，强求无果亦何哀。 <br />
                            有缘相遇堪称幸，愿君福泽早相开。
                        </div>
                        <div class="m-user">
                            <img class="u-icon" :src="showSchoolIcon(roleInfo.mount)" />
                            <span class="u-name">{{ roleInfo.name }}</span>
                        </div>
                    </div>
                </div>
                <div class="m-producer">
                    <img src="../../assets/img/treasure/producer.png" />
                    <div class="u-producer__text">*剑网3魔盒提供技术支持，茗伊插件提供数据支持。</div>
                </div>
                <div class="m-qy-progress">
                    <div class="u-progress">【奇遇进度】{{ userAchievement.progress }}%</div>
                    <div class="u-time">【记录时间】{{ userAchievement.updated_at }}</div>
                </div>
            </div>
        </div>
        <button v-if="isOver" @click="saveAsImage" class="u-btn m-hide el-button el-button--primary">保存图片</button>
    </div>
</template>

<script>
import { getUserRoles } from "@/service/treasure.js";
import { showSchoolIcon } from "@jx3box/jx3box-common/js/utils";
import treasureCommon from "@/assets/js/treasure.js";
import User from "@jx3box/jx3box-common/js/user";
import html2canvas from "html2canvas";
export default {
    name: "landscape",
    inject: ["__imgRoot"],
    data: () => ({
        addClass: false,
        reelAddClass: false,
        contentZoom: "",
        userAchievement: false,
        roleList: [],
        currentRole: "",
        currentCamp: "hq",
        roleInfo: {},
        isLogin: User.isLogin(),
        virtualRole: {
            ...User.getInfo(),
            jx3id: 0,
            ID: ~~User.getInfo().uid,
        },
        isSync: false,
        isOver: false,
    }),
    computed: {
        client: function () {
            return this.$store.state.client;
        },
    },
    watch: {
        currentRole: {
            deep: true,
            handler(val) {
                this.roleInfo = val;
                if (val.jx3id) {
                    this.loadRole(val.jx3id);
                }
            },
        },
        virtualRole: {
            immediate: true,
            deep: true,
            handler(virtualRole) {
                this.currentRole = virtualRole;
            },
        },
    },
    mounted() {
        getUserRoles().then((res) => {
            if (res.data.data.list.length) {
                this.roleList =
                    res.data?.data?.list.filter((item) => {
                        return !!item.player_id;
                    }) || [];
                if (this.roleList.length) {
                    this.currentRole = this.roleList[0];
                }
            } else {
                this.$message.error("未获取到角色信息");
            }
        });
    },
    methods: {
        async saveAsImage() {
            try {
                let oldZoom = this.contentZoom;
                this.contentZoom = 1;
                await new Promise((resolve) => {
                    this.$nextTick(() => {
                        resolve();
                    });
                });

                const element = this.$refs.capture; // 获取需要保存为图片的元素
                const canvas = await html2canvas(element, {
                    allowTaint: true,
                    useCORS: true,
                    width: element.offsetWidth,
                    height: element.offsetHeight,
                }); // 将元素转换成canvas

                this.contentZoom = oldZoom;
                const img = canvas.toDataURL("image/png"); // 将canvas转换成图片数据
                const a = document.createElement("a"); // 创建一个a标签
                a.href = img; // 设置下载链接
                a.download = "downloaded-image.png"; // 设置下载文件名
                a.click(); // 模拟点击触发下载
            } catch (error) {
                console.error("Error saving image:", error);
            }
        },
        loadRole(userJx3Id) {
            treasureCommon(userJx3Id).then((res) => {
                this.isSync = !!userJx3Id; // 是否在游戏中同步
                res.pet = this.splitArrayIntoChunks(res.pet, 5);
                res.normal = this.splitArrayIntoChunks(res.normal, 3);
                this.userAchievement = res;
                this.$nextTick((_) => {
                    setTimeout(() => {
                        this.start();
                    }, 500);
                });
            });
        },
        start() {
            this.addClass = true;
            this.reelAddClass = "start";
            setTimeout(() => {
                this.isOver = true;
                this.addClass = false;
                this.reelAddClass = "";
            }, 3000);
            window.addEventListener("resize", this.handleScreenWidthChange);
            window.addEventListener("load", this.handleScreenWidthChange);
            this.handleScreenWidthChange();
        },
        isVirtual() {
            // 是否是虚拟角色 - 魔盒账号
            return !this.currentRole?.jx3id;
        },
        getImgUrl(item) {
            const client = "std"; // 怀旧服的奇遇图片先取正式服的
            let tgaPath = item.szOpenRewardPath?.toLowerCase();
            if (!tgaPath) return "";
            tgaPath = tgaPath.replace(/\\/g, "/").replace("ui/image/adventure/", "");
            if (!item.szRewardType) {
                let pngPath = tgaPath.replace(/\.tga$/, ".png");
                return `${this.__imgRoot}adventure/${client}/${pngPath}`;
            }
            // 传给组件的数据是修改过的
            tgaPath = tgaPath.replace(/\/[^\/]+?\.tga$/, "");
            if (item.szRewardType === "camp")
                return `${this.__imgRoot}adventure/${client}/${tgaPath}/camp_${this.camp}_open.png`;
            if (item.szRewardType === "school")
                return `${this.__imgRoot}adventure/${client}/${tgaPath}/school_${this.force}_open.png`;
            return defaultImg;
        },
        handleScreenWidthChange() {
            var screenWidth = window.innerWidth - 80;
            var boxWidth = 1920;
            var scale = screenWidth / boxWidth;
            var zoom = 1;
            if (screenWidth <= boxWidth) {
                zoom = scale;
            }
            this.contentZoom = zoom;
        },
        splitArrayIntoChunks(array, chunkSize) {
            const chunks = [];
            for (let i = 0; i < array.length; i += chunkSize) {
                chunks.push(array.slice(i, i + chunkSize));
            }
            return chunks;
        },
        showSchoolIcon,
    },
};
</script>

<style lang="less">
@import "~@/assets/css/app.less";
@import "~@/assets/css/adventure/landscape.less";
</style>
