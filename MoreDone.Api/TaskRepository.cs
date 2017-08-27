using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;
using MoreDone.Models;
using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace MoreDone
{
    public abstract class BaseRepository
    {
        public string ConnectionString { get; set; }
    }

    public class TaskRepository : BaseRepository
    {
        private new string ConnectionString { get; }

        public TaskRepository(string connectionString)
        {
            this.ConnectionString = connectionString;
        }

        public long AddTask(Task newTask)
        {
            using (IDbConnection connection = new MySqlConnection(ConnectionString))
            {
                return connection.Insert(newTask);
            }
        }

        public bool UpdateTask(Task updatedTask)
        {
            if (updatedTask == null)
            {
                throw new ArgumentNullException();
            }

            updatedTask.DateModified = DateTime.Now;

            using (IDbConnection connection = new MySqlConnection(ConnectionString))
            {
                return connection.Update(updatedTask);
            }
        }

        public List<Task> GetTasks()
        {
            using (IDbConnection connection = new MySqlConnection(ConnectionString))
            {
                return connection.GetAll<Task>().ToList();
            }
        }
    }
}