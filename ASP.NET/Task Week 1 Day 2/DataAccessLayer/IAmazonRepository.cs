﻿using DomainLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public interface IAmazonRepository
    {
        public Task<List<Country>> GetCountries();

        public Task<Country> GetCountry(int id);

        public Task InsertCountry(Country country);
        public Task UpdateCountry(Country country);

        public Task DeleteCountry(int id);

    }
}
