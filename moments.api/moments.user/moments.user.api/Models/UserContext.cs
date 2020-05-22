using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace moments.user.api.Models
{
    public class UserContext:IUserContext
    {
        private readonly IMongoDatabase database;
        MongoClient client;
        public UserContext(IConfiguration configuration)
        {
            //client = new MongoClient(configuration.GetSection("MongoDB:ConnectionString").Value);
            client = new MongoClient(Environment.GetEnvironmentVariable("MONGODB_URI"));
            database = client.GetDatabase(configuration.GetSection("MongoDB:Database").Value);
        }

        public IMongoCollection<User> Users => database.GetCollection<User>("Users");
    }
}
