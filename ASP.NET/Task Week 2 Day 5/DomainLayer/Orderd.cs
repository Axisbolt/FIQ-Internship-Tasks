using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainLayer
{
    public class Orderd
    {

        public int Id { get; set; }
        public string UserName { get; set; }

        public int Cost { get; set; }

        public int ItemQty { get; set; }

        public DateTime Created { get; set; }

        public DateTime Updated { get; set; }

        public int AmazonID { get; set; }
     
    }
}
