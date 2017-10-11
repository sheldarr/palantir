import angular from 'angular';

import PerformanceTest from './angular/performance-test.component';
import VirtualMachinesTable from './angular/virtual-machines-table.component';

const application = angular.module('application', []);

application.component('performanceTest', PerformanceTest);
application.component('virtualMachinesTable', VirtualMachinesTable);