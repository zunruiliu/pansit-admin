<template>
  <div>
    <pHeaderBar />
    <section style="height:calc(100vh - 48px); display:flex;" class="main-container">
      <pSideBar />
      <pAppMain />
    </section>
  </div>
</template>

<script>
import pSideBar from '@/components/BaseLayout/SideBar'
import pAppMain from '@/components/BaseLayout/AppMain'
import pHeaderBar from '@/components/BaseLayout/HeaderBar'

export default {
  components: {
    pHeaderBar,
    pSideBar,
    pAppMain
  }
}
</script>

<style>
</style>
