using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace javascript
{
    class Program
    {
        static void Main(string[] args)
        {
            var x = new {width = 50, height = 30};
            Console.WriteLine("Bredden er " + x.width +  " Høyden er " + x.height);
        }
    }
}
