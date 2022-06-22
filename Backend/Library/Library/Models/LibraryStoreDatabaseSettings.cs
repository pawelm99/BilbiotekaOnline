using WebApi.Interface;

namespace WebApi.Models
{
    public class LibraryStoreDatabaseSettings : ILibraryStoreDatabaseSettings
    {
        public string BooksCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
