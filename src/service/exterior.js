import { $node } from "@jx3box/jx3box-common/js/https";

// 外观类型列表
function getExteriorsTypes() {
    return $node().get(`/api/node/v2/exterior/types`);
}

// 外观列表/搜索
function getExteriorsList() {
    return $node().get(`/api/node/v2/exterior/list`);
}

export { getExteriorsTypes, getExteriorsList };
