using EAMusicFestivalAPI.Models;
using EAMusicFestivalAPI.Services.interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EAMusicFestivalAPI.Services
{
    public class MusicFestivalService : IMusicFestivalService
    {
        // Create sample Festivals
        public List<MusicFestival> GetMusicFestivals()
        {
            return new List<MusicFestival> {
                new MusicFestival{
                    name ="MusicFestival1",
                    bands = new List<Band>{
                        new Band{name="Band1", recordLabel="RL1"},
                        new Band{name="Band2", recordLabel="RL2"},
                        new Band{name="Band3", recordLabel="RL1"}
                    }
                },
                new MusicFestival{
                    name ="MusicFestival2",
                    bands = new List<Band>{
                        new Band{name="Band2", recordLabel="RL2"}
                    }
                }
            };
        }
    }
}