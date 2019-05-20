<template>
        <div class="container LeftGrid">
        <img class="img" src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png" alt="Profile Picture">
        <p class="Text left">{{ChatBox}}</p>
        <span class="time left">{{Timestamp}}</span>
        </div>
</template>

<script>
export default
{
props: ['ChatBox'],

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
.container
{
    border: 2px solid #dedede;
    background-color: #f1f1f1;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
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

.container img
{
    /*float: left;*/
    max-width: 60px;
    width: 100%;
    margin-right: 0px;
    border-radius: 250px;
}
</style>
