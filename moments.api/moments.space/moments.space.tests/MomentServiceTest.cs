using System;
using System.Collections.Generic;
using Xunit;
using Moq;
using moments.space.api.Models;
using moments.space.api.Repository;
using API = moments.space.api;

namespace moments.space.tests
{
    public class MomentServiceTest
    {
        [Fact]
        public void CreateMomentShouldReturnMomentUser()
        {
            var moment = new MomentUser { UserId = "Rajesh", Moments = this.GetMoments() };
            var mockRepo = new Mock<IMomentRepository>();
            mockRepo.Setup(repo => repo.CreateMoment(moment)).Returns(moment);
            var service = new API.Service.MomentService(mockRepo.Object);

            var actual = service.CreateMoment(moment);
            Assert.NotNull(actual);
            Assert.IsAssignableFrom<MomentUser>(actual);
        }

        [Fact]
        public void AddMomentShouldReturnMomentUser()
        {
            var moment = this.GetMoment();
            var momentUser = new MomentUser { UserId = "Rajesh", Moments = this.GetMoments() };
            int momentId = 101;
            string userId = "Rajesh";
            var mockRepo = new Mock<IMomentRepository>();
            mockRepo.Setup(repo => repo.UpdateMoment(momentId, userId, moment)).Returns(momentUser);
            var service = new API.Service.MomentService(mockRepo.Object);

            var actual = service.AddMoment(userId, moment);
            Assert.NotNull(actual);
            Assert.IsAssignableFrom<MomentUser>(actual);
        }

        [Fact]
        public void UpdateMomentShouldReturnMomentUser()
        {
            //var moment = this.GetMoment();
            var momentUser = new MomentUser { UserId = "Rajesh", Moments = this.GetMoments() };
            int momentId = 101;
            string userId = "Rajesh";

            Moment moment = new Moment();
            moment.Id = 101;
            moment.Title = "IPL 2018";
            moment.Description = "Mumbai Indians vs RCB match scheduled  for 4 PM is cancelled";
            moment.Category = this.GetCategory();
            moment.CreatedBy = "Rajesh";
            moment.CreationDate = new DateTime();

            var mockRepo = new Mock<IMomentRepository>();
            mockRepo.Setup(repo => repo.UpdateMoment(momentId, userId, moment)).Returns(momentUser);
            var service = new API.Service.MomentService(mockRepo.Object);

            var actual = service.UpdateMoment(momentId, userId, moment);
            Assert.NotNull(actual);
            Assert.IsAssignableFrom<MomentUser>(actual);
        }

        [Fact]
        public void DeleteMomentShouldReturnTrue()
        {
            int momentId = 101;
            string userId = "Rajesh";
            var mockRepo = new Mock<IMomentRepository>();
            mockRepo.Setup(repo => repo.DeleteMoment(userId, momentId)).Returns(true);
            var service = new API.Service.MomentService(mockRepo.Object);

            var actual = service.DeleteMoment(userId, momentId);

            Assert.True(actual);
        }

        [Fact]
        public void GetAllMomentsShouldReturnAList()
        {
            string userId = "Rajesh";
            var mockRepo = new Mock<IMomentRepository>();
            mockRepo.Setup(repo => repo.FindByUserId(userId)).Returns(this.GetMoments());
            var service = new API.Service.MomentService(mockRepo.Object);

            var actual = service.GetAllMoments(userId);
            Assert.NotEmpty(actual);
            Assert.IsAssignableFrom<List<Moment>>(actual);
        }

        [Fact]
        public void GetMomentByMomentIdShouldReturnMoment()
        {
            int momentId = 101;
            string userId = "Rajesh";
            var mockRepo = new Mock<IMomentRepository>();
            mockRepo.Setup(repo => repo.FindByUserId(userId)).Returns(this.GetMoments());
            var service = new API.Service.MomentService(mockRepo.Object);

            var actual = service.GetMoment(userId, momentId);
        }

        private Category GetCategory()
        {
            Category category = new Category();
            category.Id = 201;
            category.Name = "Cricket";
            category.Description = "IPL 20-20";
            category.CreatedBy = "Rajesh";
            category.CreationDate = new DateTime();
            return category;
        }



        private Moment GetMoment()
        {
            Moment moment = new Moment();
            moment.Id = 101;
            moment.Title = "IPL 2018";
            moment.Description = "Mumbai Indians vs RCB match scheduled  for 4 PM";
            moment.Category = this.GetCategory();
            moment.CreatedBy = "Rajesh";
            moment.CreationDate = new DateTime();

            return moment;
        }
        private List<Moment> GetMoments()
        {
            List<Moment> moments = new List<Moment>();
            moments.Add(this.GetMoment());
            return moments;
        }
    }
}
