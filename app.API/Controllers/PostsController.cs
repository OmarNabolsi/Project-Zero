using System;
using System.Threading.Tasks;
using app.API.Data;
using app.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace app.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly AppDbContext _context;
        public PostsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetPosts()
        {
            var posts = await _context.Posts.ToListAsync();
            return Ok(posts);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPost(int id)
        {
            var post = await _context.Posts.FirstOrDefaultAsync(p => p.Id == id);
            if (post == null)
                return NotFound();

            return Ok(post);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePost(Post post)
        {
            post.Created = DateTime.Now;
            post.LastUpdated = post.Created;

            await _context.Posts.AddAsync(post);
            var result = await _context.SaveChangesAsync();
            if (result > 0)
                return Ok(post);
            return BadRequest("Failed to create post!");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePost(int id, Post post)
        {
            var postFromDb = await _context.Posts.FirstOrDefaultAsync(p => p.Id == id);

            if (postFromDb == null)
                return NotFound();
            
            postFromDb.Title = post.Title;
            postFromDb.Content = post.Content;
            postFromDb.LastUpdated = DateTime.Now;

            var result = await _context.SaveChangesAsync();

            if (result > 0)
                return Ok(postFromDb);
            
            return BadRequest($"Failed to update post {id}!");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePost(int id)
        {
            var postToDelete = await _context.Posts.FirstOrDefaultAsync(p => p.Id == id);
            
            if (postToDelete == null)
                return NotFound();

            _context.Posts.Remove(postToDelete);
            var result = await _context.SaveChangesAsync();

            if (result <= 0)
                return BadRequest($"Failed to delete post {id}!");
            
            return NoContent();
        }

    }
}