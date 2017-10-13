import { Component, Input } from '@angular/core';

import { VirtualMachine } from './virtual-machine.interface';

declare const require: NodeRequireFunction;

@Component({
    selector: 'virtual-machines-table',
    template: require('./virtual-machines-table.template.pug')()
})
export class VirtualMachinesTableComponent {
    @Input() public virtualMachines: VirtualMachine[];
}
