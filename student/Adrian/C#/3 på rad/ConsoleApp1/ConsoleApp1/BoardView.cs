using System;
using System.Diagnostics.Eventing.Reader;

namespace ConsoleApp1
{
    class BoardView
    {
        public static void Show(BoardModel boardModel)
        {
            Console.Clear();
            var winningSymbol = boardModel.IsWinning();
            var content = boardModel.Content;
            Console.WriteLine("  a b c");
            Console.WriteLine(" ┌─────┐");
            ShowOneLine(0, content);
            ShowOneLine(3, content);
            ShowOneLine(6, content);
            Console.WriteLine(" └─────┘");
            if (winningSymbol != CellContent.None)
            {
                var symbol = winningSymbol == CellContent.Circle ? "Datamaskinen" : "Du";
                Console.WriteLine("\n" + symbol + " Har vunnet");
                Environment.Exit(0);
            }
        }

        private static void ShowOneLine(int startIndex, CellContent[] content)
        {
            var lineNo = 1 + startIndex / 3;
            Console.Write(lineNo + "│");
            for (var a = startIndex; a < startIndex + 3; a++)
            {
                if(a > startIndex) Console.Write(' ');
                //if(content[a]==CellContent.None)
                //    Console.Write(" ");
                //else if(content[a] == CellContent.Cross)
                //    Console.Write("x");
                //else
                //    Console.Write("o");

                //char c;
                //if (content[a] == CellContent.None)
                //    c = ' ';
                //else if (content[a] == CellContent.Cross) 
                //    c = 'x';
                //else
                //    c = 'o';
                var isBlank = content[a] == CellContent.None;
                var isCross = content[a] == CellContent.Cross;
                Console.Write(isBlank ? ' ' : isCross ? 'x' : 'o');
                
            }
            Console.WriteLine("│");
        }
    }
}
