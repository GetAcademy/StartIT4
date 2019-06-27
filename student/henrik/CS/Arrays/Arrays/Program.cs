using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            int t = 3;
            int h = 0;
            for (var i = 0; i < 7; i++)
            {
                if (h <= 3)
                {
                    for (var j = 0; j <= h; j++)
                    {
                        Console.Write("#");
                    }
                }
                else
                {
                    for (var s = 0; s < t; s++)
                    {
                        Console.Write("#");
                    }

                    t--;
                }
                
                Console.Write("\n");
                h++;



            }
        }
    }
}
