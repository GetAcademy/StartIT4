using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoingAtHomeChapter3Task
{
    class Program
    {
        static void Main(string[] args)
        {
            Exercise3_3_AscendingOrder();
            Exercise3_3_DescendingOrder();
        }


       




        private static void Exercise3_3_AscendingOrder()
        {
            int[] ascendingNumbers = { 1, 2, 2, 3, 4, 4, 2, 6, 8, 9 };
            foreach (var number in ascendingNumbers) Console.Write(number + " ");
            {
                Console.WriteLine($"Sorted in ascending order" +
                                  $"= {IsSortedAfterSmallToBigger(ascendingNumbers)}");
            }
            ascendingNumbers = new[] { 1, 2, 3, 3, 4, 4, 5, 5, 7, 7, 8, 9 };
            foreach (var number in ascendingNumbers) Console.Write(number + " ");
            {
                Console.WriteLine($"Sorted in ascending order" +
                                  $" = {IsSortedAfterSmallToBigger(ascendingNumbers)}");
            }
        }

        private static void Exercise3_3_DescendingOrder()
        {
            int[] descendingNumbers = { 9, 9, 8, 7, 7, 5, 5, 7, 4, 3, 3, 2 };
            foreach (var number in descendingNumbers) Console.Write(number + " ");
            {
                Console.WriteLine($"Sorted in descending order = " +
                                  $"{IsSortedAfterBiggerToSmaller(descendingNumbers)}");
            }
            descendingNumbers = new[] { 9, 9, 8, 7, 7, 5, 5, 4, 4, 3, 3, 2, 1 };
            foreach (var number in descendingNumbers) Console.Write(number + " ");
            {
                Console.WriteLine($"Sorted in descending order = " +
                                  $"{IsSortedAfterBiggerToSmaller(descendingNumbers)}");
            }
        }

        private static bool IsSortedAfterSmallToBigger(int[] ascendingNumbers)
        {
            for (var i = 1; i < ascendingNumbers.Length; i++)
            {
                if (ascendingNumbers[i] < ascendingNumbers[i - 1]) return false;
            }
            return true;
        }

        private static bool IsSortedAfterBiggerToSmaller(int[] descendingNumbers)
        {
            for (var i = 1; i < descendingNumbers.Length; i++)
            {
                if (descendingNumbers[i] > descendingNumbers[i - 1]) return false;
            }
            return true;
        }
    }
}
