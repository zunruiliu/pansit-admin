<template>
  <section class="content-wrapper">
    <div class="alert-wrapper">
      <!--面包屑-->
      <nav class="breadcrumbs container-fluid container-limited limit-container-width">
        <div class="breadcrumbs-container">
          <div class="breadcrumbs-links js-title-container" />
        </div>
      </nav>
    </div>
    <div class=" limit-container-width">
      <div class="content">

        <transition name="fade" mode="out-in">
          你好
        </transition>
      </div>
    </div>
  </section>
</template>
<script>
export default {

}
</script>

<style scoped>
  .content-wrapper {
    width: calc(100% - 230px);
    transition:  width 0.3s, left 0.3s;
    margin-top: 80px;
    padding-bottom: 100px;
    margin-left: 230px;
}
.content-wrapper .container-fluid {
    padding: 0 16px;
}
.container-limited.limit-container-width {
    max-width: 990px;
}
.breadcrumbs-container {
    display: -webkit-flex;
    display: flex;
    width: 100%;
    position: relative;
    padding-top: 8px;
    padding-bottom: 8px;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
}
/* .content{
  min-height: calc(100vh);
    position: relative;
    overflow: hidden;
} */
</style>
