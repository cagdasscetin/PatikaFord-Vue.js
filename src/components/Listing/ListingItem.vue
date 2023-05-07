<script setup>
const props = defineProps(['name','title','age'])
</script>

<template>
    <div class="listing__items" v-if="props.age > 22">
        <strong>{{ props.name }} {{ props.title }}</strong>
        <span>{{ props.age }}</span>
    </div>
    <div class="listing__items -purple" v-else>
        <strong>{{ props.name }} {{ props.title }}</strong>
        <span>{{ props.age }}</span>
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