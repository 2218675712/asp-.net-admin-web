<template>
  <div class="CheckTimeByClass">
    <!--    提交表单-->
    <h1>考勤日程设置</h1>
    <el-divider></el-divider>
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-radio-group v-model="form.resource">
          <div class="radio1">
            <el-radio label="1">考勤时间模板1</el-radio>
            <el-link type="success" @click="EditDialog('1')">编辑</el-link>
            <el-link @click="ShowDialog('1')">查看</el-link>
          </div>
          <br/>
          <div class="radio2">
            <el-radio label="2">考勤时间模板2</el-radio>
            <el-link type="success" @click="EditDialog('2')">编辑</el-link>
            <el-link @click="ShowDialog('2')">查看</el-link>
          </div>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <el-divider></el-divider>
    <!--考勤时间表选择条件-->
    <div class="AttendanceTime">
      <h1>考勤时间表</h1>
      <span>
        查询条件:
      </span>
      <el-select v-model="value" placeholder="请先选择模板,在选择班级进行查询">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <div class="btn_g">
        <el-button @click="CurriculumList=[]">重置</el-button>
        <el-button type="primary" @click="GetCurriculumList">查询</el-button>
      </div>

    </div>

    <el-divider></el-divider>
    <!--    课程表展示-->
    <el-table
      :data="CurriculumList"
      border
      style="width: 100%">

      <el-table-column
        prop="Schedule"
        label="时间"
        width="180">
        <template slot-scope="scope">
          {{ scope.row.StartTime }}-{{ scope.row.EndTime }}

        </template>
      </el-table-column>
      <el-table-column
        prop="Curriculum1"
        label="星期一"
        width="150">
      </el-table-column>
      <el-table-column
        prop="Curriculum2"
        label="星期二"
        width="150">
      </el-table-column>
      <el-table-column
        prop="Curriculum3"
        label="星期三"
        width="150">
      </el-table-column>
      <el-table-column
        prop="Curriculum4"
        label="星期四"
        width="150">
      </el-table-column>
      <el-table-column
        prop="Curriculum5"
        label="星期五"
        width="150">
      </el-table-column>
      <el-table-column
        prop="Curriculum6"
        label="星期六"
        width="150">
      </el-table-column>
      <el-table-column
        prop="Curriculum7"
        label="星期日"
        width="150">
      </el-table-column>
    </el-table>
    <!--    对话弹出框-->
    <el-dialog title="查看日常表" :visible.sync="dialogTable1">
      <el-table
        :data="scheduleForm"
        border
        style="width: 100%"
      >
        <el-table-column
          label="日程"
          width="150"
          prop="Schedule"
        >
        </el-table-column>
        <el-table-column
          label="起始时间"
          width="260"
          prop="StartTime"
        >
        </el-table-column>
        <el-table-column
          label="结束时间"
          width="260"
          prop="EndTime"
        >
        </el-table-column>
      </el-table>
    </el-dialog>
    <el-dialog title="修改日程表" :visible.sync="dialogTable2" width="910px">
      <el-row>
        <el-button
          type="primary"
          plain icon="el-icon-circle-plus-outline"
          style="margin-left: -750px; margin-bottom: 30px;"
          @click="AddRow">添加新行
        </el-button>
      </el-row>
      <el-table
        :data="scheduleForm"
        border
        style="width: 100%"
      >

        <el-table-column
          type="selection"
          width="50"
        ></el-table-column>
        <el-table-column
          label="序号"
          width="50"
          type="index"
        >
        </el-table-column>
        <el-table-column
          label="日程"
          width="150"
          prop="Schedule"
        >

          <template slot-scope="scope">
            <el-input v-model="scope.row.Schedule"></el-input>
          </template>

        </el-table-column>
        <el-table-column
          label="起始时间"
          width="260"
        >

          <template slot-scope="scope">

            <el-time-select
              v-model="scope.row.StartTime"
              :picker-options="{
    start: '06:30',
    step: '00:15',
    end: '22:30'
  }"
              placeholder="开始时间">
            </el-time-select>

          </template>

        </el-table-column>
        <el-table-column
          label="结束时间"
          width="260"
        >
          <template slot-scope="scope">
            <el-time-select
              v-model="scope.row.EndTime"
              :picker-options="{
    start: '06:30',
    step: '00:15',
    end: '22:30'
  }"
              placeholder="结束时间">
            </el-time-select>
          </template>

        </el-table-column>
        <el-table-column label="删除" width="100">
          <template slot-scope="scope">
            <el-button type="danger" plain @click="DeleteRow(scope.$index)">删除</el-button>
          </template>

        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogTable2 =false">取 消</el-button>
    <el-button type="primary" @click="ChangeSchedule">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'CheckTimeByClass',
  data () {
    return {
      // 1是模板1,2是模板2
      form: {
        resource: '1'
      },
      options: [{
        value: '1',
        label: '1-1班'
      }, {
        value: '2',
        label: '2-1班'
      }],
      // 选中的班级
      value: '',
      // 课程表展示
      CurriculumList: [],
      // 显示日程表是否显示
      dialogTable1: false,
      // 修改日程表是否显示
      dialogTable2: false,
      // 日程表
      scheduleForm: []
    }
  },
  methods: {

    /**
     * 获取要修改的日程表
     *
     */
    async GetScheduleList () {
      const { data: res } = await this.axios.post('ScheduleManager/GetCheckTimeByClass', { ScheduleType: this.form.resource })
      this.scheduleForm = res.data
    },
    /**
     * 修改模态框
     * @param type 是模板1还是2
     * @constructor
     */
    EditDialog (type) {
      this.GetScheduleList()
      this.dialogTable2 = !this.dialogTable2
    },

    /**
     * 展示模态框
     * @param type 是模板1还是2
     * @constructor
     */
    ShowDialog (type) {
      this.GetScheduleList()
      this.dialogTable1 = !this.dialogTable1
    },
    /*
    * 添加行
    * */
    AddRow () {
      // 向表格数组中数据添加一行
      this.scheduleForm.push({
        ScheduleID: this.scheduleForm.length + 1,
        Schedule: '',
        StartTime: '',
        EndTime: '',
        ScheduleType: this.form.resource,
        IsDelete: false
      })
    },
    /**
     *  删除行
     * @param row
     * @constructor
     */
    DeleteRow (row) {
      this.$confirm('此操作将永久删除该行, 是否继续?', '危险', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error'
      }).then(() => {
        const re1 = this.scheduleForm.splice(row, 1)
        console.log(re1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
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
     * 修改日程表进行提交
     * @returns {Promise<void>}
     * @constructor
     */
    async ChangeSchedule () {
      const { data: res } = await this.axios.post('ScheduleManager/ChangeSchedule', this.$qs.stringify({
        ScheduleType: this.form.resource,
        data: JSON.stringify(this.scheduleForm)
      }))
      if (res.code === 10000) {
        this.$message(res.message)
        this.dialogTable2 = false
      } else {
        this.$message(res.message)
      }
    }
  }
}
</script>

<style scoped lang="less">
.CheckTimeByClass {
  h1 {
    font-size: 18px;
    text-align: left;
  }

  .el-form-item {
    text-align: left;

    .radio1, .radio2 {
      margin-bottom: 20px;
      float: left;

      .el-link {
        margin-left: 30px;
        margin-top: -6px;
      }
    }

  }

  .AttendanceTime {
    h1 {
      float: left;
    }

    span {
      float: left;
      font-size: 16px;
      margin-left: 50px;
      margin-top: 5px;
      margin-right: 20px;
    }

    .el-select {
      float: left;
      margin-top: -5px;
      width: 250px;
    }

    .btn_g {
      display: inline-block;
      margin-left: -500px;
      margin-top: -5px;

    }

  }
}

</style>

<style lang="less">
.CheckTimeByClass {

}

</style>
