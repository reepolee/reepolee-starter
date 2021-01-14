<script>
  export let invalid = false;
</script>

<div class="input-field  {$$props.class || ''}" class:invalid>
  <slot />
</div>

<style global>
  .input-field > label {
    @apply pl-3;
    @apply font-semibold;
  }

  .input-field {
    display: grid;
    width: fit-content;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr 2rem;
    grid-template-areas:
      "label label"
      "input explain"
      "errors errors";
  }

  .input-field label {
    grid-area: label;
  }

  .input-field > .input {
    grid-area: input;
  }

  .input-field > .explain {
    grid-area: explain;
    align-self: center;
    @apply pl-2;
    @apply italic;
    @apply text-gray-600;
    @apply dark:text-gray-300;
  }

  .input-field > .errors {
    grid-area: errors;
    @apply text-reepolee-500;
    @apply font-semibold;
    @apply pl-3;
  }
</style>
