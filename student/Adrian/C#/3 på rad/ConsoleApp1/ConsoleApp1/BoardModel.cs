using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class BoardModel
    {
        public bool IsGameStopped { get; private set; } 
        public CellContent[] Content { get; private set; }
        public BoardModel()
        {
             Content = new CellContent[9];
          
        }

        public void SetCross(string position)
        {
             
        }
    }
}