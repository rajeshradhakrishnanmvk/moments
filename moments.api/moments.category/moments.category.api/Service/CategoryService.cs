using System;
using System.Collections.Generic;
using moments.category.api.Models;
using moments.category.api.Repository;
using moments.category.api.Exceptions;
using MongoDB.Driver;

namespace moments.category.api.Service
{
    public class CategoryService:ICategoryService
    {
        private readonly ICategoryRepository repository;

        public CategoryService(ICategoryRepository categoryRepository)
        {
            repository = categoryRepository;
        }

        public Category CreateCategory(Category category)
        {
            Category createdUser = repository.CreateCategory(category);
            if (createdUser != null)
            {
                return createdUser;
            }
            else
            {
                throw new CategoryNotCreatedException($"This category id already exists");
            }
        }

        public bool DeleteCategory(int categoryId)
        {
            bool result = repository.DeleteCategory(categoryId);
            if (result)
            {
                return result;
            }
            else
            {
                throw new CategoryNotFoundException($"This category id not found");
            }
        }

        public List<Category> GetAllCategoriesByUserId(string userId)
        {
            return repository.GetAllCategoriesByUserId(userId);
        }

        public Category GetCategoryById(int categoryId)
        {
            Category queryCategory = repository.GetCategoryById(categoryId);
            if (queryCategory != null)
            {
                return queryCategory;
            }
            else
            {
                throw new CategoryNotFoundException($"This category id not found");
            }
        }

        public bool UpdateCategory(int categoryId, Category category)
        {
            bool result = repository.UpdateCategory(categoryId, category);
            if (result)
            {
                return result;
            }
            else
            {
                throw new CategoryNotFoundException($"This category id not found");
            }
        }
    }
}
