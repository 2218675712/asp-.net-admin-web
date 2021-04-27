<template>
<div class="MiddleArea">
  <van-cell-group>
    <van-cell title="个人信息" size="large"  icon="manager-o" is-link :to="{name:'ModifyInformation' ,params: { title: '个人信息' }}"/>
    <van-cell title="测试信息"  size="large"  icon="contact" is-link to="index"/>
    <van-cell title="测试信息"  size="large"  icon="contact" is-link to="index"/>
    <van-cell title="测试信息"  size="large"  icon="contact" is-link to="index"/>
  </van-cell-group>

</div>
</template>

<script>
export default {
  name: 'MiddleArea'
}
</script>

<style scoped lang="less">
.MiddleArea{
  margin-top:50px ;
}
</style>
