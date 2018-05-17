export class PairOption {
  constructor(
    public readonly id: number,
    public readonly value: string,
    public readonly pair: string = null
  ) {}
}
