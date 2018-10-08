using System;

namespace app.API.Dtos.Ledger
{
    public class AccountDto
    {
        public int Id { get; set; }
        public string AccountNum { get; set; }
        public string AccountName { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ModifiedOn { get; set; }
    }
}