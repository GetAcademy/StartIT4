using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Oppgave2_1();
        }

        private static void Oppgave2_1()
        {
            for (int row = 1; row <= 4; row++)
            {
                for (int hashNum = 1; hashNum <= row - 1; hashNum++)
                {
                    Console.Write(" ");
                }
            }
        }
    }
}
