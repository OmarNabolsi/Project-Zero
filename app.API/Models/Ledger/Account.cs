using System;
using System.ComponentModel.DataAnnotations;

namespace app.API.Models.Ledger
{
    public class Account
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(10)]
        [MinLength(4)]
        public string AccountNum { get; set; }
        [Required]
        [MaxLength(20)]
        [MinLength(4)]
        public string AccountName { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ModifiedOn { get; set; }
    }
}