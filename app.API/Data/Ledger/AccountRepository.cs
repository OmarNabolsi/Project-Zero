using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using app.API.Models.Ledger;
using Microsoft.EntityFrameworkCore;

namespace app.API.Data.Ledger
{
    public class AccountRepository : IAccountRepository
    {
        private readonly AppDbContext _context;
        public AccountRepository(AppDbContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Account> GetAccount(int id)
        {
            var account = await _context.Accounts.FirstOrDefaultAsync(acc => acc.Id == id);
            return account;
        }

        public async Task<IEnumerable<Account>> GetAccounts()
        {
            var accounts = await _context.Accounts.OrderBy(acc => acc.AccountNum).ToListAsync();
            return accounts;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}