<template>
  <section class="nav-sidebar">
    <div class="nav-sidebar-inner-scroll" style="overflow-y: scroll;">
      <el-menu
        :collapse="isCollapse"
        background-color="#2AA780"
        default-active="2"
        text-color="#fff"
        active-text-color="#ffd04b"
        class="el-menu-vertical sidebar-top-level-items"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location" />
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu" />
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting" />
          <span slot="title">导航四</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting" />
          <span slot="title">导航四</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting" />
          <span slot="title">导航四</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting" />
          <span slot="title">导航四</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting" />
          <span slot="title">导航四</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting" />
          <span slot="title">导航四</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting" />
          <span slot="title">导航四</span>
        </el-menu-item>

        <a type="button" title="Toggle sidebar" class="toggle-sidebar-button js-toggle-sidebar" @click="toggleSideBar">
          <i v-if="isCollapse" class="el-icon-s-unfold" />
          <i v-else class="el-icon-s-fold" />
        </a>
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
    </div>

  </section>

</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      isCollapse: false,
      isNotCollapse: true
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

<style scoped>
.nav-sidebar{
    /* transition: width 0.3s, left 0.3s; */
    display: flex;
    position: fixed;
    z-index: 400;
    top: 40px;
    bottom: 0;
    left: 0;
    background-color: #fafafa;
    box-shadow: inset -1px 0 0 #e5e5e5;
    transform: translate3d(0, 0, 0);
}
.nav-sidebar-inner-scroll {
    height: 100%;
    width: 100%;
    overflow: auto;
}

.el-menu-vertical:not(.el-menu--collapse){
  width: 200px;
}

.sidebar-top-level-items{
  margin-bottom: 1px;
}
.toggle-sidebar-button {
    width: 140px;
    transition: width 0.5s;
    position: fixed;
    bottom: 0;
    padding: 16px 0 16px 60px;
    border: 0;
    border-top: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    line-height: 1;
    z-index: 1000;
    background: #e5e5e5;
}
.el-menu {
  height:calc(100% - 16px)
}
</style>
