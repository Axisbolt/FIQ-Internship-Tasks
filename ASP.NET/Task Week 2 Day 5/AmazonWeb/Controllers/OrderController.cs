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
        public async Task<ActionResult<List<Orderd>>> GetAmazonOrderById(int id)
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




        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [Produces("application/json", Type = typeof(IEnumerable<Orderd>))]
        [Route("get-all-orders-by-country-name")]
        public async Task<ActionResult<List<Orderd>>> GetAllOrdersByCountryName(string name)
        {
            try
            {

                
                
                
                var resp = await _amazonBusiness.GetallOrderscountry(name);
                



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
        [Produces("application/json", Type = typeof(IEnumerable<Orderd>))]
        [Route("get-sum-of-orders-cost-by-country-name")]
        public async Task<ActionResult<Ordercostresponse>> SumOfOrdersCostByCountryName(string name)
        {
            try
            {

                var resp = await _amazonBusiness.GetallOrderssumcountry(name);

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
        [Produces("application/json", Type = typeof(IEnumerable<Orderd>))]
        [Route("get-all-orders-by-created-date")]
        public async Task<ActionResult<List<Orderd>>> GetAllOrdersByCreatedDate(DateTime date)
        {
            try
            {
                var resp = await _amazonBusiness.GetAllOrdersByCreatedDate(date);




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
        [Produces("application/json", Type = typeof(IEnumerable<Orderd>))]
        [Route("get-all-users-name")]
        public async Task<ActionResult<IEnumerable<Orderd>>> GetAllUserNames()
        {
            try
            {
                var resp = await _amazonBusiness.GetAllUserNames();

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

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [Route("get-all-amazon-orders-by-country-names")]
        public async Task<ActionResult<List<Orderd>>> GetAllOrdersByCountryNames(List<string> name)
        {
            try
            {
                var resp = await _amazonBusiness.GetAllOrdersByCountryName(name);




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
        [Produces("application/json", Type = typeof(IEnumerable<Orderd>))]
        [Route("get-sum-of-orders-country")]
        public async Task<ActionResult<Ordercostresponse>> GetSumOfOrdersByCountry()
        {
            try
            {

                var resp = await _amazonBusiness.GetSumOfOrdersByCountry();

                return Ok(resp);


            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

    }


}
