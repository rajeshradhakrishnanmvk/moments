﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace moments.category.api.Models
{
    public interface ICategoryContext
    {
        IMongoCollection<Category> Categories { get; }
    }
}
