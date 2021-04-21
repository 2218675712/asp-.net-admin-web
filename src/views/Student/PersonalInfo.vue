<template>
  <div class="PersonalInfo">
    <HeaderInfo></HeaderInfo>
    <MiddleArea></MiddleArea>
<!--    <van-button type="default" plain block class="logout">退出登录</van-button>-->
    <a href="javascript:;" class="logout">退出登录</a>
  </div>
</template>

<script>
import HeaderInfo from '../../components/HeaderInfo'
import MiddleArea from '../../components/MiddleArea'

export default {
  name: 'PersonalInfo',
  components: { MiddleArea, HeaderInfo }
}
</script>
<style scoped lang="less">
.PersonalInfo {

  .logout {
    display: block;
    color: #323233;
    font-weight: 100;
    text-align: center;
    font-size: 4.8vw;
    margin-top: 40vh;
  }
}

</style>
