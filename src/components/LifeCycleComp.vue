<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue"

const props = defineProps(['title'])

const name = ref('Ford Otosan')
const element = ref(null)

const changeNameHandler = () => {
    name.value = 'Bootcamp'
}

onBeforeMount(() => {
    console.log('on Before Mount 🔥', name.value, element.value)
})

onMounted(() => {
    console.log('onMounted 🍎', name.value, element.value)
})

onBeforeUpdate(() => {
    console.log('on Before Update 🥪', name.value, element.value)
})

onUpdated(() => {
    console.log('onUpdated 🍕', name.value, element.value)
})

onBeforeUnmount(() => {
    console.log('on Before Unmount 🦄')
})

onUnmounted(() => {
    console.log('on Unmounted 🐢')
})

</script>

<template>
    <main>
        <h2>Component -- Title: {{ props.title }}</h2>
        <strong ref="element">{{ name }}</strong>
        <button @click="changeNameHandler">Click: Change Name</button>
    </main>
</template>