using BusinessLayer;
using DomainLayer;
using Microsoft.AspNetCore.Mvc;

namespace Task1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AmazonController : ControllerBase
    {
        private readonly ILogger<AmazonController> _logger;
        private readonly IAmazonBusiness _amazonBusiness;

        public AmazonController(ILogger<AmazonController> logger, IAmazonBusiness amazonBusiness)
        {
            _logger = logger;
            _amazonBusiness = amazonBusiness;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [Produces("application/json", Type = typeof(IEnumerable<Country>))]
        [Route("get-all-amazon-country")]
        public async Task<ActionResult<IEnumerable<Country>>> GetAllAmazonCountry()
        {
            try
            {
                var resp = await _amazonBusiness.GetCountries();

                if (resp == null || resp.Count == 0)
                {
                    return StatusCode(404, "No Data available.");
                }
                return Ok(resp);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [Produces("application/json", Type = typeof(Country))]
        [Route("get-amazon-country-by-id")]
        public async Task<ActionResult<Country>> GetAmazonCountryById(int id)
        {
            try
            {
                var resp = await _amazonBusiness.GetCountry(id);

                if (resp == null)
                {
                    return StatusCode(404, "No Data available.");
                }
                return Ok(resp);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }



        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [Route("insert-amazon-country")]
        public async Task<ActionResult> InsertAmazonCountry([FromBody] List<Country> country)
        {
            try
            {
                
                
                foreach (var orp in country)
                {
                  await  _amazonBusiness.InsertCountry(orp);
                }
             
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [Route("update-amazon-country")]
        public async Task<ActionResult> UpdateAmazonCountry([FromBody] Country country)
        {
            try
            {
                await _amazonBusiness.UpdateCountry(country);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [Route("delete-amazon-country")]
        public async Task<ActionResult> DeleteAmazonCountry(int id)
        {
            try
            {
                await _amazonBusiness.DeleteCountry(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

    }


}
