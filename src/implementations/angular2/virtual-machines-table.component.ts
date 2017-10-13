import { Component, Input } from '@angular/core';

import { VirtualMachine } from './virtual-machine.type';

declare const require: NodeRequireFunction;

@Component({
    selector: 'virtual-machines-table',
    template: require('./virtual-machines-table.template.pug')()
})
export class VirtualMachinesTableComponent {
    @Input() virtualMachines: VirtualMachine[];
}