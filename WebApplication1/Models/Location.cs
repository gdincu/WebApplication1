using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Location
    {        
        public int Id { get; set; }
        public string LocationName { get; set; }
        public int TireId { get; set; }
        public int Quantity { get; set; }
        public int Year { get; set; }
        public double Price { get; set; }

    }
}
