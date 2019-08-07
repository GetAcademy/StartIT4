using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Obligatorsk
{
    public class Person
    {
        private string firstName;
        private int age;
        private string lastName;
        private int birthDate;
        public Person (string firstName, int age, string lastName, int birthDate)
        {
            this.firstName = firstName;
            this.age = age;
            this.lastName = lastName;
            this.birthDate = birthDate;
        }
        public string FirstName
        {
            get { return firstName; }
            set { firstName = value; }
        }
        public int Age
        {
            get { return age; }
            set { age = value; }
        }
        public string LastName
        {
            get { return lastName; }
            set { lastName = value; }
        }
        public int BirthDate
        {
            get { return birthDate; }
            set { birthDate = value; }
        }
    }
}
