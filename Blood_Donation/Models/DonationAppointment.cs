using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blood_Donation.Models
{
    public class DonationAppointment
    {
        public int ID { get; set; }
        public DateTime Time { get; set; }
        public DayOfWeek Day { get; set; }
        public Hospital Hospital { get; set; }
        public User User { get; set; }
    }
}
