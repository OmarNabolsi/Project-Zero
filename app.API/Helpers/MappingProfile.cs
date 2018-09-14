using app.API.Dtos;
using app.API.Models;
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
        }
    }
}