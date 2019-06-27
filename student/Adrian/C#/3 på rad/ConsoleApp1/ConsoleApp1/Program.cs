using System;
using System.Threading;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.ForegroundColor = ConsoleColor.DarkYellow;
            var boardModel = new BoardModel();
            while (true)
            {
                BoardView.Show(boardModel);
                Console.Write("Skriv inn hvor du vil sette kryss (f.eks. \"a2\"): ");
                var position = Console.ReadLine();
                boardModel.SetCross(position);
                BoardView.Show(boardModel);

                Thread.Sleep(1000);
                boardModel.SetRandomCircle();
            }
        }
    }
}
