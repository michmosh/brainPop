<template>
    <span>
        <span>Score</span>
        <span style="padding-right:2rem" class="bold">
            {{this.$props.score.score}}/{{this.$props.score.possible_score}}
        </span>
    </span>
</template>

<script>
export default {
    props:{
        score:Object
    }
};
</script>

<style lang="scss" scoped>
@import '../../shared/styles/variables.scss';
    span{
        color:$color
    }
</style>