using System;

namespace Players
{
    class Player
    {
        private readonly string _name;
        private int _points;
        private readonly Random _random;

        public Player(string name, int points, Random random)
        {
            _random = random;
            _name = name;
            _points = points;
        }

        public void Play(Player player2)
        {
            var winner = _random.Next(2) == 0 ? this : player2;
            var loser = winner == this ? player2 : this;
            winner._points += 1;
            loser._points -= 1;
        }

        public void ShowNameAndPoints(Random random)
        {
            Console.WriteLine(_name.PadRight(12) + _points.ToString().PadLeft(3));
        }
    }
}
