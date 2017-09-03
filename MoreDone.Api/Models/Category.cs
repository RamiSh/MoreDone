using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Dapper.Contrib.Extensions;

namespace MoreDone.Models
{
    [Table("category")]
    public class Category
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
    }
}