using System;

namespace PasswordGenerator
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
                Console.WriteLine("Example: PasswordGenerator 14 Llssdd");
                Console.WriteLine("     Min. 1 lower case");
                Console.WriteLine("     Min. 2 upper case");
                Console.WriteLine("     Min. 2 special characters");
                Console.WriteLine("     Min. 2 digits");    
            
        }

        static void Main(string[] args)
        {
            if (args.Length == 0)
            {
                Info();
            }
            else if (args.Length == 2)
            {
                Console.WriteLine("Test");
            }
        }
    }
}
