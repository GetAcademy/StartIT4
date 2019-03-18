function LoginCheck()
{
    if (document.getElementById("Username").value == "patrickjoh33@hotmail.com" && document.getElementById("Password").value == "oklongen")
    {
        return location.href = 'HotlineHTMLFirst.html';
    }
}
function NewAccount()
{
    return location.href = 'HotlineHTMLNewAccount.html';
}
