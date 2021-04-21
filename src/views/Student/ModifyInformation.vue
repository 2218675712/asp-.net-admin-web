<template>
  <div class="ModifyInformation">
    <div>
      <van-nav-bar
        :title="title"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="under">

    </div>
  </div>

</template>

<script>
export default {
  name: 'ModifyInformation',
  props: ['title'],
  methods: {
    onClickLeft () {
      // this.Toast('返回')
      this.$router.back()
    }
  }
}

</script>

<style scoped>
.ModifyInformation {
  margin-top: 2.67vw;
  border-bottom: #333333;
}
</style>
