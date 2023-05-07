<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
    <h2>Inbox View</h2>
    <br>
    <RouterLink to="/inbox/mail">Inbox / Mail Page</RouterLink>
    <br>
    <RouterView></RouterView>
</template>