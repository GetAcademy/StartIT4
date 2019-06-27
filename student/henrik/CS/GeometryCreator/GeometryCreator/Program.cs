using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Net.Sockets;
using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace GeometryCreator
{
    class Program
    {
        public static void Main(string[] args)
        {
            int row2 = 6;
            for (var x = 2; x < 10; x+= 2)
            {
                if (x < 8)
                {
                    for (var space2 = 0; space2 < row2; space2+=2)
                    {
                        Console.Write(" ");
                    }
                }
                for (var y = 0; y < x; y++)
                {
                    Console.Write("#");
                }

                row2 -= 2;
                Console.Write("\n");
            }

            int row = 8;
            
            for (var line = 0; line < 4; line++)
            {
                if (line >= 1)
                {
                    for (var space = 0; space < line; space++)
                    {
                        Console.Write(" ");
                    }
                }
                for (var i = 0; i < row; i++)
                {

                    Console.Write("#");
                }

                row -= 2;
                Console.Write("\n");
            }
        }





    }
}
