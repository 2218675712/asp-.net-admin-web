<template>
  <div class="AttendanceList">

    <h2>学生考勤</h2>
    <el-divider></el-divider>
    <div class=" _search">
      <h2>
        搜索条件
      </h2>
      <el-form :inline="true" :model="searchForm" class="searchForm" ref="searchForm">
        <el-form-item label="查询条件:" prop="_search">
          <el-input
            v-model="searchForm._search"
            placeholder="请输入学生姓名、学生学号、教师姓名、教师工号等信息"
            style="width: 500px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="resetForm('searchForm')">重置</el-button>
          <el-button type="primary" @click="Search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table
        :data="tableData.slice((currentPage-1)*PageSize,currentPage*PageSize)"
        style="width: 100%"
        border
      >
        <el-table-column
          prop="StudentName"
          label="学生姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="StudentNum"
          label="学生学号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="ClassName"
          label="学生系别">
        </el-table-column>
        <el-table-column
          prop="Department"
          label="学生班级">
        </el-table-column>
        <el-table-column
          prop="TeacherName"
          label="班主任">
        </el-table-column>
        <el-table-column
          prop="TeacherNum"
          label="班主任工号">
        </el-table-column>s
        <el-table-column
          prop="TrackInformation"
          label="轨迹信息">
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AttendanceList',
  data () {
    return {
      searchForm: {
        _search: ''
      },

      // 总数据
      tableData: [],
      // 默认显示第几页
      currentPage: 1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount: 1,
      // 个数选择器（可修改）
      pageSizes: [2, 4, 10, 20],
      // 默认每页显示的条数（可修改）
      PageSize: 1
    }
  },
  methods: {
    Search () {
      this.getData(10, 1, this.searchForm._search)
    },
    // TODO 校对后台数据
    // 将页码，及每页显示的条数以参数传递提交给后台
    async getData (n1, n2, n3 = '') {
      // 这里使用axios，使用时请提前引入
      const { data: res } = await this.axios.post('AttendanceList/GetAttendanceByList', {
        // 每页显示的条数
        PageSize: n1,
        // 显示第几页
        currentPage: n2,
        // 搜索内容,默认为空
        _search: ''
      })
      this.tableData = res.data
      // 将数据的长度赋值给totalCount
      this.totalCount = res.data.length
    },
    // 分页
    // 每页显示的条数
    handleSizeChange (val) {
      // 改变每页显示的条数
      this.PageSize = val
      // 点击每页显示的条数时，显示第一页
      this.getData(val, 1)
      // 注意：在改变每页显示的条数时，要将页码显示到第一页
      this.currentPage = 1
    },
    // 显示第几页
    handleCurrentChange (val) {
      // 改变默认的页数
      this.currentPage = val
      // 切换页码时，要获取每页显示的条数
      this.getData(this.PageSize, (val) * (this.pageSize))
    },
    // 清空表单
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    // TODO 修改状态
    // 修改学生请假状态
    asyncChangeLeave (state, event) {
      console.log(state, event)
      const { data: res } = this.axios.post('', {
        state,
        event
      })
      if (res.state === 10000) {
        this.$message(res.message)
      }
    }
  },
  created () {
    this.getData(10, 1)
  }
}
</script>

<style scoped lang="less">
.AttendanceList {
  h2 {
    text-align: left;
    font-weight: 400;
  }

  ._search {
    border: 1px solid #dcdfe6;
    background: #ffffff;
    margin-bottom: 50px;

    h2 {
      line-height: 60px;
      padding-left: 50px;
      border-bottom: 1px solid #dcdfe6;
    }

    .searchForm {
      margin-top: 30px;
      margin-left: 50px;
      text-align: left;
    }
  }
}
</style>
