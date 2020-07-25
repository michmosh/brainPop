<template src="./list.html"></template>
    
<script>
import Activitie from "../Activitie/Activitie.vue";
import FilterComponent from "../filter/Filter.vue";
import {dateParser} from "../../shared/helpers/date-parser.helper";
import {activitiesTypesObj} from "../../shared/helpers/activities-types.constants";
import axios from "axios";
export default {
    name:"list",
    components: {
        Activitie,
        FilterComponent
    },
    data: () => ({
        activities : [],
        months:[],
        filters:[],
        apiV1 : "http://localhost:3000/activities/v1",
        showLoadMore : true,
        limit:10
    }),
    mounted() {
        this.setFiltersArray();
        this.getData();
    },
    methods: {
        getData(){
            axios.get(this.apiV1).then((res) => {
                this.activities = res.data.sort((a,b)=> b.d_created - a.d_created);
                this.$store.commit("setActivitiesArray" ,  this.activities);
                this.setMonthsArray( this.activities);
            });
        },
        setMonthsArray(activitiesArray){
            this.months = [];
            activitiesArray.map((item) => {
                let month = dateParser.getActivityMonth(item.d_created);
                item.month = month;
                this.months.indexOf(month) === -1 ? this.months.push(month) : false;
            });
        },
        setFiltersArray(){
            this.filters = Object.entries(activitiesTypesObj).map(item=>({
                name:item[0] , display:item[1].display
            }));
        },
        loadMore(){
            this.$store.commit("setLimit" ,  this.$store.getters.getLimit + 10);
            this.showLoadMore = false;
        },
        loadLess(){
            this.$store.commit("setLimit" ,  this.$store.getters.getLimit - 10);
            this.showLoadMore = true;
        },
        getActivitiesByMonths(activities){ // set months array according to activities 
            this.setMonthsArray(activities);
            return activities;
        }
    },
    computed: {
        activitiesArray(){
            let activities =  this.$store.getters.getActivities
                .filter(item => this.$store.getters.getSelectedName ? 
                    item.resource_type === this.$store.getters.getSelectedName : true)
                .slice(0,this.$store.getters.getLimit);
            return this.getActivitiesByMonths(activities);
        }
    }
};
</script>
<style src="./list.scss" lang="scss" scoped></style>