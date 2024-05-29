import { $node } from "@jx3box/jx3box-common/js/https";

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

export { getExteriorsTypes, getExteriorsList, getExteriorsDetail, getExteriorsPriceTrending };
