<template>
    <button v-show="link" v-on:click="openPage()">Перейти</button>
</template>

<script>
export default {
    name: 'OpenBlogLink',
    props: {
        link: String,
    },
    methods: {
        openPage() {
            window.open(this.link, "_blank")
        }
    }
}
</script>

<style scoped>
</style>