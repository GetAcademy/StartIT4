using System;

namespace PurePuzzles
{
    class Program
    {
        static void Main(string[] args)
        {
            //Sideways Triangle
            /*for (int row = 1; row <= 7; row++)
            {
                for (int hasNum = 1; hasNum <= 4 - Math.Abs(4 - row); hasNum++)
                {
                    Console.Write('#');
                }
                Console.Write('\n');
            }*/

            //2-1
            /*for (int row = 1; row <= 4; row++)
           {
               for (int space = 1; space <= (-1) + row; space++)
               {
                   Console.Write(" ");
               }
               for (int hasNum = 1; hasNum <= 10 - (row * 2); hasNum++)
               {
                   Console.Write('#');
               }


               Console.Write('\n');
           }*/

            //2-2
            /*for (int row = 1; row <= 4; row++)
            {
                for (int space = 1; space <= 4 - row; space++)
                {
                    Console.Write(" ");
                }
                for (int hasNum = 1; hasNum <= 8 - Math.Abs(8 - (row*2)); hasNum++)
                {
                    Console.Write('#');
                }
                Console.Write('\n');
            }

            for (int row = 1; row <= 4; row++)

            {
                for (int space = 1; space <= (-1) + row; space++)
                {
                    Console.Write(" ");
                }
                for (int hasNum = 1; hasNum <= 10 - (row * 2); hasNum++)
                {
                    Console.Write('#');
                }
                Console.Write('\n');
            }*/

            //2-3
            /*for (int row = 1; row <= 4; row++)
            {
                for (int space = 1; space <= (-1) + row; space++)
                {
                    Console.Write(' ');
                }

                for (int hasNum = 1; hasNum <= 0 + row; hasNum++)
                {
                    Console.Write('#');
                }

                for (int space = 1; space <= 16 - (4 * row); space++)
                {
                    Console.Write(' ');
                }
                for (int hasNum = 1; hasNum <= 0 + row; hasNum++)
                {
                    Console.Write('#');
                }
                Console.Write('\n');
            }
            for (int row = 1; row <= 4; row++) {

               for (int space = 1; space <= 4 - row; space++)
               {
                   Console.Write(' ');
               }
               for (int hasNum = 1; hasNum <= 5 - row; hasNum++)
               {
                   Console.Write('#');
               }

               for (int space = 1; space <= -4 + (4 * row); space++)
               {
                   Console.Write(' ');
               }
               for (int hasNum = 1; hasNum <= 5 - row; hasNum++)
               {
                   Console.Write('#');
               }
               Console.Write('\n');
            }*/

        }
    }
}