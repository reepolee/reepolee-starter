// ----------------------------------------------------------------------------
// (c) Li Hau Tan 2021
// https://www.youtube.com/watch?v=AzE9-6QcwmM
// https://svelte.dev/repl/8031c800d7e34fd692dd18174b514e4e?version=3.31.2
// ----------------------------------------------------------------------------
function clickOutside(element, callbackFunction) {
  function onClick(event) {
    if (!element.contains(event.target)) {
      callbackFunction();
    }
  }

  document.body.addEventListener("click", onClick);

  return {
    update(newCallbackFunction) {
      callbackFunction = newCallbackFunction;
    },
    destroy() {
      document.body.removeEventListener("click", onClick);
    },
  };
}
