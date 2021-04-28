<template>
  <div class="Notice">
    <go-back :title="title"></go-back>
    <div class="prompt">
      <p>{{ NoReadLength }}条未读信息</p>
      <p @click="AllRead">全部已读</p>
    </div>
    <div class="NoticeList">
      <router-link class="NoticeItem" to="" v-for="item in NoticeList" :key="item.ID" >
        <p  @click="Read(item.ID)">{{ item.NewsTitle }} </p>
        <span>{{ item.CreationTime }}</span>
        <b v-show="!item.IsRead">•</b>
      </router-link>
    </div>
  </div>
</template>

<script>
import GoBack from '../../components/GoBack'

export default {
  name: 'Notice',
  components: { GoBack },
  data () {
    return {
      title: '通知',
      NoticeList: []
    }
  },
  methods: {
    /**
     * 设置全部已读
     * @returns {Promise<void>}
     * @constructor
     */
    async AllRead () {
      const { data: res } = await this.axios.post('StudentInformation/GetStudentInformation')
      console.log(res)
      await this.GetNewsList()
    },
    /**
     * 获取通知列表
     * @returns {Promise<void>}
     * @constructor
     */
    async GetNewsList () {
      const { data: res } = await this.axios.post('StudentNews/GetNewsList')
      if (res.data) {
        this.NoticeList = res.data
      }
    },
    /**
     * 设置单条通知已读
     * @returns {Promise<void>}
     * @constructor
     */
    async Read (ID) {
      const { data: res } = await this.axios.post('StudentNews/ChangeStudentNewsList', this.$qs.stringify({ ID }))
      console.log(res)
      await this.GetNewsList()
    }
  },
  computed: {
    /**
     * 计算未读消息数量
     * @returns {number}
     * @constructor
     */
    NoReadLength: function () {
      const NoRead = this.NoticeList.filter(item => {
        return !item.IsRead
      })
      return NoRead.length
    }
  },
  created () {
    this.GetNewsList()
  }
}
</script>

<style scoped lang="less">
.Notice {
  padding: 0 2.67vw;

  .prompt {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p:nth-child(2) {
      color: orange;
    }
  }

  .NoticeList {
    margin-top: 20px;

    .NoticeItem {
      padding: 10px;
      height: 60px;
      border-radius: 10px;
      background: AliceBlue;
      margin: 10px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #323233;
      position: relative;

      p {
        font-size: 16px;
        font-weight: normal;
      }

      b {
        position: absolute;
        right: 20px;
        top: 10px;
        color: orange;
      }
    }
  }
}
</style>
