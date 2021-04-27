<template>
  <van-tabbar v-model="active1" class="nav">
    <van-tabbar-item icon="wap-home-o" to="/HomeMenu">首页</van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="user-circle-o" replace to="/PersonalInfo">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  props: ['active'],
  name: 'Nav',
  data () {
    return {
      active1: this.active
    }
  }
}
</script>

<style scoped lang="less">
.nav {
  //width: 375px;
  //height: 50px;
}
</style>
