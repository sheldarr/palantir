const application = angular.module('application', []);

application.controller('PerformanceTestController', function ($scope, $timeout) {
    $scope.virtualMachines = [{
        name: 'Jenkins',
        status: 'OK',
        averageCpuLoad: 1.50,
        memory: {
            available: 1024,
            used: 512,
            free: 512
        },
        hdd: {
            available: 1024,
            used: 512,
            free: 512
        },
        uptime: '1h 20m 37s'
    }];
    
    const refresh = () => {
        $scope.virtualMachines.push({
            name: 'Jenkins',
            status: 'OK',
            averageCpuLoad: Math.random(),
            memory: {
                available: Math.random(),
                used: Math.random(),
                free: Math.random()
            },
            hdd: {
                available: Math.random(),
                used: Math.random(),
                free: Math.random()
            },
            uptime: '1h 20m 37s'
        });
        $timeout(refresh, 0);
    };

    refresh();
});