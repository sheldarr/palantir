import angular from 'angular';
import VirtualMachines from '../helpers/virtual-machines.js'

const application = angular.module('application', []);

application.controller('PerformanceTestController', function ($scope, $timeout) {
    $scope.virtualMachines = new VirtualMachines(20);
    
    const refresh = () => {
        $scope.virtualMachines.update();

        $timeout(refresh, 0);
    };

    refresh();
});