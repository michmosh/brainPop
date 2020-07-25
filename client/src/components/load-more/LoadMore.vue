<template>
    <div v-if="activitiesArray.length >= this.$props.limit">
        <a v-if="show" @click="loadMore()" key="down" class="bold">
            <i class="fas fa-chevron-down" ></i>
            load more
        </a>
        <a v-if="!show" @click="loadLess()" key="up" class="bold">
            <i class="fas fa-chevron-up" ></i>
            load less
        </a>
    </div>
</template>

<script>
export default {
    data(){
        return {
            show : this.$props.showLoadMore
        }
    },
    props: {
        activitiesArray: Array,
        showLoadMore : Boolean,
        limit: Number
    },
    methods: {
        loadMore(){
            this.$store.commit("setLimit" ,  this.$store.getters.getLimit + 10);
            this.show = false;
        },
        loadLess(){
            this.$store.commit("setLimit" ,  this.$store.getters.getLimit - 10);
            this.show = true;
        },
    },
}
</script>

<style lang="scss" scoped >
@import '../../shared/styles/variables.scss';
    a{
        color:$color;
        cursor: pointer;
        font-size:14px;
        &:hover{
            text-decoration: none;
            color:$color;
        }
    }
</style>