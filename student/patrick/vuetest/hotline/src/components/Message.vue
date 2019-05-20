<template>

</template>

<script>
import MyMessage from '@/subcomponents/MyMessage'
import YouMessage from '@/subcomponents/YouMessage'

export default {
data: function () {
  return{
    MyChat: [],
    YouChat: [],
    ChatBox: '',
  }
},
components:
{
  MyMessage,
  YouMessage,
},
methods:
{
  AddChat: function ()
  {
    this.MyChat.push(this.ChatBox);
    this.YouChat.push(this.RandomAnswer);
  }
},
computed:
{
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
},
}
</script>

<style>

</style>
