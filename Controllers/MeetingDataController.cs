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
        private static string[] Subjects = 
        {
            "eCraft Management Monthly Meeting", "Jooses Design workshop", "Joose goes sickbr0", "Nousiainen Inspection"
        };

        private static string[] Organizers = 
        {
            "Ville Hemmilä", "Joose Rautemaa",
        };

        [HttpGet("[action]")]
        public IEnumerable<MeetingModel> Meetings()
        {
            var rng = new Random();

            return Enumerable.Range(1, Subjects.Length).Select(index => new MeetingModel
            {
                Subject = Subjects[rng.Next(Subjects.Length)],
                Organizer = Organizers[rng.Next(Organizers.Length)],
                StartTime = DateTime.Now.AddHours(rng.Next(3)),
                EndTime = DateTime.Now.AddHours(4 + rng.Next(3)),

                Participants = new List<ParticipantModel>
                               {
                                   new ParticipantModel { Name = "Juho Röyhy", Title = "Art Director" },
                                   new ParticipantModel { Name = "Petteri Lehtonen", Title = "UX Architect" },
                                   new ParticipantModel { Name = "Tero Tapanainen", Title = "CTO" },
                               }
            });
        }

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
