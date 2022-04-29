using BusinessLayer;
using DomainLayer;
using Microsoft.AspNetCore.Mvc;

namespace Task1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly ILogger<OrderController> _logger;
        private readonly IAmazonBusiness _amazonBusiness;

        public OrderController(ILogger<OrderController> logger, IAmazonBusiness amazonBusiness)
        {
            _logger = logger;
            _amazonBusiness = amazonBusiness;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [Produces("application/json", Type = typeof(IEnumerable<Orderd>))]
        [Route("get-all-amazon-order")]
        public async Task<ActionResult<IEnumerable<Orderd>>> GetAllAmazonOrders()
        {
            try
            {
                var resp = await _amazonBusiness.GetOrders();

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
        [Produces("application/json", Type = typeof(Orderd))]
        [Route("get-amazon-order-by-id")]
        public async Task<ActionResult<Orderd>> GetAmazonOrderById(int id)
        {
            try
            {
                var resp = await _amazonBusiness.GetOrder(id);

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
        [Route("insert-amazon-order")]
        public async Task<ActionResult> InsertAmazonOrder([FromBody] List<Orderd> order)
        {
            try
            {


                foreach (var orp in order)
                {
                    await _amazonBusiness.InsertOrder(orp);
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
        [Route("update-amazon-order")]
        public async Task<ActionResult> UpdateAmazonOrder([FromBody] Orderd order)
        {
            try
            {
                await _amazonBusiness.UpdateOrder(order);
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
        [Route("delete-amazon-order")]
        public async Task<ActionResult> DeleteAmazonOrder(int id)
        {
            try
            {
                await _amazonBusiness.DeleteOrder(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }







    }


}
