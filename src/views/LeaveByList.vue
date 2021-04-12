<template>
  <div class="LeaveByList">

    <h2>学生请假审批</h2>
    <el-divider></el-divider>
    <div class=" _search">
      <h2>
        搜索条件
      </h2>
      <el-form :inline="true" :model="searchForm" class="searchForm">
        <el-form-item label="查询条件:">
          <el-input
            v-model="searchForm._search"
            placeholder="请输入学生姓名、学生学号、教师姓名、教师工号等信息"
            style="width: 500px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button>重置</el-button>
          <el-button type="primary" @click="Search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table
        :data="tableData"
        style="width: 100%"
        border
      >
        <el-table-column
          prop="t1"
          label="请假学生姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="t2"
          label="请假学生学号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="t3"
          label="请假学生系别">
        </el-table-column>
        <el-table-column
          prop="t4"
          label="请假学生年级">
        </el-table-column>
        <el-table-column
          prop="t5"
          label="请假学生班级">
        </el-table-column>
        <el-table-column
          prop="t6"
          label="请假事由">
        </el-table-column>
        <el-table-column
          prop="t7"
          label="请假状态">
        </el-table-column>
        <el-table-column
          prop="t8"
          label="请假事由">
        </el-table-column>
        <el-table-column
          prop="t9"
          label="任课教师">
        </el-table-column>
        <el-table-column
          prop="t10"
          label="任课教师工号">
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[5, 10, 20, 50]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeaveByList',
  data () {
    return {
      searchForm: {
        _search: ''
      },
      tableData: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  methods: {
    Search () {
      const { data: res } = this.axios.post('', this.tableData)
      console.log(res)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style scoped lang="less">
.LeaveByList {
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
