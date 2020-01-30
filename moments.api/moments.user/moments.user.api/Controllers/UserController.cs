using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using moments.user.api.Extensions;
using moments.user.api.Models;
using moments.user.api.Service;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace moments.user.api.Controllers
{
    [Authorize]
    [ExceptionHandler]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IUserService service;

        public UserController(IUserService userService)
        {
            service = userService;
        }
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            return Ok(service.GetUserById(id));
        }

        // POST api/<controller>
        [HttpPost]
        public IActionResult Post([FromBody] User user)
        {
            User userResult = service.RegisterUser(user);
            return Created("", userResult);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public IActionResult Put(string id, [FromBody] User user)
        {
            service.UpdateUser(id, user);
            return Ok(user);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            return Ok(service.DeleteUser(id));
        }
    }
}
