import HMR from '@roxi/routify/hmr';
import App from './App.svelte';
import './locales/localization';

const app = HMR(App, { target: document.body }, 'routify-app');
window.l = (param) => console.log(JSON.stringify(param, null, 4));

export default app;
