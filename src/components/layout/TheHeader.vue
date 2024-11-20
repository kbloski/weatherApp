<template>
    <div>
        <h1>{{ appName }}</h1>
    </div>
</template>

<script>
import { appName } from '../../config.js';

export default {
    data(){
        return {
            appName
        }
    }
}
</script>

