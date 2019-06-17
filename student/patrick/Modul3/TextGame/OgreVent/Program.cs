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
            int Health = 2;
            int GoldPieces = 0;
            int SilverPieces = 0;
            int CopperPieces = 0;
            string Input()
            {
                return Console.ReadLine();
            }
            bool IsAlive = true;
            string MyAction;
            while (IsAlive)
            {
                if (Health <= 0)
                {
                    IsAlive = false;
                }

                MyAction = Input();

                if (Location == "Markedplace")
                {
                    switch (MyAction.ToUpper())
                    {
                        case "LOOK LEFT":
                            Console.WriteLine();
                            Console.WriteLine("To your left you can see a thriving markedplace it is currently early in the morning and most of the merchants have set up their stand and started their day while some tardy merchants are still arriving or in the middle of setting up their stand, in the center of the markedplace there is a rather spacious well with a steady stream of locals regularly retrieving water from it. on the marketplace there is a merchant who sells fresh meat and vegetables from local hunters and farmers, another who sells jewelry and other trinkets, one who seems to sell metalworks mostly tools some weapons, mostly horseshoes and carpentry nails, and one merchant who you cant really say what he is selling, seems like a little bit of this a little bit of that probably just a load of junk, and a merchant who hasnt completely set up his stand just yet who sells armor and good shoes and backpacks fit for the most travel hungry adventurer.");
                            break;
                        case "LOOK RIGHT":
                            Console.WriteLine();
                            Console.WriteLine("To your right you can see the chapel where youre late master Yellegor Yellowflag was taken for burial preperations as he was lesser nobleman not just some mere peasant like yourself. Outside the chapel the flaggelant militia of the holy order of the Phoenix stands guard in rough tattered clothing seemingly non uniform with the exception of the holy symbol representing their god and their order hanging around their necks, the symbols are made of wood. they carry spears and several of them in munching on a loaf of bread in the current moment. the chapels reinforced front entrance is open and the puplic is seemingly free to enter and leave at their own behest.");
                            break;
                        case "LOOK FORWARD":
                            Console.WriteLine();
                            Console.WriteLine("You are currently facing the wanted poster of the ogre, the poster is hanging on the wall to the left hand side of the entrance to the Rusty Shovel, a local tavern renowned for their cheap grog");
                            break;
                        case "LOOK BEHIND":
                            Console.WriteLine();
                            Console.WriteLine("You see the main road in and out of this markedplace, it is rather spacious compared to the standards of the inner city you would think it is about 7 meters wide. Down the road you can see the silhouette of a guard tower basking in the morning sun.");
                            break;
                        case "JUMP DOWN THE WELL":
                            Console.WriteLine();
                            Console.WriteLine("You throw your body over the side of the well and you fall and bruise youself along the slippery sides until you hit the water with a splash your leg is caught in the bucket and your entire body is flipped upside down as your head hits the hard bottom of the well you gasp for air and take in water, after much struggling you manage to get out of the well with the help of the locals. Some people in the marketplace is giving you weird looks. Why you would ever do this is beyond you");
                            Health--;
                            break;
                        case "APPROACH METALWORKS MERCHANT":
                            Console.WriteLine();
                            Console.WriteLine("You approach the metalworks merchant's stand, he has spread some wares on a counter for all to see, among them are horseshoes, carpenter nails, a sword a wetstone and a helmet");
                            break;
                        case "HELP":
                            Console.WriteLine();
                            Console.WriteLine("Current Input Opportunities:");
                            Console.WriteLine("Look Left");
                            Console.WriteLine("Look Right");
                            Console.WriteLine("Look Forward");
                            Console.WriteLine("Look Behind");
                            Console.WriteLine("Jump Down The Well");
                            Console.WriteLine("Approach Metalworks Merchant");
                            break;
                    }
                }
                else
                {
                    Console.WriteLine();
                    Console.WriteLine("Sorry you cant do that right now, or possibly even ever!");
                    Console.WriteLine("If you are stuck you can use the 'Help' Command to view all possible inputs at the current moment");
                }
            }
            Console.WriteLine();
            Console.WriteLine("You are Dead, you will not be remembered, you will not pass into legend. You shall fade into the nothingness of wich you came.");
            Console.WriteLine();
        }
    }
}
