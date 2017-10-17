import m from 'mithril';

import VirtualMachinesProvider from '../../helpers/virtual-machines-provider';
import VirtualMachinesTableComponent from './virtual-machines-table.component';

const virtualMachinesProvider = new VirtualMachinesProvider();

const PerformanceComponent = {
    virtualMachines: virtualMachinesProvider.get(),
    refresh: function () {
        virtualMachinesProvider.update();
        m.redraw();

        setTimeout(() => { this.refresh() }, 0);
    },
    oninit: function () {
        this.refresh();
    },
    view: function () {
        return m(VirtualMachinesTableComponent, {virtualMachines: this.virtualMachines});
    }
}

export default PerformanceComponent;