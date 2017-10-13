import VirtualMachinesProvider from '../../helpers/virtual-machines-provider'

export default function ($scope, $timeout) {
    const virtualMachinesProvider = new VirtualMachinesProvider(process.env.VIRTUAL_MACHINES);
    
    $scope.virtualMachines = virtualMachinesProvider.get();
    
    const refresh = () => {
        virtualMachinesProvider.update();

        $timeout(refresh, 0);
    };

    refresh();
}