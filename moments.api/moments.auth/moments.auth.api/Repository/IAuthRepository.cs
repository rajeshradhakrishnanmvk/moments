using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using moments.auth.api.Models;

namespace moments.auth.api.Repository
{
    public interface IAuthRepository
    {
        bool RegisterUser(User user);
        User LoginUser(string userId, string password);
        User FindUserById(string userId);
    }
}
