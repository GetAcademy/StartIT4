<template>
  <div id="app">
    <div class="GridContainer" @ydate="HandleDate">
      <div class="Menu">
        <button v-if="this.$router.currentRoute.name != 'Login' && this.$router.currentRoute.name != 'NewAccount'" class="MenuButton" @click="$router.push('/Settings')">Settings Page</button>
        <button v-if="this.$router.currentRoute.name != 'Login' && this.$router.currentRoute.name != 'NewAccount'" class="MenuButton" @click="$router.push('/Swipe')">Swipe Page</button>
        <div class="Hotline">
          Hotline
        </div>
        <button v-if="this.$router.currentRoute.name != 'Login' && this.$router.currentRoute.name != 'NewAccount'" class="MenuButton" @click="$router.push('/Messages')">Message Page</button>
        <button v-if="this.$router.currentRoute.name != 'Login' && this.$router.currentRoute.name != 'NewAccount'" class="MenuButton" @click="$router.push('/Dates')">Blind Dates</button>
        <button v-if="this.$router.currentRoute.name != 'Login' && this.$router.currentRoute.name != 'NewAccount'" class="MenuButton" @click="$router.push('/YourDates')">Your Blind Dates</button>
      </div>
      <div class="Middle">
        <router-view :SavedDates="YouDate" :Messages="MyChats" :Answers="YouChats"/>
      </div>
      <div class="Bottom">
        <input v-if="this.$router.currentRoute.name == 'Messages'" @keydown.enter="AddChat" type="text" v-model="ChatBox"/>
        <button v-if="this.$router.currentRoute.name == 'Messages'" class="Send" @click="AddChat">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import Messages from '@/components/Messages'
import Date from '@/subcomponents/Date'
export default {
  data: function () {
  return{
    MyChats: [],
    YouChats: [],
    ChatBox: '',
    Key: 0,

    YouDate: [],
  }
},
components:{Messages, Date,},
methods:
{
  AddChat: function ()
  {
    this.Key++;
    this.MyChats.push({Key: this.Key, Message: this.ChatBox,});
    this.Key++;
    this.YouChats.push({Key: this.Key, Message: this.RandomAnswer(),});
  },
  RandomAnswer: function ()
    {
      let i = Math.random();
      if (i < 0.1) {
          return "nei";
      }
      else if (i < 0.3 && i > 0.1) {
          return "ja"
      }
      else if (i < 0.5 && i > 0.3) {
          return "kansje";
      }
      else if (i < 0.7 && i > 0.5) {
          return "du og meg og vi to sitter i en tresko!!!"
      }
      else if (i < 0.9 && i > 0.7) {
          return "Prepare for trouble! Make it double! To protect the world from devastation! To unite all peoples within our nation! To denounce the evils of truth and love! To extend our reach to the stars above! Jessie! James! Team Rocket blasts off at the speed of light! Surrender now or prepare to fight! Meowth! That's right!"
      }
      else {
          return "jeg forstår ikke hva du sier";
      }
    },

    HandleDate(RecievedDate)
    {
			this.YouDates.push(RecievedDate);
    },
},
// computed:
// {

// },
}

</script>


<style>
/* the chat inputs and buttons need a way to get the variables css and html and all to work with router view so that it can function on the messages page */


#app
{
    margin: 0px;
    padding: 0px;
    font-family: Quantico;
}
button
{
    text-shadow: 1px 0 0 #AD00FF, -1px 0 0 #AD00FF, 0 1px 0 #AD00FF, 0 -1px 0 #AD00FF, 1px 1px #AD00FF, -1px -1px 0 #AD00FF, 1px -1px 0 #AD00FF, -1px 1px 0 #AD00FF;
    background: rgba(236, 68, 251, 0.75);
    border: 1px solid #AD00FF;
    border-radius: 20px;
}

*,* :before, *:after{
  box-sizing: border-box;
  margin:0;
}



.GridContainer {
    height: 100vh;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 10vh auto 10vh;
    grid-template-areas: 'Menu' 'Middle' 'Bottom';
    background-image: url('./assets/NeonTigerLarge.jpg');
    background-size:cover;
}
.Menu
{
    grid-area: Menu;
    background: rgba(236, 68, 251, 0.75);
    border: 1px solid #AD00FF;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;


}

.Hotline
{
    /* text-align: center; */
    color: #000000;
    text-shadow: 1px 0 0 #FF0000, -1px 0 0 #FF0000, 0 1px 0 #FF0000, 0 -1px 0 #FF0000, 1px 1px #FF0000, -1px -1px 0 #FF0000, 1px -1px 0 #FF0000, -1px 1px 0 #FF0000;
    /* margin-top:2.5vh; */
    margin-left: 1vw;
    margin-right: 1vw;
    font-size:larger;
}

.MenuButton
{
    margin-left: 2vw;
    margin-right: 2vw;
}

.Middle
{
    grid-area: Middle;
    max-height:100%;
}

.Bottom {
    grid-area: Bottom;
    background: rgba(236, 68, 251, 0.75);
    border: 1px solid #AD00FF;
}
</style>
