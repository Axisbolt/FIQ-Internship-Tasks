using DomainLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class AmazonRepository : IAmazonRepository
    {
        public async Task<List<Country>> GetCountries()
        {
            return TempData.Data;
        }
        public async Task InsertCountry(Country country)
        {
            TempData.Data.Add(country);
        }

        public async Task UpdateCountry(Country country)
        {
            foreach (var emp in TempData.Data)
            {
                if (emp.Id == country.Id)
                {
                    emp.Name = country.Name;
                }

            }
        }

        public async Task DeleteCountry(int id)
        {
            TempData.Data = TempData.Data.Where(x => x.Id != id).ToList();
        }

        public async Task<Country> GetCountry(int id)
        {

            return TempData.Data.Find(x => x.Id == id);

        }

      
    }
}
