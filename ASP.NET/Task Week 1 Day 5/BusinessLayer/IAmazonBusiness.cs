using DomainLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer
{
    public interface IAmazonBusiness
    {

        // Country
        public Task<List<Country>> GetCountries();
        public Task<Country> GetCountry(int id);
        public Task InsertCountry(Country country);
        public Task UpdateCountry(Country country);
        public Task DeleteCountry(int id);

        //Orders
        public Task<List<Orderd>> GetOrders();
        public Task<Orderd> GetOrder(int id);
        public Task InsertOrder(Orderd order);
        public Task UpdateOrder(Orderd order);
        public Task DeleteOrder(int id);
    }
}
