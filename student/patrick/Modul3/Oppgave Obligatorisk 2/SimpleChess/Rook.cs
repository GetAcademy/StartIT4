using System;
using System.Collections.Generic;
using System.Text;


namespace SimpleChess
{
    internal partial class Rook : Piece
    {
        string type;
        string symbol;
        public Rook(string Type = "Rook",string Symbol = "TRN") : base(Type,Symbol)
        {
            type = Type;
            symbol = Symbol;
        }

        public override bool Move(string fromPosition, string toPosition)
        {
            return fromPosition[0] == toPosition[0] || fromPosition[1] == toPosition[1];
        }
    }
}
