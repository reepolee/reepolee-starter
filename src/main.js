import HMR from '@roxi/routify/hmr';
import App from './App.svelte';
import './locales/localization';

const app = HMR(App, { target: document.body }, 'routify-app');

if (window && process.env.NODE_ENV !== 'production') { window.l = (param, name = typeof (param)) => console.log(`${name}:${JSON.stringify(param, null, 4)}`); } else window.l = function () {};

export default app;
