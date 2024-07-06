<script setup>
import { Head, Link } from '@inertiajs/vue3';

defineProps({
    routes: {
        type: Object,
        required: true,
    }
})
</script>

<template>

    <Head title="Welcome" />
    <div>
        <p>
            <Link :href="routes.singleplayer">Single Player</Link>
        </p>

        <p>
            <Link :href="routes.multiplayer">Multi Player</Link>
        </p>    
    </div>
</template>
