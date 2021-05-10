<template>
  <div class="PersonalInfo">
    <HeaderInfo></HeaderInfo>
    <MiddleArea></MiddleArea>
    <!--    <van-button type="default" plain block class="logout">退出登录</van-button>-->
    <a href="javascript:;" class="logout" @click="logout">退出登录</a>
  </div>
</template>

<script>
import HeaderInfo from '../../components/HeaderInfo'
import MiddleArea from '../../components/MiddleArea'

export default {
  name: 'PersonalInfo',
  components: { MiddleArea, HeaderInfo },
  methods: {
    logout () {
      this.$cookies.remove('Admin_ID')
      this.$cookies.remove('Admin_Password')
      this.$cookies.remove('Admin_Name')
      this.$toast.success('退出登录成功，请重新登录')
      setTimeout(() => {
        this.$router.push('/login')
      }, 500)
    }
  }
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
    margin-top: 30vh;
  }
}

</style>
