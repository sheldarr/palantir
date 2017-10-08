class VirtualMachines {
    constructor(number) {
        this.machines = [];

        for (var index = 0; index < number; index++) {
            this.machines.push({
                name: chance.word(),
                status: 'OK',
                averageCpuLoad: chance.normal({mean: 2.0, dev: 2.0}),
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
                uptime: '1h 20m 37s'
            });
        }
    }

    get() {
        return this.machines;
    }

    update() {
        for (var index = 0; index < this.machines.length; index++) {
            const machine = this.machines[index];
            if (chance.normal() < 0.1) {
                machine.status = 'ERROR';
                continue;
            }

            machine.status = 'OK';

            machine.averageCpuLoad = chance.normal({mean: 2.0, dev: 2.0});

            machine.memory.used = chance.integer({min: 0, max: machine.memory.available});
            machine.memory.free = machine.memory.available - machine.memory.used;

            machine.hdd.used = chance.integer({min: 0, max: machine.hdd.available});
            machine.hdd.free = machine.hdd.available - machine.hdd.used;

            machine.uptime = '1h 20m 37s';
        }
    }
}