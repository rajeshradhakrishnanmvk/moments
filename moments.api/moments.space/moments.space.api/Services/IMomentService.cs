using System.Collections.Generic;
using moments.space.api.Models;

namespace moments.space.api.Service
{
    public interface IMomentService
    {
        MomentUser CreateMoment(MomentUser noteUser);
        MomentUser AddMoment(string userId, Moment note);
        bool DeleteMoment(string userId, int noteId);
        MomentUser UpdateMoment(int noteId, string userId, Moment note);
        List<Moment> GetAllMoments(string userId);
        Moment GetMoment(string userId, int noteId);
    }
}
