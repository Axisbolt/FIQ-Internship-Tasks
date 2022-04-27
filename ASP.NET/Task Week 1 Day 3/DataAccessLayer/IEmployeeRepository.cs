using DomainLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public interface IEmployeeRepository
    {
        public Task<List<EmployeeDt>> GetEmployees();

        public Task<EmployeeDt> GetEmployee(int id);

        public Task InsertEmployee(EmployeeDt employee);
        public Task UpdateEmployee(EmployeeDt employee);

        public Task DeleteEmployee(int id);




    }
}
