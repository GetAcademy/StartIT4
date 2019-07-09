using System;


namespace Oppgave___Hva_gjør_denne_koden
{
    class Program
    {
        static void Main(string[] args)
        {
            ReadTextAndShowCharCounts(250);
        }

        private static void ReadTextAndShowCharCounts(int range)
        {
            string text = "something";
            while (!string.IsNullOrWhiteSpace(text))
            {
                text = Console.ReadLine();
                var counts = CountChar(text, range);
                ShowCounts(range, counts, text);
            }
        }

        private static void ShowCounts(int range, int[] counts, string text)
        {
            int total = text.Length;

            for (var i = 0; i < range; i++)
            {
                if (counts[i] == 0) continue;
                var math = ((counts[i] * 100) / total);
                var character = (char) i;
                Console.WriteLine($"{character,4}" + " - " + math + "%");
            }

        }

        private static int[] CountChar(string text, int range)
        {
            var counts = new int[range];
            foreach (var character in text)
            {
                counts[(int) character]++;
            }

            return counts;
        }
    }
}
