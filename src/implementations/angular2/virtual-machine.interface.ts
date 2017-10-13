export interface VirtualMachine {
    name: string;
    status: string;
    averageCpuLoad: number;
    memory: {
        available: number;
        used: number;
        free: number;
    };
    hdd: {
        available: number;
        used: number;
        free: number;
    };
    uptime: string;
}
