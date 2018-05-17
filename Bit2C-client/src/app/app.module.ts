import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BackendService } from "./services/backend/backend.service";
import { TickerPickerComponent } from "./ticker-picker/ticker-picker.component";

@NgModule({
  declarations: [AppComponent, TickerPickerComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {}
