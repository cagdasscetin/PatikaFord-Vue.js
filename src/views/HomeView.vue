<script setup>
import { ref } from "vue"
import PageTitle from '@/components/PageTitle.vue';
import ButtonComp from '@/components/ButtonComp.vue';
import Listing from '@/components/Listing/Listing.vue';
import DataFetch from "@/components/DataFetch.vue";

const title = 'PATIKA'
const subtitle = 'Ford Otosan Full Stack Gelecek Tasarimcilari'

const emoji = ref('kofte')
const changeEmoji = () => {
  emoji.value = 'patates';
  console.log('Changed Emoji', emoji)
}

const buttonHandler = (update) => console.log("App Parent Handler", update)

console.log(title)

</script>

<template>
    <h1>Home View</h1>
    <main>
        <DataFetch></DataFetch>

        <button @click="changeEmoji">Click me: {{ emoji }}</button>

        <Listing></Listing>

        <PageTitle :title="title" :subtitle="subtitle" color="primary">
            <template #additional>
                <p><strong>Component icindeki metin</strong></p>
                
                <ButtonComp text="Basvur" color="secondary" @action="buttonHandler"></ButtonComp>

            </template>
        </PageTitle>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minus blanditiis repudiandae ex fugiat, suscipit facilis nesciunt architecto maiores aperiam et reiciendis nostrum voluptatibus totam corrupti neque sunt perferendis accusantium?
        </p>
        <PageTitle :title="title"></PageTitle>
    </main>
</template>

<!-- scoped sadece bu sayfa icin gecerli olmasini saglar-->
<style scoped></style>
