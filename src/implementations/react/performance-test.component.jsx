import React from 'react';

import VirtualMachinesProvider from '../../helpers/virtual-machines-provider';
import VirtualMachinesTable from './virtual-machines-table.component.jsx';

const virtualMachinesProvider = new VirtualMachinesProvider();

class PerformanceTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            virtualMachines: virtualMachinesProvider.get()
        };
    }

    refresh() {
        virtualMachinesProvider.update();

        this.setState(this.state);

        setTimeout(() => { this.refresh() }, 0);
    }

    componentDidMount() {
        this.refresh();
    }

    render() {
        return (
            <VirtualMachinesTable
                virtualMachines={this.state.virtualMachines}
            />
        );
    }
}

export default PerformanceTest;