import React from 'react';

import VirtualMachines from '../../helpers/virtual-machines';
import VirtualMachinesTable from './virtual-machines-table.component.jsx'

class PerformanceTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            virtualMachines: new VirtualMachines(20)
        };
    }

    refresh() {
        this.state.virtualMachines.update();

        setTimeout(() => { this.refresh() }, 0);
    }

    componentDidMount() {
        this.refresh();
    }

    render() {
        return (
            <VirtualMachinesTable
                virtualMachines={this.state.virtualMachines.get()}
            />
        );
    }
};

export default PerformanceTest;