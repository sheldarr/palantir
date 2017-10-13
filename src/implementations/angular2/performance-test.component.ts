import { Component, OnInit } from '@angular/core';

import VirtualMachinesProvider from '../../helpers/virtual-machines-provider';
import { VirtualMachine } from './virtual-machine.type';

declare const require: NodeRequireFunction;

const virtualMachinesProvider = new VirtualMachinesProvider(20);

@Component({
    selector: 'performance-test',
    template: require('./performance-test.template.pug')()
})
export class PerformanceTestComponent implements OnInit {
    public virtualMachines: VirtualMachine[];

    public constructor() {
        this.virtualMachines = virtualMachinesProvider.get()
    }

    ngOnInit() {
        this.refresh();
    }
    
    private refresh = (): void => {
        virtualMachinesProvider.update();
        setTimeout(this.refresh, 0);
    }
}
