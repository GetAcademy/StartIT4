<template>
        <div class="container darker RightGrid">
        <img class="img right" src="https://s3-eu-central-1.amazonaws.com/workaround-production/wp-content/uploads/2018/03/28152123/avatar-user-hacker-3830b32ad9e0802c-512x512.png" alt="Avatar">
        <p class="Text right">{{Answer.Message}}</p>
        <span class="time right">{{Timestamp}}</span>
        </div>
</template>

<script>
export default
{
  props:['Answer'],
  computed:
  {
    Timestamp: function ()
    {
      new Date().getHours() + ":" + new Date().getMinutes();
    },
  },
}
</script>

<style>
.right
{
    text-align:right;
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
.container
{
    border: 2px solid #dedede;
    background-color: #f1f1f1;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
}
.darker
{
    border-color: #ccc;
    background-color: #ddd;
}
.container img
{
    /*float: left;*/
    max-width: 60px;
    width: 100%;
    margin-right: 0px;
    border-radius: 250px;
}
.container img.right
    {
        margin-left: 0px;
        margin-right: 0;
    }
.Text
{
    grid-area:Text;
}
.time
{
    grid-area:time;
    color: #aaa;
}
.img
{
    grid-area:img;
}
</style>
