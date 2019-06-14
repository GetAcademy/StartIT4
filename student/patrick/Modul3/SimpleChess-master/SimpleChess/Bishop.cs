using System;
using System.Collections.Generic;
using System.Text;

namespace SimpleChess
{
    abstract class Bishop
    {
        public string Symbol { get; }
        private readonly string _type;

        protected Bishop(string type, string symbol)
        {
            _type = type;
            Symbol = symbol;
        }

        public abstract bool Move(string fromPosition, string toPosition);
    }
}
