var BirthDateYear;
var BirthDateDay;
var BirthDateMonth;
var BirthDateFull;

var AccountList =
    [
        { Username: 'patrick', Password: '123abc', Email: 'patrickjoh33@hotmail.com', Age: 23, Birthday: new Date(1995, 09, 03) }
    ];

function LoginCheck()
{
    for (let i = 0; i < AccountList.length; i++)
    {
        if (document.getElementById("Username").value == AccountList[i].Username && document.getElementById("Password").value == AccountList[i].Password)
        {
            alert("Welcome " + AccountList[i].Username);
            SwipePage();
        }
    }
}

function NewAccount()
{
    NewAccountPage();
}

function CreateAccount() {
    let UsernameOne = document.getElementById("UsernameOne").value;
    let UsernameTwo = document.getElementById("UsernameTwo").value;
    let EmailOne = document.getElementById("E-mailOne").value;
    let EmailTwo = document.getElementById("E-mailTwo").value;
    let PasswordOne = document.getElementById("PasswordOne").value;
    let PasswordTwo = document.getElementById("PasswordTwo").value;


    if (UsernameOne == UsernameTwo && EmailOne == EmailTwo && PasswordOne == PasswordTwo && BirthDateFull <= CheckAge) {
        alert("A confirmation email has been sent!");
        AccountList.push({ Username: UsernameTwo, Password: PasswordTwo, Age: parseInt(new Date().getFullYear()) - parseInt(BirthDateYear), Birthday: BirthDateFull })

        document.getElementById("UsernameOne").value = null;
        document.getElementById("UsernameTwo").value = null;
        document.getElementById("E-mailOne").value = null;
        document.getElementById("E-mailTwo").value = null;
        document.getElementById("PasswordOne").value = null;
        document.getElementById("PasswordTwo").value = null;

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


function LikeAndDislike(Button)
{
    if (Button.innerText == "Like")
    {
        document.getElementById("SwipeImage").innerHTML = `<img src="data:image/png;base64,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"/>`;
        alert("You Liked John Doe!");
        if (Math.random() >= 0.5) {
            alert("You Matched With John Doe!!!");
        }
    }
    else {
        document.getElementById("SwipeImage").innerHTML = `<img src="http://www.landscapingbydesign.com.au/wp-content/uploads/2018/11/img-person-placeholder.jpg" />`;
        alert("You Disliked John Doe");
    }
}

function AddChat()
{
    document.getElementById("MyChat").innerHTML += `<div class="container AddMarginBottom">
        <img src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png" alt="Avatar">
        <p>${document.getElementById("ChatBox").value}</p>
        <span class="time-left">${new Date().getHours() + ":" + new Date().getMinutes()}</span>
        </div>
        `;
    
    document.getElementById("YouChat").innerHTML +=`
        <div class="container"></div>

        <div class="container darker AddMarginTop">
        <img class="right" src="https://s3-eu-central-1.amazonaws.com/workaround-production/wp-content/uploads/2018/03/28152123/avatar-user-hacker-3830b32ad9e0802c-512x512.png" alt="Avatar">
        <p class="right">${RandomAnswer()}</p>
        <span class="time-right">${new Date().getHours() + ":" + new Date().getMinutes()}</span>
        </div>`;
    document.getElementById("MyChat").innerHTML += `<div class="container darker"></div>`;
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


//page HTML's
function MessagePage()
{
    document.getElementById("MenuButtonOne").innerHTML = `<button onclick="SwipePage()">Swipe Page</button>`;
    document.getElementById("MenuButtonTwo").innerHTML = `<button onclick="SettingsPage()">Settings Page</button>`;
    document.getElementById("Bottom").innerHTML = `<input class="ChatBox" type="text" id="ChatBox"/> <button class="Send" onclick="AddChat()">Send</button>`;
    document.getElementById("Middle").innerHTML = 
        `<div id="MessagePageContainer" class="MessagePageContainer">
        <div id="SideBar" class="SideBar">
            
        </div>
        <div id="MessageContainer" class="MessageContainer">
            <div id="MyChat" class="MyChat"></div>
            <div id="YouChat" class="YouChat"></div>
        </div>
    </div>
    `;
}
function SettingsPage() {
    document.getElementById("MenuButtonOne").innerHTML = `<button onclick="SwipePage()">Swipe Page</button>`;
    document.getElementById("MenuButtonTwo").innerHTML = `<button onclick="MessagePage()">Message Page</button>`;
    document.getElementById("Middle").innerHTML = `<div>
                                                    hei settings page;
                                                  </div>`;
    document.getElementById("Bottom").innerHTML = "";
}
function SwipePage()
{
    document.getElementById("MenuButtonOne").innerHTML = `<button onclick="SettingsPage()">Settings Page</button>`;
    document.getElementById("MenuButtonTwo").innerHTML = `<button onclick="MessagePage()">Message Page</button>`;
    document.getElementById("Middle").innerHTML =`
        <div id="SwipePageContainer" class="SwipePageContainer">
        
        <div id="SwipeName" class="SwipeName">
            John Doe
        </div>
        <div id="SwipeImage" class="SwipeImage">
            <img src="https://www.vrc.crim.cam.ac.uk/VRCconferences/conference/cplenaries/pelnspeakers/person-placeholder.jpg/image" />
        </div>
        <div id="SwipeButtons" class="SwipeButtons">
            <button onclick="LikeAndDislike(this)">Like</button>
            <button onclick="LikeAndDislike(this)">Dislike</button>
        </div>

        </div>
    `;
    document.getElementById("Bottom").innerHTML = "";
}

function LoginPage()
{
    document.getElementById("Middle").innerHTML = `<table style="border: 1px double black">
            <tr>
                <td><div>Username: </div></td>
                <td><input type="text" id="Username" /></td>
            </tr>
            <tr>
                <td><div>Password: </div></td>
                <td><input type="password" id="Password" /></td>
            </tr>
        </table>
        <button onclick="LoginCheck()">Login</button> <button onclick="NewAccount()">New Account</button> <button>Forgot Password</button>`;
    document.getElementById("Bottom").innerHTML = "";
}
function NewAccountPage() {
    document.getElementById("Middle").innerHTML =`<table>
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
    <td><select name="Preference">
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
    <button onclick="CreateAccount()">Create Account</button>`;
    document.getElementById("Bottom").innerHTML = "";
}