using System;
using moments.auth.api.Models;
using moments.auth.api.Repository;
using Xunit;

namespace moments.auth.api.Test
{
    public class AuthRepositoryTest:IClassFixture<DatabaseFixture>
    {
        public readonly IAuthRepository repository;

        public AuthRepositoryTest(DatabaseFixture _fixture)
        {
            repository = new AuthRepository(_fixture.context);
        }

        [Fact]
        public void RegisterUserShouldReturnTrue()
        {
            User user = new User {UserId="sachin", Password="admin123", FirstName="Sachin", LastName="Gupta", Role="admin", AddedDate=new DateTime() };

            var actual= repository.RegisterUser(user);

            Assert.True(actual);
            var checkuser = repository.FindUserById("sachin");
            Assert.Equal<User>(user, checkuser);
        }

        [Fact]
        public void LoginUserShouldReturnTrue()
        {
            string userId = "sachin";
            string password = "admin123";

            var actual = repository.LoginUser(userId,password);

            Assert.IsAssignableFrom<User>(actual);
        }
    }
}
