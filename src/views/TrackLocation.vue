<template>
  <div>
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid='"amap-vue"' :center="mapLocation" :zooms="zooms"></el-amap>
    </div>

    <el-card class="box-card selectStudentOrTeacher">
      <el-switch
        v-model="StudentOrTeacher"
        active-text="教师轨迹"
        inactive-text="学生轨迹">
      </el-switch>
    </el-card>
    <el-card class="box-card formStudentAndTime">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="学生姓名/学号">
          <el-input v-model="form.student"></el-input>
        </el-form-item>
        <el-form-item label="选择时间段">

          <el-date-picker
            v-model="form.date1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" plain icon="el-icon-place" style="margin-left: 18px;"  @click="GetLocationByList">查询历史轨迹</el-button>
          <el-button type="primary" plain icon="el-icon-place" style="margin-right: 18px;" @click="GetLocationByList">
            查询当前定位
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card historyTimeline">
      当前位置{{ place }}
      <el-divider></el-divider>
      <div class="block">
        查询历史轨迹:
        <div class="radio" style="margin-top: 20px;">
          排序：
          <el-radio-group v-model="reverse">
            <el-radio :label="true">倒序</el-radio>
            <el-radio :label="false">正序</el-radio>
          </el-radio-group>
        </div>
        <el-timeline :reverse="reverse" style="width: 120px;margin-left: 150px; margin-top: 20px">
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.Time">
            {{ activity.Locus }}
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-card>
  </div>

</template>

<script>
export default {
  name: 'TrackLocation',
  data () {
    return {
      StudentOrTeacher: false,
      mapLocation: [112.6043, 34.598151],
      zooms: [12, 18],
      form: {
        student: '',
        date1: ''
      },
      place: '教学楼1楼',
      reverse: true,
      activities: []
    }
  },
  methods: {
    async GetLocationByList () {
      if (this.form.student === '') {
        this.$message('学生姓名输入不能为空')
        return
      }
      let url = ''
      if (!this.StudentOrTeacher) {
        url = 'LocationManager/GetTrackLocationByList'
      } else {
        url = 'LocationManager/GetTeacherLocationList'
      }
      const { data: res } = await this.axios.post(url, {
        StudentName: this.form.student
      })
      if (res.code === 10000) {
        this.activities = res.data
      } else if (res.code === 10001) {
        this.$message(res.message)
      }
    }
  }
}
</script>

<style scoped lang="less">
.amap-wrapper {
  width: 500px;
  height: 500px;
}

.selectStudentOrTeacher {
  width: 500px;
  position: fixed;
  right: 100px;
  top: 80px;
}

.formStudentAndTime {
  width: 500px;
  position: fixed;
  right: 100px;
  top: 150px;
}

.historyTimeline {
  width: 500px;
  position: fixed;
  right: 100px;
  top: 400px;
}
</style>
