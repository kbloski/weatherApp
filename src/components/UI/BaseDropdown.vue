<template>
    <div class="dropdown-container">
        <div @click="toggleVisivility" class="dropdown-actions">
            <slot name="actions">
                <div v-if="isActive">Ukryj</div>
                <div v-else>Pokaż</div>
            </slot>
        </div>
        <transition 
            name="dropdown-body-animation" 
            mode="out-in"
        >
            <div v-if="isActive">
                <slot name="default"></slot>
            </div>
        </transition>
    </div>
</template>

<script>
import { ref } from 'vue';

export default { 
    emits: ['visibility'],
    props: ['visibility'],
    setup(props, ctx){
        const isActive = ref(props.visibility ? true : false);

        function toggleVisivility(){
            isActive.value = !isActive.value;

            ctx.emit('visibility', isActive.value);
        }

        return {
            toggleVisivility,
            isActive
        }
    }
}
</script>

<style lang="css" scoped>
.dropdown-container {
    position: relative;
}

.dropdown-actions {
    background-color: var(--background-dark);
    color: white;
    cursor: pointer;
    padding: 1rem .5rem;
}


.dropdown-body-animation-enter-from,
.dropdown-body-animation-leave-to {
    transform: translateX(-100px);
    opacity: 0;
}
.dropdown-body-animation-enter-active,
.dropdown-body-animation-leave-active
{
    transition: all .3s ease-in;
}


</style>