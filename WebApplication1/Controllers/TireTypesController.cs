﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Contexts;
using WebApplication1.Models;

namespace TireShop.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TireTypesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TireTypesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/TireTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TireType>>> GetTireTypes()
        {
            return await _context.TireTypes.ToListAsync();
        }

        // GET: api/TireTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TireType>> GetTireType(int id)
        {
            var tireType = await _context.TireTypes.FindAsync(id);

            if (tireType == null)
            {
                return NotFound();
            }

            return tireType;
        }

        // PUT: api/TireTypes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTireType(int id, TireType tireType)
        {
            if (id != tireType.Id)
            {
                return BadRequest();
            }

            _context.Entry(tireType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TireTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TireTypes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TireType>> PostTireType(TireType tireType)
        {
            _context.TireTypes.Add(tireType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTireType", new { id = tireType.Id }, tireType);
        }

        // DELETE: api/TireTypes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TireType>> DeleteTireType(int id)
        {
            var tireType = await _context.TireTypes.FindAsync(id);
            if (tireType == null)
            {
                return NotFound();
            }

            _context.TireTypes.Remove(tireType);
            await _context.SaveChangesAsync();

            return tireType;
        }

        private bool TireTypeExists(int id)
        {
            return _context.TireTypes.Any(e => e.Id == id);
        }
    }
}
