import Overview from '../component/Overview.vue'
import Detail from '../component/Detail.vue'

export default [
    {path: "/", component: Overview, name: "home"},
    {path: "/movie/:id", component: Detail, name: "movie"},
    {path: '*', redirect: {name: "home"}}
]