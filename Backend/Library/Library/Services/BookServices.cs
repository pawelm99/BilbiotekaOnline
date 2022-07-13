using MongoDB.Bson;
using MongoDB.Driver;
using WebApi.Interface;
using WebApi.Models;

namespace WebApi.Services
{
    public class BookServices : IBookServices
    {
        private readonly IMongoCollection<Book> _books;

        public BookServices(ILibraryStoreDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _books = database.GetCollection<Book>(settings.BooksCollectionName);


        }
        public List<Book> GetBooks()
        {

            return _books.Find(book => true).ToList();
        }

        public Book Create(BookPost bookPost)
        {
            using (var ms = new MemoryStream())
            {

                bookPost.FormFile.CopyTo(ms);

                var image = ms.ToArray();

                var book = new Book(ObjectId.GenerateNewId().ToString(),bookPost.Name,image,bookPost.FileName);
                _books.InsertOne(book);
                return book;

            }
        }


        public Book GetBookById(string id)
        {
            return _books.Find(book => book.Id == id).FirstOrDefault();

        }

        public void Delete(string id)
        {
            _books.DeleteOne(book => book.Id == id);

        }

        public void Update(string id, Book book)
        {
            _books.ReplaceOne(book => book.Id == id, book);
        }
    }
}
