<template>
    <div id="app">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <a href="/" class="navbar-brand">
                RoyalMind Network
            </a>
            <div class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/home" class="nav-link">
                        <font-awesome-icon icon="home" />
                            Inicio
                        </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/rules" class="nav-link">
                        <font-awesome-icon icon="book" />
                            Reglas
                        </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/punishments" class="nav-link">
                        <font-awesome-icon icon="gavel" />
                            Sanciones
                        </router-link>
                </li>
                <li v-if="showAdminBoard" class="nav-item">
                    <router-link to="/admin" class="nav-link">
                        Admin Board
                    </router-link>
                </li>
                <li v-if="showModeratorBoard" class="nav-item">
                    <router-link to="/mod" class="nav-link">
                        Moderator Board
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link v-if="currentUser" to="/user" class="nav-link">
                        Usuario
                    </router-link>
                </li>
            </div>
            <div v-if="!currentUser" class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link to="/register" class="nav-link">
                        <font-awesome-icon icon="user-plus" /> Registrate
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/login" class="nav-link">
                        <font-awesome-icon icon="sign-in-alt" /> Iniciar sesión
                    </router-link>
                </li>
            </div>
            <div v-if="currentUser" class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link to="/profile" class="nav-link">
                        <font-awesome-icon icon="user" />
                        {{ currentUser.username }}
                    </router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click.prevent="logOut">
                        <font-awesome-icon icon="sign-out-alt" /> Salir
                    </a>
                </li>
            </div>
        </nav>
        <div class="container">
            <router-view />
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
        showAdminBoard() {
            if (this.currentUser && this.currentUser["roles"]) {
                return this.currentUser["roles"].includes("ROLE_ADMIN");
            }
            return false;
        },
        showModeratorBoard() {
            if (this.currentUser && this.currentUser["roles"]) {
                return this.currentUser["roles"].includes("ROLE_MODERATOR");
            }
            return false;
        },
    },
    methods: {
        logOut() {
            this.$store.dispatch("auth/logout");
            this.$router.push("/login");
        },
    },
};
</script>