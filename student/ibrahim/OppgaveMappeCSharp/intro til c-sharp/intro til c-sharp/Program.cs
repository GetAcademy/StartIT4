using System;

namespace UndervisningIntroCS
{
    class Program
    {
        /* To hovedting inne i en klasse:
         *      Felt - tilsvarer (nesten) Javascript globale variable
         *      Metoder - tilsvarer funksjon i Javascript
         */


        static void Main(string[] args)
        {
            //Deklarere en variabel av hver av de nevnte datatypene
            bool b;
            int i;
            float f;
            double d;
            string s;

            //Tilordning;
            b = true;
            i = 5;
            f = 3.2f;
            d = 1.2;
            s = "asdasd";

            //kan også deklarere å tilordne samtidig
            bool b2 = false;
            int i2 = 3;
            float f2 = 1.3f;
            double d2 = 7.7;
            string s2 = "asdasd";

            var b3 = false;
            var i3 = 9;
            var f3 = 5.5f;
            var d3 = 2.3;
            var s3 = "asdløkas";

            //if (args.Length == 0)
            //{
            //    Console.WriteLine("Hallo ! Ingen parametere. ");
            //}
            //else
            //{
            //    Console.WriteLine("Hallo ! Antall parametere: " + args.Length);
            //}

            //foreach (var text in args)
            //{
            //    Console.WriteLine("Parameter: " + text);
            //}
        }
    }
}
