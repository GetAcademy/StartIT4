<template>
  <div id="app">
    <div class="GridContainer">
      <div class="Menu">
        <div id="Hotline">
          Hotline
        </div>
      </div>
      <div class="Middle">
        <router-view/>
      </div>
      <div class="Bottom">
        <input v-if="this.$router.currentRoute.name == 'Message'" @keydown.enter="AddChat" class="ChatBox" type="text" v-bind="ChatBox"/>
        <button v-if="this.$router.currentRoute.name == 'Message'" class="Send" @click="AddChat">Send</button>
      </div>
    </div>
  </div>
</template>

<style>
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
}

*,* :before, *:after{
  box-sizing: border-box;
  margin:0;
}

#Hotline{
    text-align: center;
    color: #000000;
    text-shadow: 1px 0 0 #FF0000, -1px 0 0 #FF0000, 0 1px 0 #FF0000, 0 -1px 0 #FF0000, 1px 1px #FF0000, -1px -1px 0 #FF0000, 1px -1px 0 #FF0000, -1px 1px 0 #FF0000;
    margin-top:2.5vh;
    font-size:larger;
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
