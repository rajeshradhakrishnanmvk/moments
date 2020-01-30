using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using moments.user.api.Models;

namespace moments.user.api.Repository
{
    public interface IUserRepository
    {
        User RegisterUser(User user);
        bool UpdateUser(string userId, User user);
        bool DeleteUser(string userId);
        User GetUserById(string userId);
    }
}
