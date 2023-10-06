using Microsoft.Extensions.Configuration;
using Optimum.Data.Entities;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace Optimum.Business.Implimentation
{
    /// <summary>
    /// This class contains service methopds for optimum operations.
    /// </summary>
    public class OptimumService : IOptimumService
    {
        public IConfiguration Config { get; set; }
        public  readonly string baseurl;
        public OptimumService(IConfiguration config) {
            Config = config;
            this.baseurl = Config["OptimumData:baseurl"] !;

        }

        /// <summary>
        /// This function is used to get all the list of data.
        /// </summary>
        /// <returns>Returns list of customer data.</returns>
        public async Task<List<Optimumdata>?> getdata()
        {
            var client = new RestClient();
            var request = new RestRequest($"{baseurl}Customers", Method.Get);
            var response =await client.ExecuteAsync(request);
            var responsedata = System.Text.Json.JsonSerializer.Deserialize<List<Optimumdata>>(response.Content!);
            return responsedata;

        }

        /// <summary>
        /// This function is used to create new customer.
        /// </summary>
        /// <returns>Returns response as fail or success.</returns>
        public async Task<ResponseData> createnewcustomer(UpdateData customerdata)
        {
            var client = new RestClient();
            var request = new RestRequest($"{baseurl}Customer", Method.Post);
            var jsonData = System.Text.Json.JsonSerializer.Serialize(customerdata);
            request.AddJsonBody(jsonData);
            var response = await client.ExecuteAsync(request);
            if(response.IsSuccessful)
            {
                var responsedata = new ResponseData
                {
                    id = customerdata.Id,
                    response = "sucess"
                };
                return responsedata;
            }
            else
            {
                var responsedata = new ResponseData
                {
                    id = customerdata.Id,
                    response = "failed"
                };
                return responsedata;
            }
        }

        /// <summary>
        /// This function is used to update  customer.
        /// </summary>
        /// <returns>Returns response as fail or success.</returns>
        public async Task<ResponseData> updateexistingcustomer(UpdateData customerdata,string id)
        {
            var client = new RestClient();
            var request =new RestRequest($"{baseurl}Customer/{id}",Method.Post);
            var jsonData = System.Text.Json.JsonSerializer.Serialize(customerdata);
            request.AddJsonBody(jsonData);
            var response = await client.ExecuteAsync(request);
            if (response.IsSuccessful)
            {
                var responsedata = new ResponseData
                {
                    id = id,
                    response = "sucess-update"
                };
                return responsedata;
            }
            else
            {
                var responsedata = new ResponseData
                {
                    id = id,
                    response = "failed-update"
                };
                return responsedata;
            }

        }

        /// <summary>
        /// This function is used to delete customer.
        /// </summary>
        /// <returns>Returns response as fail or success.</returns>
        public async Task<ResponseData> deleteexistingcustomer( string id)
        {
            var client = new RestClient();
            var request = new RestRequest($"{baseurl}Customer/{id}", Method.Delete);
            var response = await client.ExecuteAsync(request);
            if (response.IsSuccessful)
            {
                var responsedata = new ResponseData
                {
                    id = id,
                    response = "sucess"
                };
                return responsedata;
            }
            else
            {
                var responsedata = new ResponseData
                {
                    id = id,
                    response = "failed"
                };
                return responsedata;
            }

        }

        /// <summary>
        /// This function is used to get customer by id.
        /// </summary>
        /// <returns>Returns response as customer details.</returns>
        public async Task<Optimumdata?> getdatabyid(string id)
        {
            var client = new RestClient();
            var request = new RestRequest($"{baseurl}Customer/{id}", Method.Get);

            var response = await client.ExecuteAsync(request);
            var responsedata = System.Text.Json.JsonSerializer.Deserialize<Optimumdata>(response.Content!);

            if (response.IsSuccessful)
            {
                return responsedata;

            }
            else
            {
                return null;
            }
        }
    }
}
