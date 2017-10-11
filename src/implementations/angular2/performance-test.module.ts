import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PerformanceTestComponent }  from './performance-test.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ PerformanceTestComponent ],
  bootstrap:    [ PerformanceTestComponent ]
})
export class PerformanceTestModule {}