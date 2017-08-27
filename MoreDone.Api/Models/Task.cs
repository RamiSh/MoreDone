using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Dapper.Contrib.Extensions;

namespace MoreDone.Models
{
    public enum TaskCategory
    {
        ImportantUrgent = 0,
        ImportantNonurgent = 1,
        UnimportantUrgent = 2,
        UnimportantNonurgent = 3,
        Unsorted = 4
    }

    [Table("task")]
    public class Task
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public TaskCategory Category { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateModified { get; set; }
    }
}