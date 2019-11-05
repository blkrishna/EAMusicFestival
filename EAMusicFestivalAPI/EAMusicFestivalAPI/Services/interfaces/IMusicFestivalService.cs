using EAMusicFestivalAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EAMusicFestivalAPI.Services.interfaces
{
    public interface IMusicFestivalService
    {
        List<MusicFestival> GetMusicFestivals();
    }
}
