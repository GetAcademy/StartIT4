using System;

// Namespace
namespace NumberGuesser
{
    // Main Class
    class Program
    {
        // Entry point Method
        static void Main(string[] args)
        {
            //Kjører AppInfo funksjonen for å få info
            AppInfo();

            //Spør om bruker info
            BrukerInfo();

             while (true)
            {

                // Svar
                // int correctNumber = 7;

                //Random nummer
                Random random = new Random();

                // Lager nytt riktig nummer vær gang
                int correctNumber = random.Next(1, 10);

                //gjett
                int guess = 0;

                // Spør bruker
                Console.WriteLine("Gjett en nummer mellom 0 og 10");

                //Ikke riktig
                while (guess != correctNumber)
                {
                    // Får bruker input
                    string input = Console.ReadLine();

                    // Husk at det skal være nummer
                    if (!int.TryParse(input, out guess))
                    {
                        //Skriv ut error melding 
                        PrintColorMessage(ConsoleColor.Red, "Don't be so stupid man, that is not a number man");

                        //Fortsett
                        continue;

                    }


                    //Cast to int and put in guess
                    guess = Int32.Parse(input);

                    // match
                    if (guess != correctNumber)
                    {
                        // Print error message
                        PrintColorMessage(ConsoleColor.Red, "You Suck, try maybe again");
                    }
                }

                // you won
                PrintColorMessage(ConsoleColor.Green, "You won man");

                // Spille igjen
                Console.WriteLine("Vil du spille igjen? [Y or N]");

                // Svar Y or N
                string answer = Console.ReadLine().ToUpper();

                if (answer == "Y")
                {
                    continue;
                }
                else if (answer == "N")
                {
                    return;
                }
            }
        }


        // Få og vis app info
        static void AppInfo()
        {
            // Start Here //
            string appName = "numberGueasser";
            string appVersion = "1.0.0";
            string appAuthor = "Adrian Nordahl";


            //Bytter tekst farge
            Console.ForegroundColor = ConsoleColor.Green;

            //Skriver ut app info
            Console.WriteLine("{0}: Version {1} by {2}", appName, appVersion, appAuthor);

            // Rester tekst farge
            Console.ResetColor();
        }

        // Spør for bruker info
        static void BrukerInfo()
        {
            //Spør brukeren om navn
            Console.WriteLine("Hva er navnet ditt?");

            //Få bruker info
            string inputName = Console.ReadLine();


            Console.WriteLine("Hello {0} La oss spille et spill...", inputName);
        }
        //Skriv ut Farge melding 
        static void PrintColorMessage(ConsoleColor color, string message)
        {
            //Skift Farge
            Console.ForegroundColor = color;

            // Fortell bruker at det ikke er et tall
            Console.WriteLine(message);

            //Reset farge
            Console.ResetColor();
        }
    }
}