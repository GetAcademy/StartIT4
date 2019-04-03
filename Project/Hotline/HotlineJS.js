﻿var BirthDateYear;
var BirthDateDay;
var BirthDateMonth;
var BirthDateFull;
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var CheckAge = new Date(year - 18, month, day)
var BirthDate;

var Menu = document.getElementById("Menu");
var Middle = document.getElementById("Middle");
var Bottom = document.getElementById("Bottom");

var loginPage = false;
var createAccountPage = false;
var swipePage = false;
var messagePage = false;
var settingsPage = false;
var optionsPage = false;
var profilePage = false;

var SinglePerson;

var ShowingBio = false;

var ShowingSwipeImageSelector = false;

var ThisUser = {};

var EditMode = false;

var ListOfSingles =
    [
        { Username: 'Ole Kristiansen', Password: 'Lekebil', Email: 'OleKri@hotmail.com', Age: 21, Birthday: new Date(1997, 02, 03), DatingPreference: 'Women', ProfilePictures: ['https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png', 'https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg'], Bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { Username: 'Ola Normann', Password: 'Brunost', Email: 'LangrennMannen@hotmail.com', Age: 30, Birthday: new Date(1989, 06, 04), DatingPreference: 'Women', ProfilePictures: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntWDc40PuyKsnKYwySGh6HWDc0pDlo_6VFyTUQMeP4ZPZ-4xb', 'https://previews.123rf.com/images/zrestudiorus/zrestudiorus1610/zrestudiorus161000006/66876109-profile-icon-male-avatar-man-hipster-style-fashion-cartoon-guy-beard-glasses-portrait-casual-person-.jpg'], Bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a diam maecenas. Felis donec et odio pellentesque diam volutpat commodo sed. Et magnis dis parturient montes. Odio eu feugiat pretium nibh. Volutpat consequat mauris nunc congue nisi vitae. Placerat vestibulum lectus mauris ultrices eros. Cras ornare arcu dui vivamus arcu felis bibendum ut. Tempor orci dapibus ultrices in. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. At imperdiet dui accumsan sit. Amet nisl purus in mollis nunc sed id semper. Pharetra et ultrices neque ornare aenean euismod elementum. Arcu ac tortor dignissim convallis aenean et tortor. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Morbi tincidunt augue interdum velit euismod in pellentesque massa.' },
        { Username: 'Ibrahim Ibrahimsen', Password: 'Bordtennis', Email: 'IbrahimPong@hotmail.com', Age: 22, Birthday: new Date(1996, 10, 17), DatingPreference: 'Women', ProfilePictures: ['https://st2.depositphotos.com/2777531/6505/v/950/depositphotos_65058673-stock-illustration-hipster-man-avatar-user.jpg', 'http://bootdey.com/img/Content/avatar/avatar7.png'], Bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo nec ultrices dui sapien eget. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Varius duis at consectetur lorem donec. Risus in hendrerit gravida rutrum. Mi ipsum faucibus vitae aliquet nec ullamcorper. Habitant morbi tristique senectus et netus et. Pharetra magna ac placerat vestibulum. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Enim facilisis gravida neque convallis a cras semper auctor neque. Sapien faucibus et molestie ac feugiat sed. Nunc scelerisque viverra mauris in aliquam sem fringilla. Lacus sed viverra tellus in hac habitasse platea dictumst. Tellus mauris a diam maecenas sed enim ut sem viverra. Dictum varius duis at consectetur lorem donec massa sapien.' },
        { Username: 'Jonas Gledesdreper', Password: 'KlumperIMelka', Email: 'KlumpeLumpen@hotmail.com', Age: 25, Birthday: new Date(1994, 08, 07), DatingPreference: 'Alien', ProfilePictures: ['https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Bearded_Man-17-512.png', 'https://cdn.pixabay.com/photo/2018/05/19/22/03/man-3414477__340.png'], Bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat duis ultricies lacus sed turpis tincidunt. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Viverra aliquet eget sit amet. Eleifend donec pretium vulputate sapien nec sagittis. Leo urna molestie at elementum eu facilisis. Amet mauris commodo quis imperdiet. Tortor at auctor urna nunc id cursus. Auctor eu augue ut lectus arcu bibendum at varius vel.' },
        { Username: 'Hermann Hermannsen', Password: 'Karsk', Email: 'HermannJobb12@hotmail.com', Age: 50, Birthday: new Date(1969, 01, 10), DatingPreference: 'Men & Alien & Women', ProfilePictures: ['https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Panda-512.png', 'https://previews.123rf.com/images/gennadiikorchuganov/gennadiikorchuganov1702/gennadiikorchuganov170200069/71033969-mod%C3%A8le-de-logo-baby-panda-face-ic%C3%B4ne-du-visage-panda-b%C3%A9b%C3%A9-ours-asiatique-panda-t%C3%AAte-isol%C3%A9-sur-fond-blanc.jpg'], Bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur vitae nunc sed velit. Nisl nunc mi ipsum faucibus vitae aliquet nec. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Massa eget egestas purus viverra accumsan in. Ac felis donec et odio pellentesque diam volutpat. Est ante in nibh mauris cursus. Sodales neque sodales ut etiam. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Sit amet aliquam id diam maecenas ultricies. Sed egestas egestas fringilla phasellus faucibus. Vestibulum rhoncus est pellentesque elit ullamcorper. Ac tortor dignissim convallis aenean et tortor at. Nulla aliquet enim tortor at auctor urna nunc id cursus. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Ac tortor dignissim convallis aenean et tortor at risus viverra. Malesuada pellentesque elit eget gravida cum.' }
    ]

function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function RandomSinglePerson() {
    return ListOfSingles[RandomNumber(0, 5)];
}




function LoginCheck()
{
    db.collection("Users").get().then(function (querySnapshot)
    {
        if (querySnapshot.size > 0)
        {
            querySnapshot.forEach(function (documentSnapshot)
            {
                var data = querySnapshot.docs.map(function (documentSnapshot)
                {
                    return documentSnapshot.data();
                });
                for (let i = 0; i < data.length; i++)
                {
                    if (document.getElementById("Username").value == data[i].Username && document.getElementById("Password").value == data[i].Password)
                    {
                        ThisUser = data[i];
                        alert("Welcome " + data[i].Username);
                        SwipePage();
                    }
                }
            });
        }
        else
        {
            console.log('No Users in DataBase!?');
        }

    })
}

function NewAccount() {
    NewAccountPage();
}

function CreateAccount() {
    let UsernameOne = document.getElementById("UsernameOne").value;
    let UsernameTwo = document.getElementById("UsernameTwo").value;
    let EmailOne = document.getElementById("E-mailOne").value;
    let EmailTwo = document.getElementById("E-mailTwo").value;
    let PasswordOne = document.getElementById("PasswordOne").value;
    let PasswordTwo = document.getElementById("PasswordTwo").value;
    let Preference = document.getElementById("Preference").value;

    if (UsernameOne == UsernameTwo && EmailOne == EmailTwo && PasswordOne == PasswordTwo && BirthDateFull <= CheckAge) {
        alert("A confirmation email has been sent!");
        AccountList.push({ Username: UsernameTwo, Password: PasswordTwo, Email: EmailTwo, Age: parseInt(new Date().getFullYear()) - parseInt(BirthDateYear), Birthday: BirthDateFull, DatingPreference: Preference })
        RegisterUserToBackend(UsernameTwo, PasswordTwo, EmailTwo, parseInt(new Date().getFullYear()) - parseInt(BirthDateYear), BirthDateFull, Preference);

        document.getElementById("UsernameOne").value = null;
        document.getElementById("UsernameTwo").value = null;
        document.getElementById("E-mailOne").value = null;
        document.getElementById("E-mailTwo").value = null;
        document.getElementById("PasswordOne").value = null;
        document.getElementById("PasswordTwo").value = null;
        document.getElementById("Preference").value = null;

        LoginPage();
    }
}

function DateChange() {
    BirthDate = document.getElementById("Birthdate").value;
    BirthDateYear = BirthDate.substr(0, 4);
    BirthDateMonth = BirthDate.substr(5, 2);
    BirthDateDay = BirthDate.substr(8, 2);
    BirthDateFull = new Date(BirthDateYear, BirthDateMonth, BirthDateDay);
}


function LikeAndDislike(Button) {
    SinglePerson = RandomSinglePerson();
    if (Button.innerText == "Like") {
        document.getElementById("SwipeName").innerHTML = SinglePerson.Username;
        document.getElementById("SwipeImage").innerHTML = `<img src="${SinglePerson.ProfilePictures[0]}" />`;
        document.getElementById('SwipeBio').innerHTML = '';
        ShowingBio = false;
        document.getElementById('SwipeImageSelector').innerHTML = '';
        ShowingSwipeImageSelector = false;

        if (Math.random() >= 0.5) {
            alert(`You Matched With Someone, Go Talk To Them!!!`);
        }
    }
    else {
        document.getElementById("SwipeName").innerHTML = SinglePerson.Username;
        document.getElementById("SwipeImage").innerHTML = `<img src="${SinglePerson.ProfilePictures[0]}" />`;
        document.getElementById('SwipeBio').innerHTML = '';
        ShowingBio = false;
        document.getElementById('SwipeImageSelector').innerHTML = '';
        ShowingSwipeImageSelector = false;
    }
}

function ChangeImage(image) {
    document.getElementById("SwipeImage").innerHTML = `<img src="${image}" />`;
}

function ShowSwipeImageSelector() {
    if (!ShowingSwipeImageSelector) {
        let Cache = '';
        for (let i = 0; i < SinglePerson.ProfilePictures.length; i++) {
            Cache += `<button onclick="ChangeImage('${SinglePerson.ProfilePictures[i]}')" ></button>`;
        }
        document.getElementById('SwipeImageSelector').innerHTML = Cache;
        ShowingSwipeImageSelector = true;
    }
    else if (ShowingSwipeImageSelector) {
        document.getElementById("SwipeImage").innerHTML = `<img src="${SinglePerson.ProfilePictures[0]}" />`;
        document.getElementById('SwipeImageSelector').innerHTML = '';
        ShowingSwipeImageSelector = false;
    }
}
function ChangeMyViewedProfilePicture(image) {
    document.getElementById("ProfileImageDisplay").innerHTML = `<img src="${image}" alt="Missing" />`;
}
function ViewYourProfilePictures() {
    let Cache = '';
    for (let i = 0; i < ThisUser.ProfilePictures.length; i++) {
        Cache += `<button onclick="ChangeMyViewedProfilePicture('${ThisUser.ProfilePictures[i]}')" ></button>`;
    }
    document.getElementById('ProfileImageSelect').innerHTML = Cache;
}

// visste du at du kan lage napalm med isopor og diesel? #FunFact of the day
function AddChat() {
    document.getElementById("MyChat").innerHTML += `
        <div class="container LeftGrid">
        <img class="img" src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png" alt="Profile Picture">
        <p class="Text left">${document.getElementById("ChatBox").value}</p>
        <span class="time left">${new Date().getHours() + ":" + new Date().getMinutes()}</span>
        </div>
        `;

    document.getElementById("YouChat").innerHTML += `
        <div style="display:hidden;" class="container"></div>

        <div class="container darker RightGrid">
        <img class="img right" src="https://s3-eu-central-1.amazonaws.com/workaround-production/wp-content/uploads/2018/03/28152123/avatar-user-hacker-3830b32ad9e0802c-512x512.png" alt="Avatar">
        <p class="Text right">${RandomAnswer()}</p>
        <span class="time right">${new Date().getHours() + ":" + new Date().getMinutes()}</span>
        </div>`;
    document.getElementById("MyChat").innerHTML += `<div style="display:hidden;" class="container darker"></div>`;
    document.getElementById("ChatBox").value = null;
}

function RandomAnswer() {
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
}

function RegisterUserToBackend(username, password, email, age, birthday, datingpreference) {
    db.collection("Users").add({ Username: username, Password: password, Email: email, Age: age, Birthday: birthday, DatingPreference: datingpreference });
}

function ShowBio() {
    if (!ShowingBio) {
        document.getElementById('SwipeBio').innerHTML = SinglePerson.Bio;
        ShowingBio = true;
    }
    else if (ShowingBio) {
        document.getElementById('SwipeBio').innerHTML = '';
        ShowingBio = false;
    }
}

function EditBio() {
    if (!EditMode) {
        document.getElementById("ProfileBio").innerHTML = `<textarea id="ProfileBioInput" >${document.getElementById("ProfileBio").innerHTML}</textarea>`;
        EditMode = true;
    }
    else {
        //update this specific field of this document in the Users Collection basically update bio.
        document.getElementById("ProfileBio").innerHTML = document.getElementById("ProfileBioInput").value;
        EditMode = false;
    }
}

function ChangeSettingsSliderOne() {
    document.getElementById("ShowAgePreferenceValueOne").innerHTML = document.getElementById("AgePreferenceValueOne").value;
}

function ChangeSettingsSliderTwo() {
    document.getElementById("ShowAgePreferenceValueTwo").innerHTML = document.getElementById("AgePreferenceValueTwo").value;
}

function UpdateUserSettings()
{
    getUser(ThisUser.Username)
        .then(updateUser)
        .catch(function (error)
        {
            console.error(error);
        });
}

function updateUser(docId)
{
    //find out how to update more values theory either to have more db.collection and spam the entire line with just different variable or add more variables inside the update.
    db.collection("Users").doc(docId).update({ DatingPreference: document.getElementById("PreferenceChoice").value })
        .then(function () { alert("Document Updated!"); })
        .catch(function () { console.error("Error Updating Document, Releasing Cyclon B across North Korea!"); });
}
function getUser(username)
{
    return new Promise((resolve, reject) =>
    {
        db.collection("Users").where('Username', "==", username).get()
            .then(function (querySnapshot)
            {
                querySnapshot.forEach(function (doc)
                {
                    resolve(doc.id);
                });
                reject('no documents');
            })
            .catch(function (error)
            {
                reject(error);
            })

    })


}

//page HTML's
function MessagePage() {
    if (loginPage) {
        Middle.classList.remove("LogInPageGridContainer");
    }
    if (createAccountPage) {
        Middle.classList.remove("CreateAccountPageContainer");
    }
    if (swipePage) {
        Middle.classList.remove("SwipePageContainer");
    }
    if (messagePage) {
        Middle.classList.remove("MessagePageContainer");
        Middle.classList.remove("OverflowWindow");
    }
    if (settingsPage) {
        Middle.classList.remove("SettingsPageGridContainer");
    }
    if (optionsPage) {
        Middle.classList.remove("OptionsPageGridContainer");
    }
    if (profilePage) {
        Middle.classList.remove("ProfilePageGridContainer");
    }

    loginPage = false;
    createAccountPage = false;
    swipePage = false;
    messagePage = true;
    settingsPage = false;
    optionsPage = false;
    profilePage = false;


    Middle.classList.add("MessagePageContainer");
    Middle.classList.add("OverflowWindow");

    document.getElementById("MenuButtonOne").innerHTML = `<button onclick="SwipePage()">Swipe Page</button>`;
    document.getElementById("MenuButtonTwo").innerHTML = `<button onclick="SettingsPage()">Settings Page</button>`;
    document.getElementById("Bottom").innerHTML = `<input onkeydown="if(event.keyCode==13){AddChat()}" class="ChatBox" type="text" id="ChatBox"/> <button class="Send" onclick="AddChat()">Send</button>`;

    Middle.innerHTML =
        `
        <div id="SideBar" class="SideBar">
            Contact List
        </div>
        
        <div id="MyChat" class="MyChat">
        
        </div>

        <div id="YouChat" class="YouChat">
        
        
        </div>
        
    
    `;
}
function SettingsPage() {
    if (loginPage) {
        Middle.classList.remove("LogInPageGridContainer");
    }
    if (createAccountPage) {
        Middle.classList.remove("CreateAccountPageContainer");
    }
    if (swipePage) {
        Middle.classList.remove("SwipePageContainer");
    }
    if (messagePage) {
        Middle.classList.remove("MessagePageContainer");
        Middle.classList.remove("OverflowWindow");
    }
    if (settingsPage) {
        Middle.classList.remove("SettingsPageGridContainer");
    }
    if (optionsPage) {
        Middle.classList.remove("OptionsPageGridContainer");
    }
    if (profilePage) {
        Middle.classList.remove("ProfilePageGridContainer");
    }

    loginPage = false;
    createAccountPage = false;
    swipePage = false;
    messagePage = false;
    settingsPage = true;
    optionsPage = false;
    profilePage = false;

    document.getElementById("MenuButtonOne").innerHTML = `<button onclick="SwipePage()">Swipe Page</button>`;
    document.getElementById("MenuButtonTwo").innerHTML = `<button onclick="MessagePage()">Message Page</button>`;
    Middle.classList.add("SettingsPageGridContainer");
    Middle.innerHTML = `
    <div id="MyProfile" class="MyProfile">
         <img onclick="ProfilePage()" src="${ThisUser.ProfilePictures[0]}" alt="Profile Picture">
    </div>
    <div id="SettingsButton" class="SettingsButton">
         <button onclick="OptionsPage()">Settings</button>
    </div>`;
    document.getElementById("Bottom").innerHTML = "";
}
function SwipePage() {
    if (loginPage) {
        Middle.classList.remove("LogInPageGridContainer");
    }
    if (createAccountPage) {
        Middle.classList.remove("CreateAccountPageContainer");
    }
    if (swipePage) {
        Middle.classList.remove("SwipePageContainer");
    }
    if (messagePage) {
        Middle.classList.remove("MessagePageContainer");
        Middle.classList.remove("OverflowWindow");
    }
    if (settingsPage) {
        Middle.classList.remove("SettingsPageGridContainer");
    }
    if (optionsPage) {
        Middle.classList.remove("OptionsPageGridContainer");
    }
    if (profilePage) {
        Middle.classList.remove("ProfilePageGridContainer");
    }

    loginPage = false;
    createAccountPage = false;
    swipePage = true;
    messagePage = false;
    settingsPage = false;
    optionsPage = false;
    profilePage = false;

    SinglePerson = RandomSinglePerson();


    document.getElementById("MenuButtonOne").innerHTML = `<button onclick="SettingsPage()">Settings Page</button>`;
    document.getElementById("MenuButtonTwo").innerHTML = `<button onclick="MessagePage()">Message Page</button>`;
    Middle.classList.add("SwipePageContainer");
    //this shit broken
    Middle.innerHTML = `
        
        
        <div id="SwipeName" class="SwipeName">
            ${SinglePerson.Username}
        </div>
        <div id="SwipeImageSelector" class="SwipeImageSelector">
        </div>
        <div onclick="ShowBio(); ShowSwipeImageSelector()" id="SwipeImage" class="SwipeImage">
            <img  src="${SinglePerson.ProfilePictures[0]}" />
        </div>
        <div id="SwipeBio" class="SwipeBio">
        </div>
        <div id="SwipeButtons" class="SwipeButtons">
            <button onclick="LikeAndDislike(this)">Like</button>
            <button onclick="LikeAndDislike(this)">Dislike</button>
        </div>

        
    `;
    document.getElementById("Bottom").innerHTML = "";
}

function LoginPage() {
    if (loginPage) {
        Middle.classList.remove("LogInPageGridContainer");
    }
    if (createAccountPage) {
        Middle.classList.remove("CreateAccountPageContainer");
    }
    if (swipePage) {
        Middle.classList.remove("SwipePageContainer");
    }
    if (messagePage) {
        Middle.classList.remove("MessagePageContainer");
        Middle.classList.remove("OverflowWindow");
    }
    if (settingsPage) {
        Middle.classList.remove("SettingsPageGridContainer");
    }
    if (optionsPage) {
        Middle.classList.remove("OptionsPageGridContainer");
    }
    if (profilePage) {
        Middle.classList.remove("ProfilePageGridContainer");
    }

    loginPage = true;
    createAccountPage = false;
    swipePage = false;
    messagePage = false;
    settingsPage = false;
    optionsPage = false;
    profilePage = false;

    Middle.classList.add("LogInPageGridContainer");

    Middle.innerHTML = `
            
            <div id="LoginGridOne" class="LoginGridOne"></div>
            <div id="LoginGridTwo" class="LoginGridTwo"></div>
            <div id="LoginGridThree" class="LoginGridThree"></div>
            <div id="LoginGridFour" class="LoginGridFour"></div>
            <div id="LoginGridFive" class="LoginGridFive">
            
            <table class="TableClass" style="border: 1px double black">
            <tr>
                <td><div>Username: </div></td>
                <td><input type="text" id="Username" /></td>
            </tr>
            <tr>
                <td><div>Password: </div></td>
                <td><input onkeydown="if(event.keyCode==13){LoginCheck()}" type="password" id="Password" /></td>
            </tr>
            </table>
            
            </div>
            <div id="LoginGridSix" class="LoginGridSix"></div>
            <div id="LoginGridSeven" class="LoginGridSeven"><button class="TableButton" onclick="LoginCheck()">Login</button></div>
            <div id="LoginGridEight" class="LoginGridEight"><button class="TableButton" onclick="NewAccount()">New Account</button></div>
            <div id="LoginGridNine" class="LoginGridNine"><button class="TableButton">Forgot Password</button></div>
            
            
            `;
    document.getElementById("Bottom").innerHTML = "";
}
function NewAccountPage() {
    if (loginPage) {
        Middle.classList.remove("LogInPageGridContainer");
    }
    if (createAccountPage) {
        Middle.classList.remove("CreateAccountPageContainer");
    }
    if (swipePage) {
        Middle.classList.remove("SwipePageContainer");
    }
    if (messagePage) {
        Middle.classList.remove("MessagePageContainer");
        Middle.classList.remove("OverflowWindow");
    }
    if (settingsPage) {
        Middle.classList.remove("SettingsPageGridContainer");
    }
    if (optionsPage) {
        Middle.classList.remove("OptionsPageGridContainer");
    }
    if (profilePage) {
        Middle.classList.remove("ProfilePageGridContainer");
    }

    loginPage = false;
    createAccountPage = true;
    swipePage = false;
    messagePage = false;
    settingsPage = false;
    optionsPage = false;
    profilePage = false;

    Middle.classList.add("CreateAccountPageContainer");
    Middle.innerHTML = `
    
    <div id="EmptyCreateLeft" class="EmptyCreateLeft"></div>

    <div id="CreateAccountTable" class="CreateAccountTable">

    <table style="border:1px double black">
    <tr>
        <td><div>Create Account</div></td>
    </tr>
    <tr>
    <td><div>Username: </div></td> <td><input type="text" id="UsernameOne" /></td>
    </tr>
    <tr>
    <td><div>Confirm Username: </div></td> <td><input type="text" id="UsernameTwo" /></td>
    </tr>
    <tr>
    <td><div>E-mail: </div></td><td><input type="email" id="E-mailOne" /></td>
    </tr>
    <tr>
    <td><div>Confirm E-mail: </div></td> <td><input type="email" id="E-mailTwo" /></td>
    </tr>
    <tr>
    <td><div>Password: </div></td> <td><input type="password" id="PasswordOne" /></td>
    </tr>
    <tr>
    <td><div>Confirm Password: </div></td><td><input type="password" id="PasswordTwo" /></td>
    </tr>
    <tr>
    <td><div>Birthdate: </div></td><td><input onchange="DateChange()" type="date" id="Birthdate" /></td>
    </tr>
    <tr>
    <td><div>
        Dating Preference:
    </div></td>
    <td><select id="Preference" name="Preference">
            <option value="Women">Women</option>
            <option value="Men">Men</option>
            <option value="Alien">Alien</option>
            <option value="Men and Women">Men & Women</option>
            <option value="Men and Alien">Men & Alien</option>
            <option value="Women and Alien">Women & Alien</option>
            <option value="Men and Alien and Women">Men & Alien & Women</option>
        </select></td>
    </tr>
    </table>
    <button onkeydown="if(event.keyCode==13){CreateAccount()}" onclick="CreateAccount()">Create Account</button>

    </div>

    <div id="EmptyCreateRight" class="EmptyCreateRight"></div>`;
    document.getElementById("Bottom").innerHTML = "";
}

function OptionsPage() {
    if (loginPage) {
        Middle.classList.remove("LogInPageGridContainer");
    }
    if (createAccountPage) {
        Middle.classList.remove("CreateAccountPageContainer");
    }
    if (swipePage) {
        Middle.classList.remove("SwipePageContainer");
    }
    if (messagePage) {
        Middle.classList.remove("MessagePageContainer");
        Middle.classList.remove("OverflowWindow");
    }
    if (settingsPage) {
        Middle.classList.remove("SettingsPageGridContainer");
    }
    if (optionsPage) {
        Middle.classList.remove("OptionsPageGridContainer");
    }
    if (profilePage) {
        Middle.classList.remove("ProfilePageGridContainer");
    }

    loginPage = false;
    createAccountPage = false;
    swipePage = false;
    messagePage = false;
    settingsPage = false;
    optionsPage = true;
    profilePage = false;

    Middle.classList.add("OptionsPageGridContainer");
    Middle.innerHTML = `
        <table class="OptionsTable">

        <tr><div id="DatingPreference">

        <td><div id="PreferenceTitle" style="font-weight:bolder">Dating Preference: </div></td>
        <td><select id="PreferenceChoice">
            <option value="Women">Women</option>
            <option value="Men">Men</option>
            <option value="Alien">Alien</option>
            <option value="Men and Women">Men & Women</option>
            <option value="Men and Alien">Men & Alien</option>
            <option value="Women and Alien">Women & Alien</option>
            <option value="Men and Alien and Women">Men & Alien & Women</option>
        </select></td>

        </div></tr>

        <tr><div id="SearchDistance">

        <td><div id="SearchDistanceTitle" style="font-weight:bolder">Search Distance: </div></td>
        <td><div><input id="SearchDistanceValue" type="number" min="1" max="100"/><em>KM</em></div></td>

        </div></tr>

        <tr><div id="AgePreference">

        <td><div id="AgePreferenceTitle" style="font-weight:bolder">Age Preference: </div></td>
        <td><div><input id="AgePreferenceValueOne" style="width:30%" oninput="ChangeSettingsSliderOne()" type="range" min="18" max="90" step="1"/> <em id="ShowAgePreferenceValueOne"></em> - <em id="ShowAgePreferenceValueTwo"></em> <input id="AgePreferenceValueTwo" style="width:30%" oninput="ChangeSettingsSliderTwo()" type="range" min="18" max="90" step="1"/><em>år</em></div></td>

        </div></tr>

        <tr><div id="SaveOptionsButton">

        <td><div id="SaveOptionsTitle" style="font-weight:bolder"></div></td>
        <td><button onclick="UpdateUserSettings()">Save</button></td>

        </div></tr>

        </table>
        `;
    document.getElementById("PreferenceChoice").value = ThisUser.DatingPreference;
    document.getElementById("SearchDistanceValue").value = ThisUser.SearchDistance;
    document.getElementById("AgePreferenceValueOne").value = ThisUser.AgePreference[0];
    document.getElementById("AgePreferenceValueTwo").value = ThisUser.AgePreference[1];
    document.getElementById("ShowAgePreferenceValueOne").innerHTML = ThisUser.AgePreference[0];
    document.getElementById("ShowAgePreferenceValueTwo").innerHTML = ThisUser.AgePreference[1];

}

function ProfilePage() {
    if (loginPage) {
        Middle.classList.remove("LogInPageGridContainer");
    }
    if (createAccountPage) {
        Middle.classList.remove("CreateAccountPageContainer");
    }
    if (swipePage) {
        Middle.classList.remove("SwipePageContainer");
    }
    if (messagePage) {
        Middle.classList.remove("MessagePageContainer");
        Middle.classList.remove("OverflowWindow");
    }
    if (settingsPage) {
        Middle.classList.remove("SettingsPageGridContainer");
    }
    if (optionsPage) {
        Middle.classList.remove("OptionsPageGridContainer");
    }
    if (profilePage) {
        Middle.classList.remove("ProfilePageGridContainer");
    }

    loginPage = false;
    createAccountPage = false;
    swipePage = false;
    messagePage = false;
    settingsPage = false;
    optionsPage = false;
    profilePage = true;

    Middle.classList.add("ProfilePageGridContainer");
    Middle.innerHTML = `
    
    <div id="EmptyProfileLeft" class="EmptyProfileLeft"></div>

    <div id="ProfileName" class="ProfileName">${ThisUser.Username}</div>

    <div id="EmptyProfileRight" class="EmptyProfileRight"></div>

    <div id="ProfileImageSelect" class="ProfileImageSelect">
    
    
    
    </div>

    <div id="ProfileImageDisplay" class="ProfileImageDisplay">
    
    <img src="${ThisUser.ProfilePictures[0]}" alt="Profile Picture">
    
    </div>

    <div ondblclick="EditBio()" id="ProfileBio" class="ProfileBio">

    
    ${ThisUser.Bio}
    
    
    
    </div>
    
    `;

    ViewYourProfilePictures();

}