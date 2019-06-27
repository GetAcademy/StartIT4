using System;
using System.Collections.Generic;
using System.Diagnostics.Eventing.Reader;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace ConsoleApp1
{
    class VirtualScreenCell
    {
        public bool Up { get; private set; }
        public bool Down { get; private set; }
        public bool Left { get; private set; }
        public bool Right { get; private set; }

        public Char getCharacter()
        {
            if (Up && !Down && !Left && !Right)
            {
                return '╹';
            }
            else if (!Up && Down && !Left && !Right)
            {
                return '╻';
            }
            else if (!Up && !Down && Left && !Right)
            {
                return '╸';
            }
            else if (!Up && !Down && !Left && Right)
            {
                return '╺';
            }
            else if (Up && Down && !Left && !Right)
            {
                return '│';
            }
            else if (!Up && !Down && Left && Right)
            {
                return '─';
            }
            else if (Up && !Down && Left && !Right)
            {
                return '┘';
            }
            else if (Up && !Down && !Left && Right)
            {
                return '└';
            }
            else if (!Up && Down && Left && !Right)
            {
                return '┐';
            }
            else if (!Up && Down && !Left && Right)
            {
                return '┌';
            }
            else if (Up && Down && Left && !Right)
            {
                return '┤';
            }
            else if (!Up && Down && Left && Right)
            {
                return '┬';
            }
            else if (Up && Down && !Left && Right)
            {
                return '├';
            }
            else if (Up && !Down && Left && Right)
            {
                return '┴';
            }
            else if (Up && Down && Left && Right)
            {
                return '┼';
            }
            else
            {
                return ' ';
            }
        }
    }
}
