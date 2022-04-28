using DataAccessLayer.Models;
using DomainLayer;
using Microsoft.EntityFrameworkCore;
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
            using (AmazonDbContext dbContext = new AmazonDbContext())
            {
                var countries = await dbContext.Amazons.ToListAsync();


                List<Country> domainModels = new List<Country>();

                foreach (var emp in countries)
                {
                    domainModels.Add(new Country
                    {

                        Id = emp.Id,
                        Name = emp.Name,
                      

                    });
                }

                return domainModels;
            }
        }
        public async Task InsertCountry(Country country)
        {

            using (AmazonDbContext dbContext = new AmazonDbContext())
            {
                var dbModel = new Amazon
                {
                    
                    Id = country.Id,
                    Name = country.Name,
                

                };

                dbContext.Amazons.Add(dbModel);
                await dbContext.SaveChangesAsync();
            }
        }

        public async Task UpdateCountry(Country country)
        {
            using (AmazonDbContext dbContext = new AmazonDbContext())
            {
                var findCountry = await dbContext.Amazons.FirstOrDefaultAsync(x => x.Id == country.Id);

               
                findCountry.Id = country.Id;
                findCountry.Name = country.Name;
               



                dbContext.Amazons.Update(findCountry);
                await dbContext.SaveChangesAsync();
            };
        }

        public async Task DeleteCountry(int id)
        {
            using (AmazonDbContext dbContext = new AmazonDbContext())
            {
                var findCountry = await dbContext.Amazons.FirstOrDefaultAsync(x => x.Id == id);
                dbContext.Amazons.Remove(findCountry);
                await dbContext.SaveChangesAsync();
            };
        }

        public async Task<Country> GetCountry(int id)
        {

            using (AmazonDbContext dbContext = new AmazonDbContext())
            {

                var country = await dbContext.Amazons.FirstOrDefaultAsync(x => x.Id == id);
                Country domainModel = new Country
                {

                    Id = country.Id,
                    Name = country.Name,
               
                };

                return domainModel;
            }

        }

      
    }
}
