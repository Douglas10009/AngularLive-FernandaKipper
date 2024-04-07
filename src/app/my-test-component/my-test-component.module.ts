import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


//Modulo individual para o My-test-component
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    provideClientHydration(),
  ],
  exports: [
  ]
})
export class MyTestComponentModule { }
