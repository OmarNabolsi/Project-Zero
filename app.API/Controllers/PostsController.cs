using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using app.API.Data;
using app.API.Dtos;
using app.API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace app.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly IPostRepository _repo;
        private readonly IMapper _mapper;
        public PostsController(IPostRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetPosts()
        {
            var posts = await _repo.GetPosts();
            var postsToReturn = _mapper.Map<IEnumerable<PostForReturnDto>>(posts);
            return Ok(postsToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPost(int id)
        {
            var post = await _repo.GetPost(id);

            if (post == null)
                return NotFound();

            var postToReturn = _mapper.Map<PostForReturnDto>(post);

            return Ok(postToReturn);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePost(PostForCreateDto postForCreateDto)
        {
            var post = _mapper.Map<Post>(postForCreateDto);

            post.Created = DateTime.Now;
            post.LastUpdated = post.Created;

            _repo.Add(post);
            var result = await _repo.SaveAll();
            if (result)
            {
                var postToReturn = _mapper.Map<PostForReturnDto>(post);
                return Ok(postToReturn);
            }

            return BadRequest("Failed to create post!");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePost(int id, PostForUpdateDto postForUpdateDto)
        {
            var postFromDb = await _repo.GetPost(id);

            if (postFromDb == null)
                return NotFound();

            postForUpdateDto.LastUpdated = DateTime.Now;

            _mapper.Map(postForUpdateDto, postFromDb);
            

            var result = await _repo.SaveAll();

            if (result)
                return Ok(postFromDb);

            return BadRequest($"Failed to update post {id}!");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePost(int id)
        {
            var postToDelete = await _repo.GetPost(id);

            if (postToDelete == null)
                return NotFound();

            _repo.Delete(postToDelete);
            var result = await _repo.SaveAll();

            if (!result)
                return BadRequest($"Failed to delete post {id}!");

            return NoContent();
        }

    }
}