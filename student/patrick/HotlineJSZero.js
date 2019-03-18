var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var CheckAge = new Date(year - 18, month, day)
var BirthDate;
var BirthDateYear;
var BirthDateDay;
var BirthDateMonth;
var BirthDateFull;


function LoginCheck()
{
    if (document.getElementById("Username").value == "patrick" && document.getElementById("Password").value == "123abc")
    {
        SwipePage();
    }
}
function NewAccount()
{
    NewAccountPage();
}

function CreateAccount() {
    if (document.getElementById("UsernameOne").value == document.getElementById("UsernameTwo").value && document.getElementById("E-mailOne").value == document.getElementById("E-mailTwo").value && document.getElementById("PasswordOne").value == document.getElementById("PasswordTwo").value && BirthDateFull <= CheckAge) {
        alert("A confirmation email has been sent!");
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
    if (Button.innerText == "Like") {
        document.getElementById("Image").innerHTML = `<img src="data:image/png;base64,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"/>`;
        alert("You Liked John Doe!");
        if (Math.random() >= 0.5) {
            alert("You Matched With John Doe!!!");
        }
    }
    else {
        document.getElementById("Image").innerHTML = `<img src="http://www.landscapingbydesign.com.au/wp-content/uploads/2018/11/img-person-placeholder.jpg" />`;
        alert("You Disliked John Doe");
    }
}

function MessagePage()
{
    document.getElementById("content").innerHTML = 
    `<div>
        hei meldingside
        <button onclick="SwipePage()">Swipe Page</button>
        <button onclick="SettingsPage()">Settings Page</button>
    </div>`;
}
function SettingsPage()
{
    document.getElementById("content").innerHTML = 
    `<div>
        hei Settings page
        <button onclick="SwipePage()">Swipe Page</button>
        <button onclick="MessagePage()">Message Page</button>
    </div>`;
}
function SwipePage()
{
    document.getElementById("content").innerHTML =
        `<div id="GridContainer" class="GridContainer">

        <div id="Toolbar" class="Grid-1">
            <h1 id="HotlineHead">HotLine</h1>
            <p id="Triangle">△</p>
            <button onclick="location.href='HotlineHTMLSecond.html'">Message Page</button>
            <button onclick="location.href='HotlineHTMLThird.html'">Settings Page</button>
        </div>
        <div class="Grid-2" id="Name">
            John Doe
        </div>
        <div class="Grid-3" id="Image">
            <img src="https://www.vrc.crim.cam.ac.uk/VRCconferences/conference/cplenaries/pelnspeakers/person-placeholder.jpg/image" />
        </div>
        <div class="Grid-4">
            <button onclick="LikeAndDislike(this)">Like</button>
            <button onclick="LikeAndDislike(this)">Dislike</button>
        </div>

    </div>`;
}
function SettingsPage()
{
    document.getElementById("content").innerHTML =
        `<div>
        hei Settings page
        <button onclick="SwipePage()">Swipe Page</button>
        <button onclick="MessagePage()">Message Page</button>
    </div>`;
}
function LoginPage()
{
    document.getElementById("content").innerHTML =
        `<table style="border: 1px double black;">
            <tr>
                <td><div>Username: </div></td>
                <td><input type="text" id="Username" /></td>
            </tr>
            <tr>
                <td><div>Password: </div></td>
                <td><input type="text" id="Password" /></td>
            </tr>
        </table>
        <button onclick="LoginCheck()">Login</button> <button onclick="NewAccount()">New Account</button> <button>Forgot Password</button>`;
}
function NewAccountPage()
{
    document.getElementById("content").innerHTML =
        `<div>Create Account</div>
    <div>Username: <input type="text" id="UsernameOne" /></div>
    <div>Confirm Username: <input type="text" id="UsernameTwo" /></div>
    <div>E-mail: <input type="email" id="E-mailOne" /></div>
    <div>Confirm E-mail: <input type="email" id="E-mailTwo" /></div>
    <div>Password: <input type="password" id="PasswordOne" /></div>
    <div>Confirm Password: <input type="password" id="PasswordTwo" /></div>
    <div>Birthdate: <input onchange="DateChange()" type="date" id="Birthdate" /></div>
    <div>
        Dating Preference:
        <select name="Preference">
            <option value="Women">Women</option>
            <option value="Men">Men</option>
            <option value="Alien">Alien</option>
            <option value="Men and Women">Men & Women</option>
            <option value="Men and Alien">Men & Alien</option>
            <option value="Women and Alien">Women & Alien</option>
            <option value="Men and Alien and Women">Men & Alien & Women</option>
        </select>
    </div>
    <button onclick="CreateAccount()">Create Account</button>`;
}

