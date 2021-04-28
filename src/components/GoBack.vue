<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
export default {
  name: 'GoBack',
  props: ['title'],
  methods: {
    /**
     * 返回按钮
     */
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>

</style>
