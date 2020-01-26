using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;

namespace moments.space.api.Models
{
    public class MomentUser
    {
        [BsonId]
        public string UserId { get; set; }
        public List<Moment> Moments { get; set; }
    }
}
