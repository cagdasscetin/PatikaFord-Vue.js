<script setup>

const props = defineProps(['text','color'])
const emits = defineEmits(['action'])

const buttonHandler = (event) => {
    emits('action', 'Update Text')
}

</script>

<template>
    <button class="button" :class="{'orange': props.color == 'secondary'}" @click="buttonHandler">{{ props.text }}</button>
</template>

<style lang="scss" scoped>

.button {
    margin: 10px;
    padding: 10px;
    border: 2px solid black;

    color: blue;
    background-color: #fff;
}

.orange {
    color: orange;
}
</style>