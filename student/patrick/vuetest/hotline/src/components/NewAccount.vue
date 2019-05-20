<template>
    <div class="CreateAccountPageContainer">
        <div id="EmptyCreateLeft" class="EmptyCreateLeft"></div>

    <div id="CreateAccountTable" class="CreateAccountTable">

    <table>
    <tr>
        <th><div>Create Account</div></th>
    </tr>
    <tr>
    <td><div>Username: </div></td> <td><input type="text" v-model="UsernameOne" /></td>
    </tr>
    <tr>
    <td><div>Confirm Username: </div></td> <td><input type="text" v-model="UsernameTwo" /></td>
    </tr>
    <tr>
    <td><div>E-mail: </div></td><td><input type="email" v-model="EmailOne" /></td>
    </tr>
    <tr>
    <td><div>Confirm E-mail: </div></td> <td><input type="email" v-model="EmailTwo" /></td>
    </tr>
    <tr>
    <td><div>Password: </div></td> <td><input type="password" v-model="PasswordOne" /></td>
    </tr>
    <tr>
    <td><div>Confirm Password: </div></td><td><input type="password" v-model="PasswordTwo" /></td>
    </tr>
    <tr>
    <td><div>Birthdate: </div></td><td><input v-model="BirthDate" @change="DateChange" type="date" /></td>
    </tr>
    <tr>
    <td><div>Age Preferance: </div></td> <td><input v-model="AgePrefOne" onkeydown="return false" type="number" min="18" max="90" step="1"/> <span>-</span> <input v-model="AgePrefTwo" onkeydown="return false" type="number" min="18" max="90" step="1"/></td>
    </tr>
    <tr>
    <td><div>
        Dating Preference:
    </div></td>
    <td><select v-model="Preference" name="Preference">
            <option value="Women">Women</option>
            <option value="Men">Men</option>
            <option value="Alien">Alien</option>
            <option value="Men and Women">Men & Women</option>
            <option value="Men and Alien">Men & Alien</option>
            <option value="Women and Alien">Women & Alien</option>
            <option value="Men and Alien and Women">Men & Alien & Women</option>
        </select></td>
    </tr>
    <tr>
    <td><div>Search Distance: </div></td> <td><input v-model="SearchDistance" type="number" min="1" max="100"/> <em>Km</em></td>
    </tr>
    <tr>
    <td><div>Profile Picture: </div></td><td><vue-dropzone id="drop1" :options="dropOptions"></vue-dropzone></td>
    </tr>
    </table>
    <textarea v-model="Bio" cols="60" rows="5" maxlength="2000" placeholder="Bio: Write a little about yourself"></textarea>

    <button @keydown.enter="CreateAccount" @click="CreateAccount">Create Account</button>

    </div>

    <div id="EmptyCreateRight" class="EmptyCreateRight"></div>`;
    </div>
</template>

<script>
import vueDropzone from 'vue2-dropzone'
import db from '@/FirebaseConfig/FireBaseStart'
export default {
components: {
vueDropzone,
db,
},
data() {
  return{
    BirthDateYear: null,
    BirthDateDay: null,
    BirthDateMonth: null,
    BirthDateFull: null,
    BirthDate: null,

    date: null,
    year: null,
    month: null,
    day: null,
    CheckAge: null,

    UsernameOne: '',
    UsernameTwo: '',
    EmailOne: '',
    EmailTwo: '',
    PasswordOne: '',
    PasswordTwo: '',
    AgePrefOne: 18,
    AgePrefTwo: 40,
    Preference: 'Women',
    SearchDistance: 5,
    Bio: '',

    dropOptions:
    {
      url: "http://localhost:8080",
    },
  }
},
methods: {
  DateChange: function()
  {
    this.BirthDateYear = this.BirthDate.substr(0, 4);
    this.BirthDateMonth = this.BirthDate.substr(5, 2);
    this.BirthDateDay = this.BirthDate.substr(8, 2);
    this.BirthDateFull = new Date(this.BirthDateYear, this.BirthDateMonth,this. BirthDateDay);
  },
  CreateAccount: function ()
{
    self = this;
    let ProfilePic = self.DropzoneImages;

    if (self.UsernameOne == self.UsernameTwo && self.EmailOne == self.EmailTwo && self.PasswordOne == self.PasswordTwo && self.BirthDateFull <= self.CheckAge && ProfilePic != null && self.Bio.length > 0 && self.AgePrefOne >= 18 && self.AgePrefTwo <= 90 && self.SearchDistance >= 1 && self.SearchDistance <= 100) {

        self.UploadProfile(self.ProfImage, self.UsernameTwo, self.PasswordTwo, self.EmailTwo, parseInt(new Date().getFullYear()) - parseInt(self.BirthDateYear), self.BirthDateFull, self.Preference, self.AgePrefOne, self.AgePrefTwo, self.SearchDistance, self.ProfileBio);
        self.$router.push('/Login');
    }
},
DropzoneImages: function ()
{
    let TheFile = document.getElementById("drop1").dropzone.files;
    let Images = [];
    for (let i = 0; i < TheFile.length; i++) {
        Images.push(TheFile[i]);
    }
    console.log(Images);
    return Images;
},
UploadProfile: async function(Image, username, password, email, age, birthday, datingpreference, AgePreferenceOne, AgePreferenceTwo, searchDistance, bio)
{
    const file = Image;

    try {
        let ImageURL = [];

        for (let i = 0; i < file.length; i++) {
            let fileRef = storageRef.child(file[i].name);
            await fileRef.put(file[i]);
            ImageURL.push(await fileRef.getDownloadURL());
            alert(`Uploaded ${file[i].name}`);
        }

        this.RegisterUserToBackend(username, password, email, age, birthday, datingpreference, AgePreferenceOne, AgePreferenceTwo, searchDistance, bio, ImageURL);
    }
    catch (error) {
        console.error(error);
    }
},
RegisterUserToBackend: function (username, password, email, age, birthday, datingpreference, AgePreferenceOne, AgePreferenceTwo, searchDistance, bio, profilePictures) // add profile picture parameter
{
    db.collection("Users").add({ Username: username, Password: password, Email: email, Age: age, Birthday: birthday, DatingPreference: datingpreference, AgePreference: [parseInt(AgePreferenceOne), parseInt(AgePreferenceTwo)], SearchDistance: parseInt(searchDistance), Bio: bio, ProfilePictures: profilePictures })
        .then(function (snapshot)
        {
            alert("User Registered");
        });
},
},
created()
{
    this.date = new Date();
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth();
    this.day = this.date.getDate();
    this.CheckAge = new Date(this.year - 18, this.month, this.day);
},
}
</script>

<style>
.CreateAccountPageContainer
{
    display:grid;
    grid-template-columns:35% 30% 35%;
    grid-template-rows:100%;
    grid-template-areas:'EmptyCreateLeft CreateAccountTable EmptyCreateRight';
    overflow-y:none;
}

.EmptyCreateLeft
{
    grid-area:EmptyCreateLeft;
    width:100%;
    height:100%;
}
.CreateAccountTable
{
    grid-area: CreateAccountTable;
    text-align: center;
    align-self: center;
    background: rgba(236, 68, 251, 0.75);
}
.EmptyCreateRight {
    grid-area: EmptyCreateRight;
    width: 100%;
    height: 100%;
}
</style>
