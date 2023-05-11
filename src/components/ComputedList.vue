<script setup>
import { ref, reactive, computed } from "vue"
import ButtonComp from "@/components/ButtonComp.vue"

const form = reactive({
    name : '',
    lastname : ''
})

// const name = ref('')
// const lastname = ref('')

const data = reactive([
    {
        name: 'pink'
    },
    {
        name: 'red'
    },
    {
        name: 'blue'
    }
])

const addNewColor = () => {
    data.push({ name: 'purple' })
    console.log('data', data)
}

const filteredData = computed(() => {
    return data.filter(color => color.name == 'pink' || color.name == 'blue' || color.name == 'purple')
})

const fullName = computed(() => {
    return form.name + ' ' + form.lastname
})

const firstLetters = computed(() => {
    return form.name.charAt(0).toUpperCase() + form.lastname.charAt(0).toUpperCase()
})

const saveForm = () => {
    fetch('/save', {
        body: {
            name: form.name,
            lastname: form.lastname
        }
    })
}

</script>


<template>
    <div>
        <form action="">
            Email
            <br>
            <input type="email">
        </form>
        <br>
        {{ firstLetters }} - {{ fullName }}
        <br>
        <strong>Name: {{ form.name }}</strong>
        <br>
        <input type="text" v-model="form.name">
        <br>
        <strong>Lastname: {{ form.lastname }}</strong>
        <br>
        <input type="text" v-model="form.lastname">
    </div>

    <h2>Computed List {{ data.length }}</h2>
    <ButtonComp text="Add New Color" @action="addNewColor"></ButtonComp>
    <div v-for="color in data">
        {{ color.name }}
    </div>
    <div>
        {{ filteredData }}
    </div>
</template>