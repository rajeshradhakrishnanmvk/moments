using System.Collections.Generic;
using System.Linq;
using moments.category.api.Models;
using MongoDB.Driver;

namespace moments.category.api.Repository
{
    public class CategoryRepository : ICategoryRepository
    {

        private readonly ICategoryContext context;
        public CategoryRepository(ICategoryContext dbContext)
        {
            context = dbContext;
        }

        public Category CreateCategory(Category category)
        {
            //Auto increment PK
            //Get MAX
            var lastCategory = (from rd in GetAllCategories()
                                orderby rd.Id descending
                                select rd).ToList().FirstOrDefault();
            //If Present increment by 1
            category.Id = lastCategory != null ? lastCategory.Id + 1 : 100;
            context.Categories.InsertOne(category);
            return category;
        }

        public bool DeleteCategory(int categoryId)
        {
            context.Categories.DeleteOne(u => u.Id == categoryId);
            return true;
        }

        public List<Category> GetAllCategoriesByUserId(string userId)
        {
            return GetAllCategories();
        }

        public List<Category> GetAllCategories()
        {
            return context.Categories.Find(_ => true).ToList();
        }

        public Category GetCategoryById(int categoryId)
        {
            return context.Categories.Find(u => u.Id == categoryId).FirstOrDefault();
        }

        public bool UpdateCategory(int categoryId, Category category)
        {
            context.Categories.ReplaceOne(m => m.Id == categoryId, category);
            return true;
        }
    }
}
