using DomainLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer
{
    public interface IEmployeeBusiness
    {
        public Task<List<EmployeeDt>> GetEmployees();
        public Task<EmployeeDt> GetEmployee(int id);
        public Task InsertEmployee(EmployeeDt employee);
        public Task UpdateEmployee(EmployeeDt employee);
        public Task DeleteEmployee(int id);
    }
}
