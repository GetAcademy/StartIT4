<template>
<div class="SettingsPageGridContainer">
<div id="MyProfile" class="MyProfile">
  <img onclick="ProfilePage()" src="${ThisUser.ProfilePictures[0]}" alt="Profile Picture">
</div>
<div id="SettingsButton" class="SettingsButton">
  <button onclick="OptionsPage()">Settings</button>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.SettingsPageGridContainer
{
    max-height:80vh;
    height: 100%;
    display:grid;
    justify-content:center;
    grid-template-columns: 25%;
    grid-template-rows:75% 25%;
    grid-template-areas:
        'MyProfile'
        'SettingsButton';
}


.MyProfile {
    /*fix position relative to text-align center or center it in a different way*/
    grid-area: MyProfile;
    margin-top:5px;
    margin-bottom:15px;
    text-align:center;
}


    .MyProfile > img
    {
        max-width: 100%;
        max-height:100%;
        width: 100%;
        border-radius:20px;
    }

.SettingsButton
{
    /*fix position relative to text-align center or center it in a different way*/
    margin-top:5px;
    margin-bottom:5px;
    grid-area:SettingsButton;
    max-height:100px;
    width:100%;
    height:75%;
}

    .SettingsButton > button {
        background: rgba(0,255,0,0.75);
        width:100%;
        height:100%;
        font-weight:bolder;
        font-size:larger;
        border-radius:50px;
    }
</style>
