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
    export let errorMessage = "";

    dayjs.extend(customParseFormat);
    dayjs.locale($locale);

    $: validDateFormats = $_("valid_date_formats").split("|");
    $: dateDisplay = new Date(dateValue).toLocaleDateString($locale);
    $: invalidInput = dirty && validated && !valid ? "invalid" : "";

    onMount(() => {
        if (!dateValue) {
            dateValue = new Date().toISOString().slice(0, 10);
        }
    });

    function updateDateValue(el) {
        dirty = true;
        validated = true;
        let val = el.target.value.split(",").join(".");
        let entry = dayjs(val, validDateFormats, true);
        console.log("entry", entry);
        if (dayjs(entry).isValid()) {
            dateValue = entry.format("YYYY-MM-DD");
            valid = true;
            errorMessage = "";
        } else {
            valid = false;
            errorMessage = "Not a date";
        }
    }
</script>

<style>
    input {
        @apply w-full;
    }

    button {
        @apply py-1;
        @apply px-2;
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
        class={invalidInput} />

    <button class={invalidInput}><Icon
            name="calendar"
            class="h-6 w-6" /></button>
</div>
