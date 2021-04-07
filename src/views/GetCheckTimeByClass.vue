<template>
  <div class="GetCheckTimeByClass">
    <!--    提交表单-->
    <h1>考勤日程设置</h1>
    <el-divider></el-divider>
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-radio-group v-model="form.resource">
          <div class="radio1">
            <el-radio label="1">考勤时间模板1</el-radio>
            <el-link type="success" @click="EditDialog('1')">编辑</el-link>
            <el-link @click="dialogTable1=!dialogTable1">查看</el-link>
          </div>
          <br/>
          <div class="radio2">
            <el-radio label="2">考勤时间模板2</el-radio>
            <el-link type="success" @click="EditDialog('1')">编辑</el-link>
            <el-link @click="dialogTable1=!dialogTable1">查看</el-link>
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
        <el-button>重置</el-button>
        <el-button type="primary">查询</el-button>
      </div>

    </div>

    <el-divider></el-divider>
    <!--    日程表展示-->
    <el-table
      :data="tableData"
      border
      style="width: 100%">

      <el-table-column
        prop="date"
        label="时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="d1"
        label="星期一"
        width="150">
      </el-table-column>
      <el-table-column
        prop="d2"
        label="星期二"
        width="150">
      </el-table-column>
      <el-table-column
        prop="d3"
        label="星期三"
        width="150">
      </el-table-column>
      <el-table-column
        prop="d4"
        label="星期四"
        width="150">
      </el-table-column>
      <el-table-column
        prop="d5"
        label="星期五"
        width="150">
      </el-table-column>
      <el-table-column
        prop="d6"
        label="星期六"
        width="150">
      </el-table-column>
      <el-table-column
        prop="d7"
        label="星期日"
        width="150">
      </el-table-column>
    </el-table>
    <!--    对话弹出框-->
    <el-dialog title="查看日常表" :visible.sync="dialogTable1">

    </el-dialog>
    <el-dialog title="修改日程表" :visible.sync="dialogTable2" width="910px">
      <el-row>
        <el-button
          type="primary"
          plain icon="el-icon-circle-plus-outline"
          style="margin-left: -600px; margin-bottom: 30px;"
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
          prop="ScheduleID"
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
          <el-button type="danger" plain>删除</el-button>

        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogTable2 =false">取 消</el-button>
    <el-button type="primary" @click="dialogTable2 =false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'GetCheckTimeByClass',
  data () {
    return {
      form: {
        resource: '1'
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      tableData: [{
        date: '2016-05-02',
        d1: '语文',
        d2: '数学',
        d3: '英语',
        d4: '科学',
        d5: '地理',
        d6: '历史',
        d7: '生物'
      }],
      dialogTable1: false,
      dialogTable2: false,
      scheduleForm: []
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    /**
     * 获取要修改的日程表
     *
     */
    async GetScheduleList () {
      const { data: res } = await this.axios.post('Schedule/GetScheduleList', { ScheduleType: this.form.resource })
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
    AddRow () {
      // 向表格数组中数据添加一行
      this.scheduleForm.push({
        ScheduleID: this.scheduleForm.length + 1,
        Serial: this.scheduleForm.length + 1,
        Schedule: '',
        StartTime: '',
        EndTime: '',
        ScheduleType: this.form.resource,
        IsDelete: false
      })
    },
    // 删除按钮
    DeleteRow (row) {
      this.scheduleForm.splice(row.index, 1)
    }
  }
}
</script>

<style scoped lang="less">
.GetCheckTimeByClass {
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
.GetCheckTimeByClass {

}

</style>
