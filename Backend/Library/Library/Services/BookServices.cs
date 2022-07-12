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
            //Konwersja na byte z string
            byte[] image = File.ReadAllBytes(bookPost.ImageString); 

            //tutaj konwersja do img byte robimy
            var book = new Book() { Id = bookPost.Id,Name=bookPost.Name,Image = image };

            _books.InsertOne(book);
            return book;
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
