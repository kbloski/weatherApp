<template>
    <header>
        <h1 class="title">{{ appName }}</h1>
        <the-navigation></the-navigation>
        <div class="actions" >
            <span class="search-icon" @click="noActive">⌕</span>
            <span class="email-icon" @click="contactAction">✉</span>
            <span class="burger-icon" @click="menuAction">☰</span>
        </div>
    </header>
</template>

<script>
import { appName } from '../../config.js';
import TheNavigation from './TheNavigation.vue';

export default {
    components: {
        TheNavigation
    },
    data(){
        return {
            appName
        }
    },
    methods: {
        noActive(){
            alert("Ta opcja jest jeszcze niedostępna... przepraszamy za wszelkie niedogodności")
        },
        contactAction(){
            this.$router.push( { path: '/contact'} )
        },
        menuAction(){
            this.$router.push( { path: '/'})
        }
    }
}
</script>

<style scoped>
header {
    align-items: center;;
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(1rem);
    box-shadow: 0 0 4px rgba(0,0,0,0.2);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: .3rem 2rem;
}

.title {
    color: rgba(255,255,255,0.8);
    text-decoration: wavy;
    font-style: italic;
}

.actions {
    --font-size: 2rem;
    color: white;
}

.actions > * {
    padding-left: .2rem;
    cursor: pointer;
}

.actions > *:hover {
    color: antiquewhite;
}

.search-icon {
    font-size: calc(var(--font-size) * 1.4);
}

.email-icon {
    font-size: calc(var(--font-size) * 1.1);
}

.burger-icon {
    font-size: calc(var(--font-size) * 1);
}



</style>
