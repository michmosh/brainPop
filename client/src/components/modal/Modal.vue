<template src="./modal.html"></template>
<script>
import isEmpty from "loadsh/isEmpty";
import {activitiesTypesObj} from "../../shared/helpers/activities-types.constants";
import {dateParser} from "../../shared/helpers/date-parser.helper";
import Score from "../Score.vue";
export default {
    name:"modal-component",
    components:{
        Score
    },
    mounted() {
        this.checkForData();
    },
    methods: {
        closeModal(){
            this.$store.commit("setModelOpen" , false);
            this.$router.push({path: "/"});
        },
        checkForData(){
            let activitieObject = this.$store.getters.getActivitieById(this.$route.params.id);
            if(isEmpty(activitieObject)) return this.$router.push({path:"/"});
            this.$store.commit("setModelOpen" , activitieObject);
        }
    },
    computed: {
        activitieObject(){
            return {
                ...this.$store.getters.getModalData,
                type: activitiesTypesObj[this.$store.getters.getModalData.resource_type]};
        }
    },
    filters: {
        modalDate : dateParser.getModalDate
    }
    
};
</script>
<style lang="scss" scoped src="./modal.scss">

</style>