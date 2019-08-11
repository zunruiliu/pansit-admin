<template>
  <header class="navbar" style="display:flex; background-color:#292961; align-items:center; justify-content: space-between;">

    <span style="color:#292" class="header-title">pansit</span>
    <ul style="color:#fff;" class="header-item">
      <li>项目</li>
      <li>项目</li>
      <li>项目</li>
      <li>项目</li>
    </ul>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img class="user-avatar" src="../../../assets/pansit.png" width="40" height="40">
        <i class="el-icon-caret-bottom" />
      </div>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <el-dropdown-item>
          <span>pansit</span>
        </el-dropdown-item>
        <el-dropdown-item divided>
          <span>用户资料</span>
        </el-dropdown-item>
        <el-dropdown-item divided>
          <span>设置</span>
        </el-dropdown-item>
        <el-dropdown-item divided>
          <span style="display:block;" @click="handleLogout">退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar',
  methods: {
    handleLogout() {
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style scoped>
.header-title{
  display: block;
  padding-left: 20px;
  font-weight: bolder;
  font-size: 35px;
}
.header-item{
  margin-right: 58%;
}
.header-item li{
  display: inline;
  padding: 10px;
  margin-right: 10px
}
.header-item li:hover{
  background: rgb(51, 133, 153);
  cursor: pointer;
}
.avatar-container{
  padding-right: 20px;
}
</style>
