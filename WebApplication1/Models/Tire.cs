using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TireShop.Models
{
    public class Tire
    {        
        public int Id { get; set; }
        public int TypeId { get; set; }
        public int ManufacturerId { get; set; }
        public int StyleId { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public int RimSize { get; set; }
        public int LocationId { get; set; }

    }
}
