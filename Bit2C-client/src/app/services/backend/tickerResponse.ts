export class TickerResponse {
  constructor(
    public readonly lastPrice: number,
    public readonly highestBuyOrderPrice: number,
    public readonly lowestSellOrderPrice: number,
    public readonly averageVolume: number,
    public readonly averagePrice: number
  ) {}
}
