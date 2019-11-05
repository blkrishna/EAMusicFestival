using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EAMusicFestivalAPI.Models;
using EAMusicFestivalAPI.Services.interfaces;
using Microsoft.AspNetCore.Mvc;

namespace EAMusicFestivalAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MusicFestivalsController : ControllerBase
    {
        private IMusicFestivalService _musicFestivalService;

        public MusicFestivalsController(IMusicFestivalService musicFestivalService)
        {
            _musicFestivalService = musicFestivalService;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<MusicFestival> Get()
        {
            return _musicFestivalService.GetMusicFestivals();
        }

        //// GET api/values/5
        //[HttpGet("{id}")]
        //public ActionResult<string> Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/values
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT api/values/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/values/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
