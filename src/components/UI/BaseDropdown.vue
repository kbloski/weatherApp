<template>
    <div class="dropdown-container">
        <div @click="toggleVisivility" class="dropdown-actions">
            <slot name="actions">
                <div v-if="isActive">Ukryj</div>
                <div v-else>Pokaż</div>
            </slot>
        </div>
        <div v-if="isActive">
            <slot name="default"></slot>
        </div>
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

</style>