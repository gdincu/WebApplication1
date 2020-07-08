using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TireShop.Helpers
{
    public class TireSet
    {
        public TireSet(int year, int width, int height, int rimSize, double price, int quantity)
        {
            Year = year;
            Width = width;
            Height = height;
            RimSize = rimSize;
            Price = price;
            Quantity = quantity;
        }

        public int Year { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public int RimSize { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
    }
}
