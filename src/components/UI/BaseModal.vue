<template>
    <teleport to="body">
        <div class="backdrop" v-if="visibilityBackdrop">
            <transition 
                name="modal-animation" 
                mode="out-in"
                @after-leave="hideBackdrop"
            >
                <div v-if="visibility">
                    <div class="modal-container">
                        <div class="modal-header" v-if="$slots.header">
                            <slot name="header"></slot>
                        </div>
                        <div class="modal-body">
                            <slot></slot>
                        </div>
                        <div class="modal-actions">
                            <button @click="closeModal">Close</button>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </teleport>
</template>

<script>
export default {
    data(){
        return {
            visibilityBackdrop: true,
            visibility: true
        }
    },
    methods: {
        closeModal(){
            this.visibility = false;
        },
        hideBackdrop(){
            this.visibilityBackdrop = false;
        }
    }
}
</script>

<style lang="css" scoped>

.backdrop {
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
}

.modal-container {
    background-color: white;
    border-radius: 1rem;
    width: 80vw;
    max-height: 80vh;
    max-width: 1000px;
    background-color: white;
    padding: 1rem;
    overflow-y: auto;
}

.modal-header {
    background-color: rgba(192, 192, 192, 0.2);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3), inset 0 0 4px black;
    border-radius: .5rem;
    font-weight: bold;
    padding: .2rem 1rem;
    margin-bottom: 1rem;
}

.modal-body {

}

.modal-actions > button{
    background-color: var(--background-dark);
    box-shadow: 0 0 4px black;
    color: white;
    display: block;
    margin-left: auto;
    padding: .2rem 1rem;

}


.modal-animation-enter-from {
    opacity: 0;
    transform: scale(0.8);
}
.modal-animation-enter-active {
    transition: all 0.3s ease-in;
}
.modal-animation-enter-to {
    opacity: 1;
    transform: scale(1)
}

.modal-animation-leave-from {
    opacity: 1;
}
.modal-animation-leave-active {
    transition: all 0.3s ease-in;
}
.modal-animation-leave-to {
    opacity: 0;
    transform: scale(0.8)
}
</style>