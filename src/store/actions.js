/**
 * 通过mutation间接更新state的多个方法的对象
 */
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_SHOP_GOODS,
    RECEIVE_SHOP_RATINGS,
    RECEIVE_SHOP_INFO,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT
} from './mutation-types'
import {
    reqAddress,
    reqFoodCategorys,
    reqShops,
    reqUserInfo,
    reqLogout,
    reqShopGoods,
    reqShopRatings,
    reqShopInfo
} from '../api'
export default {
    // 异步获取地址
    async getAddress ({commit, state}) {
        // 发送异步ajax请求
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        // 提交一个mutation
        if (result.code === 0) {
            const address = result.data
            commit(RECEIVE_ADDRESS, {address})
        }
    },
    // 异步获取食品分类列表
    async getCategorys ({commit}) {
        const result = await reqFoodCategorys()
        if (result.code === 0) {
            const categorys = result.data
            commit(RECEIVE_CATEGORYS, {categorys})
        }
    },
    // 异步获取商家列表
    async getShops ({commit, state}) {
        const {longitude, latitude} = state
        const result = await reqShops(longitude, latitude)
        if (result.code === 0) {
            const shops = result.data
            commit(RECEIVE_SHOPS, {shops})
        }
    },
    // 同步记录用户信息（同步还是异步看手里是否有所需要的数据）
    recordUser ({commit}, userInfo) {
        commit(RECEIVE_USER_INFO, {userInfo})
    },
    // 异步获取用户信息
    async getUserInfo ({commit}) {
        const result = await reqUserInfo()
        if (result.code === 0) {
            const userInfo = result.data
            commit(RECEIVE_USER_INFO, {userInfo})
        }
    },
    // 异步退出登录
    async logout ({commit}) {
        const result = await reqLogout()
        if (result.code === 0) {
            commit(RESET_USER_INFO)
        }
    },
    // 异步获取商品列表
    async getShopGoods ({commit}, callBack) {
        const result = await reqShopGoods()
        if (result.code === 0) {
            const goods = result.data
            commit(RECEIVE_SHOP_GOODS, {goods})
            // 数据更新了，通知一下组件
            callBack && callBack()
        }
    },
    // 异步获取商家评价列表
    async getShopRatings ({commit}) {
        const result = await reqShopRatings()
        if (result.code === 0) {
            const ratings = result.data
            commit(RECEIVE_SHOP_RATINGS, {ratings})
        }
    },
    // 异步获取商家信息
    async getShopInfo ({commit}) {
        const result = await reqShopInfo()
        if (result.code === 0) {
            const info = result.data
            commit(RECEIVE_SHOP_INFO, {info})
        }
    },
    updateFoodCount ({commit}, {isAdd, food}) {
        if (!isAdd) {
            commit(DECREMENT_FOOD_COUNT, {food})
        } else {
            commit(INCREMENT_FOOD_COUNT, {food})
        }
    }
}
