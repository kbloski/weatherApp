<template>
    <form>
        <div class="search-control">
                <input :id="inputId" v-model="inputValue" placeholder="" />
                <label :for="inputId"><slot></slot></label>
                <button class="search-button" @click="onSubmit">⌕</button>
        </div>
    </form>
</template>

<script>
import { createRandomId } from '@/utils/createRandomId';

export default {
    props: ['modelValue'],
    emits: ['update:modelValue', 'click-search-button'],
    data(){
        return {
            inputId: createRandomId('search'),
            inputValue: ''
        }
    },
    watch:{
        inputValue(){
            this.$emit('update:modelValue', this.inputValue)
        }
    },
    methods: {
        onSubmit( event ){
            event.preventDefault()
            this.$emit('click-search-button', event);
        }
    },

}
</script>

<style scoped> 
.search-control {
    align-items: center;
    display: flex;
    position: relative;
}

.search-button {
    border: none;
    background: none;
    cursor: pointer;
    color: black;
    font-size: 2.2rem;
    margin: 0;
    margin: 0 .4rem;
    padding: 0;
}

.search-button:hover {
    color:antiquewhite;
}


input {
    font-size: 1.1rem;
    margin: 0;
    padding: .3rem;
    border: 2px solid white;
    border-color: black gray gray black;
    width: 100%;
}

label {
    position: absolute;
    margin-left: 1rem;
    transition: all .3s ease;
    color: rgba(0,0,0,0.6);
}


input:focus + label,
input:not(:placeholder-shown) + label {
    transform: translateX(100%);
    opacity: 0;
}

</style>