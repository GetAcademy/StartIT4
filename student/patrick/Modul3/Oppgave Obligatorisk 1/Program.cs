using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Oppgave_Obligatorisk_1
{
    class Program
    {
        static int Identity = 0;
        static List<Person> Relatives = new List<Person>();

        static void Main()
        {
            bool End = false;
            CreateRelatives();
            Console.WriteLine("Familietre oppgave bruk 'help' kommandoen om du ønsker en liste med kommandoer");
            while (!End)
            {
                Console.WriteLine();
                Console.WriteLine("skriv inn en kommando!");
                Console.WriteLine();
                string input = Input();
                switch (input)
                {
                    case "HELP":
                        Console.WriteLine("'liste': vil vise deg en liste over alle personer i familietre registeret");
                        Console.WriteLine("'vis': vil gi deg mulighet til å skrive inn ID nummeret til en slektning som da hentes frem");
                        Console.WriteLine("'slutt': vil avslutte slektstre programmet");
                        break;
                    case "LISTE":
                        Liste();
                        break;
                    case "VIS":
                        Console.WriteLine("input slektnings ID:");
                        Vis(Convert.ToInt32(Input()));
                        break;
                    case "SLUTT":
                        Console.WriteLine("Hade");
                        End = true;
                        break;

                }
            }
        }

        static void Liste()
        {
            foreach (Person Relative in Relatives.ToArray())
            {
                if(Relative.Dad != null && Relative.Mom != null)
                {
                    Relative.Show();
                }
                else
                {
                    Relative.Show(false);
                }
            }
        }

        static void Vis(int SlektningID)
        {
            Person[] array = Relatives.ToArray();
            for (int i = 0; i < array.Length; i++)
            {
                Person Relative = array[i];
                if(Relative.Id == SlektningID)
                {
                    if (Relative.Dad != null && Relative.Mom != null)
                    {
                        Relative.Show();
                    }
                    else
                    {
                        Relative.Show(false);
                    }
                }
            }
        }

        static string Input()
        {
            return Console.ReadLine().ToUpper();
        }

        static void CreateRelatives()
        {
            Relatives.Add(new Person("Jonas", "Brattås", Identity, "1712", "Uknown"));
            Identity++;
            Relatives.Add(new Person("Lise", "Brattås", Identity, "1710", "1754"));
            Identity++;
            Relatives.Add(new Person(Relatives[0], Relatives[1], "Geir", "Brattås", 3, "1728", "1759"));
        }
    }
}

