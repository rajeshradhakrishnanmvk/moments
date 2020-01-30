﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moments.auth.api.Service
{
    public interface ITokenGenerator
    {
        string GetJWTToken(string userId);
    }
}
