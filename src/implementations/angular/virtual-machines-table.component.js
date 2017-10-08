import VirtualMachinesTableController from './virtual-machines-table.controller';

export default {
    template: require('./virtual-machines-table.template.pug')(),
    controller: VirtualMachinesTableController,
    bindings: {
        virtualMachines: '<'
    }
}
