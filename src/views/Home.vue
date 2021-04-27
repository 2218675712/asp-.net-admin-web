<template>
  <el-container class="home_box">
    <!--    侧边栏-->
    <el-aside :width="isCollapse?'65px':'200px'">
      <el-scrollbar>
        <el-row class="tac">
          <el-col :span="24">
            <el-button
              class="toggle-button el-icon-s-fold"
              @click="toggleCollapse"
            />
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              :collapse="isCollapse"
              :collapse-transition="false"
              router

            >
              <template v-for="item in menuList">
                <el-submenu
                  :index="item.MenuMethod"
                  :key="item.MenuID"
                  v-if="item.ChildLists.length"
                >
                  <template slot="title">
                    <span>{{ item.MenuText }}</span>
                  </template>

                  <el-menu-item-group>
                    <el-menu-item
                      :index="subItem.MenuMethod"
                      :key="subItem.MenuID"
                      v-for="subItem in item.ChildLists"
                      @click="getBreadList"
                    >
                      {{ subItem.MenuText }}
                    </el-menu-item>
                  </el-menu-item-group>

                </el-submenu>
                <el-menu-item v-else :index="item.MenuMethod" :key="item.MenuID" @click="getBreadList">
                  {{ item.MenuText }}
                </el-menu-item>
              </template>
            </el-menu>
          </el-col>
        </el-row>
      </el-scrollbar>
    </el-aside>
    <!--    主题区-->
    <el-container>
      <!--      头部-->
      <el-header>
        <!--        Header-->
        <div>
          <Breadcrumb :current-path="breads"></Breadcrumb>
        </div>
        <el-row>
          <el-dropdown>
            <span class="el-dropdown-link ">
           <el-avatar shape="square" size="medium"
                      src="https://en.gravatar.com/userimage/150559412/fe90eb84b829e28765b0f81e535f8c15.jpg"
                      class="avatar"
           ></el-avatar>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <el-button @click="logout" type="text" class="logout">
                  退出登录
                </el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-header>

      <!--      主体-->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb'

export default {
  components: { Breadcrumb },
  data () {
    return {
      // 侧边栏数据
      menuList: [],
      isCollapse: false,
      breads: []
    }
  },
  created () {
    this.getMenuList()
  },
  // student: 'Home'
  methods: {
    /**
     * 退出登录
     */
    logout () {
      // 销毁本地cookie
      this.$cookies.remove('Admin_ID')
      this.$cookies.remove('Admin_Password')
      this.$cookies.remove('Admin_Name')
      this.$router.push('/login')
    },
    /**
     * 获取侧边栏列表
     * @returns {Promise<ElMessageComponent>}
     */
    async getMenuList () {
      const { data: res } = await this.axios.post('HomePage/GetMenuByList')
      this.menuList = res.data
      // 返回错误信息
      if (res.code !== 10000) return this.$message.error(res.message)
      // const result = res.data
    },
    /**
     * 切换侧边栏
     */
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },

    getBreadList (event) {
      this.breads = [event.$el.innerText]
      console.log([event.$el.innerText])
    }
  }

}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
  border-bottom: 1px solid #dcdfe6;

  .avatar {
    margin-top: 25px;
    margin-right: 45px;
  }

  .An {
    border: none;
    font-size: 10px;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #333333;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
}

.el-aside {
  background-color: #F2F6FC;
  color: #333;
  height: 100vh;
  transition: all 0.3s;

  h5 {
    text-align: center;
  }
}

.el-main {
  //background-color: #EBEEF5;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
  height: 100%;
}

.home_box {
  height: 100%;
}

.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    margin-left: 30px;

    span {
      margin-left: 30px;
      font-weight: 700;
    }

    img {
      width: 60px;
    }
  }
}

.toggle-button {
  width: 100%;
  font-size: 14px;
}

.el-scrollbar {
  height: 100%;
}

.logout {
  color: #606266;
}
</style>
<style lang="less">
.el-scrollbar__wrap::-webkit-scrollbar {
  width: 0 !important
}

</style>
