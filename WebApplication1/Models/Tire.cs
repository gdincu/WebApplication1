using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Tire
    {        
        public int Id { get; set; }
        public int typeId { get; set; }
        public int manufacturerId { get; set; }
        public int styleId { get; set; }
        public int width { get; set; }
        public int height { get; set; }
        public int rimSize { get; set; }
        public int locationId { get; set; }




    }
}
