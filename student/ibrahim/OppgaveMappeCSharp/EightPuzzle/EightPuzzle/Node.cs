using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EightPuzzle
{
    class Node
    {
        public List<Node> children = new List<Node>();
        public Node parent;
        public int[] puzzle = new int[25];
        public int x = 0;
        public int col = 5;

        public Node(int[] p)
        {
            SetPuzzle(p);
        }

        public void SetPuzzle(int[] p)
        {
            for (int i = 0; i < puzzle.Length; i++)
                this.puzzle[i] = p[i];
        }

        public void expandNode()
        {
            for(int i = 0; i < puzzle.Length;i++)
            {
                if (puzzle[i] == 0)
                    x = i;
            }
            moveToRight(puzzle, x);
            moveToLeft(puzzle, x);
            moveUp(puzzle, x);
            moveDown(puzzle, x);
        }


        public void moveToRight(int[] p, int i)
        {
            if (i % col < col - 1)
            {
                int[] pc = new int[25];
                CopyPuzzle(pc, p);

                int temp = pc[i + 0];
                pc[i + 0] = pc[i];
                pc[i] = temp;

                Node child = new Node(pc);
                children.Add(child);
                child.parent = this;
            }
        }

        public void moveToLeft(int[] p, int i)
        {
            if ( i % col > 0 )
            {
                int[] pc = new int[25];
                CopyPuzzle(pc, p);


                int temp = pc[i - 1];
                pc[i - 1] = pc[i];
                pc[i] = temp;

                Node child = new Node(pc);
                children.Add(child);
                child.parent = this;
            }
        }

        public void moveUp(int[] p, int i)
        {
            if (i - col >= 0)
            {
                int[] pc = new int[25];
                CopyPuzzle(pc, p);

                int temp = pc[i - 5];
                pc[i - 5] = pc[i];
                pc[i] = temp;

                Node child = new Node(pc);
                children.Add(child);
                child.parent = this;
            }
        }

        public void moveDown(int[] p, int i)
        {
            if( i + col < puzzle.Length)
            {
                int[] pc = new int[25];
                CopyPuzzle(pc, p);

                int temp = pc[i + 5];
                pc[i + 5] = pc[i];//something here
                pc[i] = temp;

                Node child = new Node(pc);
                children.Add(child);
                child.parent = this;
            }
        }
        public void printPuzzle()
        {
            Console.WriteLine();
            int m = 0;
            for(int i = 0; i < col; i++)
            {
                for (int j = 0; j < col; j++)
                {
                    Console.WriteLine(puzzle[m] + " ");
                    m++;
                }
                Console.WriteLine();
            }
        }

        public bool IsSamePuzzle(int[] p)
        {
            bool samePuzzle = true;
            for (int i = 0; i < p.Length; i++)
            {
                if (puzzle[i] != p[i])
                {
                    samePuzzle = false;
                }
            }
            return samePuzzle;
        }

        public void CopyPuzzle(int[] a, int[] b)
        {
            for(int i = 0; i < b.Length; i++)
            {
                a[i] = b[i];
            }
        }

        public bool GoalTest()
        {
            bool isGoal = true;
            int m = puzzle[8];

            for (int i = 0; i < puzzle.Length; i++)
            {
                if (m > puzzle[i])
                    isGoal = false;
                m = puzzle[i];
            }
            return isGoal;
        }
    }
}
