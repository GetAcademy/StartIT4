using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OgreVent
{
    class Program
    {
        static void Main()
        {
            Console.WriteLine("###################################################################################################################");
            Console.WriteLine("###################################################################################################################");
            Console.WriteLine("###################################################################################################################");
            Console.WriteLine("###################################################################################################################");
            Console.WriteLine("###################################################################################################################");
            Console.WriteLine("#####     ■■■■■■     ■■■■■■■■     ■■■■       ■■■■■■     ■■          ■■     ■■■■■■     ■■■■■■■■    ■■■■■■■■     ####");
            Console.WriteLine("#####     ■■■■■■     ■■■■■■■■     ■■■■       ■■          ■■        ■■      ■■         ■■■■■■■■    ■■■■■■■■     ####");
            Console.WriteLine("#####     ■■  ■■     ■■           ■  ■       ■■           ■■      ■■       ■■         ■■    ■■       ■■        ####");
            Console.WriteLine("#####     ■■  ■■     ■■  ■■■■     ■  ■       ■■■■■■        ■■    ■■        ■■■■■■     ■■    ■■       ■■        ####");
            Console.WriteLine("#####     ■■  ■■     ■■    ■■     ■■■■       ■■             ■■  ■■         ■■         ■■    ■■       ■■        ####");
            Console.WriteLine("#####     ■■■■■■     ■■■■■■■■     ■  ■■      ■■              ■■■■          ■■         ■■    ■■       ■■        ####");
            Console.WriteLine("#####     ■■■■■■     ■■■■■■■■     ■   ■■     ■■■■■■           ■■           ■■■■■■     ■■    ■■       ■■        ####");
            Console.WriteLine("###################################################################################################################");
            Console.WriteLine("###################################################################################################################");
            Console.WriteLine("###################################################################################################################");
            Console.WriteLine("###################################################################################################################");
            Console.WriteLine("###################################################################################################################");
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("You were the squire of the late sir Yellegor Yellowflag, a monster slayer of great renown!");
            Console.WriteLine("Last night your master was killed in combat against a fierce ogre and you find yourself at the marketplace spending your last coppers on half a bread and some apples.");
            Console.WriteLine("With your tummy temporarily satisfied with nourishment and with no money or valuables to your name, and far from your home, you catch a glimpse of a poster in the corner of your eye");
            Console.WriteLine("You focus your attention on the poster, it is a wanted poster for the great ogre that killed your master, the bounty for the beast has tripled and now offers a gold price from the lord of 300 Gold Pieces");
            Console.WriteLine("And so your Quest to Slay The Ogre Begins!");
            string Location = "Markedplace";
            string Input()
            {
                return Console.ReadLine();
            }
            bool IsAlive = true;
            string MarkedPlaceInput = Input();
            while (IsAlive)
            {
                if (MarkedPlaceInput.ToUpper() == "LOOK LEFT" && Location == "Markedplace")
                {
                    Console.WriteLine();
                    Console.WriteLine("To your left you can see a thriving markedplace it is currently early in the morning and most of the merchants have set up their stand and started their day while some tardy merchants are still arriving or in the middle of setting up their stand, in the center of the markedplace there is a rather spacious well with a steady stream of locals regularly retrieving water from it. on the marketplace there is a merchant who sells fresh meat and vegetables from local hunters and farmers, another who sells jewelry and other trinkets, one who seems to sell metalworks mostly tools some weapons, mostly horseshoes and carpentry nails, and one merchant who you cant really say what he is selling, seems like a little bit of this a little bit of that probably just a load of junk, and a merchant who hasnt completely set up his stand just yet who sells armor and good shoes and backpacks fit for the most travel hungry adventurer.");
                    MarkedPlaceInput = Input();
                }
                else if (MarkedPlaceInput.ToUpper() == "LOOK RIGHT" && Location == "Markedplace")
                {
                    Console.WriteLine();
                    Console.WriteLine("To your right you can see the chapel where youre late master Yellegor Yellowflag was taken for burial preperations as he was lesser nobleman not just some mere peasant like yourself. Outside the chapel the flaggelant militia of the holy order of the Phoenix stands guard in rough tattered clothing seemingly non uniform with the exception of the holy symbol representing their god and their order hanging around their necks, the symbols are made of wood. they carry spears and several of them in munching on a loaf of bread in the current moment. the chapels reinforced front entrance is open and the puplic is seemingly free to enter and leave at their own behest.");
                    MarkedPlaceInput = Input();
                }
                else if (MarkedPlaceInput.ToUpper() == "HELP" && Location == "Markedplace")
                {
                    Console.WriteLine();
                    Console.WriteLine("Current Input Opportunities:");
                    Console.WriteLine("Look Left");
                    Console.WriteLine("Look Right");
                    MarkedPlaceInput = Input();
                }
                else
                {
                    Console.WriteLine();
                    Console.WriteLine("Sorry you cant do that right now, or possibly even ever!");
                    Console.WriteLine("If you are stuck you can use the 'Help' Command to view all possible inputs at the current moment");
                    MarkedPlaceInput = Input();
                }
            }
        }
    }
}
