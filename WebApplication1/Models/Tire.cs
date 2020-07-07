using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Tire
    {
        private int id;
        public Type type;
        public Manufacturer manufacturer;
        public Style style;
        private int width;
        private int height;
        private int rimSize;
        private int locationId;

        public Tire()    {  }

        public Tire(int id, Type type, Manufacturer manufacturer, Style style, int width, int height, int rimSize, int locationId)
        {
            this.id = id;
            this.type = type;
            this.manufacturer = manufacturer;
            this.style = style;
            this.width = width;
            this.height = height;
            this.rimSize = rimSize;
            this.locationId = locationId;
        }

        public int Id {
            get { return this.id; }
            set { this.id = value; }
        }
        public int Width{
            get { return this.width; }
            set { this.width = value; }
        }
        public int Height {
            get { return this.height; }
            set { this.height = value; }
        }
        public int RimSize {
            get { return this.rimSize; }
            set { this.rimSize = value; }
        }
        public int LocationId {
            get { return this.locationId; }
            set { this.locationId = value; }
        }
        

    }
}
