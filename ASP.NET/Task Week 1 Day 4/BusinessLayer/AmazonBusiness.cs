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

      

    }
}
