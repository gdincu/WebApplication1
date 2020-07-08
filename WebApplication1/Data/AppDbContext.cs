using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TireShop.Models;

namespace TireShop.Data
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
        public DbSet<User> Users { get; set; }

    }
}
