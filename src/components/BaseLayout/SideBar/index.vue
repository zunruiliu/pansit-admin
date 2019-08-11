<template>
  <nav style=" background:#009FCC" class="nav-sidebar-inner-scroll">
    <!-- <i class="el-icon-d-arrow-left" @click="isCollapse=!isCollapse" /> -->
    <el-menu
      collapse-transition
      :collapse="isCollapse"
      background-color="#009FCC"
      text-color="#fff"
      active-text-color="#ffd04b"
      class="el-menu-vertical"
      unique-opened
    >
      <router-link to="/table">
        <el-menu-item index="4">
          <i class="el-icon-setting" />
          <span slot="title">列表</span>
        </el-menu-item>
      </router-link>
      <transition>
        <a type="button" title="Toggle sidebar" class="toggle-sidebar-button js-toggle-sidebar" @click="toggleSideBar">
          <i v-if="isCollapse" class="el-icon-s-unfold" />
          <i v-else class="el-icon-s-fold" />
        </a>
      </transition>
      <!-- :class="{ 'toggle-sidebar-button-is':isCollapse, 'toggle-sidebar-button-not':isNotCollapse }" -->
      <!--TODO-->
      <!--侧边栏切换时，图标更换太慢-->
      <!-- el-icon-s-fold
        el-icon-s-unfold -->
      <!-- <a class="toggle-sidebar-button js-toggle-sidebar" role="button" title="Toggle sidebar" type="button">
          <svg class=" icon-angle-double-left"><use xlink:href="/assets/icons-e5f44b728efc09f03f66ea2be427118455d9e4bb01e2105245580a36901d1f7a.svg#angle-double-left" /></svg>
          <svg class=" icon-angle-double-right"><use xlink:href="/assets/icons-e5f44b728efc09f03f66ea2be427118455d9e4bb01e2105245580a36901d1f7a.svg#angle-double-right" /></svg>
          <span class="collapse-text">Collapse sidebar</span>
        </a> -->
    </el-menu>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    toggleSideBar() {
      this.isCollapse = !this.isCollapse
      this.isNotCollapse = !this.isNotCollapse
    }
  }
}
</script>

<style>
.el-menu-vertical:not(.el-menu--collapse){
  width: 200px;
}
.nav-sidebar-inner-scroll{
height: 100%;
    /* width: 100%; */
    overflow: auto;
}
.toggle-sidebar-button {
    width: 144px;
    transition: width 0.5s;
    position: fixed;
    bottom: 0;
    padding: 16px 0 16px 40px;
    border: 0;
    border-top: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    line-height: 1;
    z-index: 1000;
    background: #e5e5e5;
}
</style>
