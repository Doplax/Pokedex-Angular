import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PreogressBarComponent } from "./preogress-bar/preogress-bar.component";


@NgModule({
  declarations: [PreogressBarComponent], // Aquí incluye el componente
  imports: [
    CommonModule
  ],
  exports: [
    PreogressBarComponent
  ],
})
export class SharedModule { }
