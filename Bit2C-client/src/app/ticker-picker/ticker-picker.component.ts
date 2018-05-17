import { Component, OnInit } from "@angular/core";
import { BackendService } from "../services/backend/backend.service";
import { TickerResponse } from "../services/backend/tickerResponse";
import { PairOption } from "./models/pairOption";

@Component({
  selector: "app-ticker-picker",
  templateUrl: "./ticker-picker.component.html",
  styleUrls: ["./ticker-picker.component.scss"]
})
export class TickerPickerComponent implements OnInit {
  public pairs: PairOption[] = [
    new PairOption(-1, "Please select a coin..."),
    new PairOption(0, "BTC", "BtcNis"), // Lev: The coins and the pairs should be retreived from the server, but the task was to hard-code the pairs...
    new PairOption(1, "LTC", "LtcNis"),
    new PairOption(2, "BCH", "BchNis"),
    new PairOption(3, "BTG", "BtgNis"),
    new PairOption(3, "ETH", "EthNis"),
    new PairOption(3, "ETC", "EtcNis")
  ];

  public selectedPair: PairOption = this.pairs[0];
  public tickerData: TickerResponse;
  public isFetching: boolean;

  constructor(private readonly backendService: BackendService) {}

  public ngOnInit(): void {}

  public selectedPairChanged(newSelectedPair: PairOption): void {
    if (newSelectedPair && newSelectedPair.id >= 0) {
      this.isFetching = true;
      this.backendService.getTicker(newSelectedPair.pair).subscribe(
        (data: TickerResponse) => {
          this.tickerData = data;
          this.isFetching = false;
        },
        error => {
          this.isFetching = false;
          // more error handling goes here....
        }
      );
    }
  }
}
