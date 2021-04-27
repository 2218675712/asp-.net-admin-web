<template>
  <div class="HomeMenu">
    <homepage></homepage>
    <div class="middle_menu">
      <van-grid gutter="10">
        <van-grid-item icon="comment-circle" text="健康打卡"/>
        <van-grid-item icon="more" text="课表"/>
        <van-grid-item icon="bell" text="通知"/>
        <van-grid-item icon="photo-o" text="文3"/>
        <van-grid-item icon="photo-o" text="文4"/>
        <van-grid-item icon="photo-o" text="文5"/>
        <van-grid-item icon="photo-o" text="文6"/>
        <van-grid-item icon="photo-o" text="文7"/>
      </van-grid>
    </div>

  </div>
</template>

<script>
import Homepage from '../../components/Homepage'

export default {
  name: 'HomeMenu',
  components: {Homepage},
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
.HomeMenu {
  .middle_menu {
    margin-top: 21.33vw;
  }
}
</style>
