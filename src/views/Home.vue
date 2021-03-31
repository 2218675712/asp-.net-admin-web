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
              <el-submenu
                :index="item.path+''"
                :key="item.id"
                v-for="item in menuList"
              >
                <template slot="title">
                  <i :class="iconObj[item.id]"/>
                  <span>{{ item.authName }}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item
                    :index="subItem.path"
                    :key="subItem.id"
                    v-for="subItem in item.children"
                  >
                    {{ subItem.authName }}
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-scrollbar>
    </el-aside>
    <!--    主题区-->
    <el-container>
      <!--      主体-->
      <el-main>
        <router-view></router-view>
      </el-main>
      <!--      底部-->
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      // 侧边栏数据
      menuList: [],
      // 侧边栏图标
      iconObj: {
        125: 'el-icon-user',
        103: 'el-icon-coordinate',
        101: 'el-icon-shopping-cart-full',
        102: 'el-icon-document',
        145: 'el-icon-coin'
      },
      isCollapse: false
    }
  },
  created () {
    this.getMenuList()
  },
  // name: 'Home'
  methods: {
    /**
     * 退出登录
     */
    logout () {
      // 销毁本地token
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    /**
     * 获取侧边栏列表
     * @returns {Promise<ElMessageComponent>}
     */
    async getMenuList () {
      /*      const { data: res } = await this.$http.get('menus')
      // 返回错误信息
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menuList = res.data */
    },
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>
.el-header, .el-footer {
  background-color: #DCDFE6;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #F2F6FC;
  color: #333;

  h5 {
    text-align: center;
  }
}

.el-main {
  background-color: #EBEEF5;
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
  /*text-align: center;*/
  font-size: 14px;
}

.el-scrollbar {
  height: 100%;
}
</style>
