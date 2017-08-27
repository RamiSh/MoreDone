using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Dapper.Contrib.Extensions;

namespace MoreDone.Models
{
    public enum TaskCategory
    {
        ImportantUrgent = 1,
        ImportantNonurgent = 2,
        UnimportantUrgent = 3,
        UnimportantNonurgent = 4,
        Unsorted = 5,
        Deleted = 6,
        Completed = 7
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