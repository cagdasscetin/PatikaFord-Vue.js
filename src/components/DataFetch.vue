<script setup>
import { ref, reactive } from "vue"
import ImageComp from "@/components/ImageComp.vue";
import ButtonComp from "@/components/ButtonComp.vue";

const images = ref([])


const title = ref('') //yapisi bilinmeyenler icin kullanmak daha mantikli
const subtitle = ref('')

const data = reactive({ //yapisi bilinenler icin kullanilir
    name: '',
    age: 0,
    status: true
})


const getData = async () => {
    images.value = await fetch('https://dog.ceo/api/breed/hound/images')
        .then(response => response.json())
        .then(response => response.message)

    console.log('images', images)
}

</script>

<template>
    <h1>Data Fetch</h1>
    <!-- <button @click="getData">Get Puppy Images</button> -->
    <ButtonComp text="Get Puppy Images" color="secondary" @action="getData"></ButtonComp>
    <template v-for="(image, index) in images" :key="image">
        <div v-if="index < 10">
            <ImageComp :src="image"></ImageComp>
        </div>
    </template>
</template>