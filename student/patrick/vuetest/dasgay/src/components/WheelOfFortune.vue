<template>
  <div>
    <h1>Wheel of Fortune</h1>
    <h2> Win a Car</h2>
    <span>You Won {{Car}}</span>
    <RandomCar @FetchCar="GeneratePrize"></RandomCar>
  </div>
</template>

<script>
import RandomCar from '@/components/subcomponents/RandomCar'
export default
{
  components:
  {
    RandomCar,
  },
  data(){
    return{
      Car: '',
    }
  },
  methods: {
    GeneratePrize(prize)
    {
      this.Car = prize;
    },
  },
}
</script>

<style>

</style>
