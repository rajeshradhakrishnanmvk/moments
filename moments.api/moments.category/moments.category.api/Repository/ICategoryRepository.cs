﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using moments.category.api.Models;

namespace moments.category.api.Repository
{
    public interface ICategoryRepository
    {
        Category CreateCategory(Category category);
        bool DeleteCategory(int categoryId);
        bool UpdateCategory(int categoryId, Category category);
        Category GetCategoryById(int categoryId);
        List<Category> GetAllCategoriesByUserId(string userId);
    }
}
