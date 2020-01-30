using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;

namespace moments.user.api.Models
{
    public interface IUserContext
    {
        IMongoCollection<User> Users { get; }
    }
}
