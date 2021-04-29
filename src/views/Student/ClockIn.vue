<template>
  <div class="ClockIn">
    <go-back :title="title"></go-back>
    <div class="part">
      <div class="timePart">
        <div class="GoWork" v-html="AsbInfo"></div>
        <div class="OffWork" v-html="MsbInfo"></div>
        <div class="ClockPart">
          <button @click="Clock" :disabled="disBtn" :class="disBtn?'buttonDis':''">
            <span class="DK">{{ ClockText }}</span><br>
            <span class="Time">{{ sday }}</span>
          </button>
        </div>
      </div>
      <div class="aaa">
        <van-action-sheet title="选择异常事务" v-model="disBtn" :close-on-click-overlay="false">
          <div class="content">
            <van-form @submit="onSubmit">
              <van-field name="radio" label="补卡/请假">
                <template #input>
                  <van-radio-group v-model="reasonRadio" direction="horizontal">
                    <van-radio name="1">请假</van-radio>
                    <van-radio name="2">补卡</van-radio>
                  </van-radio-group>
                </template>
              </van-field>

              <van-field
                v-model="Details"
                name="请假原因"
                label="请假原因"
                placeholder="请输入请假原因"
                type="textarea"
                maxlength="100"
                show-word-limit
                :autosize="true"
              />

              <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">提交</van-button>
              </div>
            </van-form>
          </div>
        </van-action-sheet>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import GoBack from '../../components/GoBack'
import gcoord from 'gcoord'

export default {
  name: 'ClockIn',
  components: { GoBack },
  data () {
    return {
      // 实时时间
      sday: '',
      // 打卡成功时间
      CheckSuccessfullyTime: '',
      disBtn: false,
      // 打卡范围
      ClockInList: [],
      // 打卡按钮默认显示文字
      ClockText: '打卡',
      // 单选，请假还是补卡
      reasonRadio: 1,
      // 请假或补卡说明
      Details: '',
      AsbInfo: '上班',
      MsbInfo: '下班',
      title: '打卡'
    }
  },
  methods: {
    /**
     * 正常打卡
     * @constructor
     */
    Clock () {
      this.CheckSuccessfullyTime = this.sday
      if ('geolocation' in navigator) {
        const that = this
        /* 地理位置服务可用 */
        navigator.geolocation.getCurrentPosition(async function (position) {
          const WGS84ToGCJ02 = gcoord.transform([position.coords.longitude, position.coords.latitude], gcoord.WGS84, gcoord.GCJ02)
          const { data: res } = await that.axios.get(`https://restapi.amap.com/v3/geocode/regeo?key=cf8a25f617d748d62e5c9380c8e2c934&location=${WGS84ToGCJ02[0]},${WGS84ToGCJ02[1]}`)
          console.log(res)
        })
      } else {
        /* 地理位置服务不可用 */
      }
    },
    /**
     * 异常提交
     * @param values
     */
    onSubmit (values) {
      console.log('submit', values)
    },
    /**
     * 进行返回
     */
    onClickLeft () {
      // this.Toast('返回')
      this.$router.back()
    },
    /**
     * 获取用户信息并进行打卡判断
     * @returns {Promise<void>}
     * @constructor
     */
    async GetInfo () {
      const { data: res } = await this.axios.post('https://www.fastmock.site/mock/afca470367d687b9216ae503f422d27c/dk/api/dk')
      this.ClockInList = res.data
      this.AsbInfo = '上班' + this.ClockInList.Asb.StartTime
      this.MsbInfo = '下班' + this.ClockInList.Msb.StartTime
      this.CheckSuccessfullyTime = dayjs(new Date()).format('HH:mm')
      if (this.CheckSuccessfullyTime > this.ClockInList.Asb.StartTime && this.CheckSuccessfullyTime < this.ClockInList.Asb.EndTime) {
        console.log('符合上班时间')
      } else if (this.CheckSuccessfullyTime > this.ClockInList.Msb.StartTime && this.CheckSuccessfullyTime < this.ClockInList.Msb.EndTime) {
        console.log('符合下班时间')
      } else {
        this.disBtn = true
      }
    }

  },
  created () {
    setInterval(() => {
      this.sday = dayjs().format('HH:mm:ss')
    }, 1000)
    this.GetInfo()
  },
  watch: {
    disBtn: function () {
      if (this.disBtn) {
        this.ClockText = '无法打卡'
      } else {
        this.ClockText = '打卡'
      }
    }
  }
}

</script>

<style scoped lang="less">
.ClockIn {

  .part {
    border-radius: 6.67vw;
    background-color: #f2f4f3;
    height: 106.67vw;
    margin-top: 47vw;
    margin-left: 3.47vw;
    width: 93.33vw;

    .ClockPart {
      position: relative;

      button {
        font-family: "微软雅黑";
        position: absolute;
        border-radius: 133.33vw;
        width: 150px;
        height: 150px;
        background-color: #3497fb;
        border: none;
        bottom: -10.67vw;
        left: 27vw;

        .Time {
          font-size: 16px;
        }

        .DK {
          font-size: 20px;
        }
      }

      .buttonDis {
        background-color: #cccccc;
      }

      padding-top: 75vw;
    }

    .timePart {
      position: relative;

      .GoWork {
        border-radius: 6.67vw;
        position: absolute;
        background-color: white;
        width: 36vw;
        height: 13.33vw;
        text-align: center;
        line-height: 13.33vw;
        left: 6.13vw;
        top: 8vw;
      }

      .OffWork {
        border-radius: 6.67vw;
        text-align: center;
        position: absolute;
        left: 53.33vw;
        top: 8vw;
        background-color: white;
        width: 36vw;
        height: 13.33vw;
        line-height: 13.33vw;
      }
    }

    .content {
      padding: 16px 16px 16px;
    }
  }
}
</style>
