using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Random numberGen = new Random();

            int numberOfAttempts = 0;
            int attempt = 0;

            while (attempt != 6)
            {
                attempt = numberGen.Next(1, 20);
                Console.WriteLine("Jeg gjør ingenting: " + attempt + ".");
                numberOfAttempts++;
            }




            Console.ReadKey();
        }
    }
}
