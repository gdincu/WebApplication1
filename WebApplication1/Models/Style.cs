using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Style: TMS
    {
        public int id { get; set; }
        public string name { get; set; }

        public Style()
        {
        }

        public Style(int id, string name)
        {
            this.id = id;
            this.name = name;
        }

    }
}
