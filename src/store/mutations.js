/**
 * 直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_SHOP_GOODS,
    RECEIVE_SHOP_INFO,
    RECEIVE_SHOP_RATINGS,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT
} from './mutation-types'
export default {
    [RECEIVE_ADDRESS] (state, {address}) {
        state.address = address
    },
    [RECEIVE_CATEGORYS] (state, {categorys}) {
        state.categorys = categorys
    },
    [RECEIVE_SHOPS] (state, {shops}) {
        state.shops = shops
    },
    [RECEIVE_USER_INFO] (state, {userInfo}) {
        state.userInfo = userInfo
    },
    [RESET_USER_INFO] (state, userInfo) {
        state.userInfo = {}
    },
    [RECEIVE_SHOP_GOODS] (state, {goods}) {
        state.goods = goods
    },
    [RECEIVE_SHOP_RATINGS] (state, {ratings}) {
        state.ratings = ratings
    },
    [RECEIVE_SHOP_INFO] (state, {info}) {
        state.info = info
    },
    [INCREMENT_FOOD_COUNT] (state, {food}) {
        if (food.count) {
            food.count += 1
        } else { // 第一次增加
           // food.count = 1 // 新增属性（没有数据绑定）
           /*
                对象
                属性（应该是字符串不是变量）
                属性值
           */
           Vue.set(food, 'count', 1)
           // 将food添加到cartFoods中
           state.cartFoods.push(food)
        }
    },
    [DECREMENT_FOOD_COUNT] (state, {food}) {
        if (food.count) { // 只有有值才去减
            food.count--
        }
        if (food.count === 0) {
            // 将food从cartFoods中移除
            state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
        }
    }
}
