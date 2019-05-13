
<template>
<div>
<h1>Superstar Superduper CookieClicker Best Fucking Cookie Clicker in all of мосцоw</h1>
<clickerbutton @new-count="HandleNewCount"></clickerbutton>
<h1 :style="{textAlign: 'center', color: CurrentColor, textShadow: '-1px -1px -1px black'}">{{count}}</h1>
<Navigation Location="Home"></Navigation>
</div>
</template>

<script>
import clickerbutton from '@/components/subcomponents/clickerbutton'
import Navigation from '@/components/subcomponents/Navigation'

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
      CurrentColor: 'white',
      Place: 'HelloWorld',
    }
  },
  components:
  {
  clickerbutton,
  Navigation,
  },
  methods: {
    RandomNumber( min, max )
            {
                return Math.floor( Math.random() * ( max - min ) + min )
            },
    HandleNewCount(RecievedCount)
    {
      this.count=RecievedCount;
      this.CurrentColor = this.RandomColor[this.RandomNumber(0,this.RandomColor.length)];
    },
  },
}

</script>

<style>

</style>
