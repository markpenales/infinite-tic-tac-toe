<script setup>
import { ref, reactive, watch } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
    state: {
        type: String,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    }
})

const store = useStore();
const tileState = ref(props.state);
const state = reactive({ player: store.state.singlePlayer.player });

watch(() => store.state.singlePlayer.player, (newVal) => {
    state.player = newVal;
});

watch(() => store.state.singlePlayer.board[props.index], (newVal) => {
    tileState.value = newVal;
});

const handleClick = () => {

    if (tileState.value === '-') {
        tileState.value = state.player;
        store.commit('setTile', { index: props.index, value: state.player, mode: 'singlePlayer' });
    }
}

</script>

<template>
    <div @click="handleClick">{{ tileState }}</div>
</template>