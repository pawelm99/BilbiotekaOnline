using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebApi.Models
{
    public class BookPost
    {

        [BsonElement("name")]
        public string Name { get; set; }
        [BsonElement("ImageName")]
        public string FileName { get; set; }
        [BsonElement("Image")]
        public IFormFile FormFile { get; set; }
    }
}
