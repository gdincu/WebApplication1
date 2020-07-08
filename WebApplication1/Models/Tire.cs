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
        //public string Dot { get; set; } // format YYWW YY = year e.g. 2020 -> 20; WW = week e.g. 20 -> week 20
        public int LocationId { get; set; }

    }
}
