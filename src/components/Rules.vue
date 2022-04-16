<template>
    <div class="container">
        <header class="jumbotron">
            <h3>{{ content }}</h3>
        </header>
    </div>
</template>
<script>
    export default {
        name: "Rules",
        data() {
            return {
            content: "",
            };
        },
        mounted() {
            this.content = "Reglas";
        },
    };
</script>