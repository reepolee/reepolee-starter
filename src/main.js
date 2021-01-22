import HMR from '@roxi/routify/hmr';
import App from './App.svelte';
import './locales/localization';

const app = HMR(App, { target: document.body }, 'routify-app');

if (window && process.env.NODE_ENV !== 'production') {
  window.l = (param, name = typeof (param), css = 'color:#00f') => console.log(`%c${name}:${JSON.stringify(param, null, 4)}`, css);
} else window.l = () => { };

export default app;
