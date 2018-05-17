using System.Web.Http;
using WebApplication1.Models;
using WebApplication1.Services.Bit2C;

namespace WebApplication1.Controllers.API
{
    public class Bit2CController : ApiController
    {
        [HttpGet]
        public IHttpActionResult Ticker([FromUri]TickerRequest request)
        {
            TickerResponse result = null;
            try
            {
                if (ModelState.IsValid)
                {
                    var bit2cClient = new Bit2CApiClient();
                    var tickerInfo = bit2cClient.GetTicker(request.Pair);
                    if (tickerInfo == null)
                    {
                        return InternalServerError(new System.Exception("It\'s not us, it\'s you :)"));
                    }
                    result = new TickerResponse // Lev: We can use AutoMapper here....
                    {
                        AveragePrice = tickerInfo.av,
                        AverageVolume = tickerInfo.a,
                        HighestBuyOrderPrice = tickerInfo.h,
                        LastPrice = tickerInfo.ll,
                        LowestSellOrderPrice = tickerInfo.l
                    };
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (System.Exception ex)
            {
                return InternalServerError(ex);
            }
            return Ok(result);
        }
    }

}
