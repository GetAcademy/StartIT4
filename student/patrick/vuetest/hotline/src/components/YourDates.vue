<template>

<div class="YourBlindDatesGridContainer">
  <div class="BlindLeft">
  </div>
  <div id="YourInnerBlindDatesBody" class="YourInnerBlindDatesBody">

    <YourDate v-for="Date in SavedDates" v-bind:key="Date.Key" v-bind:DateData="Date"></YourDate>

  </div>
  <div class="BlindRight">
  </div>
</div>
</template>

<script>
import YourDate from '@/subcomponents/YourDate'
export default
{
  props:['SavedDates'],
  components:{YourDate,},
  created(){
    console.log('Your Dates Property');
    console.log(this.SavedDates);
  }
}
</script>

<style>
.YourBlindDatesGridContainer {
    display: grid;
    max-height:80vh;
    height: 100%;

    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'BlindLeft YourInnerBlindDatesBody BlindRight';
}

.YourInnerBlindDatesBody {
    grid-area: YourInnerBlindDatesBody;
    border-radius: 20px;
    background: rgba(236, 68, 251, 0.75);
    border: 1px solid #AD00FF;
    text-align: center;
    align-content: center;
    align-items: center;
    align-self: center;
    max-width: 100%;
    max-height: 50vh;
    width: 100%;
    height: 75%;
    overflow-y: auto;
    /*

    */
    display: flex;
    flex-direction: column;
}


</style>
