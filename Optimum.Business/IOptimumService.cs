using Optimum.Data;
using Optimum.Data.Entities;

namespace Optimum.Business
{
    public interface IOptimumService
    {
        public Task<List<Optimumdata>> getdata();
        public  Task<ResponseData> createnewcustomer(UpdateData customerdata);
        public  Task<ResponseData> updateexistingcustomer(UpdateData customerdata, string id);
        public  Task<ResponseData> deleteexistingcustomer(string id);

        public Task<Optimumdata?> getdatabyid(string id);

    }
}