using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Players;

namespace Spillere
{
    class Player
    {
         public readonly string Name;
         public int Point;
        readonly Random Random;
        public Player(string name, int point, Random random)
        {
            Name = name;
            Point = point;
            Random = random;
        }

        public void Play(Player player2)
        {
            var winner = Random.Next(2) == 0 ? this : player2;
            var loser = winner == this ? player2 : this;
            winner.Point += 1;
            loser.Point -= 1;
        }

    }
}
