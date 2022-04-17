<template>
    <div class="container">
        <header class="jumbotron">
            <h3>{{ content }}</h3>
        </header>

        <div class="row">
            <div class="col-md-4">
                <playerCard />
            </div>   
        </div>
    </div>
</template>

<script>
import PlayerCard from "../components/player/Card.vue"

export default 
{
    name: "home",
    data()
    {
        return {
            content: "HOME"
        }
    },
    components: {
        PlayerCard
    }

}
</script>

<style>

</style>