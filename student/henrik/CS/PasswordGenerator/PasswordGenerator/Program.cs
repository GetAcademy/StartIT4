using System;
using System.Linq;

namespace passwordGenerator
{
    class Program
    {
        static void Main(string[] args)
        {
            if (!IsValid(args))
            {
                Info();
                return;
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

        }

        public static bool IsValid(string[] args)
        {
            if (args.Length == 0 || args.Length == 1)
            {
                return false;
            }

            else if (args.Length == 2)
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
                            if (!userArgsLetter.Contains(character))
                            {
                                Console.WriteLine("test");
                                return true;
                            }

                            return false;
                        }

                    }

                    else
                    {
                        return false;
                    }
                }

                else
                {
                    return false;
                }
            }

            return false;
        }
    }
}
