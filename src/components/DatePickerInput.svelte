<script>
    import dayjs from "dayjs";
    import customParseFormat from "dayjs/plugin/customParseFormat";
    import "dayjs/locale/de";
    import "dayjs/locale/el";
    import "dayjs/locale/sl";
    import { locale } from "../store.js";
    import { _ } from "svelte-i18n";
    import Icon from "../components/Icon.svelte";
    import { onMount } from "svelte";

    export let dateValue = "";
    export let valid = true;
    export let validated = false;
    export let dirty = false;

    dayjs.extend(customParseFormat);
    dayjs.locale($locale);

    $: validDateFormats = $_("valid_date_formats").split("|");
    $: dateDisplay = new Date(dateValue).toLocaleDateString($locale);
    $: invalidInput = dirty && validated && !valid ? "invalid" : "";

    function updateDateValue(el) {
        dirty = true;
        validated = true;
        let val = el.target.value.split(",").join(".");
        let entry = dayjs(val, validDateFormats, true);
        if (dayjs(entry).isValid()) {
            dateValue = entry.format("YYYY-MM-DD");
            valid = true;
        } else {
            valid = false;
        }
    }
</script>

<style>
    input {
        @apply py-1;
        @apply px-2;
        @apply border-l;
        @apply border-t;
        @apply border-b;
        @apply border-gray-300;
        @apply w-full;
    }

    button {
        @apply py-1;
        @apply px-2;
        @apply border-r;
        @apply border-t;
        @apply border-b;
        @apply border-gray-300;
    }

    .invalid {
        @apply border-reepolee-500;
    }
</style>

<div class="flex w-48 dark:text-gray-700">
    <input
        type="text"
        value={dateDisplay}
        on:blur={updateDateValue}
        id={$$props.id}
        name={$$props.id}
        autocomplete="off"
        class={invalidInput} />
    <button class={invalidInput}><Icon
            name="calendar"
            class="h-6 w-6" /></button>
</div>
