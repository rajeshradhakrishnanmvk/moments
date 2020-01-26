using System;
namespace moments.space.api.Exceptions
{
    public class MomentNotFoundException:ApplicationException
    {
        public MomentNotFoundException() { }
        public MomentNotFoundException(string message) : base(message) { }
    }
}