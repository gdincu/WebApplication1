using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TireShop.Models
{
    public class CarModel
    {

        public int Id { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int TireId { get; set; }
    }
}
