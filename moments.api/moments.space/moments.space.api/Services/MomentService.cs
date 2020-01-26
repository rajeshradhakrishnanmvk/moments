
using System.Collections.Generic;
using moments.space.api.Exceptions;
using moments.space.api.Models;
using moments.space.api.Repository;

namespace moments.space.api.Service
{
    public class MomentService : IMomentService
    {

        private readonly IMomentRepository repository;

        public MomentService(IMomentRepository noteRepository)
        {
            repository = noteRepository;
        }

        public MomentUser AddMoment(string userId, Moment note)
        {
            return this.UpdateMoment(101, userId, note);
        }

        public MomentUser CreateMoment(MomentUser noteUser)
        {
            return repository.CreateMoment(noteUser);
            //Moment query = this.GetAllMoments(noteUser.UserId).Find(n => n.Id == noteUser.Moments.FirstOrDefault().Id);
            //if (query == null)
            //{
            //    return repository.CreateMoment(noteUser);
            //}
            //else
            //{
            //    throw new MomentAlreadyExistsException($"Moment Already Exists");
            //}
        }

        public bool DeleteMoment(string userId, int noteId)
        {
            return repository.DeleteMoment(userId, noteId);
            //Moment query = this.GetAllMoments(userId).Find(n => n.Id == noteId);
            //if (query != null)
            //{
            //    return repository.DeleteMoment(userId, noteId);
            //}
            //else
            //{
            //    throw new MomentNotFoundException($"Moment not found");
            //}
        }

        public List<Moment> GetAllMoments(string userId)
        {
            return repository.FindByUserId(userId);
        }

        public Moment GetMoment(string userId, int noteId)
        {
            return this.GetAllMoments(userId).Find(n => n.Id == noteId);
        }

        public MomentUser UpdateMoment(int noteId, string userId, Moment note)
        {
            return repository.UpdateMoment(noteId, userId, note);
        }
    }
}
