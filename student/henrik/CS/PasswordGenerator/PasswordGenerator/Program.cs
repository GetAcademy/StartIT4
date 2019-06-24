using System;
using System.Linq;
using System.IO;
using System.Security.Cryptography.X509Certificates;

namespace passwordGenerator
{
    class Program
    {
        public static string Password = string.Empty;
        static readonly Random Random = new Random();
        public static void Main(string[] args)
        { 
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
                Console.WriteLine("Your generated password is " + Password);
                Console.WriteLine("For which site is this password made?");
                string PassLocation = Console.ReadLine();
                File.AppendAllText(@"C:\Users\Geir\Documents\Password.txt", PassLocation + ": " + Password);
                File.AppendAllText(@"C:\Users\Geir\Documents\Password.txt", Environment.NewLine);
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
            Console.WriteLine("Example: PasswordGenerator 14 LLlssdd");
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
            string Letter = "abcdefghijklmnopqrstuvwxyzæøå";
            int Index = Random.Next(Letter.Length);
            Password += Letter[Index];
        }

        public static void WriteRandomUpperCaseLetter()
        {
            string UpperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ";
            int Index = Random.Next(UpperLetters.Length);
            Password += UpperLetters[Index];
        }

        public static void WriteRandomDigit()
        {
            Password += Random.Next(0, 9);
        }

        public static void WriteRandomSpecialCharacter()
        {
            string SpecialCharacters = "!#%&?=$£@";
            int index = Random.Next(SpecialCharacters.Length);
            Password += SpecialCharacters[index];
        }
    }
}
