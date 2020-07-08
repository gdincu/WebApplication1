using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using TireShop.Data;
using TireShop.Helpers;
using TireShop.Models;

namespace TireShop.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TiresController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TiresController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Tires
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tire>>> GetTires()
        {
            return await _context.Tires.ToListAsync();
        }

        // GET: api/Tires/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Tire>> GetTire(int id)
        {
            var tire = await _context.Tires.FindAsync(id);

            if (tire == null)
            {
                return NotFound();
            }

            return tire;
        }

        //TO DO ==============================================================================
        [HttpPost]
        public List<Tire> PostTire(TireOption request)
        {
            //Getting the style, type and manuf ids
            var tireStyle = _context.TireStyles.Where(b => b.Name == request.TireStyle).FirstOrDefault();
            var tireType = _context.TireTypes.Where(b => b.Name == request.TireType).FirstOrDefault();
            var tireManuf = _context.Manufacturers.Where(b => b.Name == request.TireManufacturer).FirstOrDefault();

            //Getting a list of potential tires
            var potentialTire = _context.Tires.Where(
                b => b.StyleId == tireStyle.Id
                && b.ManufacturerId == tireManuf.Id
                && b.TypeId == tireType.Id);

            //Getting a list of available tires based on the qty in Locations
            var availableTire = new List<Tire>();
            foreach (Tire x in potentialTire)
                if (_context.Locations.Where(b => b.TireId == x.Id && b.Quantity > 0).Any())
                    availableTire.Add(x);

            // set status code
            Response.StatusCode = 200;

            return availableTire;
            
            //return Request.CreateResponse(HttpStatusCode.OK, "Success...");
            //return new HttpResponseMessage(HttpStatusCode.OK, "Success....");
        }




        // PUT: api/Tires/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTire(int id, Tire tire)
        {
            if (id != tire.Id)
            {
                return BadRequest();
            }

            _context.Entry(tire).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TireExists(id))
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

        // POST: api/Tires
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Tire>> PostTire(Tire tire)
        {
            _context.Tires.Add(tire);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTire", new { id = tire.Id }, tire);
        }

        // DELETE: api/Tires/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Tire>> DeleteTire(int id)
        {
            var tire = await _context.Tires.FindAsync(id);
            if (tire == null)
            {
                return NotFound();
            }

            _context.Tires.Remove(tire);
            await _context.SaveChangesAsync();

            return tire;
        }

        private bool TireExists(int id)
        {
            return _context.Tires.Any(e => e.Id == id);
        }
    }
}
