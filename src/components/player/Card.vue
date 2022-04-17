<template>
    <div class="card">
        <div class="card-body">
            <img v-bind:src="profile.player.avatar.basic" v-bind:alt="profile.player.name">
        </div>
        <div class="card-header">
            <h3>{{ profile.player.name }}</h3>
            <p>{{ profile.player.role.name }}</p>
            <button class="btn btn-primary" @click="showProfile">Perfil</button>
        </div>

        <PlayerProfileModal v-bind:msg="profile.player.name" v-bind:visible="showProfile" />
    </div>
</template>

<script>
import PlayerProfileModal from "@/components/player/ProfileModal.vue";

export default
{
    name: "playerCard",
    data()
    {
        let profile = {
                player: {
                    name: "CharlyZest",
                    region: "mx",
                    role: {
                        color: "red",
                        name: "Owner"
                    },
                    avatar: {
                        basic: "https://minotar.net/avatar/",
                    }
                }
            }

        profile.player.avatar.basic += profile.player.name + "/100"

        return {
            content: "LE TA SE MUA",
            profile: profile,
            showProfile: false,
        }
    },
    components: {
        PlayerProfileModal,
    },
    methods: { },
}
</script>

<style scoped>

</style>