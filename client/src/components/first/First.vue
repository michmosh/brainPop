<template src="./first.html"></template>

<script>
export default {
    props: {
        dataArray: {
            type: Array
        },
        text: {
            type: String
        }
    },
    data: () => ({
        name: "MOSHE",
        test: "AAA"
    }),
    created() {
       
    },
    methods: {
        testFunction(){
            this.$emit("my-event");
        }
    }
    
};
</script>

<style scoped src="./first.scss" lang="scss"></style>
