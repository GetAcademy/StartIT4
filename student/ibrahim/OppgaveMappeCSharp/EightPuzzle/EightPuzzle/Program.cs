using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EightPuzzle
{
    class Program
    {
        static void Main(string[] args)
        {
            int[]  puzzle =
            {
                1, 2, 4, 9, 12,
                3, 0, 5, 10, 13,
                7, 6, 8, 11, 14,
                15, 19, 24, 17, 16,
                18, 23, 22, 21, 25
            };

            Node root = new Node(puzzle);
            UninformdeSearch ui = new UninformdeSearch();

            List<Node> solution = ui.BreadthFirstSearch(root);

            if(solution.Count > 0 )
            {
                solution.Reverse();
                for (int i = 0; i < solution.Count; i++)
                    solution[i].printPuzzle();
            }
            else
            {
                Console.WriteLine("No path to solution is found");
            }
            Console.Read();
        }
    }
}
