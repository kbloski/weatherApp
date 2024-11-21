<template>
    <div class="loading-container"
        :style="{
            color: color ?? 'black',
        }"
    >
        <div 
            class="circle-loading-icon" 
            :style="{
                borderTopColor: color ?? 'black'
            }"
        ></div> 
        Loading<span v-for="p in numDoted">.</span> 
    </div>
</template>

<script>
export default {
    props: ['color'],
    data(){
        return {
            numDoted: 1,
            idInterval: null
        }
    },
    created(){
        this.idInterval = setInterval( () => {
            this.animationDotted()
        }, 1000)
    },
    unmounted(){
        clearInterval( this.idInterval)
    },
    methods: {
        animationDotted(){
            if (this.numDoted < 3) this.numDoted++;
            else this.numDoted = 1
        }
    }
}
</script>

<style lang="css" scoped>
.loading-container{
    align-items: center;
    display: flex;
    position: relative;
    padding: 2rem;
}

.circle-loading-icon {
    aspect-ratio: 1/1;
    animation: spin 1s infinite linear;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-top-color: black;
    border-radius: 50%;
    height: 1rem;
    margin-right: .3rem;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
}
</style>