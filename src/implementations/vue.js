import Vue from 'vue';

import PerformanceTestComponent from './vue/performance-test.component.vue';
import VirtualMachinesTableComponent from './vue/virtual-machines-table.component.vue';

Vue.component('virtual-machines-table', VirtualMachinesTableComponent)

new Vue(PerformanceTestComponent)