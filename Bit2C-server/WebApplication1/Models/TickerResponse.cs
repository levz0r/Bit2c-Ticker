namespace WebApplication1.Models
{
    public class TickerResponse
    {
        public decimal LastPrice { get; set; }
        public decimal HighestBuyOrderPrice { get; set; }
        public decimal LowestSellOrderPrice { get; set; }
        public decimal AverageVolume { get; set; }
        public decimal AveragePrice { get; set; }
    }
}