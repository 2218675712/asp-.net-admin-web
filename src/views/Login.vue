<template>
  <div class="login_box">
    <el-form ref="loginForm" :model="formLabelAlign" :rules="loginRules" class="login-form">
      <el-form-item>
        <h1>智慧校园后台管理系统</h1>
      </el-form-item>
      <el-form-item prop="username">
        <el-input
          v-model="formLabelAlign.username"
          placeholder="Username"
          prefix-icon="el-icon-user-solid"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="formLabelAlign.password"
          placeholder="Password"
          show-password
          prefix-icon="el-icon-lock"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="btn_login" @click="login('loginForm')">登录</el-button>

      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import '../assets/js/rem'
export default {
  name: 'Login',
  data () {
    return {
      formLabelAlign: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        },
        {
          min: 4,
          max: 18,
          message: '长度在 4 到 18 个字符',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        },
        {
          min: 6,
          max: 12,
          message: '长度在 6 到 12 个字符',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    /**
     * 登录功能
     */
    login (formName) {
      this.$refs[formName].validate(async (valid) => {
        // 如果为空不提交
        if (!valid) return false
        // 获取请求数据
        const { data: res } = await this.axios.post('login/GetLoginByPhone', {
          Account: this.formLabelAlign.username,
          Password: this.formLabelAlign.password
        })
        console.log(res)
        if (res.code === 10000) {
          this.$message.success(res.message)
          if (res.returnType === 1) {
            setTimeout(() => {
              this.$router.push('/GetTrackLocationByList')
            }, 1000)
          } else if (res.returnType === 2) {
            setTimeout(() => {
              this.$router.push('/Student')
            }, 1000)
          }
        } else if (res.code === 10001) {
          this.$message.error(res.message)
        }
      })
    },
    /**
     * 重置表单功能
     * @param formName  参数
     */
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped lang="less">
.login_box {
  width: 100vw;
  height: 100vh;
  background-color: #2D3A4B;

  .login-form {

    width: 5rem;
    border-radius: 4px;
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
  }

  .login-form .el-form {
    width: 100%;
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
  }

  .el-form h1 {
    text-align: center;
    color: #FFFFFF;
  }

  .btn_login {
    width: 100%;
  }

}
</style>
<style lang="less">
.login_box{

  .el-input__inner {
    background-color: #283443;
  }
}
</style>
