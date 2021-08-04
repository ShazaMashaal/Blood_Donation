using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blood_Donation.Models
{
    public class Hospital:IdentityUser
    {
        public string Street { get; set; }
        public string City { get; set; }
        public virtual ICollection<DonationAppointment> DonationAppointments { get; set; }
        public virtual ICollection<HospitalAppointment> HospitalAppointments { get; set; }


    }
}
