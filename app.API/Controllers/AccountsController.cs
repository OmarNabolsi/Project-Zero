using System;
using System.Threading.Tasks;
using app.API.Data.Ledger;
using app.API.Dtos.Ledger;
using app.API.Models.Ledger;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace app.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly IAccountRepository _repo;
        private readonly IMapper _mapper;
        public AccountsController(IAccountRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpPost]
        public async Task<IActionResult> CreateAccount(AccountDto accDto)
        {
            var account = _mapper.Map<Account>(accDto);
            account.CreatedOn = DateTime.Now;
            account.ModifiedOn = account.CreatedOn;
            _repo.Add(account);
            
            if(await _repo.SaveAll())
            {
                var accountToReturn = _mapper.Map<AccountDto>(account);
                return Ok(accountToReturn);
            }
            return BadRequest("Failed to create Account!");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAccount(int id, AccountDto accDto)
        {
            var account = await _repo.GetAccount(id);
            if (account == null)
                return NotFound();

            _mapper.Map(accDto,account);

            account.ModifiedOn = DateTime.Now;

            if(await _repo.SaveAll())
            {
                return Ok(account);
            }
            return BadRequest("Failed to update account!");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAccount(int id)
        {
            var account = await _repo.GetAccount(id);
            if (account == null)
                return NotFound();
            
            _repo.Delete(account);

            if (await _repo.SaveAll())
                return Ok();
            return BadRequest("Failed to delete account!");
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAccount(int id)
        {
            var account = await _repo.GetAccount(id);
            if (account == null)
                return NotFound();
            return Ok(account);
        }

        [HttpGet]
        public async Task<IActionResult> GetAccounts()
        {
            var accounts = await _repo.GetAccounts();
            return Ok(accounts);
        }
    }
}