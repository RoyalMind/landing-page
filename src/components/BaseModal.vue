// Modal Component from
https://ahmedshaltout.com/vuejs/how-to-use-bootstrap-5-modal-with-vue-js-3/
<template>
    <div>
        <!-- Modal -->
        <div
            v-if="OpenClose"
            class="modal fade show"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-modal="true"
            role="dialog"
            style="display: block"
        >
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button
                            type="button"
                            @click="OpenCloseFun()"
                            class="btn-close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            @click="OpenCloseFun()"
                            :class="'btn btn-' + variant"
                        >
                            {{ $t("Close") }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BaseModal",
    props: {
        visible: Boolean,
        variant: String,
    },
    data() {
        return {
            OpenClose: this.visible,
        };
    },
    methods: {
        OpenCloseFun() {
            this.OpenClose = false;
        },
    },
    watch: {
        visible: function (newVal, oldVal) {
            // watch it
            this.OpenClose = newVal;
            console.log("new" + newVal + "==" + oldVal);
        },
    },
};
</script>

<style></style>
