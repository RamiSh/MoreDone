using System.Diagnostics.CodeAnalysis;
using System.Web.Http;
using Microsoft.Owin;
using Owin;
using MoreDone;

[assembly: OwinStartup(typeof(Startup))]
namespace MoreDone
{
    [ExcludeFromCodeCoverage]
    public class Startup
    {
        public Startup()
        {
        }

        public void Configuration(IAppBuilder app)
        {

            HttpConfiguration config = new HttpConfiguration();

            WebApiConfig.Register(config);
            app.UseWebApi(config);
        }
    }
}