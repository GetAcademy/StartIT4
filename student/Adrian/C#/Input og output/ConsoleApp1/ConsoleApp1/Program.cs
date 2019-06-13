using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            
            //var myList = ListFromFile(path);
            //ShowLines(myList);

            //Console.WriteLine("Hva heter du?");
            //var name = Console.ReadLine();


            //Console.WriteLine("Hei, "
            //    + name.Substring(0,1).ToUpper()
            //    + name.Substring(1, name.Length-1).ToLower());

            EncodingTest();
            //012345
            //Adrian


            //Console.WriteLine("Hei navnet ditt er " + name.Length + " Bokstaver langt");

            //if (name.ToLower().Contains("er"))
            //{
            //    Console.WriteLine("Navnet ditt inneholder \"er\".");
            //}
        }

        private static void EncodingTest()
        {
            var path = @"C:\Users\adria\OneDrive\Documents\GitHub\StartIT4\student\Adrian\C#\Input og output\ConsoleApp1\ConsoleApp1\TextFile1.txt";
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
                int lineNo = 1;

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
