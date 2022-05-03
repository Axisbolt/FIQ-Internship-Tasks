using DataAccessLayer;
using DomainLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer
{
    public class AmazonBusiness : IAmazonBusiness
    {
        private readonly IAmazonRepository _amazonRepository;

        public AmazonBusiness(IAmazonRepository amazonRepository)
        {
            _amazonRepository = amazonRepository;
        }

        //country 
        public async Task DeleteCountry(int id)
        {
            await _amazonRepository.DeleteCountry(id);
        }

        public async Task<Country> GetCountry(int id)
        {
            return await _amazonRepository.GetCountry(id);
        }

        public async Task<List<Country>> GetCountries()
        {
            return await _amazonRepository.GetCountries();
        }

        public async Task InsertCountry(Country country)
        {
            await _amazonRepository.InsertCountry(country);
        }



        public async Task UpdateCountry(Country country)
        {
            await _amazonRepository.UpdateCountry(country);
        }

        //orders
        public async Task<List<Orderd>> GetOrders()
        {
            return await _amazonRepository.GetOrders();
        }

        public async Task DeleteOrder(int id)
        {
            await _amazonRepository.DeleteOrder(id);
        }

        public async Task<Orderd> GetOrder(int id)
        {
            return await _amazonRepository.GetOrder(id);
        }
        public async Task InsertOrder(Orderd order)
        {
            await _amazonRepository.InsertOrder(order);
        }

        public async Task UpdateOrder(Orderd order)
        {
            await _amazonRepository.UpdateOrder(order);
        }

        public async Task<Ordercostresponse> GetallOrderssumcountry(string n)
        {
            var Orders = await _amazonRepository.GetallOrderssumcountry(n);

            int TotalCost = Orders.Sum(x => x.Cost);

            Ordercostresponse oc = new Ordercostresponse();

            oc.TotalCost = TotalCost;
            return oc;

        }

        public async Task<List<Orderd>> GetallOrderscountry(string n)
        {
            return await _amazonRepository.GetallOrderscountry(n);

        }
    }
}