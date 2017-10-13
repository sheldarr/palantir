import PropTypes from 'prop-types'; 
import React from 'react';

class VirtualMachinesTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Status </th>
                        <th> Average CPU load </th>
                        <th> Available memory [MB] </th>
                        <th> Used memory [MB] </th>
                        <th> Free memory [MB] </th>
                        <th> Available HDD [MB] </th>
                        <th> Free HDD [MB] </th>
                        <th> Used HDD [MB] </th>
                        <th> Uptime </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.virtualMachines.map((virtualMachine) => {
                        return (
                            <tr key={virtualMachine.name}>
                                <td> {virtualMachine.name} </td>
                                <td> {virtualMachine.status} </td>
                                <td> {virtualMachine.averageCpuLoad.toFixed(2)} </td>
                                <td> {virtualMachine.memory.available.toFixed(0)} </td>
                                <td> {virtualMachine.memory.used.toFixed(0)} </td>
                                <td> {virtualMachine.memory.free.toFixed(0)} </td>
                                <td> {virtualMachine.hdd.available.toFixed(0)} </td>
                                <td> {virtualMachine.hdd.used.toFixed(0)} </td>
                                <td> {virtualMachine.hdd.free.toFixed(0)} </td>
                                <td> {virtualMachine.uptime} </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

VirtualMachinesTable.propTypes = {
    virtualMachines: PropTypes.Array
};

export default VirtualMachinesTable;