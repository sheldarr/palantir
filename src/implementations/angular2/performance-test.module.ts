import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PerformanceTestComponent } from './performance-test.component';
import { VirtualMachinesTableComponent } from './virtual-machines-table.component';

@NgModule({
    bootstrap: [ PerformanceTestComponent ],
    declarations: [
        PerformanceTestComponent,
        VirtualMachinesTableComponent
    ],
    imports: [ BrowserModule ],

})

export class PerformanceTestModule {}
