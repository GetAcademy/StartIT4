using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Input_output_Undervisning
{
    class Program
    {
        /*Input og Output skjerm/tastatur
         Input og Output fil
            
            Encoding
            using - for å dispose fil-ressurser
            List<string>() - ToArray()
            string.contains
            string.Length
            string.Substring

            Random
         */
        static void Main(string[] args)
        {
            //var path = @"C:\Users\Ibrahim\source\repos\Input_output_Undervisning\Input_output_Undervisning\data.txt";
            //var myList = ListFromFile(path);
            //ShowLines(myList);


            //Console.WriteLine("Hei, hva heter du?");
            //var name = Console.ReadLine();

            //Console.WriteLine("Hei, "
            //+ name.Substring(0, 1).ToUpper()
            //+ name.Substring(1, name.Length-1).ToLower());


            EncodingTest();
            //Console.WriteLine("Hei, navnet ditt er " + name.Length + " bokstaver langt!");

            //if (name.Contains("er"))
            //{
            //    Console.WriteLine("navnet ditt inneholder \"er\".");
            //}
        }

        private static void EncodingTest()
        {
            var path = @"C:\Users\Ibrahim\source\repos\Input_output_Undervisning\Input_output_Undervisning\data.txt";
            var bytes = File.ReadAllBytes(path);
            foreach (var b in bytes)
            {
                Console.Write((char)b);
            }
        }

        private static void ShowLines(string[] myList)
        {
            for (var index = 0; index < myList.Length; index++)
            {
                var line = myList[index];
                Console.WriteLine(line);
            }
        }

        private static string[] ListFromFile(string path)
        {
            var myList = new List<string>();
            using (var streamReader = File.OpenText(path))
            {
                string line = null;
                do
                {
                    line = streamReader.ReadLine();
                    if (line != null)
                    {
                        myList.Add(line);
                    }
                } while (line != null);
            }

            return myList.ToArray();
        }
    }
}
