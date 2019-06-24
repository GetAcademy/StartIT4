using System;

namespace PasswordGenerator
{
    class Program
    {
        static void Main(string[] args)
        {
            if (args.Length != 2)
            {
                Console.WriteLine("PasswordGenerator <length> <options>");
                Console.WriteLine("  Options:");
                Console.WriteLine("  - l = lower case letter");
                Console.WriteLine("  - L = lower case letter");
                Console.WriteLine("  - d = digit");
                Console.WriteLine("  - s = special character (!\"#¤%&/(){}[]");
            }
            Console.WriteLine("PasswordGenerator");
        }
    }
}