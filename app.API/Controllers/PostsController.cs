using System;
using System.Threading.Tasks;
using app.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace app.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly Post[] _posts;
        public PostsController()
        {
            _posts = new Post[] {
                new Post { Id = 1, Title = "Post 1", Content = " Content of post one", Created = DateTime.Now.AddDays(-3), LastUpdated = DateTime.Now.AddHours(-22) },
                new Post { Id = 2, Title = "Post 2", Content = " Content of post two", Created = DateTime.Now.AddDays(-2), LastUpdated = DateTime.Now.AddHours(-18) },
                new Post { Id = 3, Title = "Post 3", Content = " Content of post three", Created = DateTime.Now.AddDays(-1), LastUpdated = DateTime.Now.AddHours(-12) }
            };
        }

        [HttpGet]
        public IActionResult GetPosts()
        {
            var posts = _posts;
            return Ok(posts);
        }

        [HttpGet("{id}")]
        public IActionResult GetPost(int id)
        {
            var post = Array.Find(_posts, p => p.Id == id);
            if (post == null)
                return NotFound();
                
            return Ok(post);
        }

    }
}