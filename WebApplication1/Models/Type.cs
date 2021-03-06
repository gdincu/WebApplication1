﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Type
    {
        private int id;
        private string name;

        public Type()
        {
        }

        public Type(int id, string name)
        {
            this.id = id;
            this.name = name;
        }

        public int Id
        {
            get { return this.id; }
            set { this.id = value; }
        }

        public string Name
        {
            get { return this.name; }
            set { this.name = value; }
        }

    }
}
