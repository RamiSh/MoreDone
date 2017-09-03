using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using Dapper.Contrib.Extensions;
using MoreDone.Models;
using MySql.Data.MySqlClient;

namespace MoreDone
{
    public class CategoryRepository : BaseRepository
    {
        private new string ConnectionString { get; }

        public CategoryRepository(string connectionString)
        {
            this.ConnectionString = connectionString;
        }

        public List<Category> GetCategories()
        {
            using (IDbConnection connection = new MySqlConnection(ConnectionString))
            {
                return connection.GetAll<Category>().ToList();
            }
        }
    }
}