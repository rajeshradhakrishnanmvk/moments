using System;
using Xunit;
using Moq;
using moments.auth.op.api.Repository;
using moments.auth.op.api.Models;
using moments.auth.op.api.Service;
using moments.auth.op.api.Exceptions;

namespace moments.auth.op.api.Test
{
    public class AuthServiceTest
    {
        [Fact]
        public void MySqlRegisterUserShouldReturnTrue()
        {
            var mockRepo = new Mock<IAuthRepository>();
            User user = new User { UserId = "sachin", Password = "admin123", FirstName = "Sachin", LastName = "Gupta", Role = "admin", AddedDate = new DateTime() };
            mockRepo.Setup(repo => repo.RegisterUser(user)).Returns(true);
            var service = new AuthService(mockRepo.Object);

            var actual = service.RegisterUser(user);

            Assert.True(actual);
        }

        [Fact]
        public void MySqlLoginUserShouldReturnUser()
        {
            var mockRepo = new Mock<IAuthRepository>();
            string userId = "sachin";
            string password = "admin123";

            User user = new User { UserId = "sachin", Password = "admin123", FirstName = "Sachin", LastName = "Gupta", Role = "admin", AddedDate = new DateTime() };
            mockRepo.Setup(repo => repo.LoginUser(userId, password)).Returns(user);
            var service = new AuthService(mockRepo.Object);

            var actual = service.LoginUser(userId, password);

            Assert.IsAssignableFrom<User>(actual);
        }


        [Fact]
        public void MySqlRegisterUserShouldThrowException()
        {
            var mockRepo = new Mock<IAuthRepository>();
            User user = new User { UserId = "sachin", Password = "admin123", FirstName = "Sachin", LastName = "Gupta", Role = "admin", AddedDate = new DateTime() };
            mockRepo.Setup(repo => repo.RegisterUser(user)).Returns(false);
            var service = new AuthService(mockRepo.Object);

            var actual = Assert.Throws<UserNotCreatedException>(() => service.RegisterUser(user));
            Assert.Equal($"User with this id {user.UserId} already exists", actual.Message);
        }

        [Fact]
        public void MySqlLoginUserShouldThrowException()
        {
            var mockRepo = new Mock<IAuthRepository>();
            string userId = "sachin";
            string password = "admin123";

            User user = null;
            mockRepo.Setup(repo => repo.LoginUser(userId, password)).Returns(user);
            var service = new AuthService(mockRepo.Object);

            var actual = Assert.Throws<UserNotFoundException>(() => service.LoginUser(userId, password));
            Assert.Equal($"User with this id {userId} and password {password} does not exist", actual.Message);
        }

    }
}
