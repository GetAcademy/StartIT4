<template>
<div class="MessagePageContainer OverflowWindow">
<div id="SideBar" class="SideBar">
            Contact List
</div>

        <div class="MyChat">
        <MyMessage v-for="Chat in Messages" v-bind:key="Chat.Key" v-bind:ChatBox="Chat"></MyMessage>
        </div>

        <div class="YouChat">
        <YouMessage v-for="Chat in Answers" v-bind:Key="Chat.Key" v-bind:Answer="Chat"></YouMessage>
        </div>


</div>
</template>

<script>
import MyMessage from '@/subcomponents/MyMessage'
import YouMessage from '@/subcomponents/YouMessage'

export default {
props:['Messages','Answers'],
data: function () {
  return{
    // MyChats: [],
    // YouChats: [],
    // ChatBox: '',
    // Key: 0,
  }
},
components:
{
  MyMessage,
  YouMessage,
},
methods:
{
  // AddChat: function ()
  // {
  //   this.Key++;
  //   this.MyChats.push({Key: this.Key, Message: this.ChatBox,});
  //   this.Key++;
  //   this.YouChats.push({Key: this.Key, Message: this.RandomAnswer,});
  // }
},
computed:
{
  // RandomAnswer: function ()
  //   {
  //     let i = Math.random();
  //     if (i < 0.1) {
  //         return "nei";
  //     }
  //     else if (i < 0.3 && i > 0.1) {
  //         return "ja"
  //     }
  //     else if (i < 0.5 && i > 0.3) {
  //         return "kansje";
  //     }
  //     else if (i < 0.7 && i > 0.5) {
  //         return "du og meg og vi to sitter i en tresko!!!"
  //     }
  //     else if (i < 0.9 && i > 0.7) {
  //         return "Prepare for trouble! Make it double! To protect the world from devastation! To unite all peoples within our nation! To denounce the evils of truth and love! To extend our reach to the stars above! Jessie! James! Team Rocket blasts off at the speed of light! Surrender now or prepare to fight! Meowth! That's right!"
  //     }
  //     else {
  //         return "jeg forstår ikke hva du sier";
  //     }
  //   },
},
}
</script>

<style>
.MessagePageContainer {
    height:100%;
    max-height:80vh;
    display: grid;
    grid-template-columns: 10% 45% 45%;
    grid-template-rows: auto;
    grid-template-areas: 'SideBar MyChat YouChat';
}

.SideBar
{
    grid-area: SideBar;
    background-color:gray;
    border-radius:5px;
    margin-top:10px;
    margin-bottom:10px;
    border:2px solid darkGray;
}

.MyChat
{
    grid-area: MyChat;
}

.YouChat
{
    grid-area: YouChat;
}


.right
{
    text-align:right;
}

.left
{
    text-align:left;
}

.LeftGrid
{
    display: grid;
    grid-template-columns: 10% 90%;
    grid-template-rows: auto 60px ;
    grid-template-areas:
        'img Text'
        'img time';
}

.RightGrid
{
    display: grid;
    grid-template-columns: 92% 8%;
    grid-template-rows: auto 60px;
    grid-template-areas:
        'Text img'
        'time img';
}

/* Chat containers */
.container
{
    border: 2px solid #dedede;
    background-color: #f1f1f1;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
}

/* Darker chat container */
.darker
{
    border-color: #ccc;
    background-color: #ddd;
}


/* Style images */
.container img
{
    /*float: left;*/
    max-width: 60px;
    width: 100%;
    margin-right: 0px;
    border-radius: 250px;
}

    /* Style the right image */
    .container img.right
    {
        /*float: right;*/
        margin-left: 0px;
        margin-right: 0;
    }

.Text
{
    grid-area:Text;
}

/* Style time text */
.time
{
    grid-area:time;
    color: #aaa;
}

.img
{
    grid-area:img;
}

.OverflowWindow
{
    overflow-y:scroll;
}
</style>
