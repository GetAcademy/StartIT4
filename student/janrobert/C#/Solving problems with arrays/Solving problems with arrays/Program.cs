using System;

namespace Solving_problems_with_arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            //Search();
            //FindMax();
            //Sort();
            //Average();
            //FindMode();

            //Oppgave3_3();
        }

        private static void Oppgave3_3()
        {
            int[] intArray = new[]
            {
                1, 2, 4, 5, 7, 8, 9, 6, 45, 3, 6, 8, 6, 4, 4, 7, 8, 9, 9, 8, 7, 6, 554, 545, 4, 6546, 456, 456, 453, 2,
                3, 42, 123
            };
            Array.Sort(intArray);
            Console.WriteLine(isSorted(intArray));

            bool isSorted(int[] arr)
            {
                for (int i = 1; i < arr.Length; i++)
                {
                    if (arr[i - 1] > arr[i])
                    {
                        return false;
                    }
                }

                return true;
            }
        }

        private static void FindMode()
        {
            int[] surveyData = { 4, 7, 3, 8, 9, 7, 3, 9, 9, 3, 3, 10 };
            Array.Sort(surveyData);
            int mosFrequent = -1;
            int highestFrequency = 0;
            int currentFrequency = 0;
            var arraySize = surveyData.Length;
            for (int i = 0; i < arraySize; i++)
            {
                currentFrequency++;
                if (i == arraySize - 1 || surveyData[i] != surveyData[i + 1])
                {
                    if (currentFrequency > highestFrequency)
                    {
                        highestFrequency = currentFrequency;
                        mosFrequent = surveyData[i];
                    }

                    currentFrequency = 0;
                }
            }

            Console.WriteLine($"Det var flest {mosFrequent}-ere ({highestFrequency})");
        }

        private static void Average()
        {
            int[] gradeArray = { 87, 76, 100, 97, 64, 83, 88, 92, 74, 95 };
            double sum = 0;
            for (int i = 0; i < gradeArray.Length; i++)
            {
                sum += gradeArray[i];
            }

            double average = sum / gradeArray.Length;
            Console.WriteLine(average);
        }

        private static void Sort()
        {
            string[] txts = new[] { "Hei", "heio", "på", "deg", "hurramegrundt" };
            Console.WriteLine("Før sortering : ");
            foreach (var txt in txts)
            {
                Console.WriteLine(txt);
            }

            Array.Sort(txts, Compare);
            Console.WriteLine("\nEtter sortering: ");
            foreach (var txt in txts)
            {
                Console.WriteLine(txt);
            }
        }
        private static int Compare(string x, string y)
        {
            if (x.Length == y.Length) return x.CompareTo(y);
            if (x.Length > y.Length) return -1;
            return 1;
        }


        private static void FindMax()
        {
            int[] intArray = { 10, 20, 30 };
            var maxSoFar = intArray[0];
            var maxSoFarIndex = 0;
            for (int i = 1; i < intArray.Length; i++)
            {
                if (intArray[i] > maxSoFar)
                {
                    maxSoFar = intArray[i];
                    maxSoFarIndex = i;
                }
            }

            Console.WriteLine($"Det høyeste tallet er {maxSoFar} og ligger i indeks {maxSoFarIndex}.");
        }

        private static void Search()
        {
            int[] intArray = { 10, 20, 30 };
            int targetValue = 10;
            int targetPos = 0;
            while (targetPos < intArray.Length && intArray[targetPos] != targetValue)
            {
                targetPos++;
            }

            var isFound = targetPos < intArray.Length;
            var text = isFound
                ? $"Fant verdien {targetValue} i indeks {targetPos}."
                : $"Fant ikke verdien {targetValue}";
            Console.WriteLine(text);
        }
    }
}
