<template src="./filter.html"></template>
<script>
export default {
    name:"filter-component",
    props:{
        type:Object
    },
    data:function() {
        return {
            filterType : this.type,
            selected : false
        };
    },
    methods: {
        selectFilter(){
            this.selected = !this.selected;
            this.$store.commit("setFilter" , this.filterType);
        }
    }
};
</script>
<style src="./filter.scss" lang="scss"></style>