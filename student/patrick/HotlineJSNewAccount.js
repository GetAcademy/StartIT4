var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var CheckAge = new Date(year -18, month, day)
var BirthDate;
var BirthDateYear;
var BirthDateDay;
var BirthDateMonth;
var BirthDateFull;
function NewAccount()
{
    if (document.getElementById("UsernameOne").value == document.getElementById("UsernameTwo").value && document.getElementById("E-mailOne").value == document.getElementById("E-mailTwo").value && document.getElementById("PasswordOne").value == document.getElementById("PasswordTwo").value && BirthDateFull <= CheckAge)
    {
        alert("A confirmation email has been sent!");
        return location.href = 'HotlineHTMLZero.html';
    }
}
function DateChange()
{
    BirthDate = document.getElementById("Birthdate").value;
    BirthDateYear = BirthDate.substr(0, 4);
    BirthDateMonth = BirthDate.substr(5, 2);
    BirthDateDay = BirthDate.substr(8, 2);
    BirthDateFull = new Date(BirthDateYear, BirthDateMonth, BirthDateDay);
}
