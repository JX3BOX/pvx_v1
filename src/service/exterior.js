import { $node, $cms } from "@jx3box/jx3box-common/js/https";

// 外观类型列表
function getExteriorsTypes() {
    return $node().get(`/api/node/v2/exterior/types`);
}

// 外观列表/搜索
function getExteriorsList(params) {
    return $node().get(`/api/node/v2/exterior/list`, {
        params,
    });
}

// 外观详情
function getExteriorsDetail(id) {
    return $node().get(`/api/node/v2/exterior/${id}`);
}

// 外观价格趋势
function getExteriorsPriceTrending(params) {
    return $node().get(`/api/node/v2/exterior/price-trending`, {
        params,
    });
}

// 用户入库外观
function entWarehouse(params) {
    return $cms().post(`/api/cms/pvx/exterior/user/store`, {
        params,
    });
}

// 用户查看自己关注的外观列表
function exteriorUserStar(params) {
    return $cms().get(`/api/cms/pvx/exterior/user/star`, {
        params,
    });
}

// 用户获取/关注/取消收藏外观
function userStarExterior(type, id, params) {
    return $cms()[type](`/api/cms/pvx/exterior/user/star/${id}`, params);
}

// 获取用户信息
function getMyInfo() {
    return $cms().get(`/api/cms/user/my/info`, {
        params: {
            __no_cache: 1,
        },
    });
}

export {
    getExteriorsTypes,
    getExteriorsList,
    getExteriorsDetail,
    getExteriorsPriceTrending,
    entWarehouse,
    exteriorUserStar,
    userStarExterior,
    getMyInfo,
};
