using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Blood_Donation.Models
{
    public class ApplicationDbContext : IdentityDbContext<IdentityUser>
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }
        public virtual DbSet<User> Users { set; get; }
        public virtual DbSet<DonationAppointment> DonationAppointments { set; get; }
        public virtual DbSet<Hospital> Hospitals { set; get; }
        public virtual DbSet<HospitalAppointment> HospitalAppointments { set; get; }
        public virtual DbSet<History> Histories { set; get; }


    }
}
