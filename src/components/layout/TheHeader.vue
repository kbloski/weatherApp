<template>
    <div>
        <h1>{{ appName }}</h1>
        <the-navigation></the-navigation>
        <div>
            Icons:
            <span>Search</span>
            <span>Mail</span>
            <span>Sidebar Hamburger</span>
        </div>
    </div>
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

