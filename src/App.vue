<template>
  <div id="app">
    <router-view/>
    <Vfooter></Vfooter>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vfooter from './components/footer/footer'
  export default {
    components: {
      Vfooter
    }
  }
</script>

<style>

</style>
