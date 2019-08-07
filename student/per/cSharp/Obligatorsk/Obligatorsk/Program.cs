using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Obligatorsk
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Person> PersonList = new List<Person>();
            PersonList.Add(new Person("Sverre", 14, "Slettleif", 2005));
            PersonList.Add(new Person("Ingrid", 15, "Slettleif", 2004));
            PersonList.Add(new Person("Haakon M", 46, "Slettleif", 1973));
            PersonList.Add(new Person("Mette", 36, "Slettleif", 1983));
            PersonList.Add(new Person("Marius", 22, "Slettleif", 1997));
            PersonList.Add(new Person("Harald", 87, "Slettleif", 1937));
            PersonList.Add(new Person("Sonja", 77, "Slettleif", 1947));
            PersonList.Add(new Person("Olav", 97, "Slettleif", 1903));
            string command;
            bool quitNow = false;
            while (!quitNow)
            {
                command = Console.ReadLine();
                switch (command)
                {
                    case "/hjelp":
                        Console.WriteLine("Skriv inn en '/vis id' f.eks: /vis Id1");
                        Console.WriteLine("Skrive /liste for liste over personer");
                        break;
                    case "/liste":
                        foreach (var Person in PersonList)
                        {
                            Console.WriteLine($"Etternavn: {Person.LastName}\nFornavn: {Person.FirstName}\nAlder: {Person.Age}\nFødselsår: {Person.BirthDate}");
                        }
                        break;
                    case "/vis":
                        Console.WriteLine(" ");
                        break;
                    case "/slutt":
                        quitNow = true;
                        break;
                    default:
                        Console.WriteLine("ukjent kommando " + command);
                        break;
                }
            }
        }
    }
}
