using Microsoft.AspNetCore.Mvc;
using WebApi.Models;
using WebApi.Services;


namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IBookServices bookServices;

        public BooksController(IBookServices bookServices)
        {
            this.bookServices = bookServices;
        }

        // GET: api/<BooksController>
        [HttpGet]
        public ActionResult<List<Book>> Get()
        {
            return bookServices.GetBooks();
        }

        // GET api/<BooksController>/5
        [HttpGet("{id}")]
        public ActionResult<Book> Get(string id)
        {
            var book = bookServices.GetBookById(id);

            if(book == null)
            {
                return NotFound($"Not found with id: {id}");
            }
            return book;
        }

        // POST api/<BooksController>
        [HttpPost]
        public ActionResult<Book> Post([FromBody] Book book)
        {
            bookServices.Create(book);

            return CreatedAtAction(nameof(Get), new { id = book.Id }, book);
        }

        // PUT api/<BooksController>/5
        [HttpPut("{id}")]
        public ActionResult<Book> Put(string id, [FromBody] Book book)
        {
            var exists = bookServices.GetBookById(id);

            if(exists == null)
            {
                return NotFound($"Not found with id: {id}");
            }
            bookServices.Update(id, book);

            return NoContent();
        }

        // DELETE api/<BooksController>/5
        [HttpDelete("{id}")]
        public ActionResult<Book> Delete(string id)
        {
            var book = bookServices.GetBookById(id);

            if (book == null)
            {
                return NotFound($"Not found with id: {id}");
            }
            bookServices.Delete(book.Id);

            return Ok($"Book with id {id} is deleted");

        }
    }
}
