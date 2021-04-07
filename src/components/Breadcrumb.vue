<template>
  <div class="breadcrumb_ml">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in currentPath" :key="item">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

</template>

<script>
export default {
  name: 'Breadcrumb',
  data () {
    return {}
  },
  props: ['currentPath']
}
</script>

<style scoped lang="less">
</style>
<style  lang="less">
.breadcrumb_ml .el-breadcrumb__item {
  margin-left: 2px !important;
}
</style>
