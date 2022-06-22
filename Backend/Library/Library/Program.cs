using Microsoft.Extensions.Options;
using MongoDB.Driver;
using WebApi.Interface;
using WebApi.Models;
using WebApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();


//--------------mongoDb

//Pobieranie sekcji BooksStoreDatabaseSettings z appsettings.json
builder.Services.Configure<LibraryStoreDatabaseSettings>(
    builder.Configuration.GetSection(nameof(LibraryStoreDatabaseSettings)));

//dokumentacja pobieranie us³ugi 
builder.Services.AddSingleton<ILibraryStoreDatabaseSettings>(sp=>
    sp.GetRequiredService<IOptions<LibraryStoreDatabaseSettings>>().Value);

//czytanie connectionStringa
builder.Services.AddSingleton<IMongoClient>(s =>
    new MongoClient(builder.Configuration.GetValue<string>("LibraryStoreDatabaseSettings:ConnectionString")));

builder.Services.AddScoped<IBookServices,BookServices>();
//-------------------

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
