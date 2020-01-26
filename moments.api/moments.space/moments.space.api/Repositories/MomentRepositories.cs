using System;
using System.Linq;
using MongoDB.Driver;
using System.Collections.Generic;
using moments.space.api.Models;

namespace moments.space.api.Repository
{
    public class MomentRepository : IMomentRepository
    {
        private readonly IMomentContext context;
        public MomentRepository(IMomentContext dbContext)
        {
            context = dbContext;
        }
        public MomentUser CreateMoment(MomentUser noteUser)
        {
            context.Moments.InsertOne(noteUser);
            return noteUser;
        }

        public bool DeleteMoment(string userId, int noteId)
        {
            MomentUser noteUser =  context.Moments.Find(nu => nu.UserId == userId).ToList().FirstOrDefault();
            if(noteUser != null)
            {
                Moment dbMoment = noteUser.Moments.Find(n => n.Id == noteId);
                if (dbMoment != null)
                {
                    noteUser.Moments.Remove(dbMoment);
                    context.Moments.ReplaceOne(nu => nu.UserId == userId, noteUser);
                }
            }

            return true;

       }

        public List<Moment> FindByUserId(string userId)
        {
            MomentUser noteUser = context.Moments.Find(nu => nu.UserId == userId).ToList().FirstOrDefault();
            List<Moment> ret = new List<Moment>();
            if (noteUser != null)
            {
                ret = noteUser.Moments;
            }
                return ret;
        }

        public MomentUser UpdateMoment(int noteId, string userId, Moment note)
        {
            MomentUser noteUser = context.Moments.Find(nu => nu.UserId == userId).ToList().FirstOrDefault();
            if (noteUser == null)
            {
                noteUser = new MomentUser()
                {
                    UserId = userId,
                    Moments = new List<Moment>()
                };
                note.Id = noteId;
                noteUser.Moments.Add(note);
                this.CreateMoment(noteUser);
            }
            else
            {
                Moment dbMoment = noteUser.Moments.Find(n => n.Id == note.Id);
                if (dbMoment != null)
                {
                    noteUser.Moments.Remove(dbMoment);

                }
                else
                {
                    //Auto increment PK
                    //Get MAX
                    var lastMoment = (Moment)(from nt in noteUser.Moments
                                          orderby nt.Id descending
                                          select nt).ToList().FirstOrDefault();
                    //If Present increment by 1
                    note.Id = lastMoment != null ? lastMoment.Id + 1 : 100;
                }

                noteUser.Moments.Add(note);
                context.Moments.ReplaceOne(nu => nu.UserId == userId, noteUser);
            }
            return noteUser;
        }
    }
}
