<template>
<div>
  <div>
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
  <el-table
    :data="CurriculumList"
    border
    style="width: 100%">

    <el-table-column
      prop="Schedule"
      label="时间"
      width="60">
      <template slot-scope="scope">
        {{ scope.row.StartTime }}-{{ scope.row.EndTime }}

      </template>
    </el-table-column>
    <el-table-column
      prop="Curriculum1"
      label="星期一"
      width="70">
    </el-table-column>
    <el-table-column
      prop="Curriculum2"
      label="星期二"
      width="70">
    </el-table-column>
    <el-table-column
      prop="Curriculum3"
      label="星期三"
      width="70">
    </el-table-column>
    <el-table-column
      prop="Curriculum4"
      label="星期四"
      width="70">
    </el-table-column>
    <el-table-column
      prop="Curriculum5"
      label="星期五"
      width="70">
    </el-table-column>
    <el-table-column
      prop="Curriculum6"
      label="星期六"
      width="70">
    </el-table-column>
    <el-table-column
      prop="Curriculum7"
      label="星期日"
      width="70">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  name: 'SchoolTimetable',
  data () {
    return {
      // 课程表展示
      CurriculumList: [],
      title: '课表'
    }
  },
  methods: {
    /**
     * 获取课程表
     * @returns {Promise<void>}
     * @constructor
     */
    async GetCurriculumList () {
      const { data: res } = await this.axios.post('CurriculumList/GetCurriculumList')
      this.CurriculumList = res.data
    },
    /**
     * 返回按钮
     */
    onClickLeft () {
      // this.Toast('返回')
      this.$router.back()
    }
  },
  created () {
    this.GetCurriculumList()
  }
}
</script>

<style scoped>

</style>
