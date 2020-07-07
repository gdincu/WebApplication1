using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Contexts
{
    public class AppDbContext : DbContext
    {

        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<Location> Locations { get; set; }

        public DbSet<WebApplication1.Models.Manufacturer> Manufacturer { get; set; }

        public DbSet<WebApplication1.Models.Style> Style { get; set; }

        public DbSet<WebApplication1.Models._Type> _Type { get; set; }

        public DbSet<WebApplication1.Models.Tire> Tire { get; set; }
        //public DbSet<Manufacturer> Manufacturers { get; set; }
        //public DbSet<Style> Styles { get; set; }
        //public DbSet<Tire> Tires { get; set; }
        //public DbSet<_Type> Types { get; set; }

    }
}
