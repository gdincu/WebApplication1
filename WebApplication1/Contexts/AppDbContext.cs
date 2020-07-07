using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TireShop.Models;
using WebApplication1.Models;

namespace WebApplication1.Contexts
{
    public class AppDbContext : DbContext
    {

        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<Location> Locations { get; set; }
        public DbSet<Manufacturer> Manufacturers { get; set; }
        public DbSet<TireStyle> TireStyles { get; set; }
        public DbSet<TireType> TireTypes { get; set; }
        public DbSet<Tire> Tires { get; set; }
        public DbSet<CarModel> CarModel { get; set; }

    }
}
