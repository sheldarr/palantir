<template lang="pug">
    virtual-machines-table(
        v-bind:virtual-machines="virtualMachines"
    )
</template>

<script>
    import VirtualMachinesProvider from '../../helpers/virtual-machines-provider';

    const virtualMachinesProvider = new VirtualMachinesProvider();

    export default {
        created() {
            this.refresh();
        },
        data: {
            virtualMachines: virtualMachinesProvider.get()
        },
        el: '#root',
        methods: {
            refresh() {
                virtualMachinesProvider.update();
                setTimeout(() => { this.refresh() }, 0);
            }
        }
    }
</script>