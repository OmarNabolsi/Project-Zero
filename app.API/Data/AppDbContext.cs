using app.API.Models;
using Microsoft.EntityFrameworkCore;

namespace app.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) :base(options) {}

        public DbSet<Post> Posts { get; set; }
    }
}