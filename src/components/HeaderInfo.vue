<template>
  <div class="HeaderInfo">
    <div class="LeftContent">
      <div>
        <van-image
          round
          width="13.33vw"
          height="13.33vw"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
    </div>
    <div class="RightContent">
      <div class="Info">
        <p>范吉祥</p>
        <span>1564864354</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderInfo'
}
</script>

<style scoped lang="less">
.HeaderInfo {
  display: flex;
  margin-top: 5.33vw;
  border-bottom: 1px solid #ebedf0;
  padding-bottom: 15px;
  .LeftContent {
    margin-left: 5.33vw;
    flex: 1;
  }

  .RightContent {
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    .Info{
      p{
        font-size: 4.27vw;
        font-weight: 600;
      }

    }
  }
}
</style>
