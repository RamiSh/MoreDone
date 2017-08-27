using System.Web.Http;
using System.Configuration;
using MoreDone.Models;

namespace MoreDone.Controllers
{
    public class TaskController : ApiController
    {
        TaskRepository taskRepository =
            new TaskRepository(ConfigurationManager.ConnectionStrings["DoMore"].ConnectionString);

        [Route("Tasks")]
        [HttpGet]
        public IHttpActionResult TasksGet()
        {

            return Ok(taskRepository.GetTasks());
        }

        [Route("Tasks")]
        [HttpPost]
        public IHttpActionResult TaskPost([FromBody] Task updatedTask)
        {
            return Ok(taskRepository.UpdateTask(updatedTask));
        }

        [Route("Tasks")]
        [HttpPut]
        public IHttpActionResult TaskPut([FromBody] Task newTask)
        {
            return Ok(taskRepository.AddTask(newTask));
        }
    }
}
