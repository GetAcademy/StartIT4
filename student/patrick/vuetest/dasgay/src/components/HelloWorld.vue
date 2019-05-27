<template>
  <div :style="{marginLeft: '10vw'}">
    <div><h2>VinLotto</h2></div>
    <table :style="{display: 'block', backgroundColor: CurrentColor}">
        <tr><th>personer</th></tr>
        <tr v-for="person in Personer" v-bind:key="person.id"><td v-html="person.Navn"></td> <td> <button @click="DeletePerson(person)">X</button> </td></tr>
        <tr> <td> <input type="text" v-model="InputText"/> </td> <td> <button @click="AddPerson">Add Person</button> </td> </tr>
        <tr> <td> <input type="number" v-model="InputNumber" /> </td> <td> <button @click="TrekkVinnere"> Trekk <span v-html="InputNumber"></span> Vinnere </button> </td> </tr>
        <tr> <th> Vinnere </th> </tr>
        <tr v-for="vinner in Vinnere" v-bind:key="vinner.id"> <td> {{vinner.Navn}} vant en liter hjemmebrent! </td> </tr>
    </table>
    <br/><button @click="ChangeColor">click me</button>

    <!-- <br/><button @click="$router.push('Superstar')">go to superstar</button> -->

    <br/><Navigation Location="Superstar"></Navigation>
    <br/><Navigation Location="WheelOfFortune"></Navigation>
  </div>
</template>

<script>
import Navigation from '@/components/subcomponents/Navigation'
export default {
  name: 'Start',
  components:
  {
    Navigation,
  },
  data ()
  {
    return {
      InputText: '',
      InputNumber: 0,
      CurrentColor: 'white',
      Personer:
      [

      ],
      Vinnere:
      [

      ],
      IDcount: 0,
    }
  },
  methods:
  {
    ChangeColor: function ()
    {
      if(this.CurrentColor == 'white')
      {
        this.CurrentColor = 'red';
      }
      else if(this.CurrentColor == 'red')
      {
        this.CurrentColor = 'blue';
      }
      else
      {
        this.CurrentColor = 'red';
      }
    },
    AddPerson: function ()
    {
      this.IDcount++;
      this.Personer.push({id: this.IDcount, Navn: this.InputText});
    },
    DeletePerson: function (person)
    {
      for(let i = 0; i < this.Personer.length; i++)
      {
        if(this.Personer[i] == person)
        {
          this.Personer.splice(i,1);
        }
      }
    },
    TrekkVinnere: function ()
    {
      if(this.InputNumber < 1)
      {
        alert("You cant draw 0 Winners that makes no fucking sense!");
        return false;
      }
      if(this.InputNumber > this.Personer.length)
      {
        alert("You cant draw more Winners than the amount of existing contestants, did you intend to add more people?");
        return false;
      }
      for(let i = 0; i < this.InputNumber; i++)
      {
        let Index = this.RandomNumber(0,this.Personer.length);
        let Winner = this.Personer[Index];
        this.Vinnere.push(Winner);
        this.Personer.splice(Index,1);
      }
    },
    RandomNumber: function ( min, max )
            {
                return Math.floor( Math.random() * ( max - min ) + min )
            },
  },
}
</script>

<style scoped>

</style>
