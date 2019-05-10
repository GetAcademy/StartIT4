<template>
  <button @click="count++"><b><span>Cookies</span></b> {{count}} <b><span>Cookies</span></b></button>
</template>

<script>
export default {
data: function ()
{
  return {
    count:0,
  }
}
}
</script>

<style>

</style>
