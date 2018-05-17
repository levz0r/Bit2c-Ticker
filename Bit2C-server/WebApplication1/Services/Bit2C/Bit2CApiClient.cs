using RestSharp;
using WebApplication1.Services.Bit2C.Data;

namespace WebApplication1.Services.Bit2C
{
    public class Bit2CApiClient
    {
        private readonly RestClient _client = new RestClient("https://bit2c.co.il/Exchanges");

        public TickerInfo GetTicker(string pair)
        {
            var request = new RestRequest("{pair}/Ticker.json", Method.GET);
            request.AddUrlSegment("pair", pair);
            try
            {
                var response = _client.Execute<TickerInfo>(request);
                return response.Data;
            }
            catch
            {
                return null;
            }
        }
    }
}