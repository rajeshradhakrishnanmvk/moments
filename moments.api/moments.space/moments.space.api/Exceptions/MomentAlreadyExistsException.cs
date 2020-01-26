using System;
namespace moments.space.api.Exceptions
{
    public class MomentAlreadyExistsException:ApplicationException
    {
        public MomentAlreadyExistsException() { }
        public MomentAlreadyExistsException(string message) : base(message) { }
    }
}