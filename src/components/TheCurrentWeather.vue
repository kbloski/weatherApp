<template>
    <section class="current-wheather-container">
        <!-- <header>
            <div class="location-name">Test</div>
        </header>

        {{  data }} -->
        
    </section>
</template>

<script>
    export default {
        props: { 
        },
        computed: {
            // data(){
            //     return this.fetchWheater.data?.current_condition[0] ?? null;
            // }

        }
    }
</script>

<style scoped>
@property --padding-container {
    syntax: 'REM';
    initial-value: 1rem;
}

.current-wheather-container{
    
    color: white;
    background-color: rgba(34, 79, 131, 0.8);
}

header {
    background-color: #224F83;
    padding: var(--padding-container);
    padding-bottom: 0;
}

.location-name {

}

</style>