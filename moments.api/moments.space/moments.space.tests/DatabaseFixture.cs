using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using moments.space.api.Models;

namespace MomentService.Test
{
    public class DatabaseFixture : IDisposable
    {
        private IConfigurationRoot configuration;
        public IMomentContext context;
        public DatabaseFixture()
        {
            var builder = new ConfigurationBuilder().AddJsonFile("appsettings.json");

            configuration = builder.Build();
            context = new MomentContext(configuration);
            //context.Moments.DeleteMany(_ => true);
            //context.Moments.InsertMany(new List<MomentUser>
            //{
            //    new MomentUser{
            //        UserId="Mukesh", Moments=new List<Moment>{
            //            new Moment { Id=131, Category= new Category{Id=101, Name="Sports", CreatedBy="Mukesh", Description="All about sports", CreationDate=new DateTime() },
            //            Content="Sample Moment", CreatedBy="Mukesh", Reminders=new List<Reminder>{ new Reminder { Id = 201, Name = "Sports", CreatedBy = "Mukesh", Description = "sports reminder", CreationDate = new DateTime(), Type = "email" } } ,
            //            Title="Sample", CreationDate=new DateTime()}
            //        }
            //    },

            //    new MomentUser{
            //        UserId="Sachin", Moments=new List<Moment>{
            //            new Moment { Id=141, Category= new Category{Id=102, Name="Sports", CreatedBy="Sachin", Description="All about sports", CreationDate=new DateTime() },
            //            Content="Sample Moment", CreatedBy="Sachin", Reminders=new List<Reminder>{ new Reminder { Id = 202, Name = "Sports", CreatedBy = "Sachin", Description = "sports reminder", CreationDate = new DateTime(), Type = "email" } } ,
            //            Title="Sample", CreationDate=new DateTime()}
            //        }
            //    }

            //});
        }
        public void Dispose()
        {
            context = null;
        }
    }
}
