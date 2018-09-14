using System.Collections.Generic;
using System.Threading.Tasks;
using app.API.Models;

namespace app.API.Data
{
    public interface IPostRepository
    {
         void Add<T>(T entity) where T:class;
         void Delete<T>(T entity) where T:class;
         Task<Post> GetPost(int id);
         Task<IEnumerable<Post>> GetPosts();
         Task<bool> SaveAll();
    }
}