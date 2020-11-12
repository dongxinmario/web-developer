<template>
  <div id="app">
    <keep-alive exclude="AttractionDetail">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
</style>
