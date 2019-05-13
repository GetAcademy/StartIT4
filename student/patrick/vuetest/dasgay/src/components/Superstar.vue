
<template>
<div>
<h1>Superstar Superduper CookieClicker Best Fucking Cookie Clicker in all of мосцоw</h1>
<clickerbutton @new-count="HandleNewCount"></clickerbutton>
<h1 :style="{textAlign: 'center'}">{{count}}</h1>
</div>
</template>

<script>
import clickerbutton from '@/components/subcomponents/clickerbutton'

export default
{
  data: function (){
    return{
      count: 0,
      RandomColor: [
        'white',
        'black',
        'red',
        'green',
        'blue',
        'purple',
        'gray',
        'pink',
        'yellow'
      ],
    }
  },
  components:
  {
  clickerbutton,
  },
  methods: {
    HandleNewCount(RecievedCount)
    {
      this.count=RecievedCount;
    },
  },
}

</script>

<style>

</style>
