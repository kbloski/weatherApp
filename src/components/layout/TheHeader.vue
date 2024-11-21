<template>
    <header>
        <h1 class="title">{{ appName }}</h1>
        <the-navigation></the-navigation>
        <div class="actions">
            <span class="search-icon">⌕</span>
            <span class="email-icon">✉</span>
            <span class="burger-icon">☰</span>
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

.actions {
    --font-size: 2rem;
    color: white;
}

.actions > * {
    padding-left: .2rem;
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
