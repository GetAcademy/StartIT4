using System;
using System.Linq;

namespace PassordGenerator
{
    class Program
    {
        private static readonly Random Random = new Random();
        private static void Main(string[] args)
        {
            if (!IsValid(args))
            {
                HelpText();
                return;
            }
            var length = Convert.ToInt32(args[0]);
            var options = args[1];

            var pattern = options.PadRight(length, 'l');
            var password = string.Empty;
            while (pattern.Length > 0)
            {
                var randomIndex = Random.Next(0, pattern.Length - 1);
                var category = pattern[randomIndex];
                pattern = pattern.Substring(0, randomIndex) 
                          + pattern.Substring(randomIndex + 1, pattern.Length - randomIndex -1);


                if (category == 'l') password += GetRandomLowerCaseLetter();
                else if (category == 'L') password += GetRandomUpperCaseLetter();
                else if (category == 'd') password += GetRandomDigit();
                else password += GetRandomSpecialCharacter();
            }
            Console.WriteLine(password);
        }

        private static char GetRandomLowerCaseLetter()
        {
            return GetRandomLetter('a', 'z');
        }

        private static char GetRandomUpperCaseLetter()
        {
            return GetRandomLetter('A', 'Z');
        }

        private static char GetRandomSpecialCharacter()
        {
            var allSpecialCharacters = "!#¤%&/(){}[]";
            var index = Random.Next(0, allSpecialCharacters.Length-1);
            return allSpecialCharacters[index];

        }

        private static char GetRandomDigit()
        {
            return Random.Next(0, 9).ToString()[0];
        }

        private static char GetRandomLetter(char min, char max)
        {
            return (char)Random.Next(min, max);
        }

        private static bool IsValid(string[] args)
        {
            if (args.Length != 2)
            {
                return false;
            }

            var lengthStr = args[0];
            var options = args[1];

            foreach (var character in options)
            {
                if (character != 'l'
                    && character != 'L'
                    && character != 'd'
                    && character != 's'
                )
                {
                    return false;
                }
            }

            foreach (var character in lengthStr)
            {
                if (!char.IsDigit(character))
                {
                    return false;
                }
            }
            return true;


        }

        private static void HelpText()
        {
            Console.WriteLine("PasswordGenerator <length> <options>");
            Console.WriteLine("".PadLeft(3) + "Options:");
            Console.WriteLine("".PadLeft(3) + "- l = lower case letter");
            Console.WriteLine("".PadLeft(3) + "- L = upper case letter");
            Console.WriteLine("".PadLeft(3) + "- d = digit");
            Console.WriteLine("".PadLeft(3) + "- s = special character (!#¤%&/(){}[]");
            Console.WriteLine("Example: PasswordGenerator 14 lLssdd");
            Console.WriteLine("".PadLeft(7) + "Min. 1 lower case");
            Console.WriteLine("".PadLeft(7) + "Min. 1 upper case");
            Console.WriteLine("".PadLeft(7) + "Min. 2 special characters");
            Console.WriteLine("".PadLeft(7) + "Min. 2 digits");
        }
    }
}
