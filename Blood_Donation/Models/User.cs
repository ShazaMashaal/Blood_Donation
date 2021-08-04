using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blood_Donation.Models
{
    public class User:IdentityUser
    {
        public Gender Gender { get; set; }
        public string City { get; set; }
        public BloodType BloodType { get; set; }
        public DateTime BD { get; set; }
        public virtual ICollection<DonationAppointment> DonationAppointment { get; set; }

    }
}
