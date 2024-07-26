import { $node, $cms } from "@jx3box/jx3box-common/js/https";

// 用户查看自己的仓库外观列表
function userStoreList(params) {
    return $cms().get(`/api/cms/pvx/exterior/user/store`, {
        params,
    });
}

// 用户关注最多的外观列表
function starTopList(params) {
    return $cms().get(`/api/cms/pvx/exterior/user/star-top`, {
        params,
    });
}

export { userStoreList, starTopList };
