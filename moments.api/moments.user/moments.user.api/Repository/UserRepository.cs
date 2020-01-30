using System.Linq;
using MongoDB.Driver;
using moments.user.api.Models;

namespace moments.user.api.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly IUserContext context;
        public UserRepository(IUserContext dbContext)
        {
            context = dbContext;
        }

        public bool DeleteUser(string userId)
        {
            context.Users.DeleteOne(u => u.UserId == userId);
            return true;
        }

        public User GetUserById(string userId)
        {
            return context.Users.Find(u => u.UserId == userId).FirstOrDefault();
        }

        public User RegisterUser(User user)
        {
            context.Users.InsertOne(user);
            return user;
        }

        public bool UpdateUser(string userId, User user)
        {
            context.Users.ReplaceOne(m => m.UserId == userId, user);
            return true;
        }
    }
}
