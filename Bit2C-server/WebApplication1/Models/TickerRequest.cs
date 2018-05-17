using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class TickerRequest
    {
        [Required]
        public string Pair { get; set; }
    }
}