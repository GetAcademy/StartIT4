function Randomiser(min, max)
{
    return Math.floor(Math.random() * (max - min) + min);
}

function RandomHealth(Level)
{
    var Number = 0;
    for (let i = 0; i < Level; i++)
    {
        Number += Randomiser(1, 11);
    }
    return Number;
}
function RandomAbilityScore()
{
    return Randomiser(7, 19);
}
function RandomLevel()
{
    return Randomiser(1, 21)
}
