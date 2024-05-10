import { getRoleGameAchievements, getAdventures } from "@/service/treasure.js";

const perfectAchievement = {
    111: { hasClass: "zhg", zIndex: 10 },
    3: { hasClass: "yylj", zIndex: 12 },
    88: { hasClass: "xxjt", zIndex: 14 },
    83: { hasClass: "zzwg", zIndex: 16 },
    104: { hasClass: "wldg", zIndex: 18 },
    78: { hasClass: "tjh", zIndex: 20 },
    1: { hasClass: "sssh", zIndex: 22 },
    2: { hasClass: "scqf", zIndex: 24 },
    126: { hasClass: "swxf", zIndex: 26 },
    21: { hasClass: "swbj", zIndex: 28 },
    121: { hasClass: "rjg", zIndex: 30 },
    106: { hasClass: "qqj", zIndex: 32 },
    90: { hasClass: "lnrh", zIndex: 34 },
    66: { hasClass: "jcs", zIndex: 36 },
};

let formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1; // 月份从0开始，需要加1
    const date = dateTime.getDate();
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const seconds = dateTime.getSeconds();

    const formattedDateTime = `${year}年${month}月${date}日 ${hours}:${minutes}:${seconds}`;
    return formattedDateTime;
};

let getData = (userJx3Id) => {
    return new Promise((resolve, reject) => {
        var returnData = {
            pet: [],
            normal: [],
            perfect: [],
        };

        getRoleGameAchievements(userJx3Id).then((res) => {
            const achievements = res.data?.data?.achievements || "";
            const list = achievements.split(",");
            if (res.data?.data?.updated_at) {
                returnData.updated_at = formatDateTime(res.data?.data?.updated_at);
            } else {
                returnData.updated_at = "暂无记录";
            }
            // 定义奇遇类型数组
            const adventureTypes = ["pet", "normal", "perfect"];
            // 创建 Promise 数组来存储所有奇遇数据的 Promise
            const adventurePromises = adventureTypes.map((type) => {
                return getAdventures({
                    type,
                    _no_page: 1,
                }).then((res) => {
                    const achievementsList = [];
                    let actNum = 0;
                    res.data.list.forEach((item) => {
                        if (type == "perfect") {
                            item.isAct = false;
                            if (list.includes(String(item.dwID))) {
                                item.isAct = true;
                                actNum++;
                            }
                            achievementsList.push({
                                ...item,
                                ...perfectAchievement[item.dwID],
                            });
                        } else {
                            if (list.includes(String(item.dwID))) {
                                achievementsList.push(item);
                                actNum++;
                            }
                        }
                    });
                    returnData[`${type}AllNum`] = res.data.list.length;
                    returnData[`${type}NowNum`] = actNum;
                    returnData[type] = achievementsList;
                });
            });

            // 所有奇遇数据的 Promise 执行完成后，调用 inspectionResult
            Promise.all(adventurePromises)
                .then(() => {
                    returnData.progress =
                        (returnData.petNowNum + returnData.normalNowNum + returnData.perfectNowNum) /
                        (returnData.petAllNum + returnData.normalAllNum + returnData.perfectAllNum);
                    returnData.progress = (returnData.progress * 100).toFixed(2);
                    resolve(returnData);
                })
                .catch((error) => {
                    reject(error); // 处理错误
                });
        });
    });
};

export default getData;
