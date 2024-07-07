import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { createStore } from 'vuex';

const store = createStore({
    state: {
        singlePlayer: {
            board: Array(9).fill('-'),
            player: 'X',
        },
    },
    mutations: {
        setTile(state, payload) {
            state[payload.mode].board[payload.index] = payload.value;
            state[payload.mode].player = state[payload.mode].player === 'X' ? 'O' : 'X';
        },
        resetBoard(state, payload) {
            state[payload.mode].board = Array(9).fill('-');
            state[payload.mode].player = 'X';
        },
    },
})
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(store)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
