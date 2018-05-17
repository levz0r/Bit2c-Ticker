import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TickerPickerComponent } from "./ticker-picker/ticker-picker.component";

const routes: Routes = [
  {
    path: "",
    component: TickerPickerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
