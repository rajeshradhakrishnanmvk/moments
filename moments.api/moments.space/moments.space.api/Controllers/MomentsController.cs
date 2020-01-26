using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using moments.space.api.Extensions;
using moments.space.api.Models;
using moments.space.api.Service;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace moments.space.api.Controllers
{
    [Authorize]
    [ExceptionHandler]
    [Route("api/[controller]")]
    public class MomentsController : Controller
    {
        private readonly IMomentService service;

        public MomentsController(IMomentService MomentService)
        {
            service = MomentService;
        }

        // GET: api/<controller>
        [HttpGet]
        public IActionResult Get()
        {
            throw new NotImplementedException();
        }

        // GET api/<controller>/5
        [HttpGet("{userId}")]
        public IActionResult Get(string userId)
        {
            return Ok(service.GetAllMoments(userId));
        }

        // POST api/<controller>
        [HttpPost("{userId}")]
        public IActionResult Post(string userId,[FromBody]Moment moment)
        {
            MomentUser momentResult = service.AddMoment(userId, moment);
            return Ok(momentResult.Moments);
        }

        // PUT api/<controller>/5
        [HttpPut("{userId}/{momentId}")]
        public IActionResult Put(string userId,int momentId, [FromBody]Moment moment)
        {
            MomentUser momentResult = service.UpdateMoment(momentId, userId, moment);
            return Ok(momentResult);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{userId}/{momentId}")]
        public IActionResult Delete(string userId, int momentId)
        {
            return Ok(service.DeleteMoment(userId, momentId));
        }
    }
}
