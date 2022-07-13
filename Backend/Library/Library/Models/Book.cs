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

        [BsonElement("image")]
        public byte[] Image { get; set; }

        [BsonElement("imageName")]
        public string ImageName { get; set; }


        public Book(string id, string name, byte[] image, string imageName)
        {
            Id = id;
            Name = name;
            Image = image;
            ImageName = imageName;
        }

    }
}
