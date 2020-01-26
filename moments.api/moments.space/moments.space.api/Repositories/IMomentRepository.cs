using System.Collections.Generic;
using moments.space.api.Models;

namespace moments.space.api.Repository
{
    public interface IMomentRepository
    {
        MomentUser CreateMoment(MomentUser noteUser);
        bool DeleteMoment(string userId, int noteId);
        MomentUser UpdateMoment(int noteId, string userId, Moment note);
        List<Moment> FindByUserId(string userId);
    }
}
