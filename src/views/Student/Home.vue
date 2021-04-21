<template>
  <div class="Home">
    <Nav :active="active"></Nav>
    <div class="main">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from '../../components/Nav'
export default {
  name: 'Home',
  components: { Nav },
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style scoped lang="less">
.nav{
  //width: 100vw;
  //height: 13.33vw;
}
.main{
  //width: 100vw;
  //height: 80vh;
}
</style>
