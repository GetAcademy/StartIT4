using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MedikamentRegning
{
    class Program
    {
        Random random = new Random(10);
        
        private QuestionsAndAnswers[] QnA = new QuestionsAndAnswers[]
        {
            new QuestionsAndAnswers("Hva er virkestoffet i Tylenol?", "Paracetamol"), 
            new QuestionsAndAnswers("Hva er virkestoffet i Ibux?", "Ibuprofen"),
            new QuestionsAndAnswers("En pasient skal ha 15 mg/kg/døgn and medisin med styke 6 mg/ml. Hvor mange ml skal pasienten ha? Svar med 'X ml/dose'", "25 ml/dose"), 
        };

        public static void Main(string[] args)
        {
            Question();
        }

        public static void Question(QuestionsAndAnswers args)
        {
            
        }


    }
}
