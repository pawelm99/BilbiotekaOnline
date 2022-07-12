using WebApi.Models;

namespace WebApi.Services
{
    public interface IBookServices
    {
        List<Book> GetBooks();
        Book GetBookById(string id);
        Book Create(BookPost book);
        void Update(string id, Book book);
        void Delete(string id);

    }
}
