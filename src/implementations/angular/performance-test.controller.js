import VirtualMachinesProvider from '../../helpers/virtual-machines-provider'

export default function ($scope, $timeout) {
    const virtualMachinesProvider = new VirtualMachinesProvider();
    
    $scope.virtualMachines = virtualMachinesProvider.get();
    
    const refresh = () => {
        virtualMachinesProvider.update();

        $timeout(refresh, 0);
    };

    refresh();
}