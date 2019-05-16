<template>
  <button @click="Count"><b><span>Cookies</span></b> {{count}} <b><span>Cookies</span></b></button>
</template>

<script>
export default {
data: function ()
{
  return {
    count:0,
  }
},
methods: {
  Count: function ()
  {
    this.count++;
    this.$emit('new-count', this.count);
  }
}
}
</script>

<style>

</style>
