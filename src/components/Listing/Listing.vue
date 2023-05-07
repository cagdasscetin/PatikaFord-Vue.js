<script setup>
import ListingItem from '@/components/Listing/ListingItem.vue'

const data = [
    {
        id: 1,
        name: 'Tolga Egilmezel',
        title: 'Head of Pizza',
        age: 5
    },
    {
        id: 2,
        name: 'Beyza Hatip',
        title: 'Head of Apple',
        age: 23
    },
    {
        id: 3,
        name: 'Mert Yağmur',
        title: 'Cloud Master',
        age: 24
    },
    {
        id: 4,
        name: 'Cagdas Cetin',
        title: 'Unicorn Master',
        age: 22
    },
]

</script>


<template>
    <div class="listing">
        <h3 class="listing__header">Vue v-if</h3>
        <ListingItem v-for="(person, index) in data" :key="person.id" :name="person.name" :title="person.title" :age="person.age"></ListingItem>
    </div>
    <div class="listing">
        <h3 class="listing__header">Vue v-show</h3>
        <template v-for="(person, index) in data" :key="person.id">
            <div class="listing__items" v-show="person.age > 22">
                <strong>{{ index + 1 }} - {{ person.name }} {{ person.title }}</strong>
                <span>{{ person.age }}</span>
            </div>

        </template>
    </div>

</template>


<style lang="scss" scoped>
.listing{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex—start;    
    
    &__items{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex—start;

        margin: 10px 0;
        padding: 20px;

        border-radius: 8px;

        background: lavender;

        &.-purple{
            background: plum;
        }
    }
}

</style>