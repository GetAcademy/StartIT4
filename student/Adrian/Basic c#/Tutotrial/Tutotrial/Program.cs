using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Tutotrial
{
    class Program // class
    {
        //Method, it run's when the program starts
        public static void Main(string[] args)
        {
            int num01;
            int num02;

            Console.Write("Type a number: ");
            num01 = Convert.ToInt32(Console.ReadLine());
            Console.Write("Type another: ");
            num02 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Resultat er " + num01 * num02);
            Console.ReadKey();
        }
    }
}
