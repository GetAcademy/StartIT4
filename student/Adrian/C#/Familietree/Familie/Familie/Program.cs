using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Familie
{
    class Program
    {
        static void Main(string[] args)
        {
            bool programRunning = true;

            Console.WriteLine("Velkommen til slektstreprogrammet.");
            Console.WriteLine("skriv <hjelp> om du vil se de tilgjengelige kommandoene");


            while (programRunning)
            {


                var userInput = Console.ReadLine().ToUpper();
                if (userInput == "HJELP")
                {
                    Hjelp();
                }
                if (userInput == "LISTE")
                {
                    Show();
                }

                if (userInput.StartsWith("VIS"))
                {
                    var userInputID = userInput.Substring(4);
                    List(Int32.Parse(userInputID));
                }
            }
        }
        static void Hjelp()
        {
            Console.WriteLine("De tilgjengelige kommandoene er:");
            Console.WriteLine(" - liste: lister alle personer med id, fornavn, fødselsår og dødsår");
            Console.WriteLine("          lister også navn og id på mor og far om det er registrert.");
            Console.WriteLine("");
            Console.WriteLine(" - vis <id>: viser en bestemt person med mor, far og barn.");
        }
    }
}
