<script setup>
import Tile from '@/Components/Game/Tile.vue';
import { useStore } from 'vuex';
import { ref } from 'vue';

const store = useStore();
const boardState = ref(store.state.singlePlayer.board);

</script>

<template>
    <div>
        <div class="board-row">
            <Tile :index="0" :state="boardState[0]" />
            <Tile :index="1" :state="boardState[1]" />
            <Tile :index="2" :state="boardState[2]" />
        </div>
        <div class="board-row">
            <Tile :index="3" :state="boardState[3]" />
            <Tile :index="4" :state="boardState[4]" />
            <Tile :index="5" :state="boardState[5]" />
        </div>
        <div class="board-row">
            <Tile :index="6" :state="boardState[6]" />
            <Tile :index="7" :state="boardState[7]" />
            <Tile :index="8" :state="boardState[8]" />
        </div>
    </div>
</template>