<template>
    <div class="check-filter" @click="checkedFilter" :class="{active: checked}">
        <span class="checkbox"></span>
        <span class="check-filter-title">{{ filter }}</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checked: false
            }
        },
        props: ['filter', 'filtertype'],
        methods: {
            checkedFilter() {
                this.checked = !this.checked;
                this.$bus.$emit('checked-filter', this.filtertype, this.filter, this.checked);
            }
        }
    }
</script>