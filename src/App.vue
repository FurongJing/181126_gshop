<template>
    <div id="app">
        <router-view/>
        <footer-guide v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide'
// import {reqFoodTypes} from './api'
export default {
    mounted () {
        // const result = await reqFoodTypes
        // console.log(result)
        // this.$store.dispatch('getAddress')// 方式一
        this.getAddress()
        this.getUserInfo()
    },
    methods: {
        ...mapActions(['getAddress', 'getUserInfo'])// 方式二
    },
    components: {
        FooterGuide
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .app
        width 100%
        height 100%
        background #f5f5f5
</style>
