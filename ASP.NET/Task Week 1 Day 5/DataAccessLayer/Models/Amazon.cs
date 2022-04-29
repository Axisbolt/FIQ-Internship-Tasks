using System;
using System.Collections.Generic;

namespace DataAccessLayer.Models
{
    public partial class Amazon
    {
        public Amazon()
        {
            Orders = new HashSet<Order>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;

        public virtual ICollection<Order> Orders { get; set; }
    }
}
