<script setup>
import { ref } from "vue"
import LifeCycleComp from '@/components/LifeCycleComp.vue';

const isOpen = ref(true)
const title = ref('Cagdas Cetin')

const clickHandler = () => {
    isOpen.value = !isOpen.value
}

const changeTitleHandler = () => {
    title.value = 'Geralt of Rivia'
}

</script>

<template>
    <main>
        <h2>Life Cycle View</h2>
        <LifeCycleComp :title="title" v-if="isOpen"></LifeCycleComp>
        <button @click="clickHandler">Unmount Component</button>
        <button @click="changeTitleHandler">Change Title</button>
    </main>
</template>