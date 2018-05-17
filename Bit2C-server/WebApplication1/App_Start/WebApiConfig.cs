using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApplication1
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            EnableCorsAttribute cors = new EnableCorsAttribute("*", "*", "GET,POST");
            config.EnableCors(cors); // Lev: We must have CORS enabled, or our client-sided application won't be able to request resources from our Rest API...

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.Routes.MapHttpRoute(
                "Bit2C", "bit2c/{action}",
                new { controller = "Bit2C" });

            config.Formatters.Remove(config.Formatters.XmlFormatter); // For convinience, leave only Json Formatter.
        }
    }
}
