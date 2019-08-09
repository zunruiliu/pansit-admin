<template>
  <div>
    <pHeaderBar />
    <pSideBar />
    <pAppMain />
  </div>
</template>

<script>
import pSideBar from '@/components/BaseLayout/SideBar'
import pHeaderBar from '@/components/BaseLayout/HeaderBar'
import pAppMain from '@/components/BaseLayout/AppMain'
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
