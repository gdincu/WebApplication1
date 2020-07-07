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
        public int tireId { get; set; }
        public int quantity { get; set; }
        public int year { get; set; }
        public double price { get; set; }

    }
}
