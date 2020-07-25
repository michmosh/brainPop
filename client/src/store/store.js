import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        selectedFilter : "",
        modalOpen : false , 
        modalData :{},
        activities : [],
        limit : 10
    }, 
    getters: {
        getSelectedName : state => state.selectedFilter.name,
        isModelOpen : state => state.modalOpen,
        getModalData : state => state.modalData,
        getActivities : state => state.activities,
        getActivitiesLength : state => state.activities.length,
        getActivitieById : state => (id)=> state.activities.find(item => item.id === id),
        getLimit : state => state.limit
    },
    mutations: {
        setFilter (state, value) {
            this.state.selectedFilter = this.state.selectedFilter === value ? "" : value;
        },
        setModelOpen (state , payload) {
            this.state.modalOpen = !this.state.modalOpen;
            this.state.modalData = payload ? payload : {};
        },
        setActivitiesArray(state , payload){
            this.state.activities = payload;
        },
        setLimit(state , payload){
            this.state.limit = payload;
        }
    }
});