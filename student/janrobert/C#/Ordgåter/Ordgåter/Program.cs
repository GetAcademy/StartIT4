using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ordgåter
{
    class Program
    {
        private static readonly Random Random = new Random();

        static void Main(string[] args)
        {
            var words = GetWords();
            var wordCount = 10;
            while (wordCount > 0)
            {
                var foundMatch = GetWordRiddle(words);
                if (foundMatch) wordCount--;
            }
        }

        private static bool GetWordRiddle(string[] words)
        {
            var randomWordIndex = Random.Next(words.Length);
            var selectedWord = words[randomWordIndex];
            Console.WriteLine("Valgt ord: " + selectedWord);

            foreach (var word in words)
            {
                if (!FirstLastEqualSecondFirst(selectedWord, word)) continue;
                Console.WriteLine(word);
                return true;
            }

            Console.WriteLine("<Ingen match.>");
            return false;
        }

        private static bool FirstLastEqualSecondFirst(string word1, string word2)
        {
            return FirstLastEqualSecondFirst(4, word1, word2)
                   || FirstLastEqualSecondFirst(5, word1, word2);
        }
        private static bool FirstLastEqualSecondFirst(int commonLength, string word1, string word2)
        {
            var lastPartOffFirstWord = word1.Substring(word1.Length - commonLength, commonLength);
            var firstPartOffSecondWord = word2.Substring(0, commonLength);

            return lastPartOffFirstWord == firstPartOffSecondWord;
        }

        static string[] GetWords()
        {
            var lastWord = string.Empty;
            var filePath = @"C:\Users\allum\Dropbox\GET\C#\Ordgåter\Ordgåter\fullform_bm.txt";
            var wordList = new List<string>();
            foreach (var line in File.ReadLines(filePath))
            {
                var parts = line.Split('\t');
                var word = parts[1];
                if (word != lastWord && word.Length > 7 && !word.Contains("-")) wordList.Add(word);
                lastWord = word;
            }

            return wordList.ToArray();

        }
    }
}
