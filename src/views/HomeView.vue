<script setup>
import { ref } from "vue"
import MainHeader from '@/components/MainHeader.vue';
import ButtonComp from '@/components/ButtonComp.vue';
import ComputedList from "@/components/ComputedList.vue";

const title = 'PATIKA 👻'
const subtitle = 'Ford Otosan Full Stack Gelecek Tasarimcilari'

const emoji = ref('kofte')
const changeEmoji = () => {
    emoji.value = 'patates';
    console.log('Changed Emoji', emoji)
}

const buttonHandler = (update) => console.log("App Parent Handler", update)

console.log(title)

const helloFunction = (text) => {
    console.log('helloFunction', text)
}

</script>

<template>
    <main>
        <ComputedList></ComputedList>

        <h1>Home View</h1>
        <button @click="changeEmoji">Click me: {{ emoji }}</button>


        <MainHeader :title="title" :subtitle="subtitle" color="primary">
            <template #additional>
                <p><strong>Component icindeki metin</strong></p>
                <div class="description slot">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minus blanditiis repudiandae
                        ex fugiat, suscipit facilis nesciunt architecto maiores aperiam et reiciendis nostrum voluptatibus
                        totam corrupti neque sunt perferendis accusantium?
                    </p>
                    <ButtonComp text="Basvur" color="secondary" isText="Hello Pizza World 🍕" @action="buttonHandler" @secondAction="helloFunction"></ButtonComp>
                </div>
            </template>
        </MainHeader>
        <MainHeader :title="title"></MainHeader>
    </main>
</template>

<!-- scoped sadece bu sayfa icin gecerli olmasini saglar-->
<style scoped>
.description {
    position: relative;
    margin: 20px;
    padding: 20px;
    border: 2px solid lightgray;
    font-size: 24px;
    line-height: 32px;
    font-weight: 200;
}
</style>
