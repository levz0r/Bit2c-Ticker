namespace WebApplication1.Services.Bit2C.Data
{
    public class TickerInfo
    {
        /// <summary>
        /// Highest buy order
        /// </summary>
        public decimal h { get; set; }

        /// <summary>
        /// Lowest sell order
        /// </summary>
        public decimal l { get; set; }

        /// <summary>
        /// Last price
        /// </summary>
        public decimal ll { get; set; }

        /// <summary>
        /// Last 24 hours volume
        /// </summary>
        public decimal a { get; set; }

        /// <summary>
        /// Last 24 hours price average
        /// </summary>
        public decimal av { get; set; }

        /// <summary>
        /// ???? (undocumented)
        /// </summary>
        public decimal c { get; set; }
    }
}