<script setup>
import Board from '@/Components/Game/Board.vue';
import { ref, provide } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
</script>

<template>
    <div>Single Player</div>

    <Board/>
</template>