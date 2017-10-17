import Chance from 'chance';
import moment from 'moment';

const chance = new Chance();

const DEFAULT_VIRTUAL_MACHINES = 64;
const virtualMachines = localStorage.getItem('virtualMachines') || DEFAULT_VIRTUAL_MACHINES

export default class VirtualMachinesProvider {
    constructor() {
        this.machines = [];

        for (let index = 0; index < virtualMachines; index++) {
            this.machines.push({
                name: chance.word(),
                status: 'OK',
                averageCpuLoad: chance.normal({mean: 2.0, dev: 0.5}),
                memory: {
                    available: 1024 * chance.integer({min: 1, max: 32}),
                    used: 0,
                    free: 0,
                },
                hdd: {
                    available:  1024 * chance.integer({min: 128, max: 1024}),
                    used: 0,
                    free: 0
                },
                startedAt: moment().subtract(chance.integer({min:1, max: 7}), 'days').subtract(chance.integer({min:1, max: 24}), 'hours').subtract(chance.integer({min:1, max: 60}), 'minutes'),
                uptime: 0
            });
        }
    }

    get() {
        return this.machines;
    }

    update() {
        for (let index = 0; index < this.machines.length; index++) {
            const machine = this.machines[index];
            if (chance.bool({likelihood: 0.01})) {
                machine.status = 'ERROR';
                machine.startedAt = moment();
                continue;
            }

            machine.status = 'OK';

            machine.averageCpuLoad = chance.normal({mean: 2.0, dev: 0.5});

            machine.memory.used = chance.integer({min: 0, max: machine.memory.available});
            machine.memory.free = machine.memory.available - machine.memory.used;

            machine.hdd.used = chance.integer({min: 0, max: machine.hdd.available});
            machine.hdd.free = machine.hdd.available - machine.hdd.used;

            machine.uptime = moment.utc(moment().diff(moment(machine.startedAt))).format("HH:mm:ss")
        }
    }
}