<script setup>
    import ButtonComp from '@/components/ButtonComp.vue'

    const props = defineProps(['title', 'subtitle','color'])

    const buttonHandler = () => console.log("Parent handler")
</script>

<template>
    <h1 class="page__title" :class="[props.color == 'primary' ? 'pink' : '']">Bootcamp {{ props.title }}</h1>
    <h2 class="page__subtitle" :class="{
        'pink': props.color == 'primary',
        'purple': props.color == 'secondary'
    }">{{ props.subtitle }}</h2>

    <ButtonComp text="Page Title Button" @action="buttonHandler"></ButtonComp>

    <slot name="additional"></slot>

    <div>
        <h2 class="page__subtitle--small">Cok cok alt baslik</h2>
    </div>
</template>

<style lang="scss" scoped>
.page {
    &__title {
        font-size: 40px;
    }

    &__subtitle {
        font-size: 32px;
        text-decoration: underline;
        color: blueviolet;

        &--small {
            font-size: 20px;
        }
    }
}

.pink{
    color: pink;
}

.purple{
    color: purple;
}

.small {
    font-size: 16px;
}

.bigger {
    font-size: 48px;
}
</style>