using Microsoft.AspNetCore.Mvc;
using Optimum.Data.Entities;
using Optimum.Business;


namespace webapi.Controllers
{
    [Route("api/optimum")]
    [ApiController]
    public class OptimumController : Controller
    {
        public OptimumController(IOptimumService optimumService)
        {
            OptimumService = optimumService;
        }

        public  IOptimumService OptimumService { get; set; }

        /// <summary>
        /// Controller to get customer
        /// </summary>
        /// <returns>Returns all customers</returns>
        [HttpGet("getcustomer")]
        public async Task<IActionResult> getcustomerdata()
        {
            var response=await this.OptimumService.getdata();
            return Ok(response);
        }


        /// <summary>
        /// Controller to create new customer
        /// </summary>
        /// <returns>Returns response as sucess or fails</returns>
        [HttpPost("savecustomer")]
        public async Task<IActionResult> savecustomerdata([FromBody] UpdateData data)
        {
            var response = await this.OptimumService.createnewcustomer(data);
            return Ok(response);
        }

        /// <summary>
        /// Controller to get customer by id
        /// </summary>
        /// <returns>Get customer by id.</returns>
        [HttpGet("getbyid/{id}")]
        public async Task<IActionResult> getcustomerbyid( string id)
        {
            var response = await this.OptimumService.getdatabyid(id);
            return Ok(response);
        }
        /// <summary>
        /// Controller to get update by id
        /// </summary>
        /// <returns>Returns response as sucess or fails.</returns>
        [HttpPost("updatecustomer/{id}")]
        public async Task<IActionResult> updatecustomerdata([FromBody] UpdateData data,string id)
        {
            var response = await this.OptimumService.updateexistingcustomer(data,id);
            return Ok(response);
        }

        /// <summary>
        /// Controller to get delete by id
        /// </summary>
        /// <returns>Returns response as sucess or fails.</returns>
        [HttpDelete("deletecustomer/{id}")]
        public async Task<IActionResult> deletecustomer( string id)
        {
            var response = await this.OptimumService.deleteexistingcustomer(id);
            return Ok(response);
        }

    }
}
