using System;
using MongoDB.Bson.Serialization.Attributes;

namespace moments.space.api.Models
{
    public class Moment
    {
        [BsonId]
        public int Id { get; set; }
        public string NasaId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Href { get; set; }
        public Category Category { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreationDate { get; set; }
    }
}
