<template>
    <div id="movie-filter">
        <h2>Filter Results</h2>
        <h3>By time of day</h3>
        <div class="filter-group">
            <check-filter v-for="time in times" filtertype="time" :filter="time" :key="time"></check-filter>
        </div>
        <h3>By genre</h3>
        <div class="filter-group">
            <check-filter v-for="genre in genres" filtertype="genre" :filter="genre" :key="genre"></check-filter>
        </div>
    </div>
</template>

<script>
    import genres from '../util/genres';
    import times from '../util/times';
    import CheckFilter from './CheckFilter.vue';

    export default {
        data() {
            return {
                genres,
                times
            }
        },
        methods: {},
        components: {
            CheckFilter,
        }
    }

</script>