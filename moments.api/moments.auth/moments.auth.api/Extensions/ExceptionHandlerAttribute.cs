using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using moments.auth.api.Exceptions;

namespace moments.auth.api.Extensions
{
    public class ExceptionHandlerAttribute : ExceptionFilterAttribute
    {

        public override void OnException(ExceptionContext context)
        {
            //base.OnException(context);
            var exceptionType = context.Exception.GetType();
            var message = context.Exception.Message;

            if (exceptionType == typeof(UserNotFoundException))
            {

                var result = new NotFoundObjectResult(message);
                context.Result = result;
            }
            else if (exceptionType == typeof(UserNotCreatedException))
            {

                var result = new ConflictResult();
                context.Result = result;
            }
            else
            {
                var result = new StatusCodeResult(500);
                context.Result = result;

            }

        }
    }
}
