using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MedikamentRegning
{
    class QuestionsAndAnswers
    {
        public string question;
        public string answer;
        public QuestionsAndAnswers(string Question, string Answer)
        {
            answer = Answer;
            question = Question;
        }
    }
}
