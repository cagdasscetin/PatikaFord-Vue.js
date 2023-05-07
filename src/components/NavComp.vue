<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
    <nav>
        <RouterLink to="/">Home Page</RouterLink>
        <RouterLink to="/inbox">Inbox Page</RouterLink>
        <RouterLink to="/inbox/mail">Inbox / Mail Page</RouterLink>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    margin: 20px;
    padding: 0;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    a {
        margin: 20px;
        padding: 8px 20px;
        font-size: 24px;
        
        background-color: purple;
        color: white;
        text-decoration: none;

        border-radius: 8px;
        
        &:visited {
            color: white;
            text-decoration: none;
        }

        &:hover {
            color: invert($color: white);
            background-color: invert($color: purple);
            text-decoration: underline;
        }

        &.router-link-exact-active {
            color: invert($color: white);
            background-color: invert($color: purple);
        }
    }
}
</style>