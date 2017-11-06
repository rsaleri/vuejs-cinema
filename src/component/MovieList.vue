<template>
    <div id="movie-list">
        <div v-if="filteredMovies.length">
            <movie-item v-for="movie in filteredMovies" :movie="movie.movie">
                <div class="movie-sessions">
                    <div class="session-time-wrapper tooltip-wrapper"
                         v-for="session in filteredSessions(movie.sessions)" :key="session.time"
                         v-tooltip="{ seats: session.seats }">
                        <div class="session-time">{{ formatSessionTime(session.time) }}</div>
                    </div>
                </div>
            </movie-item>
        </div>
        <div v-else-if="movies.length" class="no-results">
            {{ noResults }}
        </div>
        <div v-else class="no-results">
            Loading...
        </div>
    </div>
</template>

<script>
    import genres from '../util/genres';
    import times from '../util/times';
    import MovieItem from './MovieItem.vue';

    export default {
        props: ['genre', 'time', 'movies', 'day'],
        methods: {
            formatSessionTime(raw) {
                return this.$moment(raw).format('h:mm A');
            },
            filteredSessions(sessions) {
                return sessions.filter(this.sessionPassesTimeFilter);
            },
            sessionPassesTimeFilter(session) {
                if (!this.day.isSame(this.$moment(session.time), 'day')) {
                    return false;
                } else if (this.time.length === 0 || this.time.length === Object.keys(times).length) {
                    return true;
                } else if (this.time[0] === times.AFTER_6PM) {
                    return this.$moment(session.time).hour() >= 18;
                } else {
                    return this.$moment(session.time).hour() <= 18;
                }
            },
            moviePassesGenrefilter(movie) {
                return (this.genre.length === 0 || this.genre.every(genre => movie.movie.Genre.split(", ").indexOf(genre) >= 0));
            },
        },
        computed: {
            filteredMovies() {
                return this.movies
                    .filter(this.moviePassesGenrefilter)
                    .filter(movie => movie.sessions.find(this.sessionPassesTimeFilter));
            },
            noResults() {
                return `No results for ${this.time.concat(this.genre).join(", ")}.`;
            }
        },
        components: {
            MovieItem
        },
    }
</script>