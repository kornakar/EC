using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AureliaCoreApp.Controllers
{
    [Route("api/[controller]")]
    public class MeetingDataController : Controller
    {
        [HttpGet("[action]")]
        public MeetingModel Meeting()
        {
            return new MeetingModel
                   {
                       Subject = "Jooses Design workshop",
                       Organizer = "Joose Rautemaa",
                       StartTime = new DateTime(2018, 03, 03, 09, 30, 00),
                       EndTime = new DateTime(2018, 03, 03, 10, 30, 00),

                        Participants = new List<ParticipantModel>
                                      {
                                          new ParticipantModel {Name = "Juho Röyhy", Title = "Art Director"},
                                          new ParticipantModel {Name = "Petteri Lehtonen", Title = "UX Architect"},
                                          new ParticipantModel {Name = "Tero Tapanainen", Title = "CTO"},
                                      }
                   };
        }

        [HttpGet("[action]")]
        public IEnumerable<MeetingModel> Meetings()
        {
            return new List<MeetingModel>
                   {
                       new MeetingModel
                       {
                           Subject = "eCraft Management Monthly Meeting",
                           Organizer = "Ville Hemmilä",
                           StartTime = new DateTime(2018, 03, 03, 07, 30, 00),
                           EndTime = new DateTime(2018, 03, 03, 08, 30, 00),

                           Participants = new List<ParticipantModel>
                                          {
                                              new ParticipantModel {Name = "Juho Röyhy", Title = "Art Director"},
                                              new ParticipantModel {Name = "Petteri Lehtonen", Title = "UX Architect"},
                                              new ParticipantModel {Name = "Tero Tapanainen", Title = "CTO"},
                                          }
                       },

                       new MeetingModel
                       {
                           Subject = "Jooses Design workshop",
                           Organizer = "Joose Rautemaa",
                           StartTime = new DateTime(2018, 03, 03, 09, 30, 00),
                           EndTime = new DateTime(2018, 03, 03, 10, 30, 00),

                           Participants = new List<ParticipantModel>()
                       },

                       new MeetingModel
                       {
                           Subject = "Joose goes sickbr0",
                           Organizer = "Joose Rautemaa",
                           StartTime = new DateTime(2018, 03, 03, 10, 30, 00),
                           EndTime = new DateTime(2018, 03, 03, 11, 30, 00),

                           Participants = new List<ParticipantModel>()
                       },

                       new MeetingModel
                       {
                           Subject = "Nousiainen Inspection",
                           Organizer = "Joose Rautemaa",
                           StartTime = new DateTime(2018, 03, 03, 11, 30, 00),
                           EndTime = new DateTime(2018, 03, 03, 13, 30, 00),

                           Participants = new List<ParticipantModel>()
                       },
                   };
        }

        // NOTE: starttime ja endtime stringejä koska moment ei asentunut --> ei voi tehdä konverteria
        public class MeetingModel
        {
            public string Subject { get; set; }
            public string Organizer { get; set; }
            public DateTime StartTime { get; set; }
            public DateTime EndTime { get; set; }

            public IList<ParticipantModel> Participants { get; set; }
        }

        public class ParticipantModel
        {
            public string Name { get; set; }
            public string Title { get; set; }
        }
    }
}
