using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MedikamentRegning
{
    class Medicine
    {
        public string Name;
        public string Virkestoff;
        public string DosageType;
        public int Dosage;

        public Medicine(string name, string virkestoff, string dosageType, int dosage)
        {
            Virkestoff = virkestoff;
            Name = name;
            DosageType = dosageType;
            Dosage = dosage;

        }
    }
}
