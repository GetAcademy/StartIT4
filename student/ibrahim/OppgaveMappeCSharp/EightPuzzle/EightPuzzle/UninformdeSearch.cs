using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EightPuzzle
{
    class UninformdeSearch
    {
        public UninformdeSearch()
        {

        }

        public List<Node> BreadthFirstSearch(Node root)
        {
            List<Node> pathToSolution = new List<Node>();
            List<Node> OpenList = new List<Node>();
            List<Node> ClosedList = new List<Node>();

            OpenList.Add(root);
            bool goalFound = false;

            while(OpenList.Count > 0 && !goalFound)
            {
                Node currentNode = OpenList[0];
                ClosedList.Add(currentNode);
                OpenList.RemoveAt(0);

                currentNode.expandNode();
                currentNode.printPuzzle();

                for(int i = 0; i < currentNode.children.Count; i++)
                {
                    Node currentChild = currentNode.children[i];
                    if(currentChild.GoalTest())
                    {
                        Console.WriteLine("Goal Found.");
                            goalFound = true;
                        pathTrace(pathToSolution, currentChild);
                    };
                    if (!Contains(OpenList,currentChild) && !Contains(ClosedList, currentChild))
                        OpenList.Add(currentChild);
                }
              
            }
            return pathToSolution;
        }

        internal List<Node> BreadthFirstSearch(object root)
        {
            throw new NotImplementedException();
        }

        public void pathTrace(List<Node> path, Node n)
        {
            Console.WriteLine("Tracing path...");
            Node current = n;
            path.Add(current);

            while(current.parent != null)
            {
                current = current.parent;
                path.Add(current);
            }
        }

        public static bool Contains(List<Node> list, Node c )
        {
            bool contains = false;

            for(int i = 0; i <list.Count; i++)
            {
                if (list[i].IsSamePuzzle(c.puzzle))
                    contains = true;
            }
            return contains;
        }
    }
}
