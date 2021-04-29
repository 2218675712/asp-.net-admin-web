<template>
  <div class="ModifyInformation">
    <div>
      <van-nav-bar
        :title="title"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="under">
      <van-form @submit="onSubmit">
        <van-field name="uploader">
          <template #input>
            <van-uploader v-model="imgUrl" :max-count="1" :after-read="afterRead">
              <van-image
                width="50"
                height="50"
                :src='require("../../assets/img/default_img.jpg")'
              />
            </van-uploader>
          </template>
          <template #label>
            <label style="line-height: 13.33vw">头像</label>
          </template>
        </van-field>
        <van-field
          v-model="username"
          name="昵称"
          label="昵称"
          placeholder="昵称"
          :rules="[{ required: true, message: '请填写昵称' }]"
        />
        <van-field
          v-model="Education"
          name="学历"
          label="学历"
          placeholder="学历"
          readonly
        />
        <van-field
          v-model="EducationalSystem"
          name="学制"
          label="学制"
          placeholder="学制"
          readonly
        />
        <div v-show="!changePwd">
          <van-cell-group>
            <van-field label="修改密码" value="******" readonly @click="showPassword"/>
          </van-cell-group>
        </div>
        <div v-show="changePwd">
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写新密码' }]"
          />
          <van-field
            v-model="confirmPassword"
            type="password"
            name="确认密码"
            label="确认密码"
            placeholder="请确认密码"
            :rules="[{ required: true, message: '请确认密码' },{required: true, message: '请确认密码是否一致',validator :confirmPasswordFn}]"
          />
        </div>

        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModifyInformation',

  data () {
    return {
      username: '',
      password: '******',
      confirmPassword: '******',
      changePwd: false,
      Education: '',
      EducationalSystem: '',
      imgUrl: [],
      sendImgUrl: '',
      title: this.$route.params.title
    }
  },
  methods: {

    /**
     * 图片上传
     * @param file  图片
     * @returns {Promise<void>}
     */
    async afterRead (file) {
      // 此时可以自行将文件上传至服务器
      const fromdata = new FormData()
      fromdata.append('file', file.content)
      // console.log(file)
      // console.log(fromdata)
      // 上传到文件服务器
      const res = await this.$http.post('StudentInformation/BasetoImage', fromdata)

      if (res.data.data !== '') {
        this.sendImgUrl = res.data.data
      }
      // 重新获取图片
      // this.model.user_img = res.data.data
      // this.userUpdate()
    },
    /**
     * 返回按钮
     */
    onClickLeft () {
      // this.Toast('返回')
      this.$router.back()
    },
    /**
     * 确认密码
     * @returns {boolean}
     */
    confirmPasswordFn () {
      if (this.password === this.confirmPassword) {
        return true
      }
      return false
    },
    /**
     * 获取用户信息
     * @returns {Promise<void>}
     * @constructor
     */
    async GetStudentInformation () {
      const { data: res } = await this.axios.post('StudentInformation/GetStudentInformation')
      this.username = res.data[0].StudentName
      this.Education = res.data[0].Education
      this.EducationalSystem = res.data[0].EducationalSystem
    },
    /**
     *  提交修改
     * @param values
     * @returns {Promise<void>}
     */
    async onSubmit (values) {
      if (this.password === '******' || this.confirmPassword === '******') {
        this.password = ''
        this.confirmPassword = ''
      }
      const { data: res } = await this.axios.post('StudentInformation/ChangeStudentInfomation', this.$qs.stringify({
        data: JSON.stringify({
          StudentName: this.username,
          StudentPwd: this.password,
          StudentPhotoUrl: this.sendImgUrl
        })
      }))
      console.log(res)
    },
    /**
     * 修改密码
     */
    showPassword () {
      this.password = ''
      this.confirmPassword = ''
      this.changePwd = true
    }
  },

  created () {
    this.GetStudentInformation()
  }
}

</script>
<style scoped lang="less">
.ModifyInformation {
  margin-top: 2.67vw;
  border-bottom: #333333;
}

.under {
  .van-cell__title van-field__label {
    span {
      line-height: 13.33vw;
    }
  }
}
</style>
