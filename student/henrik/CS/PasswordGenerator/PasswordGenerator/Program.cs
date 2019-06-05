using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace passwordGenerator
{
    class Program
    {
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

        static void Main(string[] args)
        {
            if (args.Length == 0 || args.Length == 1)
            {
                Info();
            }
                     
            else if (args.Length == 2)
            {

                string userArgsDigit = args[0];
                string userArgsLetter = args[1];
                int value;

                if (int.TryParse(userArgsDigit, out value))
                {
                    if (userArgsLetter.Contains("L") || userArgsLetter.Contains("l") || userArgsLetter.Contains("d") || userArgsLetter.Contains("s"))
                    {
                        Console.WriteLine("test");
                    }

                    else
                    {
                        Info();
                    }
                }

                else
                {
                    Info();
                }
            }
 
        }
    }
}
