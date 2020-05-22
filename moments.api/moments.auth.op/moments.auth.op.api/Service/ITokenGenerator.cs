using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moments.auth.op.api.Service
{
    public interface ITokenGenerator
    {
        string GetJWTToken(string userId);
    }
}
