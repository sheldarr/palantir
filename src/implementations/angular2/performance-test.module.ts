import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PerformanceTestComponent } from './performance-test.component';
import { VirtualMachinesTableComponent } from './virtual-machines-table.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [
        PerformanceTestComponent,
        VirtualMachinesTableComponent
    ],
    bootstrap: [ PerformanceTestComponent ]
})
export class PerformanceTestModule {}