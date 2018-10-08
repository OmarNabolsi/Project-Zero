using app.API.Dtos;
using app.API.Dtos.Ledger;
using app.API.Models;
using app.API.Models.Ledger;
using AutoMapper;

namespace app.API.Helpers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<PostForCreateDto, Post>();
            CreateMap<PostForUpdateDto, Post>()
                .ForMember(dest => dest.Id, opt => opt.Ignore())
                .ForMember(dest => dest.Created, opt => opt.Ignore());
            CreateMap<Post, PostForReturnDto>();

            CreateMap<AccountDto, Account>()
                .ForMember(dest => dest.Id, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedOn, opt => opt.Ignore());
            CreateMap<Account, AccountDto>();
        }
    }
}