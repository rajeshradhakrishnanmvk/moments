
using Microsoft.AspNetCore.Mvc;
using moments.category.api.Service;
using moments.category.api.Models;
using moments.category.api.Extensions;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace moments.category.api.Controllers
{
    [Authorize]
    [ExceptionHandler]
    [Route("api/[controller]")]
    public class CategoryController : Controller
    {
        private readonly ICategoryService service;

        public CategoryController(ICategoryService _service)
        {
            this.service = _service;
        }
        // GET: api/<controller>
        [HttpGet("{id}")]
        public IActionResult Get(int categoryId)
        {
            return Ok(service.GetCategoryById(categoryId));
        }

        // GET api/<controller>/5
        [HttpGet("user/{id}")]
        public IActionResult Get(string userId)
        {
            return Ok(service.GetAllCategoriesByUserId(userId));
        }

        // POST api/<controller>
        [HttpPost]
        public IActionResult Post([FromBody]Category value)
        {
            Category categoryResult = service.CreateCategory(value);
            return Created("", categoryResult);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Category value)
        {
            service.UpdateCategory(id, value);
            return Ok(value);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(service.DeleteCategory(id));
        }
    }
}
