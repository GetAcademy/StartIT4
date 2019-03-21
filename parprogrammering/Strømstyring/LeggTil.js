data.buildings.push({ Adresse: UsernameTwo, PostNr: PasswordTwo, Areal: , Birthday: Sted: Kategori: Oppvarming:  })
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