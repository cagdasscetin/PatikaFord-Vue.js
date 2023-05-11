<script setup>

const props = defineProps(['text','color', 'isText'])
const emits = defineEmits(['action', 'secondAction'])

const buttonHandler = (event) => {
    emits('action', 'Update Text')
}

const secondHandler = () => {
    emits('secondAction', props.isText)
}

</script>

<template>
    <button class="button" :class="{'orange': props.color == 'secondary'}" @click="buttonHandler">{{ props.text }}</button>

    <button @click="secondHandler">secondHandler</button>
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