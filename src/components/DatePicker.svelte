<script>
    import flatpickr from "flatpickr";
    import "flatpickr/dist/flatpickr.css";
    import "flatpickr/dist/themes/light.css";

    import { locale } from "../store.js";
    import Icon from "../components/Icon.svelte";
    let dateValue = new Date().toISOString().slice(0, 10);

    let calendarOpen = false;

    $: dateDisplay = new Date(dateValue).toLocaleDateString($locale);

    function setDisplayValue(param) {
        dateValue = param.target.value;
    }

    function flipOpen() {
        calendarOpen = !calendarOpen;
    }

    function datepicker(element, params) {
        const calendar = flatpickr(element);
        calendar.config.onOpen.push(function () {
            calendarOpen = true;
        });
        calendar.config.onClose.push(function () {
            calendarOpen = false;
        });
        return {
            update(params) {
                if (params) {
                    calendar.open();
                } else {
                    calendar.close();
                }
            },
            destroy() {
                calendar.destroy();
            },
        };
    }
</script>

<style>
    input {
        @apply py-1;
        @apply px-2;
        @apply border;
        @apply border-gray-300;
    }

    button {
        @apply py-1;
        @apply px-2;
        @apply border-r;
        @apply border-t;
        @apply border-b;
        @apply border-gray-300;
    }
</style>

<div class="flex">
    <input
        type="text"
        use:datepicker={calendarOpen}
        value={dateDisplay}
        on:input={setDisplayValue}
        class="w-full sm:w-32 dark:text-gray-700"
        id={$$props.id} />
    <button on:click={flipOpen}><Icon
            name="calendar"
            class="h-6 w-6" /></button>
</div>
