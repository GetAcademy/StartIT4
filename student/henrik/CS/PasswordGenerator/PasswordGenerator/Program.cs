using System;
using System.Linq;

namespace passwordGenerator
{
    class Program
    {
        public static void Main(string[] args)
        {
            string generatedPassword = "";
            if (!IsValid(args))
            {
                Info();
                return;
            }
            string pattern = args[1];
            string length = args[0];
            int i = 0;
            if (!Int32.TryParse(length, out i))
            {
                i = -1;
            }
            if (pattern.Length > i)
            {
                Info();
            }
            if (pattern.Length < i)
            {
                pattern = pattern.PadRight(i, 'l');

                while (pattern.Length >= 1)
                {
                    if (pattern.EndsWith("L"))
                    {
                        WriteRandomUpperCaseLetter();
                        pattern = pattern.Substring(0, pattern.Length - 1);
                    }
                    else if (pattern.EndsWith("l"))
                    {
                        WriteRandomLowerCaseLetter();
                        pattern = pattern.Substring(0, pattern.Length - 1);
                    }
                    else if (pattern.EndsWith("d"))
                    {
                        WriteRandomDigit();
                        pattern = pattern.Substring(0, pattern.Length - 1);
                    }
                    else if (pattern.EndsWith("s"))
                    {
                        WriteRandomSpecialCharacter();
                        pattern = pattern.Substring(0, pattern.Length - 1);
                    }


                }
            }
            

        }
        static void Info()
        {
            Console.WriteLine("Password Generator");
            Console.WriteLine("  Options: ");
            Console.WriteLine("     - l = lower case letter");
            Console.WriteLine("     - L = upper case letter");
            Console.WriteLine("     - d = digit");
            Console.WriteLine("     - s = special character");
            Console.WriteLine("");
            Console.WriteLine("Example: PasswordGenerator 14 Llssdd");
            Console.WriteLine("     Min. 1 lower case");
            Console.WriteLine("     Min. 2 upper case");
            Console.WriteLine("     Min. 2 special characters");
            Console.WriteLine("     Min. 2 digits");
            Console.WriteLine("Additional information:     ");
            Console.WriteLine("     Password options can not be longer than the specified length");

        }

        public static bool IsValid(string[] args)
        {
            if (args.Length == 0 || args.Length == 1)
            {
                return false;
            }
            if (args.Length == 2)
            {
                string userArgsDigit = args[0];
                string userArgsLetter = args[1];
                int value;
                if (int.TryParse(userArgsDigit, out value))
                {
                    const string notValidLetters = "abcefghijkmnopqrtuvwxyz";
                    if (userArgsLetter.Contains("L") || userArgsLetter.Contains("l") || userArgsLetter.Contains("d") ||
                        userArgsLetter.Contains("s"))
                    {
                        foreach (var character in notValidLetters)
                        {
                            if (userArgsLetter.Contains(character))
                            {
                                return false;
                            }
                        }
                        return true;
                    }
                    {
                        return false;
                    }
                }
                {
                    return false;
                }
            }
            return false;
        }

        public static void WriteRandomLowerCaseLetter()
        {
            generatedPassword += "x";
        }

        public static void WriteRandomUpperCaseLetter()
        {
            generatedPassword += "Y";
        }

        public static void WriteRandomDigit()
        {
            generatedPassword += "3";
        }

        public static void WriteRandomSpecialCharacter()
        {
            generatedPassword += "!";
        }
    }
}
