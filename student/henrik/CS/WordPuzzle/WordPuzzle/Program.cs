using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;

namespace WordPuzzle
{
    class Program
    {
        static void Main(string[] args)
        {
            ListMain();

        }

        private static string[] ListMain()
        {
            var lastWord = string.Empty;
            var filePath = @"C:\Users\Geir\Downloads\ordbank_bm\fullform_bm.txt";
            foreach (var line in File.ReadLines(filePath))
            {
                var parts = line.Split('\t');
                var word = parts[1];
                if (word != lastWord)
                {
                    if (word.Length > 7 && word.Length < 10)
                    {
                        if (!word.Contains("-") && !word.Contains(" "))
                        {
                            var list = new List<string>();
                            list.Add(word);
                            return list.ToArray();

                        }
                    }
                }

                lastWord = word;
            }

            return null;
        }
    }
}