using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Location
    {
        private int id;
        private int tireId;
        private int quantity;
        private int year;
        private double price;

        public Location(int id, int tireId, int quantity, int year, double price)
        {
            this.id = id;
            this.tireId = tireId;
            this.quantity = quantity;
            this.year = year;
            this.price = price;
        }

        public Location() { }

        public int Id {
            get { return this.id; }
            set { this.id = value; }
        }
        public int TireId {
            get { return this.tireId; }
            set { this.tireId = value; }
        }
        public int Quantity {
            get { return this.quantity; }
            set { this.quantity = value; }
        }
        public int Year {
            get { return this.year; }
            set { this.year = value; }
        }
        public double Price {
            get { return this.price; }
            set { this.price = value; }
        }

    }
}
