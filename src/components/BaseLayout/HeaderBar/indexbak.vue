<template>
  <header class="header-container navbar navbar-gitlab qa-navbar navbar-expand-sm">
    <div class="container-fluid">
      <div class="header-content">
        <div class="title-container">
          <h1>
            <span style="color:#292">sit</span>
          </h1>
          <el-menu
            class="list-unstyled navbar-sub-nav"
            background-color="#292961"
            text-color="#fff"
          >
            <el-menu-item>
              项目
            </el-menu-item>
            <el-menu-item>
              <a class="dashboard-shortcuts-activity" title="活动" href="/dashboard/activity">活动
              </a>
            </el-menu-item>
            <el-menu-item>
              <a class="dashboard-shortcuts-activity" title="活动" href="/dashboard/activity">里程碑
              </a>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="navbar-collapse collapse">
          <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
              <img class="user-avatar" src="../../../assets/pansit.png" width="40" height="40">
              <i class="el-icon-caret-bottom" />
            </div>
            <el-dropdown-menu slot="dropdown" class="user-dropdown">
              <el-dropdown-item>
                <span>刘尊瑞</span>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <span>用户资料</span>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <span>设置</span>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <span style="display:block;">退出</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar'
}
</script>

<style scoped>
.navbar{
    padding: 0 16px;
    z-index: 1000;
    margin-bottom: 0;
    min-height: 40px;
    border: 0;
    border-bottom: 1px solid #e5e5e5;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-radius: 0;
    background-color: #292961;
}
.navbar .header-content{
    width: 100%;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    position: relative;
    min-height: 40px;
    padding-left: 0;
}

.navbar .header-content .title-container{
  display: -webkit-flex;
    display: flex;
    -webkit-align-items: stretch;
    align-items: stretch;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    padding-top: 0;
    overflow: visible;
}
.navbar .header-content .title {
    padding-right: 0;
    color: currentColor;
    display: -webkit-flex;
    display: flex;
    position: relative;
    margin: 0;
    font-size: 18px;
    vertical-align: top;
    white-space: nowrap;
    }
.navbar-sub-nav {
    display: -webkit-flex;
    display: flex;
    margin: 0 0 0 6px;
}
.list-unstyled {
    padding-left: 20px;
    list-style: none;
}
.dropdown {
    position: relative;
}
*, *::before, *::after {
    box-sizing: border-box;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
.navbar .navbar-collapse {
    flex: 0 0 auto;
    border-top: 0;
    padding: 0;
}

.navbar-expand-sm .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
}
.collapse:not(.show) {
    display: none;
}

.navbar-collapse {
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
}

.navbar-nav {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
.nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    }
.el-menu{
  background: #292961 !important;
}
.el-menu-item{
  color: #ffffff !important;
}
.el-menu-item a{
  color: #ffffff !important;
  text-decoration:none
}
.el-menu-item a :hover {
  color: #ffffff !important;
  text-decoration:none;
  background: red !important;
}
</style>
