
using moments.user.api.Exceptions;
using moments.user.api.Models;
using moments.user.api.Repository;

namespace moments.user.api.Service
{
    public class UserService : IUserService
    {
        private readonly IUserRepository repository;

        public UserService(IUserRepository userRepository)
        {
            repository = userRepository;
        }

        public bool DeleteUser(string userId)
        {

            bool result = repository.DeleteUser(userId);
            if (result)
            {
                return result;
            }
            else
            {
                throw new UserNotFoundException($"This user id does not exist");
            }
        }

        public User GetUserById(string userId)
        {
            User queryUser = repository.GetUserById(userId);
            if (queryUser != null)
            {
                return queryUser;
            }
            else
            {
                throw new UserNotFoundException($"This user id does not exist");
            }
        }

        public User RegisterUser(User user)
        {
            User createdUser = repository.RegisterUser(user);
            if (createdUser != null)
            {
                return createdUser;
            }
            else
            {
                throw new UserNotCreatedException($"This user id already exists");
            }
        }

        public bool UpdateUser(string userId, User user)
        {
            bool result = repository.UpdateUser(userId, user);
            if (result)
            {
                return result;
            }
            else
            {
                throw new UserNotFoundException($"This user id does not exist");
            }
        }
    }
}
