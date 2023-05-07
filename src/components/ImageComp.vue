<script setup>
const props = defineProps(['src'])

</script>

<template>
    <img :src="props.src" alt="">
</template>