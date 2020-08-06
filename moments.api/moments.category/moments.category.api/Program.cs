using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Sentry;

namespace moments.category.api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            using (SentrySdk.Init("https://512517e43b7b4a94bf998f3d472e3334@o405078.ingest.sentry.io/5270124"))
            {
                CreateHostBuilder(args).Build().Run();
            }
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>()
                    .UseKestrel(options =>
                        {
                            options.ListenAnyIP(Int32.Parse(System.Environment.GetEnvironmentVariable("PORT")));
                        });
                });
    }
}
