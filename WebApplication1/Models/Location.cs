using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Location
    {


        public int id { get; set; }
        public Tire tire { get; set; }
        public int quantity { get; set; }
        public int year { get; set; }
        public double price { get; set; }

        public Location(int id, Tire tire, int quantity, int year, double price)
        {
            this.id = id;
            this.tire = tire;
            this.quantity = quantity;
            this.year = year;
            this.price = price;
        }

        public Location() { }

    }
}
