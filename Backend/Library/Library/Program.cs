using Microsoft.Extensions.Options;
using MongoDB.Driver;
using WebApi.Interface;
using WebApi.Models;
using WebApi.Services;

var builder = WebApplication.CreateBuilder(args);


// Add Policy Cors dla Api.
builder.Services.AddCors(options =>
{
    options.AddPolicy("CORSPolicy", builder =>
    {
        builder.AllowAnyMethod()
        .AllowAnyHeader()
        .WithOrigins("http://localhost:3000", "https://appname.azurestaticapps.net");
    });

});


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


app.UseAuthorization();

app.MapControllers();

//uzycie policy dla Api
app.UseCors("CORSPolicy");

app.Run();
