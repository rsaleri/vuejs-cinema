import Vue from "vue";
import "./style.scss"

import VueResource from 'vue-resource';
import moment from 'moment-timezone';
import {checkedFilter, setDay} from "./util/bus";
import VueRouter from 'vue-router';
import routes from './util/routes';
import Tooltip from './util/tooltip';

Vue.use(VueResource);

Object.defineProperty(Vue.prototype, '$moment', {
    get() {
        return this.$root.moment
    }
});
moment.tz.setDefault("UTC");


const bus = new Vue();
Object.defineProperty(Vue.prototype, '$bus', {
    get() {
        return this.$root.bus
    }
});

Vue.use(VueRouter);
const router = new VueRouter({routes});

Vue.use(Tooltip);

new Vue({
    el: "#app",
    data: {
        genre: [],
        time: [],
        movies: [],
        moment,
        day: moment(),
        bus
    },
    created() {
        this.$http.get('/api').then(
            response => this.movies = response.data,
            response => console.log("ehm...", response),
        );
        this.$bus.$on('checked-filter', checkedFilter.bind(this));
        this.$bus.$on('set-day', setDay.bind(this));
    },
    router
});
