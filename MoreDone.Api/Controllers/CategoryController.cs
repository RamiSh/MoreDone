using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MoreDone.Controllers
{
    public class CategoryController : ApiController
    {
        CategoryRepository categoryRepository =
            new CategoryRepository(ConfigurationManager.ConnectionStrings["DoMore"].ConnectionString);

        [Route("Category")]
        [HttpGet]
        public IHttpActionResult TasksGet()
        {

            return Ok(categoryRepository.GetCategories());
        }

    }
}
