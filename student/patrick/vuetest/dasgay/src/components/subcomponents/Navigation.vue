<template>
  <div>
    <button @click="$router.push(Path)">go to {{Location}}</button>
  </div>
</template>

<script>
export default
{
  props: ['Location'],
  data()
  {
    return {
      Path: '',
    }
  },
  methods: {

  },
  created() {
    if(this.Location == 'Home')
    {
      this.Path = '/';
    }
    else
    {
      this.Path = this.Location;
    }
  },
}
</script>

<style>

</style>
