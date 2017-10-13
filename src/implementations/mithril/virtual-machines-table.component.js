import m from 'mithril';

const VirtualMachinesTableComponent = {
    view: function (vnode) {
        return m('table', [
            m('thead', [
                m('tr', [
                    m('th', 'Name'),
                    m('th', 'Status'),
                    m('th', 'Average CPU load'),
                    m('th', 'Available memory [MB]'),
                    m('th', 'Used memory [MB]'),
                    m('th', 'Free memory [MB]'),
                    m('th', 'Available HDD [MB]'),
                    m('th', 'Free HDD [MB]'),
                    m('th', 'Used HDD [MB]'),
                    m('th', 'Uptime')
                ])
            ]),
            m('tbody', [
                vnode.attrs.virtualMachines.map((virtualMachine) => {
                    return m('tr', [
                        m('td', virtualMachine.name),
                        m('td', virtualMachine.status),
                        m('td', virtualMachine.averageCpuLoad.toFixed(2)),
                        m('td', virtualMachine.memory.available.toFixed(0)),
                        m('td', virtualMachine.memory.used.toFixed(0)),
                        m('td', virtualMachine.memory.free.toFixed(0)),
                        m('td', virtualMachine.hdd.available.toFixed(0)),
                        m('td', virtualMachine.hdd.used.toFixed(0)),
                        m('td', virtualMachine.hdd.free.toFixed(0)),
                        m('td', virtualMachine.uptime)
                    ]);
                })
            ])
        ])
    }
}

export default VirtualMachinesTableComponent;