using System;
using System.Collections.Generic;
using System.Text;


namespace SimpleChess
{
    class Bishop : Piece
    {
        string type;
        string symbol;
        public Bishop(string Type, string Symbol) : base(Type, Symbol)
        {
            type = Type;
            symbol = Symbol;
        }

        public override bool Move(string fromPosition, string toPosition)
        {
            if (type == "Rook") return fromPosition[0] == toPosition[0] || fromPosition[1] == toPosition[1];
            if (type == "Bishop")
            {
                var diffCol = fromPosition[0] - toPosition[0];
                var diffRow = fromPosition[1] - toPosition[1];
                return Math.Abs(diffRow) == Math.Abs(diffCol);
            }
            return true;
        }
    }
}
