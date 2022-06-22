using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebApi.Models
{
    [BsonIgnoreExtraElements]
    public class Book
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } 

        [BsonElement("name")]
        public string Name { get; set; } 
    }
}
