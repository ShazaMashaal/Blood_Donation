using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blood_Donation.Models
{
    public class HospitalAppointment
    {
        public int ID { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public DayOfWeek Day { get; set; }
        public Hospital Hospital { get; set; }


    }
}
