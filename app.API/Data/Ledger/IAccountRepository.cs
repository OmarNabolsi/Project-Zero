using System.Collections.Generic;
using System.Threading.Tasks;
using app.API.Models.Ledger;

namespace app.API.Data.Ledger
{
    public interface IAccountRepository
    {
         void Add<T>(T entity) where T:class;
         void Delete<T>(T entity) where T:class;
         Task<Account> GetAccount(int id);
         Task<IEnumerable<Account>> GetAccounts();
         Task<bool> SaveAll();
    }
}