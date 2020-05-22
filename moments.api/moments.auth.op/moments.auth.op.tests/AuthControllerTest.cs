using System;
using Xunit;
using Moq;
using moments.auth.op.api.Service;
using moments.auth.op.api.Models;
using moments.auth.op.api.Controllers;
using Microsoft.AspNetCore.Mvc;
using moments.auth.op.api.Exceptions;
using Microsoft.Extensions.Logging;

namespace moments.auth.op.api.Test
{
    public class AuthControllerTest
    {
        [Fact]
        public void MySqlRegisterShouldReturnCreatedResult()
        {
            var mockService = new Mock<IAuthService>();
            var mockTokenService = new Mock<ITokenGenerator>();
            var mockLogService = new Mock<ILogger>();
            User user = new User { UserId = "sachin", Password = "admin123", FirstName = "Sachin", LastName = "Gupta", Role = "admin", AddedDate = new DateTime() };


            mockService.Setup(service => service.RegisterUser(user)).Returns(true);
            mockTokenService.Setup(service => service.GetJWTToken("sachin")).Returns("This is token");
            var controller = new AuthController(mockService.Object, mockTokenService.Object);

            var actual = controller.Register(user);

            var actionReult = Assert.IsType<CreatedResult>(actual);
            Assert.True((bool)actionReult.Value);
        }

        [Fact]
        public void MySqlLoginShouldReturnOkResult()
        {
            var mockService = new Mock<IAuthService>();
            var mockTokenService = new Mock<ITokenGenerator>();
            var loginuser = new User { UserId = "sachin", Password = "admin123" };
            User user = new User { UserId = "sachin", Password = "admin123", FirstName = "Sachin", LastName = "Gupta", Role = "admin", AddedDate = new DateTime() };

            mockService.Setup(service => service.LoginUser(loginuser.UserId, loginuser.Password)).Returns(user);
            mockTokenService.Setup(tokenservice => tokenservice.GetJWTToken("sachin")).Returns("this is the secret");
            var controller = new AuthController(mockService.Object, mockTokenService.Object);

            var actual = controller.Login(loginuser);

            var actionReult = Assert.IsType<OkObjectResult>(actual);
            Assert.IsAssignableFrom<string>(actionReult.Value);
        }



        [Fact]
        public void MySqlRegisterShouldReturnConflictResult()
        {
            var mockService = new Mock<IAuthService>();
            var mockTokenService = new Mock<ITokenGenerator>();
            User user = new User { UserId = "sachin", Password = "admin123", FirstName = "Sachin", LastName = "Gupta", Role = "admin", AddedDate = new DateTime() };


            mockService.Setup(service => service.RegisterUser(user)).Throws<UserNotCreatedException>();
            mockTokenService.Setup(service => service.GetJWTToken("sachin")).Returns("This is token");
            var controller = new AuthController(mockService.Object, mockTokenService.Object);

            var actual = controller.Register(user);

            var actionResult = Assert.IsType<ConflictResult>(actual);
        }

        [Fact]
        public void MySqlLoginShouldReturnNotFoundResult()
        {
            var mockService = new Mock<IAuthService>();
            var mockTokenService = new Mock<ITokenGenerator>();
            var loginuser = new User { UserId = "sachin", Password = "admin123" };
            User user = new User { UserId = "sachin", Password = "admin123", FirstName = "Sachin", LastName = "Gupta", Role = "admin", AddedDate = new DateTime() };

            mockService.Setup(service => service.LoginUser(loginuser.UserId, loginuser.Password)).Throws<UserNotFoundException>();
            mockTokenService.Setup(service => service.GetJWTToken("sachin")).Returns("This is token");
            var controller = new AuthController(mockService.Object, mockTokenService.Object);

            var actual = controller.Login(loginuser);

            var actionReult = Assert.IsType<NotFoundResult>(actual);
        }
    }
}
