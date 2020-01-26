
using MongoDB.Driver;

namespace moments.space.api.Models
{
    public interface IMomentContext
    {
        IMongoCollection<MomentUser> Moments { get; }
    }
}
