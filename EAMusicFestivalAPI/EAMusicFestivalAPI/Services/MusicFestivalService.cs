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
                    name ="Omega Festival",
                    bands = new List<Band>{
                        new Band{name="Band X", recordLabel="Record Label 1"}
                    }
                },
                new MusicFestival{
                    name ="",
                    bands = new List<Band>{
                        new Band{name="Band Y", recordLabel="Record Label 1"}
                    }
                },
                new MusicFestival{
                    name ="Alpha Festival",
                    bands = new List<Band>{
                        new Band{name="Band A", recordLabel="Record Label 2"}
                    }
                },
                new MusicFestival{
                    name ="Beta Festival",
                    bands = new List<Band>{
                        new Band{name="Band A", recordLabel="Record Label 2"}
                    }
                }
            };
        }
    }
}