using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Startliste
{
    class Program
    {
        static void Main(string[] args)
        {
            var read = new StreamReader("startlist.csv");
            read.ReadLine();
            while (true)
            {
                var line = read.ReadLine();
                if (line == null) break;
                var skriv = line.Split(',');
                foreach (var i in skriv)
                {
                    Console.WriteLine(i.Trim('"'));
                }
            }
        }
    }
}
