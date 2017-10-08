import angular from 'angular';
import PerformanceTest from './angular/performace-test.controller';
import VirtualMachinesTable from './angular/virtual-machines-table.component';

const application = angular.module('application', []);

application.controller('PerformanceTestController', PerformanceTest);

application.component('virtualMachinesTable', VirtualMachinesTable);