﻿using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        { 
            var boardModel = new BoardModel();
            while (true)
            {
                BoardView.Show(boardModel);
                Console.Write("Skriv inn hvor du vil sette x eller o");
                var position = Console.ReadLine();
                boardModel.SetCross(position);
            }
        }
    }
}
