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

        // order 
        public async Task<List<Orderd>> GetOrders()
        {
            using (AmazonDbContext dbContext = new AmazonDbContext())
            {
                var orders = await dbContext.Orders.ToListAsync();


                List<Orderd> domainModels = new List<Orderd>();

                foreach (var emp in orders)
                {
                    domainModels.Add(new Orderd
                    {

                        Id = emp.Id,
                        UserName = emp.Name,
                        Cost = emp.Cost,
                        ItemQty = emp.ItemQty,
                        Created = emp.CreatedDate,
                        Updated = emp.UpdatedDate,
                        AmazonID = emp.AmazonId,
                    });
                }

                return domainModels;
            }
        }

        public async Task<Orderd> GetOrder(int id)
        {

            using (AmazonDbContext dbContext = new AmazonDbContext())
            {

                var order = await dbContext.Orders.FirstOrDefaultAsync(x => x.Id == id);
                Orderd domainModel = new Orderd
                {

                    Id = order.Id,
                    UserName = order.Name,
                    Cost = order.Cost,
                    ItemQty = order.ItemQty,
                    Created = order.CreatedDate,
                    Updated = order.UpdatedDate,
                    AmazonID = order.AmazonId,

                };

                return domainModel;
            }

        }

        public async Task InsertOrder(Orderd order)
        {
            using (AmazonDbContext dbContext = new AmazonDbContext())
            {
                var dbModel = new Order
                {

                    Id = order.Id,
                    Name = order.UserName,
                    Cost = order.Cost,
                    ItemQty = order.ItemQty,
                    CreatedDate = order.Created,
                    UpdatedDate = order.Updated,
                    AmazonId = order.AmazonID,

                };

                dbContext.Orders.Add(dbModel);
                await dbContext.SaveChangesAsync();
            }
        }

        public async Task UpdateOrder(Orderd order)
        {
            using (AmazonDbContext dbContext = new AmazonDbContext())
            {
                var findOrder = await dbContext.Orders.FirstOrDefaultAsync(x => x.Id == order.Id);
                findOrder.Id = order.Id;
                findOrder.Name = order.UserName;
                findOrder.Cost = order.Cost;
                findOrder.ItemQty = order.ItemQty;
                findOrder.UpdatedDate = order.Updated;
                findOrder.AmazonId = order.AmazonID;
                dbContext.Orders.Update(findOrder);
                await dbContext.SaveChangesAsync();
            };
        }

        public async Task DeleteOrder(int id)
        {
            using (AmazonDbContext dbContext = new AmazonDbContext())
            {
                var findOrder = await dbContext.Orders.FirstOrDefaultAsync(x => x.Id == id);
                dbContext.Orders.Remove(findOrder);
                await dbContext.SaveChangesAsync();
            };
        }


        public async Task<List<Orderd>> GetallOrderscountry(string n)
        {
            using (AmazonDbContext dbContext = new AmazonDbContext())
            {
              
                var countries2 = await dbContext.Orders.Include(x => x.Amazon).Where(x => x.Amazon.Name == n).ToListAsync();

      
                List<Orderd> domainModels = new List<Orderd>();

                foreach (var emp in countries2)
                {
                    domainModels.Add(new Orderd
                    {

                        Id = emp.Id,
                        UserName = emp.Name,
                        ItemQty = emp.ItemQty,
                        Cost = emp.Cost,
                        Created = emp.CreatedDate,
                        Updated = emp.UpdatedDate,
                        AmazonID = emp.AmazonId,


                    }); ;

                }
               
                return domainModels;
            

            }
        }



        public async Task<List<Orderd>> GetallOrderssumcountry(string n)
        {
            using (AmazonDbContext dbContext = new AmazonDbContext())
            {
               
                var countries2 = await dbContext.Orders.Include(x => x.Amazon).Where(x => x.Amazon.Name == n).ToListAsync();

                List<Orderd> domainModels = new List<Orderd>();

                foreach (var emp in countries2)
                {
                    domainModels.Add(new Orderd
                    {

                        Id = emp.Id,
                        UserName = emp.Name,
                        ItemQty = emp.ItemQty,
                        Cost = emp.Cost,

                    }); ;

                }

                return domainModels;

            }
        }
    }
}