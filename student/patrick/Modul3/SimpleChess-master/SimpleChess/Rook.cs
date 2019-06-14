using System;
using System.Collections.Generic;
using System.Text;

namespace SimpleChess
{
    abstract class Rook
    {
        public string Symbol { get; }
        private readonly string _type;

        protected Rook(string type, string symbol)
        {
            _type = type;
            Symbol = symbol;
        }

        public abstract bool Move(string fromPosition, string toPosition);
    }
}
