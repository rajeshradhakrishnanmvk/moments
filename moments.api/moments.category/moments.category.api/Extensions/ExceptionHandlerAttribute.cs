﻿using moments.category.api.Exceptions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moments.category.api.Extensions
{
    public class ExceptionHandlerAttribute : ExceptionFilterAttribute
    {

        public override void OnException(ExceptionContext context)
        {
            //base.OnException(context);
            var exceptionType = context.Exception.GetType();
            var message = context.Exception.Message;

            if (exceptionType == typeof(CategoryNotFoundException))
            {

                var result = new NotFoundObjectResult(message);
                context.Result = result;
            }
            else if (exceptionType == typeof(CategoryNotCreatedException))
            {

                var result = new NotFoundObjectResult(message);
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
