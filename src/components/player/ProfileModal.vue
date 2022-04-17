<template>
    <BaseModal variant="primary" :msg="msg" :visible="visible">
        <p class="text-center">
            <img v-bind:src="profile.player.avatar.basic" v-bind:alt="profile.player.name">
        </p>

        <p class="text-center">{{ msg }}</p>
    </BaseModal>
</template>

<script>
import BaseModal from "@/components/BaseModal.vue";

export default {
    name: "PlayerProfileModal",
    components: {
        BaseModal,
    },
    props: {
        msg: String,
        visible: Boolean,
    },
};
</script>
