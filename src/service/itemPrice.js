import { $next } from "@jx3box/jx3box-common/js/https";

/**
 * 获取物品价格详细信息
 * @param {
 *          Object:
 *              itemIds:number &
 *              server:string
 *        } query 可以是单个物品id，也可以是用,分割的id列表
 * @returns {list | single | none}
 * @example
 * query:{
 *     itemIds: "1",
 *     server: "乾坤一掷"
 * }
 * query:{
 *     itemIds: "1,2",
 *     server: "唯我独尊"
 * }
 * @author blank <br/>psyduck <1241280257@qq.com> | mailto:1241280257@qq.com
 */
function getItemPriceList(query){
    return $next()
        .get("/api/item-price/list",{
            params: query
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        })

}

/**
 * 获取物品价格最低五个区服
 * @param {number} itemId 单个物品id
 * @returns {List | none}
 * @example
 * itemId:1
 * @author blank <br/>psyduck <1241280257@qq.com> | mailto:1241280257@qq.com
 */
function getItemPriceLowestFive(itemId){
    return $next()
        .get("api/item-price/" + itemId + "/servers/logs")
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        })
}

/**
 * 获取物品价格最低五个区服
 * @param {number} itemId 单个物品id
 * @param {string} serverName 服务器名称
 * @returns {List | none}
 * @example
 * itemId:1
 * serverName: "唯我独尊"
 * @author blank <br/>psyduck <1241280257@qq.com> | mailto:1241280257@qq.com
 */
function getItemPriceListByServer(itemId, serverName){
    return $next()
        .get("api/item-price/" + itemId + "/servers/logs",{
            server: serverName
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        })
}

export {getItemPriceList, getItemPriceLowestFive, getItemPriceListByServer};
