<template src="./activitie.html"></template>

<script>
import {activitiesTypesObj} from "../../shared/helpers/activities-types.constants";
import {dateParser} from "../../shared/helpers/date-parser.helper";
import Score from "../Score.vue";
export default {
    props:{
        activitie: Object
    },
    components:{
        Score
    },
    data: function(){
        return {
            img: `..${this.activitie.topic_data.icon_path}`
        };
    },
    filters: {
        activitieDate : dateParser.getActivityDate
    },
    methods: {
        openModal(){
            this.$store.commit("setModelOpen" , {
                ...this.$props.activitie , 
                type:activitiesTypesObj[this.activitie.resource_type]
            });
        }
    },
    computed : {
        activitieItem(){
            return activitiesTypesObj[this.activitie.resource_type];
        }
    }
};
</script>

<style src="./activitie.scss" lang="scss"></style>