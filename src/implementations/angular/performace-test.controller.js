import VirtualMachines from '../../helpers/virtual-machines'

export default function ($scope, $timeout) {
    const virtualMachines = new VirtualMachines(20);
    
    $scope.virtualMachines = virtualMachines.get();
    
    const refresh = () => {
        virtualMachines.update();

        $timeout(refresh, 0);
    };

    refresh();
}