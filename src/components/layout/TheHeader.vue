<template>
    <header>
        <h1 class="title">{{ appName }}</h1>
        <the-navigation></the-navigation>
        <div>
            Icons:
            <span>Search</span>
            <span>Mail</span>
            <span>Sidebar Hamburger</span>
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
    padding: .3rem 2rem;
}

.title {
    color: rgba(255,255,255,0.8);
    text-decoration: wavy;
    font-style: italic;
}

</style>
