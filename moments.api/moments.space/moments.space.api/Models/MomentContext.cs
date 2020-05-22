using System;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace moments.space.api.Models
{
    public class MomentContext : IMomentContext
    {
        private readonly IMongoDatabase database;
        MongoClient client;

        public MomentContext(IConfiguration configuration)
        {
            //client = new MongoClient(configuration.GetSection("MongoDB:ConnectionString").Value);
            client = new MongoClient(Environment.GetEnvironmentVariable("MONGODB_URI"));
            database = client.GetDatabase(configuration.GetSection("MongoDB:Database").Value);
        }

        public IMongoCollection<MomentUser> Moments => database.GetCollection<MomentUser>("Moments");
    }
}
