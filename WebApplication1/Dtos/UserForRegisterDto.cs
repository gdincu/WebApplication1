﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace TireShop.Dtos
{
    public class UserForRegisterDto
    {
        public UserForRegisterDto()
        {
        }

        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify a password between 4 and 8 characters")]
        public string Password { get; set; }
    }
}