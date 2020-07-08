using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TireShop.Data;
using TireShop.Models;

namespace TireShop.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TireStylesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TireStylesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/TireStyles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TireStyle>>> GetTireStyles()
        {
            return await _context.TireStyles.ToListAsync();
        }

        // GET: api/TireStyles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TireStyle>> GetTireStyle(int id)
        {
            var tireStyle = await _context.TireStyles.FindAsync(id);

            if (tireStyle == null)
            {
                return NotFound();
            }

            return tireStyle;
        }

        // PUT: api/TireStyles/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTireStyle(int id, TireStyle tireStyle)
        {
            if (id != tireStyle.Id)
            {
                return BadRequest();
            }

            _context.Entry(tireStyle).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TireStyleExists(id))
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

        // POST: api/TireStyles
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TireStyle>> PostTireStyle(TireStyle tireStyle)
        {
            _context.TireStyles.Add(tireStyle);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTireStyle", new { id = tireStyle.Id }, tireStyle);
        }

        // DELETE: api/TireStyles/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TireStyle>> DeleteTireStyle(int id)
        {
            var tireStyle = await _context.TireStyles.FindAsync(id);
            if (tireStyle == null)
            {
                return NotFound();
            }

            _context.TireStyles.Remove(tireStyle);
            await _context.SaveChangesAsync();

            return tireStyle;
        }

        private bool TireStyleExists(int id)
        {
            return _context.TireStyles.Any(e => e.Id == id);
        }
    }
}
