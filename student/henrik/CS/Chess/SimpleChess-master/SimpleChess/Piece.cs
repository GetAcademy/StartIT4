using System;

namespace SimpleChess
{
    abstract class Piece
    {
        public string Symbol { get; }
        private readonly string _type;

        protected Piece(string type, string symbol)
        {
            _type = type;
            Symbol = symbol;
        }

        public Rook();
        public Bishop();
        public abstract bool Move(string fromPosition, string toPosition);
    }
}
