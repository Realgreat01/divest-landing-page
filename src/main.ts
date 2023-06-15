import { createApp } from 'vue';
import Message from 'vue-m-message';
import App from './App.vue';

import 'vue-m-message/dist/style.css';
import './assets/main.scss';
import './assets/tailwind.scss';

const app = createApp(App);
app.use(Message);
app.mount('#app');
