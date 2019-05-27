<template>
<div class="LogInPageGridContainer">
    <div id="LoginGridOne" class="LoginGridOne"></div>
            <div id="LoginGridTwo" class="LoginGridTwo"></div>
            <div id="LoginGridThree" class="LoginGridThree"></div>
            <div id="LoginGridFour" class="LoginGridFour"></div>
            <div id="LoginGridFive" class="LoginGridFive">

            <table class="TableClass" style="border: 1px double black">
            <tr>
                <td><div>Username: </div></td>
                <td><input v-model="Username" type="text" /></td>
            </tr>
            <tr>
                <td><div>Password: </div></td>
                <td><input v-model="Password" @keydown.enter="LoginCheck" type="password" /></td>
            </tr>
            </table>

            <button class="TableButton" @click="LoginCheck">Login</button><br/>
            <button class="TableButton" @click="$router.push('/NewAccount')">New Account</button><br/>
            <button class="TableButton" @click="test">Forgot Password</button>

            </div>
            <div id="LoginGridSix" class="LoginGridSix"></div>
            <div id="LoginGridSeven" class="LoginGridSeven"></div>
            <div id="LoginGridEight" class="LoginGridEight"></div>
            <div id="LoginGridNine" class="LoginGridNine"></div>
</div>
</template>

<script>
import firebase from '@/FirebaseConfig/FireBaseStart'
export default
{
  components: {
    firebase,
  },
    data()
    {
        return {
            Username: '',
            Password: '',
            ThisUser: {},

            db: firebase.firestore(),
        }
    },
    methods:
    {
        LoginCheck: function ()
        {
          console.log(this.Username);
          let self = this;
            this.db.collection("Users")
                .where('Username', '==', self.Username)
                .where('Password', '==', self.Password)
                .get()
                .then(function (querySnapshot)
                {
                    if (querySnapshot.size > 0) {

                        self.ThisUser = querySnapshot.docs[0].data();
                        self.$emit('current-user', self.ThisUser);
                        alert("Welcome " + self.ThisUser.Username);
                        self.$router.push('/Swipe'); // router is not defined, fix.mp3
                    }
                     else
                     {
                         console.log('No User in DataBase that matches query!?');
                     }
                })
        },
        test: function ()
        {
            console.log(this.$router.currentRoute.name);
        },
    },
}
</script>

<style>
.LogInPageGridContainer
{
    display:grid;
    grid-template-columns:33% 33% 33%;
    grid-template-rows:33% 33% 33%;
    grid-template-areas:
        'LoginGridOne LoginGridTwo LoginGridThree'
        'LoginGridFour LoginGridFive LoginGridSix'
        'LoginGridSeven LoginGridEight LoginGridNine';
    text-align:center;
}

.LoginGridOne {
    grid-area: LoginGridOne;
    width: 100%;
    height: 100%;
}

.LoginGridTwo {
    grid-area: LoginGridTwo;
    width: 100%;
    height: 100%;
}

.LoginGridThree {
    grid-area: LoginGridThree;
    width: 100%;
    height: 100%;
}


.LoginGridFour {
    grid-area: LoginGridFour;
    width: 100%;
    height: 100%;
}


.LoginGridFive
{
    grid-area: LoginGridFive;
    width: 100%;
    height: 100%;
    text-align: center;
    border-radius:20px;

}

    .LoginGridFive > table
    {
        background: rgba(236, 68, 251, 0.75);
        border-radius:20px;
    }


.LoginGridSix {
    grid-area: LoginGridSix;
    width: 100%;
    height: 100%;
}


.LoginGridSeven {
    grid-area: LoginGridSeven;
    width: 100%;
    height: 100%;
}

.LoginGridEight {
    grid-area: LoginGridEight;
    width: 100%;
    height: 100%;
}

.LoginGridNine {
    grid-area: LoginGridNine;
    width: 100%;
    height: 100%;
}

.TableClass {
    width: 50%;
    height: 50%;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 12.5%;
    text-shadow: 1px 0 0 #AD00FF, -1px 0 0 #AD00FF, 0 1px 0 #AD00FF, 0 -1px 0 #AD00FF, 1px 1px #AD00FF, -1px -1px 0 #AD00FF, 1px -1px 0 #AD00FF, -1px 1px 0 #AD00FF;
}

.TableButton {
    width: 50%;
    border-radius: 20px;
    margin-top: 5px;
}
</style>
