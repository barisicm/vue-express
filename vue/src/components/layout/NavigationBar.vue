<template>
    <b-navbar toggleable="md" variant="primary" type="dark">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand to="/">BGTracker</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav v-if="isAuthenticated">
                <b-nav-item to="/">My Games</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        name: "NavigationBar",

        computed: {
            ...mapGetters(["isAuthenticated"])
        }
    }
</script>