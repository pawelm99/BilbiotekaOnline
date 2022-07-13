using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebApi.Models
{
    public class BookPost
    {
/*
        [BsonElement("name")]
        public string Name { get; set; }*/

        public string FileName { get; set; }
        public IFormFile FormFile { get; set; }
    }
}
