using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Contexts;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class _TypeController : ControllerBase
    {
        private readonly AppDbContext _context;

        public _TypeController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/_Type
        [HttpGet]
        public async Task<ActionResult<IEnumerable<_Type>>> Get_Type()
        {
            return await _context._Type.ToListAsync();
        }

        // GET: api/_Type/5
        [HttpGet("{id}")]
        public async Task<ActionResult<_Type>> Get_Type(int id)
        {
            var _Type = await _context._Type.FindAsync(id);

            if (_Type == null)
            {
                return NotFound();
            }

            return _Type;
        }

        // PUT: api/_Type/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Put_Type(int id, _Type _Type)
        {
            if (id != _Type.Id)
            {
                return BadRequest();
            }

            _context.Entry(_Type).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_TypeExists(id))
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

        // POST: api/_Type
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<_Type>> Post_Type(_Type _Type)
        {
            _context._Type.Add(_Type);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Get_Type", new { id = _Type.Id }, _Type);
        }

        // DELETE: api/_Type/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<_Type>> Delete_Type(int id)
        {
            var _Type = await _context._Type.FindAsync(id);
            if (_Type == null)
            {
                return NotFound();
            }

            _context._Type.Remove(_Type);
            await _context.SaveChangesAsync();

            return _Type;
        }

        private bool _TypeExists(int id)
        {
            return _context._Type.Any(e => e.Id == id);
        }
    }
}
