import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";


@NgModule({
  declarations: [ProgressBarComponent], // Aquí incluye el componente
  imports: [
    CommonModule
  ],
  exports: [
    ProgressBarComponent
  ],
})
export class SharedModule { }
