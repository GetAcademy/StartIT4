<template>
  <div>
    <button @click="GetCar()">Get Car</button>
  </div>
</template>

<script>
export default
{
  data(){
    return {
      Cars:
      [
        'A Bentley',
        'A Porche',
        'A Tank',
        'A Van',
        'An Ice Cream Truck',
        'A Caddy'
      ],
    }
  },
  methods:
  {
     RandomNumber( min, max )
            {
                return Math.floor( Math.random() * ( max - min ) + min )
            },
    GetCar()
    {
      this.$emit('FetchCar', this.Cars[this.RandomNumber(0,this.Cars.length)]);
    },
  },
}
</script>

<style>

</style>
