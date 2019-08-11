<template>
  <div class="login-container">
    <section class="login-form">
      <span>登录</span>
      <el-form label-position="right" label-width="80px">
        <el-form-item label="用户名">
          <el-input placeholder="请输入用户名" style="width: 200px" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input placeholder="请输入密码" style="width: 200px" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 200px" @click="handleLogin">login</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {

    }
  },
  methods: {
    handleLogin() {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.login-container{
  height: calc(100vh);
  width: 100%;
  /* background: url('../../../static/img/login-bg.jpg') */
  background: #486848
}
.login-container .login-form{
  background: #FFF;
  position: fixed;
  margin: 10% 2% 30% 60%;
  width: 25%;
  height: 200px;
  padding: 50px;
  border-radius: 10px;
}
</style>
