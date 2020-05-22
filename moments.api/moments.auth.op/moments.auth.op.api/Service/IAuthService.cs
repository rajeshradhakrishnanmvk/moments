using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using moments.auth.op.api.Models;

namespace moments.auth.op.api.Service
{
    public interface IAuthService
    {
        bool RegisterUser(User user);
        User LoginUser(string userId, string password);
    }
}
